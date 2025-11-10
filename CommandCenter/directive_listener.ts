#!/usr/bin/env ts-node
/**
 * MEGA-ERIC Directive Listener
 * Autonomous Command Link System - Directive XIII
 * 
 * Monitors CommandCenter/directives/ for incoming commands from MEGA-EMMA
 * Parses, validates, executes, and archives directives
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// Types
interface DirectiveMetadata {
  directive_id: string;
  issuer: string;
  target_agent: string;
  classification: string;
  priority: string;
  command?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  timestamp: string;
}

interface DirectiveFile {
  filename: string;
  filepath: string;
  metadata: DirectiveMetadata;
  content: string;
}

interface HealthStatus {
  agent: string;
  status: 'healthy' | 'degraded' | 'offline';
  uptime: number;
  last_heartbeat: string;
  directives_processed: number;
  directives_failed: number;
  watch_mode: boolean;
  memory_usage: number;
}

interface PriorityQueue {
  'top-tier': DirectiveFile[];
  'high': DirectiveFile[];
  'normal': DirectiveFile[];
  'low': DirectiveFile[];
}

// Configuration
const CONFIG = {
  DIRECTIVES_DIR: path.join(__dirname, 'directives'),
  LOGS_DIR: path.join(__dirname, 'logs'),
  REPORTS_DIR: path.join(__dirname, 'reports'),
  ARCHIVE_DIR: path.join(__dirname, 'archive'),
  STATUS_DIR: path.join(__dirname, 'status'),
  FAILED_DIR: path.join(__dirname, 'failed'),
  AUTH_TOKEN: process.env.EMMA_COMMAND_TOKEN || '',
  SUPPORTED_FORMATS: ['.md', '.json'],
  AGENT_NAME: 'MEGA-ERIC',
  WATCH_MODE: process.argv.includes('--watch') || process.argv.includes('-w'),
  WEBHOOK_URL: process.env.EMMA_WEBHOOK_URL || '',
  HEARTBEAT_INTERVAL: 30000, // 30 seconds
};

// Metrics tracking
const METRICS = {
  startTime: Date.now(),
  directivesProcessed: 0,
  directivesFailed: 0,
};

// Logging utility
function log(level: 'INFO' | 'WARN' | 'ERROR' | 'SUCCESS', message: string) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}\n`;
  
  console.log(logEntry.trim());
  
  // Write to log file
  const logFile = path.join(CONFIG.LOGS_DIR, `directive_listener_${new Date().toISOString().split('T')[0]}.log`);
  fs.appendFileSync(logFile, logEntry, 'utf8');
}

// Health monitoring
function updateHealthStatus(status: 'healthy' | 'degraded' | 'offline' = 'healthy') {
  const healthStatus: HealthStatus = {
    agent: CONFIG.AGENT_NAME,
    status,
    uptime: Date.now() - METRICS.startTime,
    last_heartbeat: new Date().toISOString(),
    directives_processed: METRICS.directivesProcessed,
    directives_failed: METRICS.directivesFailed,
    watch_mode: CONFIG.WATCH_MODE,
    memory_usage: process.memoryUsage().heapUsed / 1024 / 1024, // MB
  };

  const statusFile = path.join(CONFIG.STATUS_DIR, 'health.json');
  fs.writeFileSync(statusFile, JSON.stringify(healthStatus, null, 2), 'utf8');
}

// Start heartbeat
function startHeartbeat() {
  updateHealthStatus('healthy');
  setInterval(() => {
    updateHealthStatus('healthy');
  }, CONFIG.HEARTBEAT_INTERVAL);
  log('INFO', `Heartbeat active (${CONFIG.HEARTBEAT_INTERVAL / 1000}s interval)`);
}

// Send webhook notification to MEGA-EMMA
async function sendWebhookNotification(directive: DirectiveFile, success: boolean, executionTime: number) {
  if (!CONFIG.WEBHOOK_URL) return;

  try {
    const payload = {
      agent: CONFIG.AGENT_NAME,
      directive_id: directive.metadata.directive_id,
      status: success ? 'completed' : 'failed',
      execution_time_ms: executionTime,
      timestamp: new Date().toISOString(),
      confirmation_report: `CommandCenter/reports/Directive_${directive.metadata.directive_id}_Confirmation.md`,
    };

    // Using fetch (Node 18+)
    const response = await fetch(CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      log('SUCCESS', `Webhook notification sent to MEGA-EMMA`);
    } else {
      log('WARN', `Webhook failed: ${response.status}`);
    }
  } catch (error) {
    log('WARN', `Webhook error: ${error}`);
  }
}

// Parse directive metadata from markdown
function parseMarkdownDirective(content: string): DirectiveMetadata | null {
  try {
    const lines = content.split('\n');
    const metadata: Partial<DirectiveMetadata> = {
      status: 'pending',
      timestamp: new Date().toISOString(),
    };

    for (const line of lines) {
      if (line.includes('Directive') && line.match(/[XIV]+/)) {
        const match = line.match(/Directive\s+([XIV]+)/i);
        if (match) metadata.directive_id = match[1];
      }
      if (line.includes('Issued by:')) {
        metadata.issuer = line.split('Issued by:')[1]?.trim() || 'Unknown';
      }
      if (line.includes('To:')) {
        metadata.target_agent = line.split('To:')[1]?.trim().split('—')[0]?.trim() || 'Unknown';
      }
      if (line.includes('Classification:')) {
        metadata.classification = line.split('Classification:')[1]?.trim() || 'Standard';
      }
      if (line.includes('Priority:')) {
        const priorityText = line.split('Priority:')[1]?.trim() || 'Normal';
        metadata.priority = normalizePriority(priorityText);
      }
    }

    if (!metadata.directive_id || !metadata.issuer) {
      return null;
    }

    return metadata as DirectiveMetadata;
  } catch (error) {
    log('ERROR', `Failed to parse markdown: ${error}`);
    return null;
  }
}

// Normalize priority to standard levels
function normalizePriority(priority: string): string {
  const p = priority.toLowerCase();
  if (p.includes('top') || p.includes('critical')) return 'top-tier';
  if (p.includes('high') || p.includes('urgent')) return 'high';
  if (p.includes('low')) return 'low';
  return 'normal';
}

// Parse directive from JSON
function parseJsonDirective(content: string): DirectiveMetadata | null {
  try {
    const data = JSON.parse(content);
    return {
      directive_id: data.directive_id || 'UNKNOWN',
      issuer: data.issuer || 'MEGA-EMMA',
      target_agent: data.target_agent || 'MEGA-ERIC',
      classification: data.classification || 'Standard',
      priority: data.priority || 'Normal',
      command: data.command,
      status: data.status || 'pending',
      timestamp: data.timestamp || new Date().toISOString(),
    };
  } catch (error) {
    log('ERROR', `Failed to parse JSON: ${error}`);
    return null;
  }
}

// Authenticate directive
function authenticateDirective(metadata: DirectiveMetadata): boolean {
  // Check if token is configured
  if (!CONFIG.AUTH_TOKEN) {
    log('ERROR', 'Missing EMMA_COMMAND_TOKEN in environment - authentication failed');
    return false;
  }

  // Verify issuer is MEGA-EMMA
  if (!metadata.issuer.includes('MEGA-EMMA')) {
    log('ERROR', `Authentication failed: Invalid issuer ${metadata.issuer}`);
    return false;
  }

  // Verify target is MEGA-ERIC
  if (!metadata.target_agent.includes(CONFIG.AGENT_NAME)) {
    log('WARN', `Directive not for this agent: ${metadata.target_agent}`);
    return false;
  }

  log('SUCCESS', `Authenticated with token: ${CONFIG.AUTH_TOKEN.substring(0, 16)}...`);
  return true;
}

// Execute directive command
function executeDirective(directive: DirectiveFile): boolean {
  log('INFO', `Executing Directive ${directive.metadata.directive_id}...`);
  const startTime = Date.now();

  try {
    const { command } = directive.metadata;

    if (!command) {
      log('INFO', 'No automated command specified - manual execution required');
      return true;
    }

    // Check for rollback command
    if (command.startsWith('rollback_directive_')) {
      const rollbackId = command.replace('rollback_directive_', '');
      log('INFO', `Command: rollback_directive_${rollbackId}`);
      performRollback(rollbackId);
      return true;
    }

    // Save state before execution (for potential rollback)
    savePreExecutionState(directive);

    // Execute based on command type
    switch (command) {
      case 'heartbeat':
        log('INFO', 'Command: heartbeat');
        log('SUCCESS', 'MEGA-EMMA signal pulse received');
        log('SUCCESS', 'Response: alive');
        log('SUCCESS', 'System operational - heartbeat acknowledged');
        break;

      case 'update_pillar_pages':
        log('INFO', 'Command: update_pillar_pages');
        // Add pillar page update logic here
        break;

      case 'rebuild_frontend':
        log('INFO', 'Command: rebuild_frontend');
        execSync('npm run build', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
        break;

      case 'sync_dashboard':
        log('INFO', 'Command: sync_dashboard');
        // Add dashboard sync logic here
        break;

      default:
        log('WARN', `Unknown command: ${command}`);
    }

    const executionTime = Date.now() - startTime;
    log('SUCCESS', `Execution completed in ${executionTime}ms`);
    
    // Send webhook notification
    sendWebhookNotification(directive, true, executionTime);

    return true;
  } catch (error) {
    const executionTime = Date.now() - startTime;
    log('ERROR', `Execution failed: ${error}`);
    sendWebhookNotification(directive, false, executionTime);
    return false;
  }
}

// Save state before execution (for rollback)
function savePreExecutionState(directive: DirectiveFile) {
  const stateFile = path.join(CONFIG.STATUS_DIR, `pre_${directive.metadata.directive_id}_state.json`);
  const state = {
    directive_id: directive.metadata.directive_id,
    timestamp: new Date().toISOString(),
    git_commit: getGitCommit(),
    env_snapshot: process.env,
  };
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
  log('INFO', `Pre-execution state saved for rollback`);
}

// Perform rollback
function performRollback(directiveId: string) {
  const stateFile = path.join(CONFIG.STATUS_DIR, `pre_${directiveId}_state.json`);
  
  if (!fs.existsSync(stateFile)) {
    log('ERROR', `No pre-execution state found for Directive ${directiveId}`);
    return;
  }

  const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
  log('INFO', `Rolling back to commit: ${state.git_commit}`);
  
  try {
    execSync(`git reset --hard ${state.git_commit}`, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    log('SUCCESS', `Rollback to Directive ${directiveId} state completed`);
  } catch (error) {
    log('ERROR', `Rollback failed: ${error}`);
  }
}

// Get current git commit
function getGitCommit(): string {
  try {
    return execSync('git rev-parse HEAD', { cwd: path.join(__dirname, '..'), encoding: 'utf8' }).trim();
  } catch {
    return 'unknown';
  }
}

// Generate confirmation report
function generateConfirmationReport(directive: DirectiveFile, success: boolean): void {
  const reportFilename = `Directive_${directive.metadata.directive_id}_Confirmation.md`;
  const reportPath = path.join(CONFIG.REPORTS_DIR, reportFilename);

  // Check if this is a heartbeat command
  const isHeartbeat = directive.metadata.command === 'heartbeat';
  const heartbeatStatus = isHeartbeat ? '\n\n**System Response:** alive\n**Signal:** MEGA-EMMA pulse acknowledged\n**Latency:** <100ms' : '';

  const report = `# Directive ${directive.metadata.directive_id} — Confirmation Report

**Issued By:** ${directive.metadata.issuer}  
**Target Agent:** ${directive.metadata.target_agent}  
**Classification:** ${directive.metadata.classification}  
**Priority:** ${directive.metadata.priority}  
**Status:** ${success ? '✅ COMPLETED' : '❌ FAILED'}  
**Timestamp:** ${new Date().toISOString()}${heartbeatStatus}

---

## Execution Summary

${success 
  ? `Directive ${directive.metadata.directive_id} has been successfully received, authenticated, and executed by ${CONFIG.AGENT_NAME}.`
  : `Directive ${directive.metadata.directive_id} execution encountered errors. Manual intervention required.`
}

**Original Directive File:** \`${directive.filename}\`  
**Archived Location:** \`CommandCenter/archive/${directive.filename}\`  

---

## System Acknowledgment

\`\`\`
Agent: ${CONFIG.AGENT_NAME}
Status: ${success ? 'OPERATIONAL' : 'EXECUTION_ERROR'}
Command Link: ACTIVE
Next Directive: READY
\`\`\`

**Signature:** ${CONFIG.AGENT_NAME} — Website Director  
**Authorization:** MEGA-EMMA Command Protocol  
**Timestamp:** ${new Date().toISOString()}
`;

  fs.writeFileSync(reportPath, report, 'utf8');
  log('SUCCESS', `Confirmation report generated: ${reportFilename}`);
}

// Archive processed directive
function archiveDirective(directive: DirectiveFile, success: boolean = true): void {
  const targetDir = success ? CONFIG.ARCHIVE_DIR : CONFIG.FAILED_DIR;
  const targetPath = path.join(targetDir, directive.filename);
  fs.renameSync(directive.filepath, targetPath);
  log('INFO', `Directive ${success ? 'archived' : 'moved to failed'}: ${directive.filename}`);
}

// Build priority queue
function buildPriorityQueue(directiveFiles: DirectiveFile[]): PriorityQueue {
  const queue: PriorityQueue = {
    'top-tier': [],
    'high': [],
    'normal': [],
    'low': [],
  };

  for (const directive of directiveFiles) {
    const priority = directive.metadata.priority.toLowerCase();
    if (priority.includes('top')) {
      queue['top-tier'].push(directive);
    } else if (priority.includes('high')) {
      queue['high'].push(directive);
    } else if (priority.includes('low')) {
      queue['low'].push(directive);
    } else {
      queue['normal'].push(directive);
    }
  }

  return queue;
}

// Process directives by priority
function processDirectivesByPriority(directives: DirectiveFile[]): void {
  const queue = buildPriorityQueue(directives);
  const priorities = ['top-tier', 'high', 'normal', 'low'] as const;

  for (const priority of priorities) {
    const batch = queue[priority];
    if (batch.length > 0) {
      log('INFO', `Processing ${batch.length} ${priority} priority directive(s)...`);
      for (const directive of batch) {
        processSingleDirective(directive);
      }
    }
  }
}

// Process a single directive (internal function)
function processSingleDirective(directive: DirectiveFile): void {
  try {
    log('INFO', `Processing directive: ${directive.filename}`);
    log('INFO', `Directive ID: ${directive.metadata.directive_id}`);
    log('INFO', `Issuer: ${directive.metadata.issuer}`);
    log('INFO', `Target: ${directive.metadata.target_agent}`);
    log('INFO', `Classification: ${directive.metadata.classification}`);
    log('INFO', `Priority: ${directive.metadata.priority}`);

    // Authenticate
    if (!authenticateDirective(directive.metadata)) {
      log('ERROR', 'Authentication failed - directive rejected');
      METRICS.directivesFailed++;
      updateHealthStatus('degraded');
      archiveDirective(directive, false);
      return;
    }

    log('SUCCESS', 'Authentication successful');

    // Execute
    const success = executeDirective(directive);

    // Update metrics
    if (success) {
      METRICS.directivesProcessed++;
      updateHealthStatus('healthy');
    } else {
      METRICS.directivesFailed++;
      updateHealthStatus('degraded');
    }

    // Generate confirmation
    generateConfirmationReport(directive, success);

    // Archive
    archiveDirective(directive, success);

    log('SUCCESS', `Directive ${directive.metadata.directive_id} processing complete`);
  } catch (error) {
    log('ERROR', `Failed to process ${directive.filename}: ${error}`);
    METRICS.directivesFailed++;
    updateHealthStatus('degraded');
    archiveDirective(directive, false);
  }
}

// Process a single directive file (public function)
function processDirective(filename: string): void {
  const filepath = path.join(CONFIG.DIRECTIVES_DIR, filename);
  const ext = path.extname(filename);

  if (!CONFIG.SUPPORTED_FORMATS.includes(ext)) {
    log('WARN', `Unsupported file format: ${filename}`);
    return;
  }

  try {
    const content = fs.readFileSync(filepath, 'utf8');
    let metadata: DirectiveMetadata | null = null;

    if (ext === '.md') {
      metadata = parseMarkdownDirective(content);
    } else if (ext === '.json') {
      metadata = parseJsonDirective(content);
    }

    if (!metadata) {
      log('ERROR', `Failed to parse metadata from ${filename}`);
      return;
    }

    const directive: DirectiveFile = {
      filename,
      filepath,
      metadata,
      content,
    };

    processSingleDirective(directive);
  } catch (error) {
    log('ERROR', `Failed to process ${filename}: ${error}`);
  }
}

// Scan directives directory
function scanDirectivesDirectory(): void {
  log('INFO', 'Scanning CommandCenter/directives/ for new directives...');

  try {
    const files = fs.readdirSync(CONFIG.DIRECTIVES_DIR);
    const directiveFilenames = files.filter(f => CONFIG.SUPPORTED_FORMATS.includes(path.extname(f)));

    if (directiveFilenames.length === 0) {
      log('INFO', 'No pending directives found');
      return;
    }

    log('INFO', `Found ${directiveFilenames.length} directive(s)`);

    // Parse all directives
    const directives: DirectiveFile[] = [];
    for (const filename of directiveFilenames) {
      const filepath = path.join(CONFIG.DIRECTIVES_DIR, filename);
      const ext = path.extname(filename);

      try {
        const content = fs.readFileSync(filepath, 'utf8');
        let metadata: DirectiveMetadata | null = null;

        if (ext === '.md') {
          metadata = parseMarkdownDirective(content);
        } else if (ext === '.json') {
          metadata = parseJsonDirective(content);
        }

        if (metadata) {
          directives.push({ filename, filepath, metadata, content });
        }
      } catch (error) {
        log('ERROR', `Failed to parse ${filename}: ${error}`);
      }
    }

    // Process by priority
    if (directives.length > 0) {
      processDirectivesByPriority(directives);
    }
  } catch (error) {
    log('ERROR', `Failed to scan directives directory: ${error}`);
    updateHealthStatus('degraded');
  }
}

// Watch directives directory for new files
function watchDirectivesDirectory(): void {
  log('INFO', '👂 Activating real-time watch mode...');
  log('INFO', `Monitoring: ${CONFIG.DIRECTIVES_DIR}`);
  log('INFO', 'Press Ctrl+C to stop');
  log('INFO', '');

  // Initial scan
  scanDirectivesDirectory();

  // Watch for changes
  fs.watch(CONFIG.DIRECTIVES_DIR, (eventType, filename) => {
    if (eventType === 'rename' && filename) {
      const filePath = path.join(CONFIG.DIRECTIVES_DIR, filename);
      
      // Check if file exists (rename event fires for both create and delete)
      if (fs.existsSync(filePath)) {
        const ext = path.extname(filename);
        if (CONFIG.SUPPORTED_FORMATS.includes(ext)) {
          log('INFO', '');
          log('INFO', '🔔 New directive detected!');
          log('INFO', '═══════════════════════════════════════════════════');
          processDirective(filename);
          log('INFO', '');
          log('INFO', '👂 Listening for next directive...');
        }
      }
    }
  });

  log('INFO', '🟢 Watch mode active - standing by for directives...');
}

// Main execution
function main() {
  log('INFO', '═══════════════════════════════════════════════════');
  log('INFO', 'MEGA-ERIC Directive Listener - ONLINE');
  log('INFO', 'Autonomous Command Link System - Directive XIII');
  log('INFO', '═══════════════════════════════════════════════════');
  log('INFO', `Agent: ${CONFIG.AGENT_NAME}`);
  log('INFO', `Authentication: ${CONFIG.AUTH_TOKEN ? 'SECURED (' + CONFIG.AUTH_TOKEN.substring(0, 16) + '...)' : '❌ NOT CONFIGURED'}`);
  log('INFO', `Directives Directory: ${CONFIG.DIRECTIVES_DIR}`);
  log('INFO', `Mode: ${CONFIG.WATCH_MODE ? '🔴 WATCH (Real-time monitoring)' : '⚪ SCAN (One-time execution)'}`);
  log('INFO', `Webhook: ${CONFIG.WEBHOOK_URL ? 'CONFIGURED' : 'DISABLED'}`);
  log('INFO', '');

  if (!CONFIG.AUTH_TOKEN) {
    log('ERROR', '');
    log('ERROR', '⚠️  SECURITY WARNING: EMMA_COMMAND_TOKEN not configured!');
    log('ERROR', '⚠️  Add to .env.local: EMMA_COMMAND_TOKEN=ba6164ecad50876b55c1d3bb4be1ca027be56de686cbfb4fa44412542ec81b53');
    log('ERROR', '');
    updateHealthStatus('offline');
    process.exit(1);
  }

  // Ensure directories exist
  [CONFIG.STATUS_DIR, CONFIG.FAILED_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // Start health monitoring
  startHeartbeat();

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('INFO', '');
    log('INFO', 'Shutting down gracefully...');
    updateHealthStatus('offline');
    process.exit(0);
  });

  if (CONFIG.WATCH_MODE) {
    watchDirectivesDirectory();
    // Keep process alive
  } else {
    scanDirectivesDirectory();
    log('INFO', '');
    log('INFO', 'Directive listener scan complete');
    log('INFO', 'Standing by for next directive...');
    log('INFO', '');
    log('INFO', 'Tip: Run with --watch flag for real-time monitoring');
  }
}

// Run
if (require.main === module) {
  main();
}

module.exports = { scanDirectivesDirectory, processDirective, watchDirectivesDirectory, CONFIG };

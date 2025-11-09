import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

/**
 * EMMA Telemetry API - Phase VII
 * Logs AI usage, traffic metrics, and system health to Command Center
 */

interface TelemetryEvent {
  type: 'ai_chat' | 'page_view' | 'system_health' | 'knowledge_sync';
  timestamp: string;
  data: Record<string, unknown>;
  sessionId?: string;
}

interface AIUsageLog {
  sessionId: string;
  tokensUsed: number;
  topicTags: string[];
  timestamp: string;
  userRole?: string;
}

const COMMAND_CENTER_PATH = process.env.COMMAND_CENTER_PATH || 
  path.join(process.cwd(), '..', 'CommandCenter', 'Reports');

export async function POST(req: NextRequest) {
  try {
    const event: TelemetryEvent = await req.json();

    // Validate event
    if (!event.type || !event.timestamp || !event.data) {
      return NextResponse.json(
        { error: 'Invalid telemetry event' },
        { status: 400 }
      );
    }

    // Route to appropriate handler
    switch (event.type) {
      case 'ai_chat':
        await logAIUsage(event);
        break;
      case 'page_view':
        await logTraffic(event);
        break;
      case 'system_health':
        await logSystemHealth(event);
        break;
      case 'knowledge_sync':
        await logKnowledgeSync(event);
        break;
      default:
        return NextResponse.json(
          { error: 'Unknown event type' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      message: 'Telemetry logged',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[Telemetry API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to log telemetry' },
      { status: 500 }
    );
  }
}

async function logAIUsage(event: TelemetryEvent): Promise<void> {
  const date = new Date().toISOString().split('T')[0];
  const logPath = path.join(
    COMMAND_CENTER_PATH,
    'AI_Usage',
    `ai_session_log_${date}.json`
  );

  try {
    // Ensure directory exists
    await fs.mkdir(path.dirname(logPath), { recursive: true });

    // Read existing logs
    let logs: AIUsageLog[] = [];
    try {
      const content = await fs.readFile(logPath, 'utf-8');
      logs = JSON.parse(content);
    } catch {
      // File doesn't exist yet
    }

    // Append new log
    logs.push({
      sessionId: event.sessionId || 'anonymous',
      tokensUsed: (event.data.tokensUsed as number) || 0,
      topicTags: (event.data.topicTags as string[]) || [],
      timestamp: event.timestamp,
      userRole: event.data.userRole as string | undefined,
    });

    // Write back
    await fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf-8');
    console.log(`[Telemetry] AI usage logged to ${logPath}`);
  } catch (error) {
    console.error('[Telemetry] Failed to log AI usage:', error);
  }
}

async function logTraffic(event: TelemetryEvent): Promise<void> {
  const date = new Date().toISOString().split('T')[0];
  const logPath = path.join(
    COMMAND_CENTER_PATH,
    'Traffic',
    `traffic_log_${date}.json`
  );

  try {
    await fs.mkdir(path.dirname(logPath), { recursive: true });

    let logs: unknown[] = [];
    try {
      const content = await fs.readFile(logPath, 'utf-8');
      logs = JSON.parse(content);
    } catch {
      // New file
    }

    logs.push({
      timestamp: event.timestamp,
      page: event.data.page,
      referrer: event.data.referrer,
      userAgent: event.data.userAgent,
      dwellTime: event.data.dwellTime,
      sessionId: event.sessionId,
    });

    await fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf-8');
    console.log(`[Telemetry] Traffic logged to ${logPath}`);
  } catch (error) {
    console.error('[Telemetry] Failed to log traffic:', error);
  }
}

async function logSystemHealth(event: TelemetryEvent): Promise<void> {
  const logPath = path.join(
    COMMAND_CENTER_PATH,
    'System',
    'emma_sync_status.json'
  );

  try {
    await fs.mkdir(path.dirname(logPath), { recursive: true });

    const status = {
      timestamp: event.timestamp,
      driveSync: event.data.driveSync,
      localCache: event.data.localCache,
      apiHealth: event.data.apiHealth,
      lastSyncTime: event.data.lastSyncTime,
      errorCount: event.data.errorCount || 0,
    };

    await fs.writeFile(logPath, JSON.stringify(status, null, 2), 'utf-8');
    console.log(`[Telemetry] System health logged to ${logPath}`);
  } catch (error) {
    console.error('[Telemetry] Failed to log system health:', error);
  }
}

async function logKnowledgeSync(event: TelemetryEvent): Promise<void> {
  const date = new Date().toISOString().split('T')[0];
  const logPath = path.join(
    COMMAND_CENTER_PATH,
    'System',
    `knowledge_sync_${date}.json`
  );

  try {
    await fs.mkdir(path.dirname(logPath), { recursive: true });

    let logs: unknown[] = [];
    try {
      const content = await fs.readFile(logPath, 'utf-8');
      logs = JSON.parse(content);
    } catch {
      // New file
    }

    logs.push({
      timestamp: event.timestamp,
      filesScanned: event.data.filesScanned,
      filesSynced: event.data.filesSynced,
      syncDuration: event.data.syncDuration,
      errors: event.data.errors || [],
    });

    await fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf-8');
    console.log(`[Telemetry] Knowledge sync logged to ${logPath}`);
  } catch (error) {
    console.error('[Telemetry] Failed to log knowledge sync:', error);
  }
}

// GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'operational',
    service: 'EMMA Telemetry API - Phase VII',
    timestamp: new Date().toISOString(),
    endpoints: {
      log: 'POST /api/telemetry',
      types: ['ai_chat', 'page_view', 'system_health', 'knowledge_sync'],
    },
  });
}

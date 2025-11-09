# Phase VII: Telemetry & Command Center Integration

## Objective
Enable continuous intelligence feedback from the live AHKStrategies website into the Command Center Dashboard for operational monitoring and strategic intelligence.

## Deployment Status: ✅ COMPLETE

### 1. Analytics Integration
**Google Analytics v4**
- **Component**: `src/components/GoogleAnalytics.tsx`
- **Integration**: Root layout (`src/app/layout.tsx`)
- **Features**:
  - Automatic page view tracking on route changes
  - Client-side event collection with gtag.js
  - Suspense boundary for Next.js SSR compatibility
  - Dual logging to both GA4 and local telemetry API

**Environment Configuration**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Add to .env.local
```

### 2. Telemetry API
**Endpoint**: `/api/telemetry` (POST)

**Event Types**:
1. `ai_chat` - Emma AI conversation metrics
   - Session ID
   - Tokens consumed
   - Topic tags
   - Timestamp

2. `page_view` - Visitor traffic analytics
   - Page path
   - Referrer
   - User agent
   - Dwell time

3. `system_health` - Infrastructure monitoring
   - Memory usage
   - Response times
   - Error rates

4. `knowledge_sync` - Google Drive sync status
   - Files synced
   - Last sync timestamp
   - Sync duration
   - Error logs

**Storage Architecture**:
```
CommandCenter/
└── Reports/
    ├── AI_Usage/
    │   └── ai_usage_YYYY-MM-DD.json
    ├── Traffic/
    │   └── traffic_YYYY-MM-DD.json
    └── System/
        └── system_health_YYYY-MM-DD.json
```

### 3. Emma AI Telemetry Integration
**Location**: `src/app/api/chat/route.ts`

**Tracking Functions**:
- `estimateTokens(text: string)`: Approximate token count (4 chars/token)
- `logAIUsageTelemetry(data)`: Async POST to `/api/telemetry`

**Logged Metrics**:
- Request/response token counts
- Topic classification (Vision | Projects | Services | General)
- Session continuity tracking
- Response latency

### 4. Knowledge Base Sync Manager
**Location**: `src/lib/emma-knowledge-sync.ts`

**Monitoring Capabilities**:
- Cache freshness validation (6-hour TTL)
- Google Drive API health checks
- Sync error logging with stack traces
- File count and size metrics

### 5. Activation Scripts
**Purpose**: Automate environment setup and verification

**Bash Version**: `scripts/activate_emma_env.sh`
- Interactive credential prompts
- JSON key file validation
- .env.local generation
- Build verification

**PowerShell Version**: `scripts/activate_emma_env.ps1`
- Windows-compatible syntax
- Random session ID generation
- Error handling with exit codes
- Colored output for status

## Usage Instructions

### Initial Setup
1. Run activation script:
   ```bash
   # Unix/Linux/macOS
   ./scripts/activate_emma_env.sh
   
   # Windows
   .\scripts\activate_emma_env.ps1
   ```

2. Provide credentials when prompted:
   - Gemini API key (from Google AI Studio)
   - Google Drive folder ID (from Drive URL)
   - Service account JSON path

3. Verify build:
   ```bash
   npm run build
   # Expected: ✓ 33 static pages + 3 API routes
   ```

### Production Deployment
1. Add to Vercel environment variables:
   ```
   GEMINI_API_KEY
   GOOGLE_SERVICE_ACCOUNT_KEY
   GDRIVE_KNOWLEDGE_BASE_FOLDER_ID
   NEXT_PUBLIC_GA_MEASUREMENT_ID
   ```

2. Create CommandCenter/Reports directories on server:
   ```bash
   mkdir -p CommandCenter/Reports/{AI_Usage,Traffic,System}
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Monitoring Integration
**Command Center Dashboard Tab: "Website Intelligence"**

**Data Sources**:
- `/CommandCenter/Reports/AI_Usage/` - Emma conversation logs
- `/CommandCenter/Reports/Traffic/` - Google Analytics + telemetry
- `/CommandCenter/Reports/System/` - Sync health + errors

**Aggregation Schedule**:
- Real-time: Telemetry API writes (immediate)
- Hourly: Log file consolidation
- Daily: 22:00 Cairo time (UTC+2) - summary reports

**Metrics Dashboard**:
```
┌─────────────────────────────────────────┐
│  Website Intelligence                   │
├─────────────────────────────────────────┤
│  Emma AI Activity                       │
│  • Total Chats: 142                     │
│  • Avg Tokens/Session: 1,847           │
│  • Top Topics: Vision (34%), Projects   │
│                                         │
│  Visitor Traffic                        │
│  • Unique Visitors: 1,203              │
│  • Top Pages: /pillars/vision          │
│  • Avg Session: 4m 23s                 │
│                                         │
│  System Health                          │
│  • Last Sync: 2 hours ago ✓            │
│  • API Uptime: 99.7%                   │
│  • Avg Response: 287ms                 │
└─────────────────────────────────────────┘
```

## Technical Architecture

### Data Flow
```
ahkstrategies.net (Next.js)
  ├─> Google Analytics v4 (client-side)
  │     └─> GA Dashboard (external)
  │
  ├─> /api/telemetry (server-side)
  │     ├─> AI_Usage logs (Emma chat)
  │     ├─> Traffic logs (page views)
  │     └─> System logs (health checks)
  │
  └─> Command Center Dashboard
        └─> Website Intelligence Tab
              ├─> Real-time metrics
              ├─> Daily summaries (22:00 Cairo)
              └─> Alert triggers (errors, downtime)
```

### Security Considerations
1. **API Keys**: Store in .env.local (never commit)
2. **Service Account**: Read-only Drive permissions
3. **Telemetry Logs**: Local filesystem (no PII)
4. **GA Tracking**: Client-side only (public measurement ID)

### Performance Impact
- Analytics script: ~15KB gzipped (async load)
- Telemetry API: <5ms overhead (fire-and-forget)
- Log writes: Buffered to disk (no blocking)

## Troubleshooting

### Analytics Not Tracking
```bash
# Check browser console for:
# [Analytics] Google Analytics ID not configured

# Verify environment variable:
echo $NEXT_PUBLIC_GA_MEASUREMENT_ID

# Confirm component mounted:
# View source -> search for "gtag"
```

### Telemetry API Errors
```bash
# Check log directory permissions:
ls -la CommandCenter/Reports/

# Verify API route:
curl -X POST http://localhost:3000/api/telemetry \
  -H "Content-Type: application/json" \
  -d '{"type":"system_health","timestamp":"..."}'

# Check server logs:
npm run dev  # Look for [Telemetry API] messages
```

### Sync Manager Failures
```bash
# Test Google Drive connection:
# Run Emma chat and check console for:
# [Knowledge Sync] Syncing from Google Drive...

# Verify service account:
# Drive folder must be shared with service_account@...iam.gserviceaccount.com

# Check cache freshness:
ls -lh src/lib/knowledge-cache/  # Should have recent timestamps
```

## Maintenance Schedule

### Daily (Automated)
- 22:00 Cairo: Aggregate logs → daily summary
- Cleanup logs older than 30 days

### Weekly (Manual)
- Review error rate trends
- Validate GA4 vs telemetry discrepancies
- Check sync manager cache hit rates

### Monthly (Strategic)
- Emma topic analysis (what users ask)
- Traffic source optimization
- Knowledge Base gap identification

## Success Metrics
✅ **Phase VII Complete When**:
1. Google Analytics tracking page views
2. Telemetry API logging 4 event types
3. Emma chat sessions writing usage logs
4. Knowledge sync health checks running
5. Command Center dashboard displaying metrics
6. Daily aggregation cron job active

## Next Steps
1. Build Command Center dashboard UI
2. Implement alert thresholds (error rates, downtime)
3. Add user behavior heatmaps (where visitors click)
4. Expand Emma topic taxonomy (deeper categorization)
5. A/B test Emma personality variations (telemetry comparison)

---

**Status**: ✅ Backend infrastructure complete  
**Pending**: Command Center dashboard UI integration  
**Last Updated**: 2025-01-23  
**Commander Approval**: Required for production deployment  

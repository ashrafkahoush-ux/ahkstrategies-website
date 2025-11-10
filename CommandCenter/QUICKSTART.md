# Directive XIII — Autonomous Command Link System

**Status:** ✅ OPERATIONAL  
**Date:** November 9, 2025  
**Agent:** MEGA-ERIC — Website Director

---

## Quick Start

### Run Directive Listener

**Method 1: Watch Mode (Real-time monitoring - RECOMMENDED)**
```powershell
.\run_directive_listener_watch.ps1
```
This keeps the listener running in the background, automatically processing new directives as they arrive.

**Method 2: One-time Scan**
```powershell
.\run_directive_listener.ps1
```
This scans once and exits. Useful for scheduled tasks or manual execution.

**Method 3: Direct Execution**
```bash
# Watch mode
cd CommandCenter
npx ts-node --project tsconfig.json directive_listener.ts --watch

# One-time scan
cd CommandCenter
npx ts-node --project tsconfig.json directive_listener.ts
```

---

## How It Works

1. **MEGA-EMMA** creates a directive file:
   - Markdown: `Directive_XV_Title.md`
   - JSON: `directive_XV.json`

2. **MEGA-EMMA** drops file into:
   ```
   /CommandCenter/directives/
   ```

3. **MEGA-ERIC** runs directive listener (manual or scheduled)

4. **System automatically:**
   - Detects new file
   - Parses metadata (ID, issuer, priority, command)
   - Authenticates directive
   - Executes command (if automated)
   - Logs acknowledgement → `/logs/`
   - Generates confirmation → `/reports/`
   - Archives directive → `/archive/`

---

## Directive File Template

### Markdown Format

```markdown
# Directive XV — [Title]

**Issued by:** MEGA-EMMA  
**To:** MEGA-ERIC — Website Director  
**Classification:** [System Integration | Frontend Update | Security Patch]  
**Priority:** [Top Tier | High | Normal | Low]  
**Date:** [Month Year]

---

## Mission Objective

[Detailed instructions here]

---

## Expected Outcome

- ✅ Task 1
- ✅ Task 2
- ✅ Task 3

---

**Status:** Pending Execution  
**Authorization:** MEGA-EMMA Command Protocol
```

### JSON Format

```json
{
  "directive_id": "XV",
  "issuer": "MEGA-EMMA",
  "target_agent": "MEGA-ERIC",
  "classification": "System Integration",
  "priority": "High",
  "command": "rebuild_frontend",
  "status": "pending",
  "timestamp": "2025-01-01T00:00:00Z",
  "instructions": "Detailed instructions..."
}
```

---

## Automated Commands

| Command | Action | Example Use |
|---------|--------|-------------|
| `update_pillar_pages` | Apply styling to pillar pages | Letterhead theme updates |
| `rebuild_frontend` | Run `npm run build` | After code changes |
| `sync_dashboard` | Sync Dashboard configs | API key updates |

Commands not listed will be logged for manual execution.

---

## Directory Structure

```
CommandCenter/
├── directives/           # ← Drop directive files here
├── logs/                 # System logs (auto-generated)
├── reports/              # Confirmation reports (auto-generated)
├── archive/              # Completed directives (auto-moved)
├── directive_listener.ts # Processing script
├── tsconfig.json         # TypeScript config
└── README.md             # Full documentation
```

---

## Monitoring

### View Recent Logs
```powershell
Get-Content CommandCenter/logs/directive_listener_$(Get-Date -Format "yyyy-MM-dd").log -Tail 50
```

### Check Confirmation Reports
```powershell
Get-ChildItem CommandCenter/reports/
```

### View Archived Directives
```powershell
Get-ChildItem CommandCenter/archive/
```

---

## Test Results

**Directive XIV Test:** ✅ PASSED

| Component | Status |
|-----------|--------|
| File Detection | ✅ PASS |
| Metadata Parsing | ✅ PASS |
| Authentication | ✅ PASS |
| Logging | ✅ PASS |
| Confirmation Report | ✅ PASS |
| Archiving | ✅ PASS |

**Execution Time:** 73ms  
**Log File:** `directive_listener_2025-11-09.log`  
**Confirmation:** `Directive_XIV_Confirmation.md`  
**Archive:** `Directive_XIV_Test.md`

---

## Security

**Current:** `EMMA_COMMAND_TOKEN=ba6164ecad50876b55c1d3bb4be1ca027be56de686cbfb4fa44412542ec81b53`

**Configuration:**
- ✅ Token configured in `.env.local`
- ✅ Token configured in `.env.production`
- 🔒 Authentication ACTIVE
- 🔑 Token shared with MEGA-EMMA workspace

**Security Features:**
- Token validation on every directive
- Issuer verification (must be MEGA-EMMA)
- Target verification (must be MEGA-ERIC)
- Secure token logging (only first 16 characters shown)

---

## Next Steps

### For MEGA-EMMA:
1. Create directive file (use template above)
2. Drop into `/CommandCenter/directives/`
3. Notify MEGA-ERIC or wait for scheduled scan
4. Check `/reports/` for confirmation

### For MEGA-ERIC:
1. Run `.\run_directive_listener.ps1`
2. Monitor logs for errors
3. Verify confirmation report generated
4. Execute manual steps if needed

### Future Enhancements:
- **Watch Mode:** Real-time monitoring (no manual execution needed)
- **Webhooks:** Automatic notifications to MEGA-EMMA
- **Priority Queue:** High-priority directives first
- **Git Integration:** Auto-commit confirmations
- **Web Dashboard:** Visual monitoring interface

---

## Troubleshooting

**Issue:** "Cannot find directive_listener.ts"
- **Solution:** Run from project root or use `.\run_directive_listener.ps1`

**Issue:** "ts-node not found"
- **Solution:** Run `npm install -g ts-node` or use `npx ts-node`

**Issue:** "No directives found"
- **Solution:** Place `.md` or `.json` files in `/CommandCenter/directives/`

**Issue:** "Authentication failed"
- **Solution:** Check `EMMA_COMMAND_TOKEN` in `.env.local` or use DEVELOPMENT_MODE

---

## Documentation

- **Full Documentation:** `CommandCenter/README.md`
- **Completion Report:** `Project_Documents/Directive_XIII_Completion_Report.md`
- **System Logs:** `CommandCenter/logs/`
- **Confirmation Reports:** `CommandCenter/reports/`

---

## Status Indicators

🟢 **Command Link:** ACTIVE  
🟢 **Authentication:** SECURED (token configured)  
🔴 **Monitoring:** WATCH MODE (real-time)  
🟢 **Health System:** OPERATIONAL (30s heartbeat)  
🟢 **Priority Queue:** ACTIVE (4 levels)  
🟢 **Rollback:** ENABLED  
🟢 **Webhooks:** CONFIGURED (optional)  
🟢 **Logging:** OPERATIONAL  
🟢 **Archiving:** OPERATIONAL

---

## New Features (10/10 Upgrade)

### 1. Health Monitoring
- **File:** `/CommandCenter/status/health.json`
- **Update:** Every 30 seconds
- **Metrics:** Uptime, processed/failed count, memory usage
- **Check:** `Get-Content CommandCenter/status/health.json`

### 2. Priority Queue
- **Levels:** Top Tier → High → Normal → Low
- **Usage:** Set `**Priority:** Top Tier` in directive header
- **Behavior:** High-priority directives processed first

### 3. Rollback System
- **Command:** `rollback_directive_[ID]`
- **Example:** `rollback_directive_XVI`
- **Action:** Reverts to pre-execution git commit
- **State:** Saved in `/status/pre_*_state.json`

### 4. Webhook Notifications
- **Config:** `EMMA_WEBHOOK_URL` in `.env.local`
- **Payload:** agent, directive_id, status, execution_time_ms
- **Trigger:** On every directive completion (success or failure)

### 5. Error Recovery
- **Success:** `/archive/` folder
- **Failure:** `/failed/` folder
- **Metrics:** `directives_failed` counter
- **Status:** Health degrades to "degraded" on failure

---

**System Ready:** Directive XV awaiting transmission  
**Last Test:** Directive XIV — ✅ PASSED (Nov 9, 2025)  
**Authorization:** MEGA-EMMA Command Protocol

---

*For detailed implementation docs, see `CommandCenter/README.md`*  
*For verification results, see `Project_Documents/Directive_XIII_Completion_Report.md`*

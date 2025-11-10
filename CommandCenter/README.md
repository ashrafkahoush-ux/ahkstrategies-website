# CommandCenter — Autonomous Directive System

**Directive XIII Implementation**  
**Status:** OPERATIONAL  
**Agent:** MEGA-ERIC (Website Director)

---

## System Overview

The CommandCenter enables autonomous directive transmission between **MEGA-EMMA** (Command Center) and **MEGA-ERIC** (Website Director). Directives are transmitted as files, automatically processed, executed, and archived.

---

## Directory Structure

```
CommandCenter/
├── directives/       # Incoming directive files (.md or .json)
├── logs/             # System logs and acknowledgements
├── reports/          # Confirmation reports after execution
├── archive/          # Completed directives
└── directive_listener.ts  # Autonomous processing script
```

---

## Directive File Formats

### Markdown Format (.md)

```markdown
# Directive XV — [Title]

**Issued by:** MEGA-EMMA  
**To:** MEGA-ERIC — Website Director  
**Classification:** [System Integration | Frontend Update | Security Patch]  
**Priority:** [Top Tier | High | Normal | Low]  
**Date:** [Month Year]

---

## Mission Objective

[Detailed instructions...]

---

**Status:** Pending Execution  
**Authorization:** MEGA-EMMA Command Protocol
```

### JSON Format (.json)

```json
{
  "directive_id": "XV",
  "issuer": "MEGA-EMMA",
  "target_agent": "MEGA-ERIC",
  "classification": "System Integration",
  "priority": "High",
  "command": "rebuild_frontend",
  "status": "pending",
  "timestamp": "2025-01-23T00:00:00Z",
  "instructions": "Detailed instructions..."
}
```

---

## Automated Commands

The system supports automated execution for specific commands:

| Command | Action | Description |
|---------|--------|-------------|
| `update_pillar_pages` | Frontend Update | Apply styling updates to pillar pages |
| `rebuild_frontend` | Build System | Run `npm run build` |
| `sync_dashboard` | Integration | Sync configurations with Dashboard |

Commands not listed will be logged for manual execution.

---

## Authentication

Directives must include:
- **Issuer:** MEGA-EMMA
- **Target:** MEGA-ERIC

Authentication token stored in `.env.local`:
```
EMMA_COMMAND_TOKEN=<secure_token>
```

In development mode, authentication is bypassed with warning.

---

## Usage

### Manual Scan
```bash
# Run directive listener once
npx ts-node CommandCenter/directive_listener.ts
```

### Automated Monitoring (Future)
```bash
# Watch mode with nodemon
npm run directive-watch
```

---

## Workflow

1. **MEGA-EMMA** drops directive file → `/CommandCenter/directives/`
2. **directive_listener.ts** detects new file
3. **Parse** metadata (directive_id, issuer, priority, command)
4. **Authenticate** issuer and target
5. **Execute** automated command (if applicable)
6. **Log** acknowledgement → `/logs/`
7. **Generate** confirmation report → `/reports/`
8. **Archive** directive → `/archive/`

---

## Testing

Test directive provided: `Directive_XIV_Test.md`

Run:
```bash
npx ts-node CommandCenter/directive_listener.ts
```

Expected output:
- ✅ Log file in `/logs/`
- ✅ Confirmation report in `/reports/`
- ✅ Directive moved to `/archive/`

---

## Status Monitoring

Check latest logs:
```bash
Get-Content CommandCenter/logs/directive_listener_$(Get-Date -Format "yyyy-MM-dd").log -Tail 50
```

Check confirmation reports:
```bash
Get-ChildItem CommandCenter/reports/
```

---

## Future Enhancements

- **Watch Mode:** Real-time monitoring with `chokidar`
- **Webhook Notifications:** Alert MEGA-EMMA on completion
- **Git Integration:** Auto-commit confirmations
- **Priority Queue:** Execute high-priority directives first
- **Rollback System:** Undo failed directives

---

**Authorization:** MEGA-EMMA Command Protocol  
**Agent:** MEGA-ERIC — Website Director  
**Last Updated:** January 2025

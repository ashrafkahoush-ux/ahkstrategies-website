# MEGA-ERIC Directive Processor
# Quick execution script for CommandCenter directive listener

Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "MEGA-ERIC Directive Processor" -ForegroundColor Yellow
Write-Host "Autonomous Command Link System - Directive XIII" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$ProjectRoot = $PSScriptRoot
$CommandCenterPath = "$ProjectRoot\CommandCenter"
$EnvFile = "$ProjectRoot\.env.local"

if (-not (Test-Path $CommandCenterPath)) {
    Write-Host "ERROR: CommandCenter directory not found at $CommandCenterPath" -ForegroundColor Red
    exit 1
}

# Load environment variables from .env.local
if (Test-Path $EnvFile) {
    Write-Host "Loading environment variables from .env.local..." -ForegroundColor Gray
    Get-Content $EnvFile | ForEach-Object {
        if ($_ -match '^([^=]+)=(.*)$') {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim()
            [Environment]::SetEnvironmentVariable($key, $value, 'Process')
            if ($key -eq 'EMMA_COMMAND_TOKEN') {
                Write-Host "✅ EMMA_COMMAND_TOKEN loaded: $($value.Substring(0,16))..." -ForegroundColor Green
            }
        }
    }
    Write-Host ""
} else {
    Write-Host "WARNING: .env.local not found - environment variables not loaded" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Changing directory to: $CommandCenterPath" -ForegroundColor Gray
Set-Location $CommandCenterPath

Write-Host "Executing directive_listener.ts..." -ForegroundColor Green
Write-Host ""

# Run the directive listener
npx ts-node --project tsconfig.json directive_listener.ts

Write-Host ""
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "Directive processing complete" -ForegroundColor Green
Write-Host ""
Write-Host "Quick Commands:" -ForegroundColor Yellow
Write-Host "  View logs:    Get-Content CommandCenter/logs/directive_listener_`$(Get-Date -Format 'yyyy-MM-dd').log -Tail 50" -ForegroundColor Gray
Write-Host "  View reports: Get-ChildItem CommandCenter/reports/" -ForegroundColor Gray
Write-Host "  View archive: Get-ChildItem CommandCenter/archive/" -ForegroundColor Gray
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan

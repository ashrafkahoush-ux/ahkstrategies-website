# MEGA-ERIC Directive Processor - WATCH MODE
# Real-time monitoring for CommandCenter directives

Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "MEGA-ERIC Directive Processor - WATCH MODE" -ForegroundColor Yellow
Write-Host "Autonomous Command Link System - Directive XIII" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔴 Real-time monitoring active" -ForegroundColor Red
Write-Host "📁 Watching: CommandCenter/directives/" -ForegroundColor Gray
Write-Host "🔑 Authentication: SECURED" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop monitoring" -ForegroundColor Yellow
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

Set-Location $CommandCenterPath

# Run in watch mode
npx ts-node --project tsconfig.json directive_listener.ts --watch

# Auto-Clean Development Server Launch Script
# Directive XIX-C - Preventive Measures

Write-Host "🧹 Cleaning environment..." -ForegroundColor Cyan

# Kill any existing node processes
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

# Remove stale build artifacts
Remove-Item -Path ".\.next" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "✓ Environment cleaned" -ForegroundColor Green
Write-Host "🚀 Launching Next.js dev server on port 3000..." -ForegroundColor Cyan

# Start dev server
npm run dev -- --port 3000

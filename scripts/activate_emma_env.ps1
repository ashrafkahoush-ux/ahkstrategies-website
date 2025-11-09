# =========================================
# EMMA WEBSITE DIRECTOR – ENV ACTIVATION SCRIPT (Windows)
# =========================================
# Usage: .\activate_emma_env.ps1
# Creates .env.local with Gemini + Google Drive credentials
# =========================================

Write-Host "🚀 Initializing EMMA environment..." -ForegroundColor Cyan
Write-Host ""

# Ask user for credentials interactively
$GEMINI_KEY = Read-Host "Enter your Gemini API key"
Write-Host ""
$DRIVE_FOLDER_ID = Read-Host "Enter Google Drive Folder ID (Emma_KnowledgeBase)"
Write-Host ""
$JSON_PATH = Read-Host "Enter absolute path to your Service Account JSON key"
Write-Host ""

# Validate JSON file exists
if (-not (Test-Path $JSON_PATH)) {
    Write-Host "❌ Error: Service Account JSON file not found at $JSON_PATH" -ForegroundColor Red
    exit 1
}

# Read JSON content (escape for .env format)
$SERVICE_ACCOUNT_JSON = (Get-Content -Path $JSON_PATH -Raw).Replace("`n", "").Replace("`r", "")

# Generate session secret
$SESSION_SECRET = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})

# Create or overwrite .env.local
$envContent = @"
# ================================
# EMMA WEBSITE DIRECTOR CONFIG
# ================================
# Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
# ================================

# Production Environment
NEXT_PUBLIC_ENV=production
NODE_ENV=production

# Gemini AI Configuration
GEMINI_API_KEY=$GEMINI_KEY

# Google Drive Integration
GOOGLE_SERVICE_ACCOUNT_KEY='$SERVICE_ACCOUNT_JSON'
GDRIVE_KNOWLEDGE_BASE_FOLDER_ID=$DRIVE_FOLDER_ID

# Emma Configuration
EMMA_CACHE_INTERVAL_HOURS=6
EMMA_DRIVE_FOLDER_NAME=Emma_KnowledgeBase
EMMA_LOG_LEVEL=info

# Analytics & Monitoring (Phase VII)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VERCEL_ANALYTICS_ENABLED=true

# Security
SESSION_SECRET=$SESSION_SECRET
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8 -NoNewline

Write-Host "✅ .env.local generated successfully." -ForegroundColor Green
Write-Host "📍 Location: $(Get-Location)\.env.local" -ForegroundColor Gray
Write-Host ""
Write-Host "🔐 Starting local verification..." -ForegroundColor Cyan
Write-Host ""

# Run build verification
try {
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✨ Build verified. Ready for deployment." -ForegroundColor Green
        Write-Host ""
        Write-Host "📊 Next Steps:" -ForegroundColor Yellow
        Write-Host "   1. Update NEXT_PUBLIC_GA_MEASUREMENT_ID with your Google Analytics ID"
        Write-Host "   2. Deploy to production: vercel --prod"
        Write-Host "   3. Monitor at /CommandCenter/Reports/Traffic/"
        Write-Host ""
        Write-Host "🎯 EMMA environment activation complete." -ForegroundColor Cyan
    } else {
        throw "Build failed"
    }
} catch {
    Write-Host ""
    Write-Host "⚠️  Build failed. Please check error messages above." -ForegroundColor Red
    exit 1
}

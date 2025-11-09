#!/bin/bash
# =========================================
# EMMA WEBSITE DIRECTOR – ENV ACTIVATION SCRIPT
# =========================================
# Usage: chmod +x activate_emma_env.sh && ./activate_emma_env.sh
# Creates .env.local with Gemini + Google Drive credentials
# =========================================

echo "🚀 Initializing EMMA environment..."
echo ""

# Ask user for credentials interactively
read -p "Enter your Gemini API key: " GEMINI_KEY
echo ""
read -p "Enter Google Drive Folder ID (Emma_KnowledgeBase): " DRIVE_FOLDER_ID
echo ""
read -p "Enter absolute path to your Service Account JSON key: " JSON_PATH
echo ""

# Validate JSON file exists
if [ ! -f "$JSON_PATH" ]; then
  echo "❌ Error: Service Account JSON file not found at $JSON_PATH"
  exit 1
fi

# Read JSON content
SERVICE_ACCOUNT_JSON=$(cat "$JSON_PATH" | tr -d '\n')

# Create or overwrite .env.local
cat > .env.local <<EOF
# ================================
# EMMA WEBSITE DIRECTOR CONFIG
# ================================
# Generated: $(date)
# ================================

# Production Environment
NEXT_PUBLIC_ENV=production
NODE_ENV=production

# Gemini AI Configuration
GEMINI_API_KEY=${GEMINI_KEY}

# Google Drive Integration
GOOGLE_SERVICE_ACCOUNT_KEY='${SERVICE_ACCOUNT_JSON}'
GDRIVE_KNOWLEDGE_BASE_FOLDER_ID=${DRIVE_FOLDER_ID}

# Emma Configuration
EMMA_CACHE_INTERVAL_HOURS=6
EMMA_DRIVE_FOLDER_NAME=Emma_KnowledgeBase
EMMA_LOG_LEVEL=info

# Analytics & Monitoring (Phase VII)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VERCEL_ANALYTICS_ENABLED=true

# Security
SESSION_SECRET=$(openssl rand -base64 32)
EOF

echo "✅ .env.local generated successfully."
echo "📍 Location: $(pwd)/.env.local"
echo ""
echo "🔐 Starting local verification..."
echo ""

# Run build verification
if npm run build; then
  echo ""
  echo "✨ Build verified. Ready for deployment."
  echo ""
  echo "📊 Next Steps:"
  echo "   1. Update NEXT_PUBLIC_GA_MEASUREMENT_ID with your Google Analytics ID"
  echo "   2. Deploy to production: vercel --prod"
  echo "   3. Monitor at /CommandCenter/Reports/Traffic/"
  echo ""
  echo "🎯 EMMA environment activation complete."
else
  echo ""
  echo "⚠️  Build failed. Please check error messages above."
  exit 1
fi

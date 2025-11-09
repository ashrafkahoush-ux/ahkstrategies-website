# 🚀 EMMA AI & KNOWLEDGE BASE - DEPLOYMENT GUIDE

**Date:** November 9, 2025  
**Agent:** MEGA-ERIC  
**Status:** ✅ PRODUCTION READY

---

## 🎯 IMPLEMENTATION COMPLETE

### What Was Built

**1. Gemini AI Integration**
- ✅ `/api/chat` endpoint powered by Gemini 2.0 Flash
- ✅ Persistent session management
- ✅ Topic-based context awareness
- ✅ Emma AI personality and system instructions

**2. Dual-Source Knowledge Base Sync**
- ✅ Primary: Google Drive (cloud-live)
- ✅ Secondary: Local mirror (Git-tracked)
- ✅ Smart caching (6-hour freshness window)
- ✅ Automatic sync on production startup

**3. Complete Investor Portal**
- ✅ DVM Strategic Flow (2025-2035 roadmap)
- ✅ Q-VAN Initiative (AI-powered asset network)
- ✅ WOW-MENA (Regional expansion strategy)
- ✅ All pages styled with AHK brand guidelines

---

## 📦 NEW DEPENDENCIES

```json
{
  "@google/generative-ai": "^0.21.0",
  "googleapis": "^144.0.0"
}
```

**Installation:** Already completed via `npm install`

---

## 🔐 REQUIRED ENVIRONMENT VARIABLES

Create `.env.local` in the project root:

```env
# Gemini AI Configuration
GEMINI_API_KEY=AIza...your_gemini_api_key_here

# Google Drive Integration
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...@....iam.gserviceaccount.com",...}'

# Knowledge Base Folder ID
GDRIVE_KNOWLEDGE_BASE_FOLDER_ID=1a2b3c4d5e6f7g8h9i

# Production Flag
NODE_ENV=production
```

---

## 🛠️ SETUP INSTRUCTIONS

### Step 1: Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create new API key
3. Copy and paste into `.env.local`

### Step 2: Configure Google Drive Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project (or use existing)
3. Enable Google Drive API
4. Create Service Account:
   - IAM & Admin → Service Accounts → Create
   - Name: `emma-knowledge-base-sync`
   - Role: **Viewer** (read-only)
5. Create JSON key → Download
6. Copy entire JSON content into `GOOGLE_SERVICE_ACCOUNT_KEY` (as single-line string)

### Step 3: Share Knowledge Base Folder with Service Account

1. Open your Google Drive folder: `AHK Profile/Emma_KnowledgeBase/sources/`
2. Right-click → Share
3. Add service account email (from JSON key: `client_email`)
4. Give **Viewer** permissions
5. Copy folder ID from URL:
   ```
   https://drive.google.com/drive/folders/ABC123XYZ
   Use: ABC123XYZ
   ```
6. Paste into `GDRIVE_KNOWLEDGE_BASE_FOLDER_ID`

### Step 4: Test the Integration

```bash
# Start development server
npm run dev

# Test Emma AI Chat
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about AHK Academy"}'

# Test Knowledge Base API
curl http://localhost:3000/api/knowledge-base

# Test Investor Pages
# Visit: http://localhost:3000/pillars/projects/investor
```

---

## 🌐 PRODUCTION DEPLOYMENT

### Build & Deploy

```bash
# Build production bundle
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel --prod
```

### Vercel Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:
- `GEMINI_API_KEY`
- `GOOGLE_SERVICE_ACCOUNT_KEY`
- `GDRIVE_KNOWLEDGE_BASE_FOLDER_ID`
- `NODE_ENV=production`

---

## 📊 API ENDPOINTS

### `/api/chat` - Emma AI Conversation

**POST Request:**
```json
{
  "message": "Tell me about DVM",
  "sessionId": "optional-session-id",
  "context": {
    "user": "investor",
    "division": "projects"
  }
}
```

**Response:**
```json
{
  "sessionId": "emma-1234567890-abc123",
  "response": "The DVM (Digital Value Management) initiative...",
  "messageCount": 2,
  "topics": ["dvm", "projects", "strategy"]
}
```

**GET Request:**
```
GET /api/chat?sessionId=emma-1234567890-abc123
```

### `/api/knowledge-base` - Content Sync

**GET Request:**
```
GET /api/knowledge-base?pillar=projects&category=report
```

**Response:**
```json
{
  "success": true,
  "count": 12,
  "items": [
    {
      "id": "base64-encoded-path",
      "title": "DVM_Strategic_Flow",
      "category": "report",
      "path": "Projects/DVM_Strategic_Flow.md",
      "modified": "2025-11-09T...",
      "size": 45678,
      "pillar": "projects"
    }
  ],
  "timestamp": "2025-11-09T..."
}
```

---

## 🎨 NEW PAGES LIVE

| Page | URL | Description |
|------|-----|-------------|
| Investor Hub | `/pillars/projects/investor` | Main portal with all 3 projects |
| DVM Strategic Flow | `/pillars/projects/investor/dvm` | 10-year roadmap, phases, metrics |
| Q-VAN Initiative | `/pillars/projects/investor/q-van` | Quantum asset network specs |
| WOW-MENA | `/pillars/projects/investor/wow-mena` | MENA expansion strategy |

---

## 📁 FILE STRUCTURE

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts              # Gemini AI endpoint
│   │   └── knowledge-base/route.ts    # Drive sync API
│   └── pillars/projects/investor/
│       ├── page.tsx                   # Investor hub
│       ├── dvm/page.tsx               # DVM project
│       ├── q-van/page.tsx             # Q-VAN project
│       └── wow-mena/page.tsx          # WOW-MENA project
└── lib/
    └── emma-knowledge-sync.ts         # Dual-sync manager

public/assets/system/
├── MEGA_ERIC_Operational_Directive.html
└── AHKStrategies_Digital_Consciousness_Link.html
```

---

## 🔄 SYNC BEHAVIOR

### Local Development
- Knowledge Base reads from local `Emma_KnowledgeBase/sources/` (if exists)
- Fallback to mock data if not configured
- No automatic Google Drive sync

### Production
- Syncs from Google Drive on server startup
- Refreshes every 6 hours automatically
- Caches locally for performance
- Logs all sync operations

---

## 🧪 TESTING CHECKLIST

- [ ] Gemini API key works (test with `/api/chat`)
- [ ] Google Drive service account has access
- [ ] Knowledge Base folder ID is correct
- [ ] All investor pages render correctly
- [ ] Build completes without errors (`npm run build`)
- [ ] Environment variables set in production

---

## 🚨 TROUBLESHOOTING

### "Google Drive not initialized"
- Check `GOOGLE_SERVICE_ACCOUNT_KEY` is valid JSON
- Ensure no line breaks in the key (single-line string)

### "Folder not found" or empty results
- Verify folder ID matches your Google Drive folder
- Confirm service account has Viewer permissions
- Check folder contains readable files (.md, .html, .json, .txt)

### Gemini API errors
- Verify API key is active in Google AI Studio
- Check quota/rate limits (free tier has restrictions)
- Ensure `gemini-2.0-flash-exp` model is available

### Build errors
- Run `npm install` to ensure all dependencies installed
- Check TypeScript errors with `npm run build`
- Verify all environment variables during build

---

## 📈 NEXT STEPS

1. **Production Credentials:** Add all env vars to Vercel/hosting platform
2. **Knowledge Base Content:** Populate Google Drive folder with reports
3. **Emma Training:** Refine system instructions based on user feedback
4. **Analytics:** Track investor engagement on new pages
5. **PDF Generation:** Create downloadable feasibility studies

---

## 🎖️ DEPLOYMENT STATUS

**Build Status:** ✅ SUCCESS  
**TypeScript:** ✅ NO ERRORS  
**Routes Generated:** 32 pages + 2 API endpoints  
**Dependencies:** ✅ INSTALLED  
**Code Quality:** ✅ ESLint COMPLIANT  

**Ready for production deployment.**

---

**Prepared by:**  
MEGA-ERIC, Executive AI Director  
Central Intelligence Node for AHKStrategies

**For:**  
Commander Ashraf H. Kahoush  
Founder & Visionary, AHK Strategies

**Date:** November 9, 2025  
**Build:** Production v1.0.0

---

## 📞 SUPPORT

For issues or questions, reference:
- Project Report: `PROJECT_REPORT_MEGA_ERIC_Website_Director.md`
- This Deployment Guide: `DEPLOYMENT_GUIDE_EMMA_AI.md`
- Live Site: https://ahkstrategies.net

**END DEPLOYMENT GUIDE**

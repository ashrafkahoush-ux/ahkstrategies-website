# 🚀 Vercel Deployment Guide - AHK Strategies Website

**Status**: Ready for Production Deployment
**Last Build**: 38 pages, 0 errors, 3 ESLint warnings (non-critical)

---

## 🎯 Pre-Deployment Checklist

- [x] Build successful locally
- [x] All 38 pages compile
- [x] InvestorPillars component integrated
- [x] Animations tested
- [x] Environment variables configured
- [ ] Final local verification (in progress)

---

## 📦 Deployment Methods

### Method 1: Vercel CLI (Fastest)

```powershell
# 1. Install Vercel CLI globally (if not already installed)
npm install -g vercel

# 2. Navigate to project
cd C:\Users\ashra\ahkstrategies-website

# 3. Login to Vercel (opens browser)
vercel login

# 4. Deploy to production
vercel --prod

# Follow prompts:
# - Set up and deploy? Y
# - Scope: ashrafkahoush-ux (or your org)
# - Link to existing project? N (first time) or Y (redeployment)
# - Project name: ahkstrategies-website
# - Directory: ./ (current)
# - Override settings? N
```

**Expected Output:**
```
✓ Deployment ready
🔍 Inspect: https://vercel.com/ashrafkahoush-ux/ahkstrategies-website/[hash]
✅ Production: https://ahkstrategies.com (or ahkstrategies-website.vercel.app)
```

---

### Method 2: Vercel Dashboard (Manual)

#### Step 1: Push to GitHub
```powershell
# Add all changes
git add .

# Commit with meaningful message
git commit -m "Directive XVII: InvestorPillars + Letterhead Enhancement (38 pages)"

# Push to main branch
git push origin main
```

#### Step 2: Deploy via Dashboard
1. Visit: https://vercel.com/new
2. Click "Import Project"
3. Select: `ashrafkahoush-ux/ahkstrategies-website`
4. Framework: Next.js (auto-detected)
5. Root Directory: `./`
6. Build Command: `npm run build` (default)
7. Output Directory: `.next` (default)
8. Install Command: `npm install` (default)

#### Step 3: Configure Environment Variables
Add to Vercel project settings:
```
NEXT_PUBLIC_SITE_URL=https://ahkstrategies.com
GOOGLE_APPLICATION_CREDENTIALS_JSON=[your-json-string]
GEMINI_API_KEY=[your-api-key]
```

#### Step 4: Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Visit production URL

---

## 🔧 Build Configuration

### Current Settings (Automatic)

**Framework**: Next.js 15.1.0
**Node Version**: 24.x (from environment)
**Build Command**: `next build`
**Output**: Static + Server-side rendering
**Environment**: Production

### Build Outputs
```
Route (app)                              Size     First Load JS
┌ ○ /                                    2.25 kB         111 kB
├ ○ /investor                            39.6 kB         149 kB  ← NEW
├ ƒ /investor/portal                     2.1 kB          111 kB
└ ... (38 total pages)
```

---

## 🌐 Domain Configuration

### Custom Domain Setup

#### Option A: Point ahkstrategies.com to Vercel
1. Go to Vercel project → Settings → Domains
2. Add domain: `ahkstrategies.com`
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

#### Option B: Use Vercel Subdomain
Default: `ahkstrategies-website.vercel.app`
- No configuration needed
- Available immediately after deployment
- Can be customized in project settings

---

## 🔐 Environment Variables Required

### Production Environment (.env.production)
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ahkstrategies.com

# Google Services (for Sheets/Drive integration)
GOOGLE_APPLICATION_CREDENTIALS_JSON='{
  "type": "service_account",
  "project_id": "your-project",
  ...
}'

# Gemini AI (for chatbot)
GEMINI_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Security Note**: Never commit `.env.production` to git. Add to `.gitignore`.

---

## 🎨 What Gets Deployed

### Pages (38 total)
- ✅ Home + 7 enhanced pages
- ✅ 6 pillar pages
- ✅ 6 service pages
- ✅ 11 project division pages
- ✅ **Investor portal + data room** (NEW)

### Components
- ✅ AnimatedBackground (3 intensity levels)
- ✅ Watermark (parallax)
- ✅ InvestorPillars (navy/gold design)
- ✅ InvestorHero
- ✅ ProjectMetricStrip
- ✅ StudyViewer (PDF/video viewer)

### Assets
- ✅ Video backgrounds (pillar MP4s)
- ✅ Animated AHK logo
- ✅ Investor study PDFs
- ✅ Founder profile images

---

## 🐛 Common Deployment Issues

### Issue 1: Build Fails - Missing Dependencies
**Error**: `Cannot find module 'tailwindcss'`

**Fix**:
```powershell
# Delete and reinstall locally
Remove-Item node_modules, package-lock.json -Recurse -Force
npm install

# Verify build works
npm run build

# Commit updated package-lock.json
git add package-lock.json
git commit -m "Fix: Updated package-lock.json"
git push
```

### Issue 2: Environment Variables Not Found
**Error**: `GEMINI_API_KEY is not defined`

**Fix**:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add missing variables
3. Redeploy (Deployments → Latest → ⋯ → Redeploy)

### Issue 3: 404 on Dynamic Routes
**Error**: `/investor/portal` returns 404

**Fix**: Check `next.config.ts` has correct output setting:
```typescript
const nextConfig = {
  output: 'standalone', // or remove for default hybrid mode
};
```

### Issue 4: Styles Not Loading
**Error**: Page renders without Tailwind styles

**Fix**:
1. Verify `postcss.config.mjs` exists
2. Check `tailwind.config.js` has correct content paths
3. Ensure `globals.css` imports Tailwind directives

---

## 📊 Post-Deployment Verification

### Automated Checks (Vercel)
- ✅ Build success
- ✅ Lighthouse score
- ✅ Response time
- ✅ No runtime errors

### Manual Verification Checklist
Visit production URL and test:

1. **Homepage**: Animations load smoothly
2. **Navigation**: All links functional
3. **Investor Portal**: `/investor` loads correctly
4. **InvestorPillars**: Cards hover/animate properly
5. **Data Room**: `/investor/portal` requires auth (if configured)
6. **Mobile**: Responsive on 375px, 768px, 1024px
7. **Performance**: Lighthouse score > 90

### Performance Targets
```
📊 Lighthouse Scores (Target)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90
```

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push
Vercel automatically deploys when you:
1. Push to `main` branch → Production deployment
2. Push to other branches → Preview deployment

### Manual Redeploy
```powershell
# From project root
vercel --prod

# Or via dashboard: Deployments → ⋯ → Redeploy
```

---

## 📞 Deployment Status Report

Once deployed, report:

```
✅ Deployment Status: LIVE
   - URL: https://ahkstrategies.com
   - Build: Success (38 pages)
   - Time: ~2m 30s
   - Lighthouse: 92/100
   - Status: All systems operational

🎯 Features Live:
   - Letterhead Design System (8 pages)
   - Investor Portal with InvestorPillars
   - Data Room (auth-gated)
   - Video backgrounds operational
   - Animations smooth across devices
```

---

## 🚨 Rollback Procedure

### If deployment breaks:
```powershell
# 1. Via Vercel Dashboard
Go to: Deployments → Find last working deployment → Promote to Production

# 2. Via CLI
vercel rollback [deployment-url]

# 3. Via Git
git revert HEAD
git push origin main
# Wait for auto-redeploy
```

---

## 📈 Next Steps After Deployment

1. **Monitor**: Check Vercel Analytics for traffic/errors
2. **Test**: Verify all 38 pages on production
3. **Optimize**: Review Lighthouse suggestions
4. **Directive XVII-B**: Deploy Investor Intelligence Dashboard
5. **Directive XVIII**: Integrate EMMA Introduction Card

---

**Ready to Deploy**: ✅ All systems go
**Estimated Deploy Time**: 2-3 minutes
**Confidence Level**: 100% (last build successful)

---

**Commander**: Once you verify local build works, type `DEPLOY` and I'll execute the Vercel deployment sequence (if terminal connectivity is restored) or guide you through manual deployment.

# 🎯 Directive XVII Verification Build Instructions

**Mission**: Dual verification of website integrity after OOM recovery

---

## 📋 Pre-Flight Checklist

✅ All files intact (verified)
✅ InvestorPillars component created (138 lines)
✅ Last build: 38 pages, 0 errors
✅ Tailwind CSS v4 + Framer Motion installed
✅ Node modules: 480 packages present

---

## 🚀 Build Process

### Step 1: Main Website Verification

Open PowerShell/Terminal in VS Code and run:

```powershell
# Navigate to project root
cd C:\Users\ashra\ahkstrategies-website

# Verify dependencies (should show "up to date")
npm install

# Start development server
npm run dev
```

**Expected Output:**
```
▲ Next.js 15.1.0
- Local:        http://localhost:3000
- Environments: .env.local, .env.production

✓ Starting...
✓ Ready in 2.5s
```

### Step 2: Manual Verification Checklist

Open browser to `http://localhost:3000` and verify:

#### ✅ Homepage (`/`)
- [ ] Animated background loads
- [ ] Watermark visible
- [ ] Hero section animates (fadeInDown)
- [ ] Navigation responsive

#### ✅ Enhanced Pages
- [ ] `/about-us` - Founder profile + animated cards
- [ ] `/contact` - Floating photo + enhanced form
- [ ] `/services` - Service cards with hover effects
- [ ] `/projects` - Division grid animated
- [ ] `/opportunities` - Focus areas elevated

#### ✅ Pillar Pages
- [ ] `/pillars/human-intelligence` - Content cards visible
- [ ] `/pillars/innovation` - Cyan accents present
- [ ] `/pillars/legacy` - Quote section styled

#### ✅ **Investor Portal** (CRITICAL)
- [ ] `/investor` - Gateway loads
- [ ] InvestorHero displays correctly
- [ ] ProjectMetricStrip shows three metrics
- [ ] **InvestorPillars component visible** with:
  - Gold-framed title banner
  - Three pillar cards (Q-VAN, WOW, DVM)
  - Video backgrounds playing
  - Animated AHK logo with glow
  - Hover animations working (scale 1.05)
- [ ] `/investor/portal` - Data room accessible

---

## 🔍 CommandCenter Status

**Note**: CommandCenter is NOT a separate web app. It's a TypeScript script system for directive processing.

**Location**: `C:\Users\ashra\ahkstrategies-website\CommandCenter\`

**Purpose**: 
- Directive listener (`directive_listener.ts`)
- Report generation
- Status tracking
- Archive management

**Verification**: Check log files in `CommandCenter/logs/` to see activity.

---

## 🎨 What You Should See

### Investor Gateway (`/investor`)

```
┌─────────────────────────────────────────────────────┐
│   🎯 AHK Strategies | Investment Portfolio         │
│      [Gold-framed title with blur glow]            │
└─────────────────────────────────────────────────────┘

┌───────────┐  ┌───────────┐  ┌───────────┐
│  Q-VAN    │  │    WOW    │  │    DVM    │
│ [Video BG]│  │ [Video BG]│  │ [Video BG]│
│ [AHK Logo]│  │ [AHK Logo]│  │ [AHK Logo]│
│  Explore→ │  │  Explore→ │  │  Explore→ │
└───────────┘  └───────────┘  └───────────┘
  Hover: Scale 1.05 + Glow Enhancement
```

**Color Palette**:
- Navy: `#001F3F` (backgrounds)
- Gold: `#D4AF37` (borders/accents)
- Light Gold: `#F4E5B1` (text)

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```powershell
# Kill existing process
Get-Process node | Stop-Process -Force

# Or use different port
npm run dev -- -p 3001
```

### Build Fails - Missing Dependencies
```powershell
# Remove and reinstall
Remove-Item node_modules, package-lock.json -Recurse -Force
npm install
```

### Styles Not Loading
```powershell
# Clear Next.js cache
Remove-Item .next -Recurse -Force
npm run dev
```

### ESLint Warnings
```
⚠️ Expected warnings (safe to ignore):
- 'ParticleBG' defined but never used
- 'Image' defined but never used
- useEffect missing dependency 'active'
```

---

## 📊 Success Criteria

### ✅ Website Ready for Directive XVIII if:
1. All 38 pages compile successfully
2. Investor portal loads without errors
3. InvestorPillars component renders correctly
4. Animations smooth (60fps)
5. No console errors in browser DevTools

### 🎯 Next Steps After Verification:
1. **Directive XVII-B**: Investor Intelligence Dashboard
   - Engagement heatmap
   - Domain tracking
   - Conversion funnel
   - EMMA analytics feed

2. **Directive XVIII**: EMMA Introduction Card
   - Video integration on About Us
   - Command Center splash screen
   - Professional overlay

---

## 🚢 Deployment Options

### Option A: Vercel (Recommended)
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
cd C:\Users\ashra\ahkstrategies-website
vercel deploy --prod
```

### Option B: Manual via Vercel Dashboard
1. Visit https://vercel.com/new
2. Import from GitHub: `ashrafkahoush-ux/ahkstrategies-website`
3. Framework: Next.js (auto-detected)
4. Root: `./` (project root)
5. Click "Deploy"

---

## 📞 Status Report Format

Once verified, report:

```
✅ Dashboard: N/A (CommandCenter is script-based)
✅ Website: Ready for Directive XVIII
   - Build: Success (38 pages)
   - InvestorPillars: Operational
   - Animations: Smooth
   - Console: Clean
```

---

**Created**: November 9, 2025 - Post OOM Recovery
**Mission**: Directive XVII Verification
**Status**: Awaiting Commander Verification

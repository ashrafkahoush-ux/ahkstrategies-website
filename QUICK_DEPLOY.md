# ⚡ STAGING DEPLOYMENT - QUICK COMMANDS

**Copy-paste these commands in order** ↓

---

## 1️⃣ Create & Push Staging Branch

```powershell
cd C:\Users\ashra\ahkstrategies-website
git checkout -b staging
git add .
git commit -m "feat: Implement Directives XVII-B & XVIII - Investor Intelligence Dashboard + EMMA Integration"
git push origin staging
```

---

## 2️⃣ Install & Test

```powershell
npm install
npm run dev
```

**Then visit**:
- http://localhost:3000/dashboard/investor-intelligence
- http://localhost:3000/about-us
- http://localhost:3000/dashboard/emma-splash

---

## 3️⃣ Build & Verify

```powershell
npm run build
```

**Expected**: ✓ Compiled successfully (41 pages)

---

## 4️⃣ Monitor Vercel

Visit: https://vercel.com/ashrafkahoush-ux/ahkstrategies-website/deployments

**Look for**: Staging branch preview URL

---

## ✅ That's It!

**All code is ready. Just execute these 4 steps.**

Full docs: `STAGING_DEPLOYMENT_READY.md`

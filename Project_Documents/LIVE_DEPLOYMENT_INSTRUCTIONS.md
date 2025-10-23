# 🚀 AHKStrategies Website - LIVE DEPLOYMENT INSTRUCTIONS
**Version:** v1.0.0  
**Launch Date:** 2025-10-23  
**Git Tag:** v1.0.0  
**Git Commit:** 9c0d11a

---

## ✅ PRE-DEPLOYMENT VERIFICATION COMPLETE

### Build Status
- [x] Production build completed successfully
- [x] 17 static routes generated
- [x] TypeScript compilation passed (no errors)
- [x] No build warnings
- [x] metadataBase configured for https://ahkstrategies.com
- [x] All assets optimized

### Git Repository
- [x] Git tag v1.0.0 created
- [x] All changes committed
- [x] Ready to push to origin
- [ ] **ACTION REQUIRED:** Push to remote repository

---

## 📦 DEPLOYMENT OPTIONS

### Option 1: Vercel (RECOMMENDED - Easiest)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy to Production**
```bash
cd C:\Users\ashra\ahkstrategies-website
vercel --prod
```

**Step 3: Configure Custom Domain**
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `ahkstrategies.com`
3. Add domain: `www.ahkstrategies.com`
4. Follow DNS configuration instructions from Vercel
5. Add these DNS records at your domain registrar:

```
Type    Name    Value                           TTL
CNAME   @       cname.vercel-dns.com            3600
CNAME   www     cname.vercel-dns.com            3600
```

**Step 4: Wait for DNS Propagation**
- Typically takes 5-30 minutes
- Verify with: https://www.whatsmydns.net/#CNAME/ahkstrategies.com

**Step 5: Verify SSL**
- Vercel automatically provisions SSL certificate
- Check: https://ahkstrategies.com (should load with green padlock)

---

### Option 2: Node.js Server Deployment

**Step 1: Push Code to Repository**
```bash
git push origin master
git push origin v1.0.0
```

**Step 2: Server Setup (SSH into your server)**
```bash
# Install Node.js v18+ if not installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Create deployment directory
sudo mkdir -p /var/www/ahkstrategies
sudo chown $USER:$USER /var/www/ahkstrategies
cd /var/www/ahkstrategies

# Clone repository
git clone YOUR_REPOSITORY_URL .
git checkout v1.0.0
```

**Step 3: Install Dependencies and Build**
```bash
npm ci --production
npm run build
```

**Step 4: Start with PM2**
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start application
pm2 start npm --name "ahkstrategies" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the instructions provided by PM2
```

**Step 5: Configure Nginx Reverse Proxy**

Create file: `/etc/nginx/sites-available/ahkstrategies`

```nginx
server {
    listen 80;
    server_name ahkstrategies.com www.ahkstrategies.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ahkstrategies.com www.ahkstrategies.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/ahkstrategies.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ahkstrategies.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Cache public assets
    location /public {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
}
```

Enable site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/ahkstrategies /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Step 6: Install SSL Certificate (Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d ahkstrategies.com -d www.ahkstrategies.com
```

**Step 7: Configure DNS**
Add these records at your domain registrar:
```
Type    Name    Value               TTL
A       @       YOUR_SERVER_IP      3600
A       www     YOUR_SERVER_IP      3600
```

---

## 🧪 POST-DEPLOYMENT TESTING CHECKLIST

### Critical Path Tests (Must Pass Before Going Live)

#### 1. Homepage Verification
- [ ] Visit https://ahkstrategies.com
- [ ] Page loads within 3 seconds
- [ ] Hero video plays automatically
- [ ] Logo displays correctly
- [ ] Navigation bar styled correctly
- [ ] All 6 pillar cards visible
- [ ] Footer displays properly
- [ ] No console errors in DevTools

#### 2. Navigation Tests
- [ ] Click "Home" - Returns to homepage
- [ ] Click "Legacy" - Loads /pillars/legacy
- [ ] Click "People" - Loads /pillars/people
- [ ] Click "Innovation" - Loads /pillars/innovation
- [ ] Click "Vision" - Loads /pillars/vision
- [ ] Click "Human Intelligence" - Loads /pillars/human-intelligence
- [ ] Click "Projects" - Loads /projects
- [ ] Language switcher (EN/AR) visible

#### 3. Pillar Pages (Test each)
Pages to test:
- /pillars/legacy
- /pillars/people
- /pillars/innovation
- /pillars/vision
- /pillars/human-intelligence

For each page:
- [ ] Page loads successfully
- [ ] Hero image/video displays
- [ ] Back button visible at bottom-right
- [ ] Back button has golden gradient
- [ ] Back button text is white and bold
- [ ] Clicking Back returns to previous page
- [ ] Content renders correctly
- [ ] No broken images

#### 4. Projects & Division Pages
- [ ] /projects page loads with 6 division cards
- [ ] /projects/divisions/automotive loads
- [ ] /projects/divisions/digital loads
- [ ] /projects/divisions/mena-export loads
- [ ] /projects/divisions/renewable loads
- [ ] /projects/divisions/research loads
- [ ] /projects/divisions/trade loads

#### 5. SEO & Metadata Verification
Open browser DevTools (F12) → Elements → View page source:

**Homepage (/):**
- [ ] `<title>` contains "AHKStrategies - Where Vision Meets Human Intelligence"
- [ ] `<meta name="description">` present
- [ ] `<meta property="og:title">` present
- [ ] `<meta property="og:description">` present
- [ ] `<meta property="og:image">` points to share-default.png
- [ ] `<meta name="twitter:card">` present

**All Sub-pages:**
- [ ] Each page has unique title
- [ ] Each page has meta description
- [ ] OpenGraph tags present
- [ ] Twitter Card tags present

#### 6. SEO Files
- [ ] https://ahkstrategies.com/robots.txt loads correctly
- [ ] Contains: `User-agent: * Allow: /`
- [ ] Contains: `Sitemap: https://ahkstrategies.com/sitemap.xml`
- [ ] https://ahkstrategies.com/sitemap.xml loads
- [ ] Sitemap contains all 13 routes
- [ ] XML format is valid

#### 7. Favicon & Icons
- [ ] Favicon appears in browser tab
- [ ] Favicon appears in bookmarks
- [ ] Icon displays in browser history
- [ ] Apple touch icon works on iOS (if testing on mobile)

#### 8. Lighthouse Audit (Chrome DevTools)

Open Chrome Incognito mode:
1. Visit https://ahkstrategies.com
2. F12 → Lighthouse tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"

**Target Scores:**
- [ ] Performance: ≥ 90 (Record actual: _______)
- [ ] Accessibility: ≥ 90 (Record actual: _______)
- [ ] Best Practices: ≥ 90 (Record actual: _______)
- [ ] SEO: = 100 (Record actual: _______)

#### 9. Security Tests
- [ ] Site loads with HTTPS (green padlock)
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate valid (click padlock → Certificate valid)
- [ ] No mixed content warnings
- [ ] Test SSL: https://www.ssllabs.com/ssltest/analyze.html?d=ahkstrategies.com
  - Target: A or A+ grade

#### 10. Performance Tests
Open DevTools → Network tab:
- [ ] Homepage loads < 3 seconds (first visit)
- [ ] Images load progressively
- [ ] Videos stream properly
- [ ] Second page visit faster (cached assets)

#### 11. Mobile Responsiveness
Test on mobile device or use DevTools → Toggle Device Toolbar (Ctrl+Shift+M):
- [ ] Mobile layout renders correctly (375px width)
- [ ] Tablet layout works (768px width)
- [ ] Navigation accessible on mobile
- [ ] Buttons touch-friendly
- [ ] Text readable without zooming
- [ ] Back button accessible (not obscured)

#### 12. Cross-Browser Testing
- [ ] Chrome (latest): All pages work
- [ ] Firefox (latest): All pages work
- [ ] Safari (latest): All pages work
- [ ] Edge (latest): All pages work

---

## 📊 EXPECTED RESULTS

### Build Metrics
- Total Routes: 17
- Build Time: ~10 seconds
- Static Pages: 100%
- Bundle Size: Optimized

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 300ms

### SEO Checklist
- ✓ All pages have unique titles
- ✓ All pages have meta descriptions
- ✓ OpenGraph tags on all pages
- ✓ Twitter Card tags on all pages
- ✓ Sitemap.xml with 13 routes
- ✓ robots.txt configured
- ✓ Canonical URLs set
- ✓ Semantic HTML structure

---

## ⚠️ TROUBLESHOOTING

### Issue: Page not loading (404)
**Solution:**
- Check DNS propagation: https://www.whatsmydns.net
- Verify server is running: `pm2 status` or check Vercel dashboard
- Check Nginx configuration: `sudo nginx -t`

### Issue: SSL certificate error
**Solution:**
- Verify certificate installed: `sudo certbot certificates`
- Renew if expired: `sudo certbot renew`
- Check Nginx SSL paths match certificate location

### Issue: Slow page loads
**Solution:**
- Check server resources: `htop`
- Verify caching headers present
- Enable CDN if available
- Check image optimization (all should be < 500KB)

### Issue: Images not displaying
**Solution:**
- Verify public/ folder uploaded
- Check file permissions: `chmod 644 public/**/*`
- Clear browser cache
- Check Network tab for 404s

### Issue: Video not playing
**Solution:**
- Check video file present in public/assets/videos/
- Verify autoplay policy in browser
- Check console for errors
- Test in different browser

---

## 🎯 GO-LIVE CHECKLIST

Before announcing launch:
- [ ] All critical path tests passed
- [ ] Lighthouse scores meet targets
- [ ] SSL certificate valid
- [ ] DNS fully propagated
- [ ] No console errors
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Analytics tracking installed (if applicable)
- [ ] Search Console submitted sitemap
- [ ] Backup verified and stored safely

---

## 📝 POST-LAUNCH TASKS

Within 24 hours:
- [ ] Monitor server logs for errors
- [ ] Check analytics for traffic
- [ ] Verify all pages crawlable by search engines
- [ ] Test contact forms (if any)
- [ ] Monitor uptime
- [ ] Check social media share previews

Within 1 week:
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals
- [ ] Review error logs
- [ ] Check backups running automatically

---

## 🆘 ROLLBACK PROCEDURE

If critical issues arise:

**For Vercel:**
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**For Node.js Server:**
```bash
# Stop current version
pm2 stop ahkstrategies

# Restore from backup
cd /var/www
sudo rm -rf ahkstrategies
sudo unzip /path/to/Backup_LiveLaunch_2025-10-23.zip -d ahkstrategies
cd ahkstrategies

# Reinstall and restart
npm ci --production
npm run build
pm2 start npm --name "ahkstrategies" -- start
```

---

## ✅ DEPLOYMENT APPROVAL

**Technical Lead Approval:** _______________  Date: _______  
**Stakeholder Approval:** _______________  Date: _______  
**Final Go-Live Authorization:** _______________  Date: _______

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-23  
**Status:** READY FOR PRODUCTION DEPLOYMENT

# AHKStrategies Website - Production Deployment Guide v1.0.0
**Generated:** 2025-10-23  
**Release Tag:** v1.0.0  
**Build Status:** ✅ Production build completed successfully

---

## 🚀 Deployment Checklist

### 1. Pre-Deployment Requirements

#### Environment Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ahkstrategies.com
```

#### Server Requirements
- Node.js: v18.x or higher
- npm: v9.x or higher
- Memory: Minimum 2GB RAM
- Disk: Minimum 5GB available space

#### Domain & SSL
- ✅ Domain: ahkstrategies.com
- ☐ SSL Certificate installed and valid
- ☐ DNS A Record pointing to server IP
- ☐ DNS propagation completed (check with `nslookup ahkstrategies.com`)
- ☐ HTTPS redirect configured
- ☐ www to non-www redirect (or vice versa) configured

---

## 📦 Deployment Options

### Option A: Node.js Server Deployment (Recommended)

**Step 1: Upload Files to Server**
```bash
# On your server, create deployment directory
mkdir -p /var/www/ahkstrategies
cd /var/www/ahkstrategies

# Upload files (use SCP, SFTP, or Git)
git clone https://github.com/YOUR_USERNAME/ahkstrategies-website.git .
git checkout v1.0.0
```

**Step 2: Install Dependencies**
```bash
# Install production dependencies only
npm ci --production

# Or use npm install if package-lock.json is not present
npm install --production
```

**Step 3: Build for Production**
```bash
# Build the application
npm run build
```

**Step 4: Start Production Server**
```bash
# Option 1: Using npm start
npm run start

# Option 2: Using PM2 (recommended for process management)
npm install -g pm2
pm2 start npm --name "ahkstrategies" -- start
pm2 save
pm2 startup  # Follow instructions to enable on boot
```

**Step 5: Configure Reverse Proxy (Nginx)**
```nginx
server {
    listen 80;
    server_name ahkstrategies.com www.ahkstrategies.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ahkstrategies.com www.ahkstrategies.com;

    ssl_certificate /etc/letsencrypt/live/ahkstrategies.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ahkstrategies.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

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
        proxy_cache_valid 60m;
    }

    location /public {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
    }
}
```

---

### Option B: Static Export Deployment (Vercel, Netlify, etc.)

**Note:** Current build uses dynamic features. For static export:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

2. Run build:
```bash
npm run build
```

3. Upload `out/` directory to hosting provider

---

### Option C: Vercel Deployment (Easiest)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
vercel --prod
```

**Step 3: Configure Custom Domain**
- Go to Vercel Dashboard > Project Settings > Domains
- Add `ahkstrategies.com`
- Follow DNS configuration instructions

---

## 🔒 Security Checklist

- ☐ SSL certificate installed and auto-renewal configured
- ☐ Security headers configured:
  ```nginx
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "no-referrer-when-downgrade" always;
  ```
- ☐ Firewall rules configured (allow 80, 443, SSH only)
- ☐ Regular security updates scheduled
- ☐ Backup strategy implemented

---

## 📊 Post-Deployment Verification

### Functional Tests
1. ☐ Homepage loads correctly at `https://ahkstrategies.com`
2. ☐ Hero video plays automatically
3. ☐ Navigation bar displays correctly with all links
4. ☐ Language switcher (EN/AR) works
5. ☐ All 6 pillar cards clickable and navigate correctly:
   - ☐ Legacy & Continuity
   - ☐ People & Culture
   - ☐ Innovation & Design Thinking
   - ☐ Vision & Foresight
   - ☐ Human Intelligence
   - ☐ Strategic Projects
6. ☐ Projects page loads with all 6 division cards
7. ☐ All division pages accessible:
   - ☐ Automotive
   - ☐ Digital Solutions
   - ☐ MENA Export
   - ☐ Renewable Energy
   - ☐ Research & Development
   - ☐ International Trade
8. ☐ Back buttons work on all sub-pages (bottom-right, golden gradient)
9. ☐ Footer displays correctly with all information
10. ☐ Page transitions smooth and functional

### SEO & Metadata Tests
11. ☐ robots.txt accessible at `/robots.txt`
12. ☐ sitemap.xml accessible at `/sitemap.xml`
13. ☐ Favicon displays correctly in browser tab
14. ☐ Meta tags present (view page source):
    - ☐ title tag
    - ☐ meta description
    - ☐ og:title, og:description, og:image
    - ☐ twitter:card, twitter:title, twitter:image
15. ☐ Share on social media displays correct preview

### Performance Tests
16. ☐ Run Lighthouse audit (Chrome DevTools):
    ```
    Target Scores:
    - Performance: >90
    - Accessibility: >90
    - Best Practices: >90
    - SEO: 100
    ```
17. ☐ Images load optimized (check Network tab)
18. ☐ Page load time <3 seconds (first load)
19. ☐ Page load time <1 second (cached)
20. ☐ Mobile responsiveness verified on devices

### Technical Tests
21. ☐ SSL certificate valid (check with SSL Labs)
22. ☐ HTTPS redirect working
23. ☐ Console logs clean (no JavaScript errors)
24. ☐ Network tab shows no 404 errors
25. ☐ Video files loading properly
26. ☐ All images displaying correctly

---

## 🌐 DNS Configuration

### Required DNS Records
```
Type    Name    Value                   TTL
A       @       YOUR_SERVER_IP          3600
A       www     YOUR_SERVER_IP          3600
CNAME   www     ahkstrategies.com       3600
```

### Verify DNS Propagation
```bash
# Check A record
nslookup ahkstrategies.com

# Check from multiple locations
https://www.whatsmydns.net/#A/ahkstrategies.com
```

---

## 📈 Monitoring & Maintenance

### Log Monitoring
```bash
# PM2 logs
pm2 logs ahkstrategies

# Nginx access logs
tail -f /var/log/nginx/access.log

# Nginx error logs
tail -f /var/log/nginx/error.log
```

### Performance Monitoring Tools
- Google Analytics setup
- Google Search Console setup
- Uptime monitoring (UptimeRobot, Pingdom)

### Regular Maintenance
- Weekly: Check logs for errors
- Monthly: Review analytics and performance
- Quarterly: Update dependencies
- Annually: Renew SSL certificate (if not auto-renewal)

---

## 🔄 Rollback Procedure

If issues occur:

```bash
# Stop current deployment
pm2 stop ahkstrategies

# Restore backup
cd /var/www
rm -rf ahkstrategies
unzip Backup_LiveDeployment_2025-10-23.zip

# Restart
cd ahkstrategies
npm install --production
npm run build
pm2 start npm --name "ahkstrategies" -- start
```

---

## 📞 Support Contacts

- **Technical Issues:** [Your email]
- **Domain/DNS:** [Domain registrar]
- **Hosting:** [Hosting provider]
- **SSL Certificate:** Let's Encrypt / [Your provider]

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2025-10-23 | Initial production launch |

---

**Deployment prepared by:** GitHub Copilot  
**Last updated:** 2025-10-23

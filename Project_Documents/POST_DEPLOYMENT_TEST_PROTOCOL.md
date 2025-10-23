# AHKStrategies Website - Post-Deployment Test Protocol
**Version:** v1.0.0  
**Test Date:** _________________  
**Tester:** _________________  
**Environment:** Production (https://ahkstrategies.com)

---

## 🎯 Critical Path Testing (MUST PASS)

### Homepage (/)
- [ ] Page loads within 3 seconds
- [ ] Hero video plays automatically
- [ ] AHKStrategies logo displays in navbar
- [ ] EN/AR language switcher visible
- [ ] All 6 pillar cards visible and properly styled
- [ ] Pillar cards have hover effects
- [ ] Clicking each card navigates to correct page
- [ ] Footer displays with all content
- [ ] No console errors in browser DevTools

### Navigation
- [ ] Home link works from all pages
- [ ] Legacy link navigates to `/pillars/legacy`
- [ ] People link navigates to `/pillars/people`
- [ ] Innovation link navigates to `/pillars/innovation`
- [ ] Vision link navigates to `/pillars/vision`
- [ ] Human Intelligence link navigates to `/pillars/human-intelligence`
- [ ] Projects link navigates to `/projects`

### Pillar Pages (All 5 + Projects)
Test each page: Legacy, People, Innovation, Vision, Human Intelligence, Projects

**For each page:**
- [ ] Page loads successfully (no 404)
- [ ] Hero image/video displays correctly
- [ ] Back button visible at bottom-right
- [ ] Back button has golden gradient background
- [ ] Back button text is white and bold
- [ ] Clicking Back returns to previous page
- [ ] Content sections render properly
- [ ] Images load and display correctly
- [ ] Text is readable and properly formatted
- [ ] Page scrolls smoothly
- [ ] Back button doesn't cover content when scrolling

### Projects Division Pages (All 6)
Test each page: Automotive, Digital, MENA Export, Renewable, Research, Trade

**For each division:**
- [ ] Page loads from Projects page grid
- [ ] Hero image displays correctly
- [ ] Overview section renders
- [ ] Key Focus Areas listed
- [ ] Back button at bottom-right works
- [ ] Returns to Projects page when clicking Back

---

## 🔍 SEO & Metadata Testing

### Meta Tags (Check each page)
View page source (Ctrl+U) and verify:

**Homepage:**
- [ ] `<title>` contains "AHKStrategies - Where Vision Meets Human Intelligence"
- [ ] `<meta name="description">` present with site description
- [ ] `<meta property="og:title">` present
- [ ] `<meta property="og:description">` present
- [ ] `<meta property="og:image">` present with `/assets/images/share-default.png`
- [ ] `<meta name="twitter:card">` present

**All Sub-pages:**
- [ ] Each page has unique `<title>` tag
- [ ] Each page has unique `<meta name="description">`
- [ ] OpenGraph tags present on all pages
- [ ] Twitter Card tags present on all pages

### SEO Files
- [ ] `/robots.txt` accessible and correct:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://ahkstrategies.com/sitemap.xml
  ```
- [ ] `/sitemap.xml` accessible
- [ ] Sitemap contains all 13 routes
- [ ] Sitemap has valid XML format

### Favicon & Icons
- [ ] Favicon displays in browser tab
- [ ] Favicon displays in bookmarks
- [ ] Apple touch icon works on iOS devices
- [ ] Favicon visible in search results preview

---

## 📱 Responsive Design Testing

### Desktop (1920x1080)
- [ ] Homepage layout correct
- [ ] Navigation bar full width
- [ ] Pillar cards grid (3 columns)
- [ ] Images scale properly
- [ ] Text readable at all sizes
- [ ] Footer layout correct

### Tablet (768x1024)
- [ ] Layout adjusts correctly
- [ ] Navigation remains functional
- [ ] Pillar cards resize (2 columns)
- [ ] Touch targets adequate size
- [ ] Back button accessible

### Mobile (375x667)
- [ ] Mobile-responsive layout
- [ ] Hamburger menu (if applicable)
- [ ] Pillar cards stack vertically
- [ ] Text remains readable
- [ ] Back button not obscured
- [ ] All interactive elements work with touch

---

## ⚡ Performance Testing

### Lighthouse Audit
Run in Chrome DevTools (Incognito mode):

**Target Scores:**
- [ ] Performance: ≥ 90 (Record: _____)
- [ ] Accessibility: ≥ 90 (Record: _____)
- [ ] Best Practices: ≥ 90 (Record: _____)
- [ ] SEO: = 100 (Record: _____)

### Page Load Times (Network throttling: Fast 3G)
- [ ] Homepage: < 3s (Record: _____)
- [ ] Pillar pages: < 3s (Record: _____)
- [ ] Projects page: < 3s (Record: _____)
- [ ] Division pages: < 3s (Record: _____)

### Asset Optimization
Check Network tab (DevTools):
- [ ] Images are compressed (< 500KB each)
- [ ] Videos load progressively
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Total page weight < 5MB per page

### Caching
- [ ] Static assets cached (check Response Headers)
- [ ] Cache-Control headers present
- [ ] Second page visit loads faster (from cache)

---

## 🔒 Security Testing

### SSL/HTTPS
- [ ] Site loads with HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate valid (check with https://www.ssllabs.com/ssltest/)
- [ ] No mixed content warnings
- [ ] Secure cookies (if any)

### Security Headers (Check Response Headers)
- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy` present

### External Resource Loading
- [ ] All external resources load over HTTPS
- [ ] No console security warnings
- [ ] CSP headers (if configured)

---

## 🌐 Cross-Browser Testing

### Chrome (Latest)
- [ ] Homepage renders correctly
- [ ] All pages functional
- [ ] Animations smooth
- [ ] Videos play correctly

### Firefox (Latest)
- [ ] Homepage renders correctly
- [ ] All pages functional
- [ ] Animations smooth
- [ ] Videos play correctly

### Safari (Latest)
- [ ] Homepage renders correctly
- [ ] All pages functional
- [ ] Animations smooth
- [ ] Videos play correctly

### Edge (Latest)
- [ ] Homepage renders correctly
- [ ] All pages functional
- [ ] Animations smooth
- [ ] Videos play correctly

---

## 🧪 Functionality Testing

### Video Playback
- [ ] Hero video autoplays on homepage
- [ ] Video muted by default
- [ ] Video loops continuously
- [ ] Video controls hidden (if design spec)
- [ ] Video loads on mobile devices

### Interactive Elements
- [ ] All buttons clickable
- [ ] Hover states work on desktop
- [ ] Active states visible
- [ ] Focus states accessible (Tab key)
- [ ] No broken links (404s)

### Forms (if any)
- [ ] Contact forms submit successfully
- [ ] Validation works correctly
- [ ] Error messages display properly
- [ ] Success messages display
- [ ] Email notifications sent

---

## 📊 Analytics & Tracking

### Google Analytics (if configured)
- [ ] Tracking code present in page source
- [ ] Real-time tracking shows visitors
- [ ] Page views recorded correctly
- [ ] Events tracked (if any)

### Google Search Console
- [ ] Site submitted to Search Console
- [ ] Sitemap submitted successfully
- [ ] No crawl errors
- [ ] No security issues reported

---

## 🔄 Error Handling

### 404 Page
- [ ] Custom 404 page displays
- [ ] Navigation still works on 404
- [ ] Link back to homepage present

### Error Boundaries
- [ ] JavaScript errors don't crash entire site
- [ ] Fallback UI displays if component fails

---

## 📝 Content Verification

### Text Content
- [ ] All text displays correctly (no Lorem Ipsum)
- [ ] No spelling errors in headers
- [ ] Grammar correct in descriptions
- [ ] Arabic text displays correctly (if applicable)
- [ ] All links have descriptive text

### Images
- [ ] All images display (no broken images)
- [ ] Alt text present on all images
- [ ] Images properly sized (not distorted)
- [ ] Optimized images load quickly

### Videos
- [ ] All videos play correctly
- [ ] Video quality acceptable
- [ ] Videos don't slow page load significantly

---

## ✅ Final Checks

### Pre-Launch
- [ ] All tests above passed
- [ ] No critical bugs found
- [ ] Performance meets targets
- [ ] SEO elements in place
- [ ] Security headers configured
- [ ] Backup created and verified
- [ ] Rollback plan tested

### Launch Approval
- [ ] Client approval received
- [ ] Stakeholder sign-off
- [ ] Launch date/time confirmed
- [ ] Support team notified
- [ ] Monitoring tools active

### Post-Launch (within 24 hours)
- [ ] Site loading correctly
- [ ] Analytics tracking visitors
- [ ] No server errors in logs
- [ ] Email notifications working
- [ ] DNS fully propagated
- [ ] SSL certificate valid
- [ ] Monitoring alerts configured

---

## 🐛 Issues Log

| Issue # | Page | Severity | Description | Status | Fix |
|---------|------|----------|-------------|--------|-----|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

**Severity Levels:**
- **Critical:** Prevents deployment
- **High:** Must fix before launch
- **Medium:** Should fix before launch
- **Low:** Can fix post-launch

---

## 📋 Sign-Off

**Tester Name:** _______________________  
**Signature:** _______________________  
**Date:** _______________________  

**Project Manager:** _______________________  
**Signature:** _______________________  
**Date:** _______________________  

**Client Approval:** _______________________  
**Signature:** _______________________  
**Date:** _______________________  

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-23

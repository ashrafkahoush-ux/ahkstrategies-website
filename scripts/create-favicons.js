const sharp = require('sharp');

// Create a simple favicon with AHK initials
const faviconSvg = Buffer.from(`
<svg width="32" height="32" viewBox="0 0 32 32">
  <rect fill="#020617" width="32" height="32" rx="4"/>
  <text x="16" y="23" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#facc15" text-anchor="middle">
    AHK
  </text>
</svg>
`);

// Create touch icon (180x180)
const touchIconSvg = Buffer.from(`
<svg width="180" height="180" viewBox="0 0 180 180">
  <rect fill="#020617" width="180" height="180" rx="20"/>
  <text x="90" y="120" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#facc15" text-anchor="middle">
    AHK
  </text>
  <rect x="30" y="140" width="120" height="4" fill="#facc15" rx="2"/>
</svg>
`);

// Generate favicon.ico (32x32)
sharp(faviconSvg)
  .resize(32, 32)
  .png()
  .toFile('public/favicon.ico')
  .then(() => console.log('✓ favicon.ico created (32x32)'))
  .catch(console.error);

// Generate apple-touch-icon.png (180x180)
sharp(touchIconSvg)
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png')
  .then(() => console.log('✓ apple-touch-icon.png created (180x180)'))
  .catch(console.error);

// Generate additional sizes
sharp(touchIconSvg)
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32x32.png')
  .then(() => console.log('✓ favicon-32x32.png created'))
  .catch(console.error);

sharp(touchIconSvg)
  .resize(16, 16)
  .png()
  .toFile('public/favicon-16x16.png')
  .then(() => console.log('✓ favicon-16x16.png created'))
  .catch(console.error);

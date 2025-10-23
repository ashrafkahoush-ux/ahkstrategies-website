const sharp = require('sharp');

const svg = Buffer.from(`
<svg width="1200" height="630">
  <rect fill="#020617" width="1200" height="630"/>
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#ffffff" text-anchor="middle">
    AHKStrategies
  </text>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="32" fill="#cbd5e1" text-anchor="middle">
    Where Vision Meets Human Intelligence
  </text>
  <rect x="500" y="420" width="200" height="4" fill="#facc15"/>
</svg>
`);

sharp(svg)
  .resize(1200, 630)
  .png()
  .toFile('public/assets/images/share-default.png')
  .then(() => console.log('✓ Share image created: share-default.png'))
  .catch(console.error);

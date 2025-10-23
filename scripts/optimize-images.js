const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');
const targetSize = 300 * 1024; // 300KB target

// Images over 500KB that need optimization
const imagesToOptimize = [
  'ai_images/pillars/human-intelligence.png',
  'ai_images/pillars/innovation.png',
  'ai_images/pillars/legacy.png',
  'ai_images/pillars/people.png',
  'ai_images/pillars/projects.png',
  'ai_images/pillars/vision.png',
  'images/divisions/automotive.jpg',
  'images/divisions/MENA region export business.png',
  'images/divisions/opening image.png',
  'images/divisions/renewable.jpg',
  'images/divisions/trade.jpg',
  'images/founder/ashraf kahoush photo.png',
];

async function optimizeImage(relativePath) {
  const inputPath = path.join(assetsDir, relativePath);
  const ext = path.extname(relativePath);
  const isPng = ext.toLowerCase() === '.png';
  
  console.log(`\nOptimizing: ${relativePath}`);
  
  const stats = fs.statSync(inputPath);
  const originalSize = stats.size;
  console.log(`Original size: ${(originalSize / 1024).toFixed(2)} KB`);
  
  // Create backup
  const backupPath = inputPath.replace(ext, `.backup${ext}`);
  fs.copyFileSync(inputPath, backupPath);
  
  try {
    let quality = 85;
    let outputSize = originalSize;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (outputSize > targetSize && attempts < maxAttempts && quality > 50) {
      const tempPath = inputPath + '.tmp';
      
      const sharpInstance = sharp(inputPath)
        .resize(null, null, {
          withoutEnlargement: true,
        });
      
      if (isPng) {
        await sharpInstance
          .png({ quality, compressionLevel: 9, adaptiveFiltering: true })
          .toFile(tempPath);
      } else {
        await sharpInstance
          .jpeg({ quality, mozjpeg: true })
          .toFile(tempPath);
      }
      
      const tempStats = fs.statSync(tempPath);
      outputSize = tempStats.size;
      
      if (outputSize <= targetSize) {
        fs.renameSync(tempPath, inputPath);
        console.log(`✓ Optimized to ${(outputSize / 1024).toFixed(2)} KB (quality: ${quality})`);
        console.log(`  Saved: ${((originalSize - outputSize) / 1024).toFixed(2)} KB (${((1 - outputSize/originalSize) * 100).toFixed(1)}%)`);
        break;
      }
      
      fs.unlinkSync(tempPath);
      quality -= 5;
      attempts++;
    }
    
    if (outputSize > targetSize) {
      console.log(`⚠ Could not reach target size. Final: ${(outputSize / 1024).toFixed(2)} KB`);
    }
    
  } catch (error) {
    console.error(`✗ Error optimizing ${relativePath}:`, error.message);
    // Restore from backup
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, inputPath);
    }
  }
}

async function main() {
  console.log('========================================');
  console.log('IMAGE OPTIMIZATION SCRIPT');
  console.log('Target: <300KB per image');
  console.log('========================================');
  
  for (const imagePath of imagesToOptimize) {
    const fullPath = path.join(assetsDir, imagePath);
    if (fs.existsSync(fullPath)) {
      await optimizeImage(imagePath);
    } else {
      console.log(`⚠ File not found: ${imagePath}`);
    }
  }
  
  console.log('\n========================================');
  console.log('✓ OPTIMIZATION COMPLETE');
  console.log('========================================');
  console.log('Backup files created with .backup extension');
  console.log('Review results and delete backups if satisfied');
}

main().catch(console.error);

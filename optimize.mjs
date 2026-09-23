import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

async function processImages() {
  for (const file of files) {
    if ((file.endsWith('.PNG') || file.endsWith('.png') || file.endsWith('.jpg')) && file !== 'og-image.png') {
      const inputPath = path.join(publicDir, file);
      const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(publicDir, outputName);
      
      console.log(`Converting ${file} to ${outputName}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      // Delete old file
      fs.unlinkSync(inputPath);
    }
  }
  console.log('Images optimized successfully.');
}

processImages().catch(console.error);

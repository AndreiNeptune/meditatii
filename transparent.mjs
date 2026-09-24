import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

async function processImages() {
  for (const file of files) {
    if (file.endsWith('.webp') && file !== 'og-image.webp') {
      const inputPath = path.join(publicDir, file);
      
      console.log(`Processing ${file} for transparency...`);
      try {
        // Load the image
        const img = sharp(inputPath);
        const metadata = await img.metadata();
        let mask;
        const stats = await img.stats();
        
        if (metadata.hasAlpha || stats.channels.length === 4) {
          // Image has transparent lines and white background.
          // Extract the alpha channel (where background is opaque 255, lines are transparent 0).
          // Negate it so background becomes transparent 0, and lines become opaque 255.
          mask = await img.clone().extractChannel('alpha').negate().toBuffer();
        } else {
          // Original logic for black lines on white background
          mask = await img.clone()
            .grayscale()
            .negate()
            .linear(2.0, -100) 
            .toBuffer();
        }

        const outDir = path.join(publicDir, 't');
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
        const outPath = path.join(outDir, file);

        await sharp({
          create: {
            width: metadata.width,
            height: metadata.height,
            channels: 3,
            background: { r: 255, g: 255, b: 255 }
          }
        })
        .joinChannel(mask)
        .webp({ quality: 90 })
        .toFile(outPath);

      } catch (e) {
        console.error(`Error processing ${file}:`, e);
      }
    }
  }
  console.log('Images converted to transparent white lines successfully.');
}

processImages().catch(console.error);

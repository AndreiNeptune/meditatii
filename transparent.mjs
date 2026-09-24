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
        
        // Convert to grayscale and invert to get a mask where drawings are white (255) and background is black (0)
        // Since original images are black on white, negate makes them white on black.
        // Wait, some might already be white on black? No, all the drawings were black on white, and inverted in CSS.
        const mask = await img.clone()
          .grayscale()
          .negate()
          // Increase contrast so the background becomes truly black (0) and lines become truly white (255)
          .linear(2.0, -100) 
          .toBuffer();

        // Now create a pure white image of the same size
        const metadata = await img.metadata();
        
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
        // Join the mask as the alpha channel
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

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
        let isSolidBackground = true;

        if (metadata.hasAlpha || stats.channels.length === 4) {
          // Check if the alpha channel is actually used for a transparent background
          // If the image is mostly opaque (mean alpha > 240), it's just a solid image saved with an alpha channel.
          const alphaMean = stats.channels[3].mean;
          if (alphaMean < 240) {
            isSolidBackground = false;
          }
        }

        if (!isSolidBackground) {
          // Image has a true transparent background.
          // Extract the alpha channel (where background is transparent 0, lines are opaque 255).
          // Wait! If the original image had black lines on a transparent background, alpha is 255 at the lines and 0 at the background.
          // We can just use the alpha channel directly!
          mask = await img.clone().extractChannel('alpha').toBuffer();
        } else {
          // Original logic for black lines on white background (solid)
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

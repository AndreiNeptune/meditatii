import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const files = [
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Centrul de greutate al liniilor (curbelor) plane omogene.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Centre de masă pentru plăci compuse.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Centre de masă pentru plăci plane decupate.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Centre de greutate pentru sisteme de bare .png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Centrul de greutate al suprafețelor plane omogene.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\echilibrul solidului rigid cu forte compuse.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\echilibrul solidului rigid.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\metoda izolarii corpurilor.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Reducerea forțelor concurente și oarecare în 3D.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Sisteme 3D de forțe.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\statica sistemelor.png",
  "c:\\Users\\Andrei\\Desktop\\sites\\site meditatii\\public\\Torsorul de reducere al unui sistem de forțe.png"
];

async function processImages() {
  for (const inputPath of files) {
    if (!fs.existsSync(inputPath)) {
      console.error(`File not found: ${inputPath}`);
      continue;
    }
    
    const file = path.basename(inputPath);
    // Change extension to .webp for output
    const outFile = file.replace(/\.png$/, '.webp');
    const outDir = path.join(process.cwd(), 'public', 't');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const outPath = path.join(outDir, outFile);

    console.log(`Processing ${file} to ${outFile}...`);
    try {
      const img = sharp(inputPath);
      const metadata = await img.metadata();
      const cropMargin = 15;
      const extractOptions = {
        left: cropMargin,
        top: cropMargin,
        width: metadata.width - 2 * cropMargin,
        height: metadata.height - 2 * cropMargin
      };

      const imgCropped = img.clone().extract(extractOptions);
      const croppedMetadata = { width: extractOptions.width, height: extractOptions.height };
      
      let mask;
      const stats = await imgCropped.stats();
      let isSolidBackground = true;

      if (metadata.hasAlpha || stats.channels.length === 4) {
        const alphaMean = stats.channels[3].mean;
        if (alphaMean < 240) {
          isSolidBackground = false;
        }
      }

      if (!isSolidBackground) {
        mask = await imgCropped.clone().extractChannel('alpha').toBuffer();
      } else {
        mask = await imgCropped.clone()
          .grayscale()
          .negate()
          .linear(2.0, -100) 
          .toBuffer();
      }

      await sharp({
        create: {
          width: croppedMetadata.width,
          height: croppedMetadata.height,
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
  console.log('Finished processing PNGs.');
}

processImages().catch(console.error);

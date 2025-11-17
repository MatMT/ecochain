const sharp = require('sharp');
const fs = require('fs');

const sizes = [192, 512];

async function generateIcons() {
  const svgBuffer = fs.readFileSync('./public/icon.svg');
  
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`./public/icon-${size}x${size}.png`);
    
    console.log(`✅ Generated icon-${size}x${size}.png`);
  }
  
  // También crear favicon
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon-32x32.png');
  
  console.log('✅ Generated favicon-32x32.png');
  
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile('./public/favicon-16x16.png');
  
  console.log('✅ Generated favicon-16x16.png');
}

generateIcons().catch(console.error);

const sharp = require('sharp');
const fs = require('fs');

const sizes = [192, 512];

async function generateIcons() {
  // Usar icon.jpeg en lugar de icon.svg
  const imageBuffer = fs.readFileSync('./public/icon.jpeg');
  
  for (const size of sizes) {
    await sharp(imageBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 240, g: 240, b: 230, alpha: 1 } // Fondo beige claro
      })
      .png()
      .toFile(`./public/icon-${size}x${size}.png`);
    
    console.log(`✅ Generated icon-${size}x${size}.png with EcoChain logo`);
  }
  
  // También crear favicon
  await sharp(imageBuffer)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 240, g: 240, b: 230, alpha: 1 }
    })
    .png()
    .toFile('./public/favicon-32x32.png');
  
  console.log('✅ Generated favicon-32x32.png');
  
  await sharp(imageBuffer)
    .resize(16, 16, {
      fit: 'contain',
      background: { r: 240, g: 240, b: 230, alpha: 1 }
    })
    .png()
    .toFile('./public/favicon-16x16.png');
  
  console.log('✅ Generated favicon-16x16.png');
  
  // Apple touch icon
  await sharp(imageBuffer)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 240, g: 240, b: 230, alpha: 1 }
    })
    .png()
    .toFile('./public/apple-touch-icon.png');
  
  console.log('✅ Generated apple-touch-icon.png');
  
  console.log('\n🎉 Todos los iconos generados con el logo de EcoChain!');
}

generateIcons().catch(console.error);

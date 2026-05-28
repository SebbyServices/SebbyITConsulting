import sharp from 'sharp';

// Resize logo first, then composite
const logoBuffer = await sharp('src/assets/logo-icon.png')
  .resize(300, 300, { fit: 'contain' })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: { r: 15, g: 23, b: 42 }
  }
})
  .composite([
    {
      input: logoBuffer,
      left: Math.floor((1200 - 300) / 2),
      top: Math.floor((630 - 300) / 2)
    }
  ])
  .toFile('public/og-default.png')
  .then(info => console.log('✓ OG image created', info))
  .catch(err => console.error('Error generating OG image:', err));

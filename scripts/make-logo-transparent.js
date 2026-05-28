import sharp from 'sharp';

// Read the logo and make black background transparent
sharp('/Users/sebby/.claude/image-cache/c8ea23d8-d2bf-4158-92d6-723be4d60594/1.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(async ({ data, info }) => {
    // Process pixels: convert black (or very dark) to transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      // If pixel is very dark (black background), make it transparent
      if (r < 30 && g < 30 && b < 30) {
        data[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    // Save with transparency
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
      .png()
      .toFile('src/assets/logo-icon.png');

    console.log('✓ Logo made transparent and saved to src/assets/logo-icon.png');
  })
  .catch(err => console.error('Error:', err));

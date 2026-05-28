import sharp from 'sharp';

// Optimize headshot
sharp('/Users/sebby/Downloads/sebbyit-assets/headshot.jpg')
  .resize(600, 600, { fit: 'cover', position: 'center' })
  .withMetadata()
  .toFile('public/assets/headshot.jpg', (err, info) => {
    if (err) {
      console.error('Error optimizing headshot:', err);
    } else {
      console.log('✓ Headshot optimized', info);
    }
  });

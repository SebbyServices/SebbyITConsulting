import sharp from 'sharp';

const sizes = [
  { name: 'favicon.ico', size: 32 },
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-512.png', size: 512 },
];

sizes.forEach(({ name, size }) => {
  sharp('src/assets/logo-icon.png')
    .resize(size, size, { fit: 'contain', background: { r: 15, g: 23, b: 42, alpha: 0 } })
    .toFile(`public/${name}`, (err) => {
      if (err) console.error(`Error generating ${name}:`, err);
      else console.log(`✓ ${name}`);
    });
});

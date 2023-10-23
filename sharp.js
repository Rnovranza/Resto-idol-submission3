/* eslint-disable max-len */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

// Pastikan direktori tujuan (destination) ada
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, {recursive: true}); // Membuat direktori secara rekursif jika belum ada
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(destination, `${image.split('.').slice(0, -1).join('.')}-large.jpg`));

  sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(destination, `${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});


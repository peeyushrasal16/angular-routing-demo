const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'dist', 'angular-routing-demo', 'browser');
const indexFile = path.join(outputDir, 'index.html');
const notFoundFile = path.join(outputDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('Build output not found. Run npm run build:ghpages first.');
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);
console.log('Created 404.html for GitHub Pages SPA routing.');

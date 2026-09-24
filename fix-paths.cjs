const fs = require('fs');
const files = [
  'src/pages/meditatii-geometrie-descriptiva.astro',
  'src/pages/meditatii-mecanica-1.astro',
  'src/pages/meditatii-mecanica-2.astro'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  // Decode %20 to spaces first
  content = content.replace(/%20/g, ' ');
  // Replace src="/ to src="/t/ if it ends with .webp
  content = content.replace(/src="\/([^"]+\.webp)"/g, 'src="/t/$1"');
  // Fix double /t/t/ if it happened
  content = content.replace(/\/t\/t\//g, '/t/');
  fs.writeFileSync(f, content);
});

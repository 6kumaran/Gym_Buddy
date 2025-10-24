// debug_vision_test.js
const fs = require('fs');
console.log('NODE env preview (first 200 chars of GOOGLE_API_KEY):', (process.env.GOOGLE_API_KEY||'').slice(0,200));
console.log('Current working dir:', process.cwd());
console.log('Check data/usage.json exists:', fs.existsSync('data/usage.json'));
try {
  const info = fs.readFileSync('data/usage.json','utf8');
  console.log('usage.json length:', info.length);
} catch(e) {
  console.log('usage.json read error:', e.message);
}

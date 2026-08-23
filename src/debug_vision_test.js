// debug_vision_test.js
const fs = await import("fs");
console.log('Current working dir:', process.cwd());
console.log('Check data/usage.json exists:', fs.existsSync('data/usage.json'));
try {
  const info = fs.readFileSync('data/usage.json','utf8');
  console.log('usage.json length:', info.length);
} catch(e) {
  console.log('usage.json read error:', e.message);
}

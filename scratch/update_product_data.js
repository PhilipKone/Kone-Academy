const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/DELL/KCA/Kone-Code-Academy/Kone-Shop/src/data/products.ts';

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace /products/*.png with /products/*.webp
  const regex = /(\/products\/[a-zA-Z0-9_-]+)\.png/g;
  content = content.replace(regex, '$1.webp');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("✅ Successfully updated products.ts image references to .webp!");
} else {
  console.error("❌ products.ts not found!");
}

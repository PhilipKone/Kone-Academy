const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:/Users/DELL/KCA/Kone-Code-Academy';

const REPLACEMENTS = [
  {
    name: 'Kone-Farms',
    file: 'Kone-Farms/index.html',
    find: 'https://farms.koneacademy.io/logos/logo.svg',
    replace: 'https://farms.koneacademy.io/og-image.png?v=4'
  },
  {
    name: 'Kone-Warp',
    file: 'Kone-Warp/index.html',
    find: 'https://warp.koneacademy.io/logos/logo.svg',
    replace: 'https://warp.koneacademy.io/og-image.png?v=4'
  },
  {
    name: 'Kone-Digital',
    file: 'Kone-Digital/index.html',
    find: 'https://digital.koneacademy.io/og-image.png',
    replace: 'https://digital.koneacademy.io/og-image.png?v=4'
  },
  {
    name: 'Kone-Kids',
    file: 'Kone-Kids/index.html',
    find: 'https://kids.koneacademy.io/og-image.png',
    replace: 'https://kids.koneacademy.io/og-image.png?v=4'
  },
  {
    name: 'Kone-Shop',
    file: 'Kone-Shop/index.html',
    find: 'https://shop.koneacademy.io/og-image.png',
    replace: 'https://shop.koneacademy.io/og-image.png?v=4'
  },
  {
    name: 'Kone-Consult (legacy public)',
    file: 'Kone-Consult/public/index.html',
    find: 'https://consult.koneacademy.io/og-image.png',
    replace: 'https://consult.koneacademy.io/og-image.png?v=4'
  }
];

function main() {
  for (const rep of REPLACEMENTS) {
    const fullPath = path.join(ROOT_DIR, rep.file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[WARNING] File not found: ${fullPath}`);
      continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if find string exists in file
    if (!content.includes(rep.find)) {
      console.warn(`[WARNING] Target text "${rep.find}" not found in ${rep.file}`);
      continue;
    }

    // Replace all occurrences
    const regex = new RegExp(rep.find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    content = content.replace(regex, rep.replace);
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`   ✅ Updated ${rep.file} (replaced "${rep.find}" -> "${rep.replace}")`);
  }
}

main();

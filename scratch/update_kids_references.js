const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:/Users/DELL/KCA/Kone-Code-Academy';

const REPLACEMENTS = [
  {
    file: 'Kone-Kids/src/App.tsx',
    replacements: [
      { find: '/programs/coding.png', replace: '/programs/coding.webp' },
      { find: '/programs/robotics.png', replace: '/programs/robotics.webp' },
      { find: '/programs/ai.png', replace: '/programs/ai.webp' }
    ]
  },
  {
    file: 'Kone-Kids/src/data/missions.ts',
    replacements: [
      { find: '/series/word-search-cover.png', replace: '/series/word-search-cover.webp' },
      { find: '/series/retro-arcade-cover.png', replace: '/series/retro-arcade-cover.webp' },
      { find: '/series/platformer-pro-cover.png', replace: '/series/platformer-pro-cover.webp' }
    ]
  }
];

function main() {
  for (const item of REPLACEMENTS) {
    const fullPath = path.join(ROOT_DIR, item.file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[WARNING] File not found: ${fullPath}`);
      continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = false;

    for (const rep of item.replacements) {
      if (content.includes(rep.find)) {
        content = content.split(rep.find).join(rep.replace);
        updated = true;
        console.log(`   ✅ Replacing "${rep.find}" -> "${rep.replace}" in ${item.file}`);
      } else {
        console.warn(`[WARNING] Text "${rep.find}" not found in ${item.file}`);
      }
    }

    if (updated) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`🎉 Saved changes to ${item.file}\n`);
    }
  }
}

main();

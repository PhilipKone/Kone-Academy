const fs = require('fs');
const path = require('path');

const logPath = 'C:/Users/DELL/.gemini/antigravity/brain/3887fb66-9e48-4666-85c3-c1cb49e65a4b/.system_generated/logs/transcript.jsonl';

try {
  if (!fs.existsSync(logPath)) {
    console.log('❌ Log file not found.');
    process.exit(1);
  }

  const lines = fs.readFileSync(logPath, 'utf8').split('\n');
  console.log('Searching for Lighthouse run results in transcript...');
  
  for (const line of lines) {
    if (!line) continue;
    try {
      const step = JSON.parse(line);
      const content = step.content || '';
      
      // Match the pattern like "Kone Kids: Perf=X"
      const match = content.match(/Kone Kids: Perf=(\d+)/i);
      if (match) {
        console.log(`Found run in step ${step.step_index}: ${match[0]} (Full text: ${content.trim().substring(0, 150)}...)`);
      }
      
      // Also look for markdown tables with Kone Kids
      if (content.includes('| **Kone Kids** |')) {
        console.log(`Found table in step ${step.step_index}:`);
        console.log(content.trim().substring(content.indexOf('| **Kone Kids** |'), content.indexOf('| **Kone Kids** |') + 100));
      }
    } catch (e) {
      // Ignore JSON parse errors for incomplete lines
    }
  }
} catch (e) {
  console.error('Error:', e);
}

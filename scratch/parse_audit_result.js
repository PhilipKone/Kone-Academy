const fs = require('fs');
const path = require('path');

const jsonPath = 'c:/Users/DELL/KCA/Kone-Code-Academy/scratch/kids_lighthouse.json';

try {
  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ JSON file not found at ${jsonPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, 'utf8');
  const report = JSON.parse(raw);
  const categories = report.categories || {};

  console.log('\n=========================================');
  console.log('       LIVE LIGHTHOUSE SCORES: KIDS      ');
  console.log('=========================================');
  
  for (const [id, category] of Object.entries(categories)) {
    const score = Math.round(category.score * 100);
    const name = category.title.padEnd(20, ' ');
    console.log(`✅ ${name}: ${score}/100`);
  }
  
  console.log('=========================================\n');
  
  // Show key metrics
  const audits = report.audits || {};
  const fcp = audits['first-contentful-paint'] ? audits['first-contentful-paint'].displayValue : 'N/A';
  const lcp = audits['largest-contentful-paint'] ? audits['largest-contentful-paint'].displayValue : 'N/A';
  const tti = audits['interactive'] ? audits['interactive'].displayValue : 'N/A';
  const cls = audits['cumulative-layout-shift'] ? audits['cumulative-layout-shift'].displayValue : 'N/A';

  console.log('Performance Metrics:');
  console.log(` - First Contentful Paint:   ${fcp}`);
  console.log(` - Largest Contentful Paint:  ${lcp}`);
  console.log(` - Time to Interactive:       ${tti}`);
  console.log(` - Cumulative Layout Shift:   ${cls}`);
  console.log();
  
} catch (err) {
  console.error(`❌ Error parsing report: ${err.message}`);
  process.exit(1);
}

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
  const audits = report.audits || {};

  console.log('\n=========================================');
  console.log('      LIGHTHOUSE PERFORMANCE ISSUES      ');
  console.log('=========================================');

  const performanceAudits = Object.values(audits).filter(a => {
    return a.score !== null && a.score < 0.9 && a.details && (a.details.type === 'opportunity' || a.details.type === 'table');
  });

  if (performanceAudits.length === 0) {
    console.log('🎉 No major performance opportunities found!');
  } else {
    performanceAudits.forEach(audit => {
      const score = Math.round(audit.score * 100);
      console.log(`❌ [Score: ${score}/100] ${audit.title}`);
      if (audit.displayValue) {
        console.log(`   Potential Savings: ${audit.displayValue}`);
      }
      if (audit.description) {
        console.log(`   Description: ${audit.description.replace(/\s+/g, ' ')}`);
      }
      console.log('-----------------------------------------');
    });
  }

} catch (err) {
  console.error(`❌ Error parsing report: ${err.message}`);
  process.exit(1);
}

const https = require('https');

const urlToTest = 'https://kids.koneacademy.io/';
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(urlToTest)}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=mobile`;

console.log(`📡 Fetching live Google PageSpeed Insights for ${urlToTest} (Mobile Strategy)...`);
console.log('⏳ This query runs on Google servers and takes about 20-30 seconds...');

https.get(apiEndpoint, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      if (res.statusCode !== 200) {
        console.error(`❌ HTTP Error ${res.statusCode}: ${data}`);
        process.exit(1);
      }

      const report = JSON.parse(data);
      const categories = report.lighthouseResult.categories;
      
      console.log('\n=========================================');
      console.log('   GOOGLE PAGESPEED INSIGHTS: KONE KIDS  ');
      console.log('=========================================');
      
      for (const [id, category] of Object.entries(categories)) {
        const score = Math.round(category.score * 100);
        const name = category.title.padEnd(20, ' ');
        console.log(`✅ ${name}: ${score}/100`);
      }
      
      console.log('=========================================\n');
      
      // Performance metrics
      const audits = report.lighthouseResult.audits;
      const fcp = audits['first-contentful-paint'] ? audits['first-contentful-paint'].displayValue : 'N/A';
      const lcp = audits['largest-contentful-paint'] ? audits['largest-contentful-paint'].displayValue : 'N/A';
      const tti = audits['interactive'] ? audits['interactive'].displayValue : 'N/A';
      const cls = audits['cumulative-layout-shift'] ? audits['cumulative-layout-shift'].displayValue : 'N/A';
      const tbt = audits['total-blocking-time'] ? audits['total-blocking-time'].displayValue : 'N/A';

      console.log('Performance Metrics (Mobile):');
      console.log(` - First Contentful Paint (FCP):  ${fcp}`);
      console.log(` - Largest Contentful Paint (LCP): ${lcp}`);
      console.log(` - Total Blocking Time (TBT):     ${tbt}`);
      console.log(` - Cumulative Layout Shift (CLS):  ${cls}`);
      console.log();

    } catch (err) {
      console.error(`❌ Failed to parse response: ${err.message}`);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error(`❌ Network Error: ${err.message}`);
  process.exit(1);
});

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const URLS = [
  { name: 'Kone Academy (Landing)', url: 'https://www.koneacademy.io/' },
  { name: 'Kone Code', url: 'https://code.koneacademy.io/' },
  { name: 'Kone Lab', url: 'https://lab.koneacademy.io/' },
  { name: 'Kone Kids', url: 'https://kids.koneacademy.io/' },
  { name: 'Kone Shop', url: 'https://shop.koneacademy.io/' },
  { name: 'Kone Consult', url: 'https://consult.koneacademy.io/' },
  { name: 'Kone Digital', url: 'https://digital.koneacademy.io/' },
  { name: 'Kone Farms', url: 'https://farms.koneacademy.io/' },
  { name: 'Kone Warp', url: 'https://warp.koneacademy.io/' }
];

const ARTIFACT_DIR = 'C:/Users/DELL/.gemini/antigravity/brain/3887fb66-9e48-4666-85c3-c1cb49e65a4b';
const REPORT_MD_PATH = path.join(ARTIFACT_DIR, 'lighthouse_audit_results.md');
const TEMP_JSON_DIR = path.join(__dirname, 'temp_reports');

if (!fs.existsSync(TEMP_JSON_DIR)) {
  fs.mkdirSync(TEMP_JSON_DIR, { recursive: true });
}

async function runLighthouse(name, url) {
  console.log(`⚡ Running Lighthouse audit for ${name} (${url})...`);
  const jsonPath = path.join(TEMP_JSON_DIR, `${name.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
  
  const cmd = `npx lighthouse ${url} --chrome-flags="--headless --no-sandbox --disable-gpu" --output=json --output-path="${jsonPath}"`;
  
  return new Promise((resolve) => {
    exec(cmd, (error) => {
      if (error && !fs.existsSync(jsonPath)) {
        console.error(`❌ Audit failed for ${name}: ${error.message}`);
        resolve({ name, url, error: error.message });
        return;
      }
      
      try {
        const raw = fs.readFileSync(jsonPath, 'utf8');
        const report = JSON.parse(raw);
        const categories = report.categories || {};
        
        const scores = {
          performance: categories.performance ? Math.round(categories.performance.score * 100) : 0,
          accessibility: categories.accessibility ? Math.round(categories.accessibility.score * 100) : 0,
          bestPractices: categories['best-practices'] ? Math.round(categories['best-practices'].score * 100) : 0,
          seo: categories.seo ? Math.round(categories.seo.score * 100) : 0
        };
        
        console.log(`   ✅ ${name}: Perf=${scores.performance}, Acc=${scores.accessibility}, BestPractices=${scores.bestPractices}, SEO=${scores.seo}`);
        resolve({ name, url, scores });
      } catch (err) {
        console.error(`❌ Error parsing report for ${name}: ${err.message}`);
        resolve({ name, url, error: err.message });
      }
    });
  });
}

function generateMarkdownReport(results) {
  let md = `# 📊 Live Subdomain Performance Audit Report\n\n`;
  md += `This report lists the **Google Lighthouse** performance, accessibility, best practices, and SEO scores for all live subdomains in the Kone Academy ecosystem.\n\n`;
  md += `Audit completed on: **${new Date().toISOString().split('T')[0]}**\n\n`;
  md += `## 📈 Subdomain Scores Summary\n\n`;
  md += `| Subdomain | Performance | Accessibility | Best Practices | SEO | Status |\n`;
  md += `| :--- | :---: | :---: | :---: | :---: | :--- |\n`;

  results.forEach(res => {
    if (res.error) {
      md += `| **${res.name}** (${res.url}) | ❌ Fail | - | - | - | Error: ${res.error.substring(0, 40)}... |\n`;
    } else {
      const getStatusSymbol = (val) => {
        if (val >= 90) return '🟢';
        if (val >= 50) return '🟡';
        return '🔴';
      };
      
      const s = res.scores;
      const overallStatus = (s.performance >= 90 && s.seo >= 90) ? '✅ Optimal' : '⚠️ Action Needed';
      md += `| **${res.name}** | ${getStatusSymbol(s.performance)} **${s.performance}** | ${getStatusSymbol(s.accessibility)} ${s.accessibility} | ${getStatusSymbol(s.bestPractices)} ${s.bestPractices} | ${getStatusSymbol(s.seo)} **${s.seo}** | ${overallStatus} |\n`;
    }
  });

  md += `\n---\n\n`;
  md += `## 🛠️ Insights & Next Steps\n\n`;
  md += `Based on the scores, the following optimizations should be prioritized:\n\n`;
  
  results.forEach(res => {
    if (res.scores) {
      const s = res.scores;
      if (s.performance < 90) {
        md += `- **${res.name}**: Performance score is below 90 (${s.performance}/100). Target optimizations:\n`;
        md += `  - Compress large assets (e.g. logos/illustrations) to WebP or AVIF formats.\n`;
        md += `  - Ensure CSS/JS is minified and unused assets are not loaded.\n`;
      }
      if (s.seo < 90) {
        md += `- **${res.name}**: SEO score is below 90 (${s.seo}/100). Verify title, description, canonical tags, and mobile accessibility.\n`;
      }
    }
  });

  fs.writeFileSync(REPORT_MD_PATH, md, 'utf8');
  console.log(`\n🎉 Report generated successfully at: ${REPORT_MD_PATH}`);
}

async function main() {
  const results = [];
  for (const item of URLS) {
    const res = await runLighthouse(item.name, item.url);
    results.push(res);
  }
  
  generateMarkdownReport(results);
  
  // Cleanup JSONs
  fs.rmSync(TEMP_JSON_DIR, { recursive: true, force: true });
}

main().catch(err => {
  console.error("Main execution failed:", err);
  process.exit(1);
});

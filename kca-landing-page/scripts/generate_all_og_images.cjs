const React = require('react');
const ReactDOMServer = require('react-dom/server');
const faIcons = require('react-icons/fa');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const coursesData = [
  { id: "course-pay", icon: "FaCreditCard", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.28)" },
  { id: "course-farms", icon: "FaMicrochip", color: "#10b981", glow: "rgba(16, 185, 129, 0.28)" },
  { id: "course-warp", icon: "FaMapMarkedAlt", color: "#ef4444", glow: "rgba(239, 68, 68, 0.28)" },
  { id: "course-ai", icon: "FaBrain", color: "#8b5cf6", glow: "rgba(139, 92, 246, 0.28)" },
  { id: "course-lab", icon: "FaFlask", color: "#06b6d4", glow: "rgba(6, 182, 212, 0.28)" },
  { id: "course-code", icon: "FaLaptopCode", color: "#2563eb", glow: "rgba(37, 99, 235, 0.28)" },
  { id: "course-consult", icon: "FaChartBar", color: "#d97706", glow: "rgba(217, 119, 6, 0.28)" },
  { id: "course-kids", icon: "FaGamepad", color: "#22c55e", glow: "rgba(34, 197, 94, 0.28)" },
  { id: "course-studio", icon: "FaCube", color: "#ec4899", glow: "rgba(236, 72, 153, 0.28)" },
  { id: "course-shop", icon: "FaShoppingCart", color: "#d946ef", glow: "rgba(217, 70, 239, 0.28)" },
  { id: "course-tech", icon: "FaShieldAlt", color: "#7c3aed", glow: "rgba(124, 58, 237, 0.28)" },
  { id: "course-digital", icon: "FaCloud", color: "#0ea5e9", glow: "rgba(14, 165, 233, 0.28)" },
];

const outputDir = path.join(__dirname, '..', 'public', 'og');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('Launching browser to generate 12 Course OG images...');
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  for (const course of coursesData) {
    const IconComp = faIcons[course.icon] || faIcons.FaGraduationCap;
    const svgMarkup = ReactDOMServer.renderToStaticMarkup(
      React.createElement(IconComp, { size: 130, color: '#ffffff' })
    );

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px;
          height: 630px;
          background: #080c14;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .ambient-glow {
          position: absolute;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          background: radial-gradient(circle, ${course.glow} 0%, rgba(8, 12, 20, 0) 70%);
        }
        .outer-circle {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: ${course.color};
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px ${course.glow};
        }
      </style>
    </head>
    <body>
      <div class="ambient-glow"></div>
      <div class="outer-circle">
        ${svgMarkup}
      </div>
    </body>
    </html>
    `;

    await page.setContent(html, { waitUntil: 'load' });
    const targetFile = path.join(outputDir, `${course.id}.png`);
    await page.screenshot({ path: targetFile });
    console.log(`Generated: ${course.id}.png (${course.icon})`);
  }

  // Also replace the old Kone-Tech/public/og-image.png with a clean centered emblem matching the brand!
  const techOgPath = path.join(__dirname, '..', '..', 'Kone-Tech', 'public', 'og-image.png');
  const techDropletSvg = `
  <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coneGradient" x1="100" y1="40" x2="100" y2="165" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#BC00FF" />
        <stop offset="100%" stop-color="#00D1FF" />
      </linearGradient>
    </defs>
    <path d="M 100 40 C 100 40 140 85 140 125 C 140 147 122 165 100 165 C 78 165 60 147 60 125 C 60 85 100 40 100 40 Z" fill="url(#coneGradient)"/>
  </svg>
  `;

  const techHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        width: 1200px;
        height: 630px;
        background: #080c14;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      .ambient-glow {
        position: absolute;
        width: 540px;
        height: 540px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(188, 0, 255, 0.22) 0%, rgba(8, 12, 20, 0) 70%);
      }
      .outer-circle {
        position: relative;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: #0b1120;
        border: 2px solid rgba(255, 255, 255, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 50px rgba(0, 209, 255, 0.2);
      }
    </style>
  </head>
  <body>
    <div class="ambient-glow"></div>
    <div class="outer-circle">
      ${techDropletSvg}
    </div>
  </body>
  </html>
  `;

  await page.setContent(techHtml, { waitUntil: 'load' });
  await page.screenshot({ path: techOgPath });
  console.log('Cleaned and updated Kone-Tech/public/og-image.png!');

  await browser.close();
  console.log('All OG images generated successfully!');
})();

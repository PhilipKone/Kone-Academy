const puppeteer = require('puppeteer');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\d15dc3f2-6550-47c0-8f2c-4697a237e871';

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=390,844']
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });

    await page.goto('http://localhost:5173/coding?view=syllabus', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1200));

    // Scroll directly to the syllabus accordion heading
    await page.evaluate(() => {
      const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent && h.textContent.includes('Course Syllabus'));
      if (heading) {
        heading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
    await new Promise(r => setTimeout(r, 800));

    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_syllabus_curriculum_accordion.png') });
    console.log("Saved kone_kids_mobile_syllabus_curriculum_accordion.png");

  } catch (err) {
    console.error("Capture failed:", err);
  } finally {
    if (browser) await browser.close();
    process.exit(0);
  }
})();

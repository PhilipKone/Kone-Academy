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

    // Helper to dismiss toasts and badges
    const clearBadges = async () => {
      await page.evaluate(() => {
        // Clear local storage badges and close any toast
        const toasts = document.querySelectorAll('.badge-toast, .reward-modal, [class*="badge"]');
        toasts.forEach(t => t.remove());
      });
    };

    // 1. Coding Adventure Map (Mobile)
    console.log("Capturing Coding Adventure Map on mobile...");
    await page.goto('http://localhost:5173/coding', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    await clearBadges();
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_coding_map.png') });
    console.log("Saved kone_kids_mobile_coding_map.png");

    // 2. Coding Course Syllabus Top (Mobile)
    console.log("Capturing Coding Course Syllabus top...");
    await page.goto('http://localhost:5173/coding?view=syllabus', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    await clearBadges();
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_syllabus_top.png') });
    console.log("Saved kone_kids_mobile_syllabus_top.png");

    // 3. Coding Course Syllabus Modules (Mobile - scrolled down)
    console.log("Capturing Coding Course Syllabus modules...");
    await page.evaluate(() => window.scrollBy(0, 520));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_syllabus_modules.png') });
    console.log("Saved kone_kids_mobile_syllabus_modules.png");

    // 4. Robotics Course Syllabus (Mobile)
    console.log("Capturing Robotics Course Syllabus...");
    await page.goto('http://localhost:5173/robotics?view=syllabus', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    await clearBadges();
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_robotics_syllabus.png') });
    console.log("Saved kone_kids_mobile_robotics_syllabus.png");

    // 5. AI Course Syllabus (Mobile - clean)
    console.log("Capturing AI Course Syllabus...");
    await page.goto('http://localhost:5173/ai?view=syllabus', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const collectBtn = buttons.find(b => b.textContent && (b.textContent.includes('Collect Reward') || b.textContent.includes('Collect')));
      if (collectBtn) collectBtn.click();
    });
    await new Promise(r => setTimeout(r, 1200));
    await clearBadges();
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_ai_syllabus.png') });
    console.log("Saved kone_kids_mobile_ai_syllabus.png");

    // 6. Diploma Modal on Mobile
    console.log("Capturing Diploma Modal on Mobile...");
    await page.goto('http://localhost:5173/coding?view=syllabus', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1200));
    await clearBadges();
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const diplomaBtn = buttons.find(b => b.textContent && b.textContent.includes('Diploma Preview'));
      if (diplomaBtn) diplomaBtn.click();
    });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'kone_kids_mobile_diploma_modal.png') });
    console.log("Saved kone_kids_mobile_diploma_modal.png");

    console.log("All mobile screenshots captured successfully!");
  } catch (err) {
    console.error("Capture failed:", err);
  } finally {
    if (browser) await browser.close();
    process.exit(0);
  }
})();

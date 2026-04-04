const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Starting static image export...');

    // Configuration
    const svgPath = path.resolve(__dirname, '../valentine_card.svg');
    const outputPng = path.resolve(__dirname, '../valentine_card.png');
    const outputJpg = path.resolve(__dirname, '../valentine_card.jpg');
    const width = 1600;
    const height = 900;

    console.log(`Input: ${svgPath}`);

    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();

    await page.setViewport({ width, height });

    // Load SVG content via HTML wrapper to force scaling
    const fileUrl = `file://${svgPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Force SVG to scale to viewport
    await page.evaluate(() => {
        const svg = document.querySelector('svg');
        if (svg) {
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.style.width = '100%';
            svg.style.height = '100%';
        }
    });

    // Give animations a moment to settle (capture at start)
    // Or maybe wait a bit to see the hearts? Let's capture at 1 second to see some hearts.
    console.log('Waiting for animation to progress slightly...');
    await new Promise(r => setTimeout(r, 1500));

    console.log(`Saving PNG to ${outputPng}...`);
    await page.screenshot({ path: outputPng, type: 'png', omitBackground: false });

    console.log(`Saving JPEG to ${outputJpg}...`);
    await page.screenshot({ path: outputJpg, type: 'jpeg', quality: 90, omitBackground: false });

    console.log('Image export finished.');

    await browser.close();
})();

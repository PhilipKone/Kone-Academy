const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Starting Kone Code static image export...');

    const svgPath = path.resolve(__dirname, '../kone_code_langs.svg');
    const outputPng = path.resolve(__dirname, '../kone_code_langs.png');
    const outputJpg = path.resolve(__dirname, '../kone_code_langs.jpg');
    const width = 1600;
    const height = 900;

    console.log(`Input: ${svgPath}`);

    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();

    await page.setViewport({ width, height });

    const fileUrl = `file://${svgPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await new Promise(r => setTimeout(r, 1000));

    await page.evaluate(() => {
        const svg = document.querySelector('svg');
        if (svg) {
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.style.width = '100%';
            svg.style.height = '100%';
        }
    });

    console.log('Waiting for animation to progress slightly...');
    await new Promise(r => setTimeout(r, 1000));

    console.log(`Saving PNG to ${outputPng}...`);
    await page.screenshot({ path: outputPng, type: 'png', omitBackground: false });

    console.log(`Saving JPEG to ${outputJpg}...`);
    await page.screenshot({ path: outputJpg, type: 'jpeg', quality: 90, omitBackground: false });

    console.log('Image export finished.');

    await browser.close();
})();

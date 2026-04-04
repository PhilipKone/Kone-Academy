const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const svgPath = path.resolve(__dirname, '../kone_code_langs.svg');
    console.log(`Debugging: ${svgPath}`);

    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    await page.setViewport({ width: 1600, height: 900 });

    const fileUrl = `file://${svgPath}`;
    try {
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        console.log("Navigation complete.");
    } catch (e) {
        console.error("Navigation error:", e);
    }

    await browser.close();
})();

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const GifEncoder = require('gif-encoder');
const { PNG } = require('pngjs');

(async () => {
    console.log('Starting Kone Code GIF conversion...');

    const svgPath = path.resolve(__dirname, '../kone_code_langs.svg');
    const outputPath = path.resolve(__dirname, '../kone_code_langs.gif');
    const width = 1600;
    const height = 900;
    const fps = 20;
    const durationInSeconds = 5;
    const totalFrames = fps * durationInSeconds;

    console.log(`Input: ${svgPath}`);

    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();

    await page.setViewport({ width, height });

    const fileUrl = `file://${svgPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Add small delay to let web fonts load
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

    const gitEncoder = new GifEncoder(width, height);
    const fileStream = fs.createWriteStream(outputPath);

    gitEncoder.pipe(fileStream);

    gitEncoder.writeHeader();
    gitEncoder.setRepeat(0);
    gitEncoder.setDelay(1000 / fps);
    gitEncoder.setQuality(10);

    console.log('Capturing frames...');

    for (let i = 0; i < totalFrames; i++) {
        const buffer = await page.screenshot({ type: 'png', omitBackground: false });
        const png = PNG.sync.read(buffer);

        gitEncoder.addFrame(png.data);

        if (i % 10 === 0) {
            console.log(`Processed frame ${i}/${totalFrames}`);
        }
    }

    gitEncoder.finish();
    console.log('GIF encoding finished: ' + outputPath);

    await browser.close();
})();

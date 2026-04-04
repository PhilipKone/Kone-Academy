const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const GifEncoder = require('gif-encoder');
const { PNG } = require('pngjs');

(async () => {
    console.log('Starting Easter GIF/Static conversion...');

    // Configuration
    const svgPath = path.resolve(__dirname, '../easter_card.svg');
    const outputGif = path.resolve(__dirname, '../easter_card.gif');
    const outputPng = path.resolve(__dirname, '../easter_card.png');
    const outputJpg = path.resolve(__dirname, '../easter_card.jpg');
    
    const width = 1600; // Output width (HD)
    const height = 900; // Output height (HD)
    const fps = 20;
    const durationInSeconds = 3;
    const totalFrames = fps * durationInSeconds;

    console.log(`Input SVG: ${svgPath}`);
    console.log(`Outputs: GIF, PNG, JPG`);

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

    // 1. Capture Static PNG & JPG (First Frame)
    console.log('Capturing static formats (PNG, JPG)...');
    await page.screenshot({ path: outputPng, type: 'png' });
    await page.screenshot({ path: outputJpg, type: 'jpeg', quality: 90 });

    // 2. Capture Frames for GIF
    const gitEncoder = new GifEncoder(width, height);
    const fileStream = fs.createWriteStream(outputGif);

    gitEncoder.pipe(fileStream);
    gitEncoder.writeHeader();
    gitEncoder.setRepeat(0);
    gitEncoder.setDelay(1000 / fps);
    gitEncoder.setQuality(10);

    console.log('Capturing GIF frames...');

    for (let i = 0; i < totalFrames; i++) {
        const buffer = await page.screenshot({ type: 'png', omitBackground: false });
        const png = PNG.sync.read(buffer);

        gitEncoder.addFrame(png.data);

        if (i % 10 === 0) {
            console.log(`Processed frame ${i}/${totalFrames}`);
        }
        
        // Minor wait to allow animations to progress if any are frame-dependent
        // (Though Puppeteer captures real-time state usually)
        await new Promise(r => setTimeout(r, 50)); 
    }

    gitEncoder.finish();
    console.log('GIF encoding finished.');

    await browser.close();
    console.log('All formats generated successfully.');
})();

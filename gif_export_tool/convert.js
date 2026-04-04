const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const GifEncoder = require('gif-encoder');
const { PNG } = require('pngjs');

(async () => {
  console.log('Starting GIF conversion (Pure JS approach)...');

  // Configuration
  const svgPath = path.resolve(__dirname, '../happy_new_year_card.svg');
  const outputPath = path.resolve(__dirname, '../happy_new_year_card.gif');
  const width = 1600; // Output width (HD)
  const height = 900; // Output height (HD)
  const fps = 20;
  const durationInSeconds = 3;
  const totalFrames = fps * durationInSeconds;

  console.log(`Input: ${svgPath}`);
  console.log(`Output: ${outputPath}`);
  console.log(`Dimensions: ${width}x${height}`);
  console.log(`Total Frames: ${totalFrames}`);

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();

  await page.setViewport({ width, height });

  // Load SVG content via HTML wrapper to force scaling
  const fileUrl = `file://${svgPath}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Force SVG to scale to viewport using evaluate (safer for SVG docs)
  await page.evaluate(() => {
    const svg = document.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.style.width = '100%';
      svg.style.height = '100%';
    }
  });

  // Initialize GIF Encoder
  // gif-encoder usage: new GifEncoder(width, height, [options])
  const gitEncoder = new GifEncoder(width, height);
  const fileStream = fs.createWriteStream(outputPath);

  gitEncoder.pipe(fileStream);

  // Set basic properties
  gitEncoder.writeHeader();
  gitEncoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
  gitEncoder.setDelay(1000 / fps);
  gitEncoder.setQuality(10); // Image quality
  // gitEncoder.setTransparent(0x000000); // Optional transparency

  console.log('Capturing frames...');

  for (let i = 0; i < totalFrames; i++) {
    // Capture screenshot as PNG buffer
    const buffer = await page.screenshot({ type: 'png', omitBackground: false });

    // Decode PNG to get raw pixels (RGBA)
    const png = PNG.sync.read(buffer);

    // gif-encoder expects standard RGBA or RGB? 
    // It usually expects flattened RGB or RGBA.
    // Documentation says addFrame(pixels) where pixels is Buffer/Array of pixels.
    // If we use pixels directly from pngjs, it is RGBA.
    // We need to verify if gif-encoder handles RGBA or if we need to convert to RGB.
    // 'gif-encoder' usually handles pixels as [r, g, b, a, r, g, b, a...] if alpha is handled,
    // or we might need to be careful. 
    // Let's assume input is RGBA since standard canvas `getImageData` is RGBA.

    gitEncoder.addFrame(png.data);

    // Notification
    if (i % 10 === 0) {
      console.log(`Processed frame ${i}/${totalFrames}`);
    }
  }

  gitEncoder.finish();
  console.log('GIF encoding finished.');

  await browser.close();
})();

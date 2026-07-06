const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 4174;
const LOCAL_URL = `http://localhost:${PORT}`;
const REPORT_JSON_PATH = path.join(__dirname, 'kids_local_lighthouse.json');
const PROJECT_DIR = 'c:/Users/DELL/KCA/Kone-Code-Academy/Kone-Kids';

console.log('🚀 Starting Local Lighthouse Audit for Kone Kids...');

// 1. Start the Vite preview server in the background
console.log('📦 Starting local preview server...');
const serverProcess = spawn('npx', ['vite', 'preview', '--port', PORT], {
  cwd: PROJECT_DIR,
  shell: true
});

let serverReady = false;

// Helper function to clean up and exit
function cleanupAndExit(exitCode = 0) {
  console.log('🧹 Cleaning up processes...');
  
  if (serverProcess) {
    try {
      if (process.platform === 'win32') {
        exec(`taskkill /pid ${serverProcess.pid} /f /t`);
      } else {
        serverProcess.kill('SIGINT');
      }
      console.log('🛑 Local preview server stopped.');
    } catch (e) {
      console.error('Error stopping server:', e.message);
    }
  }

  // Delete temp JSON report
  if (fs.existsSync(REPORT_JSON_PATH)) {
    fs.unlinkSync(REPORT_JSON_PATH);
  }

  process.exit(exitCode);
}

process.on('SIGINT', () => cleanupAndExit(1));
process.on('SIGTERM', () => cleanupAndExit(1));

// Listen to server output
serverProcess.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('http://localhost') || output.includes('Local:')) {
    if (!serverReady) {
      serverReady = true;
      console.log(`✅ Local preview server is ready at ${LOCAL_URL}`);
      runLighthouse();
    }
  }
});

serverProcess.stderr.on('data', (data) => {
  console.error(`[Server Error] ${data}`);
});

serverProcess.on('close', (code) => {
  if (!serverReady) {
    console.error(`❌ Server failed to start (Exit code: ${code})`);
    cleanupAndExit(1);
  }
});

// 2. Run Lighthouse
function runLighthouse() {
  console.log('⚡ Running headless Lighthouse audit (this may take 30-60 seconds)...');
  
  const lighthouseCmd = `npx lighthouse ${LOCAL_URL} --chrome-flags="--headless --no-sandbox --disable-gpu" --output=json --output-path="${REPORT_JSON_PATH}"`;
  
  exec(lighthouseCmd, (error) => {
    if (error && !fs.existsSync(REPORT_JSON_PATH)) {
      console.error(`❌ Lighthouse audit failed: ${error.message}`);
      cleanupAndExit(1);
      return;
    }

    console.log('✅ Audit complete! Parsing results...');
    parseResults();
  });
}

// 3. Parse Results
function parseResults() {
  try {
    if (!fs.existsSync(REPORT_JSON_PATH)) {
      throw new Error('Lighthouse report JSON file not found.');
    }

    const rawData = fs.readFileSync(REPORT_JSON_PATH, 'utf8');
    const report = JSON.parse(rawData);
    const categories = report.categories || {};

    console.log('\n=========================================');
    console.log('    LOCAL LIGHTHOUSE SCORES: KONE KIDS   ');
    console.log('=========================================');

    for (const [id, category] of Object.entries(categories)) {
      const score = Math.round(category.score * 100);
      const name = category.title.padEnd(20, ' ');
      console.log(`✅ ${name}: ${score}/100`);
    }
    console.log('=========================================\n');

    cleanupAndExit(0);
  } catch (err) {
    console.error(`❌ Error parsing results: ${err.message}`);
    cleanupAndExit(1);
  }
}

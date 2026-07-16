export const ecosystemGuides = [
  {
    slug: "getting-started",
    title: "Welcome to Kone Academy: Ecosystem & Student Onboarding",
    errorText: "git clone https://github.com/PhilipKone/Kone-Code-Academy.git",
    framework: "Core Guide",
    difficulty: "Onboarding",
    cause: "Kone Academy is a state-of-the-art tech education platform that bridges theory with practical hardware and software execution. This guide walks you through the onboarding steps to configure your developer profile, join communication channels, and start building.",
    solution: "1. Set Up Your Developer Workspace: Install Git, Node.js (v18+), and VS Code on your local machine.\n2. Access the Subdomains: Familiarize yourself with the subdomains (code.koneacademy.io for courses, lab.koneacademy.io for IoT setups).\n3. Join the Community: Request access to our private channels to pair program, collaborate with peers, and get active mentorship.",
    badCode: `// Old Learning Model (Traditional)
1. Passive video lectures.
2. Multiple choice exams.
3. No hardware or cloud server access.
4. Lonewolf studying without reviews.`,
    goodCode: `// Modern Learning Model (Kone Academy)
1. Hands-on coding and lab builds.
2. Actual Git-based code reviews.
3. Dedicated physical telemetry boards.
4. Active collaborative cohort pair-programming.`
  },
  {
    slug: "remote-labs",
    title: "Kone Lab: Remote IoT Telemetry & Hardware Access",
    errorText: "ssh -p 2222 student@lab.koneacademy.io",
    framework: "Lab Setup",
    difficulty: "Embedded Systems",
    cause: "Kone Lab hosts remote hardware environments containing microcontrollers (like ESP32 and micro:bit), sensory setups, and edge gateways. Students write code, flash the remote devices, and read telemetry data in real-time.",
    solution: "1. Request SSH Credentials: Ask your mentor for your secure laboratory access token and private key.\n2. Configure the SSH Tunnel: Add the SSH config host definition to map port 2222 to the remote board controller.\n3. Flash Firmware: Deploy your C++ or MicroPython script to compile and flash the board remotely, then check the logs via screen/minicom.",
    badCode: `# Direct local serial connection (Doesn't scale)
esptool.py --port /dev/ttyUSB0 --baud 115200 write_flash 0x1000 main.bin
# (Requires board plugged into your local USB port)`,
    goodCode: `# Remote gateway flashing over secure SSH tunnel
ssh -L 8888:127.0.0.1:8888 student@lab.koneacademy.io
# Flash edge gateway over WebSocket / MQTT remote flashing service
curl -X POST http://localhost:8888/flash -d @firmware.bin`
  },
  {
    slug: "git-workflows",
    title: "Kone Code: Git Workflows & Collaborative Standards",
    errorText: "git checkout -b feature/your-name-docs-upgrade",
    framework: "Team Workflow",
    difficulty: "Best Practices",
    cause: "All curriculum submissions, documentation edits, and software products at Kone Academy are reviewed and deployed via Git. Following clean branching and pull request standards keeps build pipelines stable and code high-quality.",
    solution: "1. Branching Strategy: Always branch off 'main'. Use 'feature/your-name-topic' or 'fix/your-name-issue'.\n2. Commit Guidelines: Write short, descriptive commit messages prefixed by the category (e.g. 'feat: add telemetry logging', 'fix: correct scroll bounce').\n3. Pull Requests: Open your PR against the main repository and request review from your cohort leader or mentor.",
    badCode: `git add .
git commit -m "update code"
git push origin main
# (Direct push to main without review, dirty commit message)`,
    goodCode: `git checkout -b feature/jdoe-docs-refactor
git commit -m "docs: balance layout and update button gradients"
git push origin feature/jdoe-docs-refactor
# (Branch created, descriptive message, open PR for review)`
  }
];

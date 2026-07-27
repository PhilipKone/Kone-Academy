import React, { useState, useEffect, useRef } from 'react';
import './InteractiveTerminal.css';

const COMMANDS = {
  help: `Available commands:
  tracks      - List all 12 Kone Technology Tracks & Stack Blueprints
  challenge   - Launch an interactive developer code challenge
  about       - Vision and purpose of Kone Academy
  neofetch    - Show system information and ASCII brand logo
  enroll      - Launch the native onboarding & syllabus builder
  clear       - Clear terminal screen
  easteregg   - Reveal hidden developer message`,

  about: `Kone Academy is an advanced technology research & engineering ecosystem.
We empower developers, researchers, and hardware builders with 12 specialized corporate tracks,
48 module micro-projects, 24 sub-system mini-projects, and 12 production capstone deployments.`,

  tracks: `⚡ KONE ACADEMY 12 TECHNOLOGY TRACKS:
--------------------------------------------------
1.  [Pay]      Fintech & Ledger Gateways (Go, Postgres, ACID)
2.  [Farms]    Agritech & Environmental IoT (ESP32, MQTT, TimescaleDB)
3.  [Warp]     Geospatial Dispatch Logistics (NodeJS, Redis GEO, Leaflet)
4.  [Studio]   3D WebGL & Shader Graphics (Three.js, GLSL, R3F)
5.  [AI]       Neural RAG Vector Search (Python, PyTorch, Qdrant)
6.  [Consult]  Academic Research Analytics (R, Python, LaTeX, SciPy)
7.  [Lab]      Embedded Hardware Prototyping (Embedded C++, KiCAD)
8.  [Code]     Full-Stack SaaS Web Apps (React, TypeScript, Postgres)
9.  [Digital]  Cloud DevOps & Kubernetes (Docker, K8s, Terraform)
10. [Kids]     Gamified Youth STEM Robotics (Scratch, Micro:bit)
11. [Shop]     E-Commerce & Checkout Systems (React, Stripe, Express)
12. [Tech]     Enterprise Security & Audit (OWASP, SOC2, AWS VPC)

Type "challenge" to test your code skills!`,

  join: `Ready to initialize your cohort path?
1. Type "enroll" right here in this shell to launch the wizard.
2. Or click the "Start Learning" button in the top navigation bar.`,

  easteregg: `🚀 "The best way to predict the future is to invent it." - Alan Kay
Engineered with precision by the Kone Academy core team.`,

  neofetch: `      .::::::::.     OS: KA-SHELL v2.0.0
    .::'      '::.   Host: Kone Academy Collective
   .::          ::.  Ecosystem: 12 Active Tech Tracks
   ::.   K A  .::  Kernel: React 18 / Vite 5
   '::.        .::'  Status: Online & Operational
     '::::::::'      Uptime: 2026 cycles`
};

const CHALLENGES = [
  {
    id: 1,
    title: "Fintech Balance Locking Challenge (Kone Pay)",
    description: "Fix the race condition query when transferring funds in PostgreSQL.",
    task: 'Type: run SELECT * FROM accounts WHERE id = 1 FOR UPDATE;',
    expected: "run select * from accounts where id = 1 for update;"
  },
  {
    id: 2,
    title: "Geospatial Radius Query Challenge (Kone Warp)",
    description: "Write the Redis command to find drivers within 5km of GPS (5.6037, -0.1870).",
    task: 'Type: run GEORADIUS drivers 5.6037 -0.1870 5 km',
    expected: "run georadius drivers 5.6037 -0.1870 5 km"
  }
];

const INITIAL_LINES = [
  'Kone Academy Shell [v2.0.0]',
  'Initializing KA-SHELL core runtime environment...',
  '✓ 12 Technology Stack Blueprints loaded.',
  '✓ Interactive Sandbox Execution Engine online.',
  '',
  'Type "help" or "tracks" to explore available engineering modules.',
  ''
];

const InteractiveTerminal = ({ onOpenOnboarding }) => {
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [initIndex, setInitIndex] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (initIndex < INITIAL_LINES.length) {
      const delay = initIndex === 1 ? 300 : 120;
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, { type: 'output', text: INITIAL_LINES[initIndex] }]);
        setInitIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsInitializing(false);
    }
  }, [initIndex]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = inputValue.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: inputValue }];

      if (trimmedCmd === '') {
        setHistory(newHistory);
        setInputValue('');
        return;
      }

      if (trimmedCmd === 'clear') {
        setHistory([]);
      } else if (trimmedCmd === 'enroll') {
        setHistory([
          ...newHistory,
          { type: 'output', text: "Launching native onboarding modal..." }
        ]);
        if (onOpenOnboarding) onOpenOnboarding();
      } else if (trimmedCmd === 'challenge') {
        const challenge = CHALLENGES[activeChallengeIndex % CHALLENGES.length];
        setHistory([
          ...newHistory,
          { 
            type: 'output', 
            text: `🎯 CHALLENGE ${challenge.id}: ${challenge.title}\n${challenge.description}\n👉 ${challenge.task}` 
          }
        ]);
      } else if (trimmedCmd.startsWith('run ')) {
        const currentChallenge = CHALLENGES[activeChallengeIndex % CHALLENGES.length];
        if (trimmedCmd === currentChallenge.expected) {
          setHistory([
            ...newHistory,
            { 
              type: 'output', 
              text: `✅ PASS! Solution Verified. 100 XP awarded!\nType "challenge" to attempt the next exercise.` 
            }
          ]);
          setActiveChallengeIndex(prev => prev + 1);
        } else {
          setHistory([
            ...newHistory,
            { 
              type: 'output', 
              text: `❌ FAIL: Incorrect solution.\nExpected format:\n${currentChallenge.task}` 
            }
          ]);
        }
      } else if (COMMANDS[trimmedCmd]) {
        setHistory([
          ...newHistory,
          { type: 'output', text: COMMANDS[trimmedCmd] }
        ]);
      } else {
        setHistory([
          ...newHistory,
          {
            type: 'output',
            text: `bash: command not found: ${inputValue}. Type "help" or "tracks" to see options.`
          }
        ]);
      }

      setInputValue('');
    }
  };

  return (
    <div className="terminal-window glass-panel" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
        <div className="terminal-title">bash — ka-shell</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="terminal-history">
          {history.map((line, idx) => (
            <div key={idx} className={line.type === 'input' ? 'terminal-line' : 'terminal-output'}>
              {line.type === 'input' ? (
                <>
                  <span className="prompt">user@kone:~$</span>
                  <span className="command">{line.text}</span>
                </>
              ) : (
                <pre>{line.text}</pre>
              )}
            </div>
          ))}
        </div>

        {!isInitializing && (
          <div className="terminal-input-line">
            <span className="prompt">user@kone:~$</span>
            <span className="typed-input">{inputValue}</span>
            <span className="cursor">|</span>
            <input
              ref={inputRef}
              type="text"
              className="hidden-terminal-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal prompt input"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;

import React, { useState, useEffect, useRef } from 'react';
import './InteractiveTerminal.css';

const COMMANDS = {
  help: `Available commands:
  about       - Vision and purpose of Kone Academy
  divisions   - Overview of our 3 core modules (Consult, Code, Lab)
  neofetch    - Show system information and ASCII brand logo
  join        - Links and instructions to start learning
  clear       - Clear the terminal history
  easteregg   - Reveal a secret developer message`,
  
  about: `Kone Academy is a multidisciplinary technology and innovation collective.
We foster a global community of learners, researchers, and builders,
where high-quality education and professional resources are made accessible.
We leverage collective talent to provide custom, high-performance solutions.
Research, code, and engineer the future the right way.`,
  
  divisions: `🔬 [RESEARCH] Kone Consult:
  Research guidance, topic selection, and complex data analysis.
  Active - Empowering academic and professional publications.

💻 [CODING] Kone Code:
  Software development and comprehensive programming (Python, C++, R).
  Enrollment Open - Master deep computational concepts.

🛠️ [ENGINEERING] Kone Lab:
  Practical engineering, 3D modeling, and embedded systems.
  Lab Access - Arduino, circuit simulation, and automation.`,

  join: `Ready to initialize your journey?
1. Click the "Start Learning" button in the Hero section.
2. Direct Application: https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform
3. Join our Discord Community to collaborate: https://discord.gg/Ab4SCxPgUK`,

  easteregg: `Congratulations, you found a hidden segment!
  
"The best way to predict the future is to invent it." - Alan Kay
Engineered with precision by the Kone Academy developer collective.
Thank you for exploring our ecosystem! 🚀`,

  neofetch: `      .::::::::.     OS: KCA-OS v1.2.0
    .::'      '::.   Host: Kone Academy Collective
   .::          ::.  Ecosystem: Active / Online
   ::.   K C A  .::  Kernel: React 18 / Vite 5
   '::.        .::'  Theme: Deep Slate / Neon Blue
     '::::::::'      Uptime: 2026 cycles`
};

const INITIAL_LINES = [
  'Kone Academy [Version 1.2.0]',
  'Initializing KCA-OS core services...',
  '✓ Research Engine (Kone Consult) loaded.',
  '✓ Coding Engine (Kone Code) active.',
  '✓ Engineering Engine (Kone Lab) online.',
  '',
  'Type "help" to explore the academy.',
  ''
];

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [initIndex, setInitIndex] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);
  
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Run startup messages sequence
  useEffect(() => {
    if (initIndex < INITIAL_LINES.length) {
      const delay = initIndex === 1 ? 400 : 150; // Pause slightly on initializing services
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, { type: 'output', text: INITIAL_LINES[initIndex] }]);
        setInitIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsInitializing(false);
    }
  }, [initIndex]);

  // Always scroll to bottom when history changes
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
            text: `bash: command not found: ${inputValue}. Type "help" to see available commands.` 
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
        <div className="terminal-title">bash — ka-cli</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="terminal-history">
          {history.map((line, idx) => (
            <div key={idx} className={line.type === 'input' ? 'terminal-line' : 'terminal-output'}>
              {line.type === 'input' ? (
                <>
                  <span className="prompt">user@ka:~$</span>
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
            <span className="prompt">user@ka:~$</span>
            <span className="typed-input">{inputValue}</span>
            <span className="cursor">|</span>
            <input
              ref={inputRef}
              type="text"
              className="hidden-terminal-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
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

import React from 'react';
import TypingAnimation from './TypingAnimation';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">v1.0 Now Available</div>
          <h1 className="hero-title">
            Research. Coding.<br />
            <span className="text-gradient">Engineering.</span>
          </h1>
          <p className="hero-subtitle">
            The open-source initiative dedicated to pioneering research and building the next generation of engineers.<br />
            <span className="text-white">Research, code and engineer the future the right way.</span>
          </p>
          <div className="hero-actions">
            <button className="btn-primary big">Start Learning</button>
            <a href="https://PhilipKone.github.io/Kone-Consult/#/documentation" className="btn-secondary big" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              View Documentation
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="terminal-title">bash — kca-cli</div>
            </div>
            <div className="terminal-body">
              <div className="command-line">
                <span className="prompt">user@kca:~$</span>
                <span className="command"> init learning-path</span>
              </div>
              <div className="output">
                <TypingAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background-glow"></div>
    </section>
  );
};

export default Hero;

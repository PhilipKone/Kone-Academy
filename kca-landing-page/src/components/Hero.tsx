import React from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import InteractiveTerminal from './InteractiveTerminal';
import './Hero.css';

interface HeroProps {
  onOpenOnboarding?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenOnboarding }) => {
  const handleDocsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/docs');
    window.dispatchEvent(new Event('popstate'));
  };

  const handleStartLearning = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/training');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">v1.3 Now Available</div>
          <h1 className="hero-title">
            Research. Coding.<br />
            <span className="text-gradient">Engineering.</span>
          </h1>
          <p className="hero-subtitle">
            The open-source initiative dedicated to pioneering research and building the next generation of engineers.<br />
            <span className="text-white">Research, code, and engineer the future the right way.</span>
          </p>
          <div className="hero-actions">
            <button onClick={handleStartLearning} className="btn-primary cute-pill" style={{ border: 'none', cursor: 'pointer' }}>
              <FaGraduationCap className="btn-icon" />
              <span>Start Learning</span>
            </button>
            <a href="/docs" onClick={handleDocsClick} className="btn-secondary cute-pill" style={{ textDecoration: 'none' }}>
              <FaBook className="btn-icon" />
              <span>View Docs</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <InteractiveTerminal onOpenOnboarding={onOpenOnboarding} />
        </div>
      </div>

      <div className="hero-background-glow"></div>
    </section>
  );
};

export default Hero;

import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import './Hero.css';

const HeroMoon = React.lazy(() => import('./HeroMoon'));

const Hero = () => {
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    window.__PRERENDER_INJECTED
  );

  const docsUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && !isPrerender
    ? 'http://localhost:3001/docs?category=general'
    : 'https://consult.koneacademy.io/docs?category=general';

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">v1.2 Now Available</div>
          <h1 className="hero-title">
            Research. Coding.<br />
            <span className="text-gradient">Engineering.</span>
          </h1>
          <p className="hero-subtitle">
            The open-source initiative dedicated to pioneering research and building the next generation of engineers.<br />
            <span className="text-white">Research, code, and engineer the future the right way.</span>
          </p>
          <div className="hero-actions">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary big" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Start Learning</a>
            <a href={docsUrl} target="_blank" rel="noreferrer" className="btn-secondary big" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              View Documentation
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <InteractiveTerminal />
        </div>
      </div>

      {!isPrerender && (
        <React.Suspense fallback={<div className="hero-moon-placeholder" />}>
          <HeroMoon />
        </React.Suspense>
      )}
      <div className="hero-background-glow"></div>
    </section>
  );
};

export default Hero;

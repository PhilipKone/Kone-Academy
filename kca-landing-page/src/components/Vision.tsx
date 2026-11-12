import React, { useState } from 'react';
import './Vision.css';

const Vision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const visionPoints = [
    {
      title: 'Global Builder Collective',
      desc: 'Fostering an inclusive, high-caliber ecosystem of developers, researchers, and hardware engineers across Africa and globally.'
    },
    {
      title: 'Applied Systems Engineering',
      desc: 'Blending accessible education with production-grade engineering, from IoT embedded prototypes to AI neural search.'
    },
    {
      title: 'Commercial Impact & Scale',
      desc: 'Empowering startups and enterprises to solve critical real-world challenges through computational precision.'
    }
  ];

  const missionPoints = [
    {
      title: 'Direct Hands-On Execution',
      desc: 'Bridging theoretical computer science and commercial execution through 12 specialized corporate lab tracks.'
    },
    {
      title: 'Open Knowledge & Research',
      desc: 'Publishing rigorous methodology protocols, architectural blueprints, and reproducible research for public benefit.'
    },
    {
      title: 'Sustainable Competitive Advantage',
      desc: 'Deploying custom digital solutions, cloud infrastructure, and data platforms that deliver measurable value.'
    }
  ];

  return (
    <section className="vision" id="vision">
      <div className="vision-container">
        <div className="vision-header">
          <span className="vision-badge">OUR ARCHITECTURE & CORE PURPOSE</span>
          <h2 className="section-title">
            Built for <span className="text-gradient">Innovators.</span>
          </h2>
          <p className="vision-subtitle">
            Pioneering the intersection of academic research, high-performance software, and physical engineering.
          </p>
        </div>

        {/* Mobbin-style iOS Segmented Control */}
        <div className="vision-segmented-wrapper">
          <div className="vision-segmented-control" role="tablist" aria-label="Vision and Mission Selector">
            <button
              role="tab"
              aria-selected={activeTab === 'vision'}
              className={`vision-segment-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Our Vision</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'mission'}
              className={`vision-segment-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <span>Our Mission</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="vision-content-card glass-panel">
          <div className="vision-card-header">
            <div className="vision-pill-label">
              {activeTab === 'vision' ? 'LONG-TERM HORIZON' : 'DAILY MANDATE'}
            </div>
            <h3 className="vision-display-title">
              {activeTab === 'vision' 
                ? 'Empowering the next billion computational thinkers and builders.' 
                : 'Deploying high-performance software, research, and hardware solutions.'}
            </h3>
          </div>

          <div className="vision-features-grid">
            {(activeTab === 'vision' ? visionPoints : missionPoints).map((point, index) => (
              <div key={index} className="vision-feature-item">
                <div className="vision-feature-bullet">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="vision-feature-text">
                  <h4 className="vision-feature-title">{point.title}</h4>
                  <p className="vision-feature-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Key Metrics */}
        <div className="vision-stats-row">
          <div className="vision-stat-card">
            <span className="vision-stat-num">12</span>
            <span className="vision-stat-label">Specialized Tech Tracks</span>
          </div>
          <div className="vision-stat-card">
            <span className="vision-stat-num">100%</span>
            <span className="vision-stat-label">Hands-On Code Sandbox</span>
          </div>
          <div className="vision-stat-card">
            <span className="vision-stat-num">24/7</span>
            <span className="vision-stat-label">Cloud Lab Infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

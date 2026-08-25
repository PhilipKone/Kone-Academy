import React from 'react';
import './Divisions.css';

interface DivisionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  status: string;
  link: string;
}

const Divisions: React.FC = () => {
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    (window as any).__PRERENDER_INJECTED
  );
  const isLocal = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && !isPrerender;
  
  const divisions: DivisionItem[] = [
    {
      id: 'research',
      title: 'Research',
      subtitle: 'Kone Consult',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      description: 'Applied data science, academic mentorship, and methodology protocols.',
      features: ['Data Analysis', 'Research Papers', 'Methodology'],
      status: 'Active',
      link: isLocal ? 'http://localhost:3001/' : 'https://consult.koneacademy.io/'
    },
    {
      id: 'coding',
      title: 'Coding',
      subtitle: 'Kone Code',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      ),
      description: 'Production software engineering from Python, TypeScript, to C++ and Go.',
      features: ['Web Engineering', 'Data Systems', 'Compilers'],
      status: 'Enrollment Open',
      link: isLocal ? 'http://localhost:5174/' : 'https://code.koneacademy.io/'
    },
    {
      id: 'engineering',
      title: 'Engineering',
      subtitle: 'Kone Lab',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      description: 'Embedded microcontrollers, IoT telemetry, and 3D physical computing.',
      features: ['IoT Microcontrollers', '3D Simulation', 'Circuit Design'],
      status: 'Lab Access',
      link: isLocal ? 'http://localhost:5175/' : 'https://lab.koneacademy.io/'
    }
  ];

  return (
    <section className="divisions" id="divisions">
      <div className="section-header">
        <h2 className="section-title">Core <span className="text-gradient">Modules</span></h2>
        <p className="section-subtitle">Select a specialized division to begin your journey.</p>
      </div>

      <div className="divisions-grid">
        {divisions.map((div, index) => (
          <div key={div.id} className="division-card glass-panel">
            <div className="card-header">
              <div className="card-icon">{div.icon}</div>
              <div className="card-status">
                <span className="status-dot" style={{ animationDelay: `${index * 0.4}s` }}></span>
                {div.status}
              </div>
            </div>

            <div className="card-content">
              <h3 className="card-title">{div.title}</h3>
              <p className="card-subtitle">{div.subtitle}</p>
              <p className="card-description">{div.description}</p>

              <div className="card-features">
                {div.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a
                href={div.link}
                className="btn-link"
                target={div.link.startsWith('?') ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                Access Module &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Divisions;

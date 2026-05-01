import React, { useState, useRef, useEffect } from 'react';
import './AppLauncher.css';

/* ── App Data ─────────────────────────────────────────── */

const apps = [
  {
    name: 'Kone Consult',
    logo: '/app-consult.svg',
    color: 'consult',
    glow: 'rgba(37, 99, 235, 0.12)',
    url: 'https://consult.koneacademy.io',
  },
  {
    name: 'Kone Code',
    logo: '/app-code.svg',
    color: 'code',
    glow: 'rgba(34, 197, 94, 0.12)',
    url: 'https://code.koneacademy.io',
  },
  {
    name: 'Kone Lab',
    logo: '/app-lab.svg',
    color: 'lab',
    glow: 'rgba(168, 85, 247, 0.12)',
    url: 'https://lab.koneacademy.io',
  },
  {
    name: 'Kone Digital',
    logo: '/app-digital.svg',
    color: 'digital',
    glow: 'rgba(0, 255, 255, 0.12)',
    url: 'https://digital.koneacademy.io',
  },
  {
    name: 'Anim Studio',
    logo: '/app-studio.svg',
    color: 'studio',
    glow: 'rgba(239, 68, 68, 0.12)',
    url: 'https://github.com/PhilipKone/anim-studio',
  },
  {
    name: 'Kone Kids',
    logo: '/app-kids.svg',
    color: 'kids',
    glow: 'rgba(245, 158, 11, 0.12)',
    url: 'https://kids.koneacademy.io',
  },
  {
    name: 'Kone Shop',
    logo: '/app-shop.svg',
    color: 'shop',
    glow: 'rgba(236, 72, 153, 0.12)',
    url: 'https://shop.koneacademy.io',
  },
  {
    name: 'Academy',
    logo: '/logo-circle-blue.svg',
    color: 'academy',
    glow: 'rgba(88, 166, 255, 0.12)',
    url: 'https://koneacademy.io',
  },
];

/* ── Component ────────────────────────────────────────── */

const AppLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (launcherRef.current && !launcherRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="app-launcher" ref={launcherRef}>
      <button
        className={`app-launcher-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open app launcher"
        title="Kone Apps"
      >
        <span className="waffle-icon">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="waffle-dot" />
          ))}
        </span>
      </button>

      <div className={`app-launcher-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="app-launcher-dropdown-header">Kone Ecosystem</div>
        <div className="app-grid">
          {apps.map((app) => (
            <a
              key={app.name}
              className="app-grid-item"
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--item-glow': app.glow }}
              onClick={() => setIsOpen(false)}
            >
              <div className={`app-icon app-icon--${app.color}`}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className="app-icon-img"
                />
              </div>
              <span className="app-label">{app.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppLauncher;

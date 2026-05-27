import React, { useState, useRef, useEffect } from 'react';
import './ThemeSelector.css';

export const NEON_THEMES = {
  blue: {
    name: 'Neon Blue',
    primary: '#58a6ff',
    secondary: '#bc8cff',
    glow: 'rgba(88, 166, 255, 0.3)',
    textAccent: '#58a6ff'
  },
  green: {
    name: 'Matrix Green',
    primary: '#3fb950',
    secondary: '#00ffcc',
    glow: 'rgba(63, 185, 80, 0.3)',
    textAccent: '#3fb950'
  },
  pink: {
    name: 'Cyberpunk Pink',
    primary: '#ec4899',
    secondary: '#f43f5e',
    glow: 'rgba(236, 72, 153, 0.3)',
    textAccent: '#ec4899'
  },
  orange: {
    name: 'Lava Orange',
    primary: '#f59e0b',
    secondary: '#ef4444',
    glow: 'rgba(245, 158, 11, 0.3)',
    textAccent: '#f59e0b'
  },
  purple: {
    name: 'Galactic Purple',
    primary: '#9333ea',
    secondary: '#c084fc',
    glow: 'rgba(147, 51, 234, 0.3)',
    textAccent: '#9333ea'
  }
};

export const applyTheme = (themeName) => {
  const theme = NEON_THEMES[themeName];
  if (!theme) return;
  
  const root = document.documentElement;
  root.style.setProperty('--accent-primary', theme.primary);
  root.style.setProperty('--accent-secondary', theme.secondary);
  root.style.setProperty('--shadow-glow', `0 0 15px ${theme.glow}`);
  root.style.setProperty('--text-accent', theme.textAccent);
};

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('blue');
  const dropdownRef = useRef(null);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('kca-neon-theme');
    if (savedTheme && NEON_THEMES[savedTheme]) {
      setActiveTheme(savedTheme);
      applyTheme(savedTheme);
      
      // Update favicons on load
      const iconPath = `/logo-circle-${savedTheme}.svg`;
      const iconLink = document.querySelector('link[rel="icon"]');
      const appleIconLink = document.querySelector('link[rel="apple-touch-icon"]');
      if (iconLink) iconLink.href = iconPath;
      if (appleIconLink) appleIconLink.href = iconPath;
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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

  const handleThemeChange = (themeKey) => {
    setActiveTheme(themeKey);
    applyTheme(themeKey);
    localStorage.setItem('kca-neon-theme', themeKey);
    setIsOpen(false);
    
    // Update favicons dynamically
    const iconPath = `/logo-circle-${themeKey}.svg`;
    const iconLink = document.querySelector('link[rel="icon"]');
    const appleIconLink = document.querySelector('link[rel="apple-touch-icon"]');
    if (iconLink) iconLink.href = iconPath;
    if (appleIconLink) appleIconLink.href = iconPath;

    window.dispatchEvent(new CustomEvent('themeChanged', { detail: themeKey }));
  };

  return (
    <div className="theme-selector" ref={dropdownRef}>
      <button
        className={`theme-selector-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change neon theme"
        title="Change neon theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="palette-icon"
        >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32621 19.4676 5.86435 19.8517 6.45265 20.1342C6.73273 20.2687 7.04257 20.3019 7.33718 20.2223C7.92639 20.0631 8.57724 19.9234 9.27315 19.8242C9.80554 19.7483 10.3475 19.897 10.7411 20.2452L10.7816 20.281C11.1444 20.6019 11.4552 21.0118 11.6848 21.4883C11.7947 21.7166 11.8906 21.9566 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1.5" fill="var(--accent-primary)" />
          <circle cx="11.5" cy="7.5" r="1.5" fill="var(--accent-secondary)" />
          <circle cx="16.5" cy="9.5" r="1.5" fill="#3fb950" />
          <circle cx="15.5" cy="14.5" r="1.5" fill="#f59e0b" />
        </svg>
      </button>

      <div className={`theme-selector-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="theme-selector-dropdown-header">Neon Style Accent</div>
        <div className="theme-options-list">
          {Object.keys(NEON_THEMES).map((key) => {
            const theme = NEON_THEMES[key];
            return (
              <button
                key={key}
                className={`theme-option-item ${activeTheme === key ? 'active' : ''}`}
                onClick={() => handleThemeChange(key)}
              >
                <span
                  className="color-dot"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: `0 0 10px ${theme.glow}`
                  }}
                />
                <span className="theme-label">{theme.name}</span>
                {activeTheme === key && <span className="check-mark">✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

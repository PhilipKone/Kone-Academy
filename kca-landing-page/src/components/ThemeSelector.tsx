import React, { useState, useEffect } from 'react';
import './ThemeSelector.css';

export interface ThemeOption {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  glow: string;
}

export const themes: ThemeOption[] = [
  {
    id: 'blue',
    name: 'Cyber Blue',
    primary: '#00E5FF',
    secondary: '#7B2CBF',
    glow: 'rgba(0, 229, 255, 0.4)',
  },
  {
    id: 'green',
    name: 'Matrix Green',
    primary: '#00FF66',
    secondary: '#059669',
    glow: 'rgba(0, 255, 102, 0.4)',
  },
  {
    id: 'pink',
    name: 'Neon Pink',
    primary: '#FF007F',
    secondary: '#7000FF',
    glow: 'rgba(255, 0, 127, 0.4)',
  },
  {
    id: 'orange',
    name: 'Solar Orange',
    primary: '#FF6B00',
    secondary: '#FF003C',
    glow: 'rgba(255, 107, 0, 0.4)',
  },
  {
    id: 'purple',
    name: 'Void Purple',
    primary: '#A855F7',
    secondary: '#EC4899',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
];

export const applyTheme = (themeId: string) => {
  const theme = themes.find((t) => t.id === themeId) || themes[0];
  const root = document.documentElement;

  root.style.setProperty('--accent-primary', theme.primary);
  root.style.setProperty('--accent-secondary', theme.secondary);
  root.style.setProperty('--accent-glow', theme.glow);

  localStorage.setItem('kca-neon-theme', theme.id);

  // Dispatch custom event for components listening to theme changes
  window.dispatchEvent(
    new CustomEvent('themeChanged', { detail: theme.id })
  );
};

const ThemeSelector: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>('blue');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('kca-neon-theme') || 'blue';
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  const currentThemeObj = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <div className="theme-selector-container">
      <button
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Neon Theme"
        aria-label="Change Neon Theme"
        style={{
          borderColor: currentThemeObj.primary,
          boxShadow: `0 0 10px ${currentThemeObj.glow}`,
        }}
      >
        <span
          className="theme-dot-current"
          style={{ background: currentThemeObj.primary }}
        />
      </button>

      {isOpen && (
        <div className="theme-dropdown glass-panel">
          <div className="theme-dropdown-header">NEON THEMES</div>
          <div className="theme-options-grid">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-option-btn ${activeTheme === t.id ? 'active' : ''}`}
                onClick={() => handleSelectTheme(t.id)}
                style={{
                  '--theme-color': t.primary,
                  '--theme-glow': t.glow,
                } as React.CSSProperties}
              >
                <span
                  className="theme-swatch"
                  style={{ background: t.primary }}
                />
                <span className="theme-name">{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;

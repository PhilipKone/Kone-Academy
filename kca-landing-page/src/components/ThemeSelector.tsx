import React, { useState, useEffect, useRef } from 'react';
import { FaPalette, FaCheck } from 'react-icons/fa';
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('kca-neon-theme') || 'blue';
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Close dropdown on click outside or escape key safely
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  const currentThemeObj = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <div className="theme-selector-container" ref={containerRef}>
      <button
        className={`theme-selector-trigger ${isOpen ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        title="Change Neon Theme"
        aria-label="Change Neon Theme"
        style={{
          borderColor: currentThemeObj.primary,
          boxShadow: `0 0 10px ${currentThemeObj.glow}`,
        }}
      >
        <FaPalette className="palette-icon" style={{ color: currentThemeObj.primary }} />
      </button>

      <div className={`theme-selector-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="theme-selector-dropdown-header">NEON THEMES</div>
        <div className="theme-options-list">
          {themes.map((t) => {
            const isActive = activeTheme === t.id;
            return (
              <button
                key={t.id}
                className={`theme-option-item ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTheme(t.id);
                }}
              >
                <span
                  className="color-dot"
                  style={{
                    background: t.primary,
                    boxShadow: isActive ? `0 0 10px ${t.glow}` : `0 0 4px ${t.glow}`,
                  }}
                />
                <span className="theme-label">{t.name}</span>
                {isActive && <FaCheck className="check-mark" style={{ color: t.primary }} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

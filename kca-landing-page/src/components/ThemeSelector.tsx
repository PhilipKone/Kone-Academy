import React, { useState, useEffect, useRef } from 'react';
import { FaPalette, FaCheck } from 'react-icons/fa';
import './ThemeSelector.css';

export interface ThemeOption {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  surface: string;
  border: string;
  glow: string;
}

export const themes: ThemeOption[] = [
  {
    id: 'blue',
    name: 'Cyber Azure',
    primary: '#38bdf8',
    secondary: '#0284c7',
    surface: 'rgba(56, 189, 248, 0.08)',
    border: 'rgba(56, 189, 248, 0.22)',
    glow: 'rgba(56, 189, 248, 0.20)',
  },
  {
    id: 'green',
    name: 'Matrix Emerald',
    primary: '#10b981',
    secondary: '#059669',
    surface: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.22)',
    glow: 'rgba(16, 185, 129, 0.20)',
  },
  {
    id: 'purple',
    name: 'Void Amethyst',
    primary: '#a855f7',
    secondary: '#7c3aed',
    surface: 'rgba(168, 85, 247, 0.08)',
    border: 'rgba(168, 85, 247, 0.22)',
    glow: 'rgba(168, 85, 247, 0.20)',
  },
  {
    id: 'orange',
    name: 'Solar Amber',
    primary: '#f59e0b',
    secondary: '#d97706',
    surface: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.22)',
    glow: 'rgba(245, 158, 11, 0.20)',
  },
  {
    id: 'pink',
    name: 'Crimson Coral',
    primary: '#f43f5e',
    secondary: '#e11d48',
    surface: 'rgba(244, 63, 94, 0.08)',
    border: 'rgba(244, 63, 94, 0.22)',
    glow: 'rgba(244, 63, 94, 0.20)',
  },
];

export const applyTheme = (themeId: string) => {
  const theme = themes.find((t) => t.id === themeId) || themes[0];
  const root = document.documentElement;

  root.style.setProperty('--accent-primary', theme.primary);
  root.style.setProperty('--accent-secondary', theme.secondary);
  root.style.setProperty('--accent-surface', theme.surface);
  root.style.setProperty('--accent-border', theme.border);
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

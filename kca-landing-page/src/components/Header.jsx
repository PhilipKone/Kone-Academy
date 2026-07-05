import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AppLauncher from './AppLauncher';
import ThemeSelector from './ThemeSelector';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('blue');

  // Dynamically set login URL based on environment (with react-snap pre-render check)
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    window.__PRERENDER_INJECTED
  );

  const loginUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && !isPrerender
    ? 'http://localhost:3001/login'
    : 'https://consult.koneacademy.io/login';

  useEffect(() => {
    const savedTheme = localStorage.getItem('kca-neon-theme') || 'blue';
    setActiveTheme(savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleThemeChange = (e) => {
      setActiveTheme(e.detail);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('themeChanged', handleThemeChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  const themeLogoMap = {
    blue: '/logo-circle-blue.svg',
    green: '/logo-circle-green.svg',
    pink: '/logo-circle-pink.svg',
    orange: '/logo-circle-orange.svg',
    purple: '/logo-circle-purple.svg',
  };

  const currentLogo = themeLogoMap[activeTheme] || '/logo-circle-blue.svg';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNav = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={(e) => handleNav(e, '/')}>
          <img src={currentLogo} alt="KCA Logo" className="logo-icon" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
          <span className="logo-text" style={{ cursor: 'pointer' }}>Kone Academy</span>
        </div>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/training" className="nav-link" onClick={(e) => handleNav(e, '/training')}>Courses</a>
          <a href="/protocols" className="nav-link" onClick={(e) => handleNav(e, '/protocols')}>Research</a>
          <a href="/docs" className="nav-link" onClick={(e) => handleNav(e, '/docs')}>Docs</a>
          <a href="#vision" className="nav-link" onClick={closeMobileMenu}>Vision</a>
          <a href="#divisions" className="nav-link" onClick={closeMobileMenu}>Divisions</a>
          <div className="mobile-actions">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <AppLauncher />
              <ThemeSelector />
            </div>
            <a href={loginUrl} className="btn-login" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center', textDecoration: 'none', color: 'var(--text-primary)' }}>Login</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Get Started</a>
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <AppLauncher />
          <ThemeSelector />
          <a href={loginUrl} className="btn-login" style={{ marginRight: '1rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Login</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;



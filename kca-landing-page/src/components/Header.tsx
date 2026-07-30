import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaGraduationCap, FaFlask, FaBook, FaUser } from 'react-icons/fa';
import AppLauncher from './AppLauncher';
import ThemeSelector from './ThemeSelector';
import './Header.css';

interface HeaderProps {
  onOpenOnboarding?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenOnboarding }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>('blue');
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Dynamically set login URL based on environment (with react-snap pre-render check)
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    (window as any).__PRERENDER_INJECTED
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
    
    const handleThemeChange = (e: any) => {
      setActiveTheme(e.detail);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  const themeLogoMap: Record<string, string> = {
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

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    setIsMobileMenuOpen(false);
    setCurrentPath(path);
  };

  const handleGetStarted = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.history.pushState({}, '', '/training');
    window.dispatchEvent(new Event('popstate'));
    setIsMobileMenuOpen(false);
    setCurrentPath('/training');
  };

  return (
    <>
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
            <button onClick={handleGetStarted} className="btn-primary" style={{ border: 'none', cursor: 'pointer', display: 'inline-block', textAlign: 'center', width: '100%' }}>Get Started</button>
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <AppLauncher />
          <ThemeSelector />
          <a href={loginUrl} className="btn-login" style={{ marginRight: '1rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Login</a>
          <button onClick={handleGetStarted} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Get Started</button>
        </div>
      </div>
    </header>

    {/* Mobile Bottom Navigation Bar */}
    <div className="mobile-bottom-nav">
      <a href="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`} onClick={(e) => handleNav(e, '/')}>
        <FaHome />
        <span>Home</span>
      </a>
      <a href="/training" className={`mobile-nav-item ${currentPath === '/training' ? 'active' : ''}`} onClick={(e) => handleNav(e, '/training')}>
        <FaGraduationCap />
        <span>Courses</span>
      </a>
      <a href="/protocols" className={`mobile-nav-item ${currentPath === '/protocols' ? 'active' : ''}`} onClick={(e) => handleNav(e, '/protocols')}>
        <FaFlask />
        <span>Research</span>
      </a>
      <a href="/docs" className={`mobile-nav-item ${currentPath.startsWith('/docs') ? 'active' : ''}`} onClick={(e) => handleNav(e, '/docs')}>
        <FaBook />
        <span>Docs</span>
      </a>
      <a href={loginUrl} className={`mobile-nav-item ${currentPath === '/login' ? 'active' : ''}`}>
        <FaUser />
        <span>Login</span>
      </a>
    </div>
    </>
  );
};

export default Header;

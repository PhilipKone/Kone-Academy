import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/logo-circle-blue.svg'} alt="KCA Logo" className="logo-icon" />
          <span className="logo-text">Kone Academy</span>
        </div>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#vision" className="nav-link" onClick={closeMobileMenu}>Vision</a>
          <a href="#divisions" className="nav-link" onClick={closeMobileMenu}>Divisions</a>
          <a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a>
          <div className="mobile-actions">
            <a href="https://github.com/PhilipKone/Kone-Academy" target="_blank" rel="noreferrer" className="btn-github">GitHub</a>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <a href="https://github.com/PhilipKone/Kone-Academy" target="_blank" rel="noreferrer" className="btn-github">
            GitHub
          </a>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AppLauncher from './AppLauncher';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamically set login URL based on environment
  const loginUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3001/login'
    : 'https://consult.koneacademy.io/login';

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
          <img src="/logo-circle-blue.svg" alt="KCA Logo" className="logo-icon" />
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
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <AppLauncher />
            </div>
            <a href={loginUrl} className="btn-login" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center', textDecoration: 'none', color: 'var(--text-primary)' }}>Login</a>
            <a href="https://github.com/PhilipKone/Kone-Academy" target="_blank" rel="noreferrer" className="btn-github">GitHub</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Get Started</a>
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <AppLauncher />
          <a href={loginUrl} className="btn-login" style={{ marginRight: '1rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>Login</a>
          <a href="https://github.com/PhilipKone/Kone-Academy" target="_blank" rel="noreferrer" className="btn-github">
            GitHub
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;


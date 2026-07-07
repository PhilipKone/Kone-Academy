import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaGithub, FaDiscord, FaLinkedin, FaFacebook, FaInstagram, FaSlack, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [activeTheme, setActiveTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('kca-neon-theme') || 'blue';
    setActiveTheme(savedTheme);

    const handleThemeChange = (e) => {
      setActiveTheme(e.detail);
    };

    window.addEventListener('themeChanged', handleThemeChange);
    return () => {
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

  const handleNav = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo" onClick={(e) => handleNav(e, '/')} style={{ cursor: 'pointer' }}>
            <img src={currentLogo} alt="KCA Logo" className="logo-icon" style={{ width: '40px', height: '40px' }} />
            <span className="logo-text">Kone Academy</span>
          </div>
          <p className="footer-tagline">Research. Coding. Engineering.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h3>Platform</h3>
            <a href="/training" onClick={(e) => handleNav(e, '/training')}>Academy Courses</a>
            <a href="/sitemap" onClick={(e) => handleNav(e, '/sitemap')}>Sitemap</a>
            <a href="#vision">Vision</a>
            <a href="#divisions">Divisions</a>
            <a href="#services">Services</a>
          </div>
          <div className="link-group">
            <h3>Research</h3>
            <a href="/protocols" onClick={(e) => handleNav(e, '/protocols')}>Methodology Protocols</a>
            <a href="/docs" onClick={(e) => handleNav(e, '/docs')}>Documentation</a>
            <a href="https://consult.koneacademy.io/blog">Academic Blog</a>
          </div>
          <div className="link-group">
            <h3>Ecosystem</h3>
            <a href="https://code.koneacademy.io">Kone Code</a>
            <a href="https://lab.koneacademy.io">Kone Lab</a>
            <a href="https://ai.koneacademy.io">Kone AI</a>
            <a href="https://consult.koneacademy.io">Kone Consult</a>
            <a href="https://farms.koneacademy.io">Kone Farms</a>
            <a href="https://kids.koneacademy.io">Kone Kids</a>
            <a href="https://shop.koneacademy.io">Kone Shop</a>
            <a href="https://warp.koneacademy.io">Kone Warp</a>
            <a href="https://digital.koneacademy.io">Kone Digital</a>
          </div>
          <div className="link-group">
            <h3>Community</h3>
            <div className="social-icons">
              <a href="https://x.com/koneacademy" aria-label="X"><FaXTwitter /></a>
              <a href="https://www.tiktok.com/@koneacademy?_r=1&_t=ZM-931L3z5lu71" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://whatsapp.com/channel/0029VbBdOevJf05WDhlsoj17" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://discord.gg/Ab4SCxPgUK" target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord /></a>
              <a href="https://www.linkedin.com/company/konecodeacdemy/?viewAsMember=true" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.facebook.com/profile.php?id=61584327765846" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/koneacademy?igsh=bnlnaTZ5YmNsMXJ1&utm_source=qr" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://join.slack.com/t/koneacademy/shared_invite/zt-3te5lrqpj-d3gixasFIoSerlBnoQ1UMg" target="_blank" rel="noreferrer" aria-label="Slack"><FaSlack /></a>
              <a href="https://youtube.com/@koneacademy?si=zqEGBiiu0NRdNk6p" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kone Academy. Open Source License.</p>
      </div>
    </footer>
  );
};

export default Footer;


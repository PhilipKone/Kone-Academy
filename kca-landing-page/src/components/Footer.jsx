import React from 'react';
import './Footer.css';
import { FaGithub, FaDiscord, FaLinkedin, FaFacebook, FaInstagram, FaSlack, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo-circle-blue.svg" alt="KCA Logo" className="logo-icon" />
            <span className="logo-text">Kone Academy</span>
          </div>
          <p className="footer-tagline">Research. Coding. Engineering.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Platform</h4>
            <a href="#vision">Vision</a>
            <a href="#divisions">Divisions</a>
            <a href="#services">Services</a>
          </div>
          <div className="link-group">
            <h4>Community</h4>
            <div className="social-icons">
              <a href="https://x.com/koneacademy" aria-label="X"><FaXTwitter /></a>
              <a href="https://www.tiktok.com/@koneacademy?_r=1&_t=ZM-931L3z5lu71" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://github.com/PhilipKone/Kone-Academy" aria-label="GitHub"><FaGithub /></a>
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

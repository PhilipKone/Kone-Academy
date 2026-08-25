import React from 'react';
import './Careers.css';
import { FiTarget, FiActivity, FiZap } from 'react-icons/fi';

const Careers = () => {
  return (
    <section className="careers-section" id="careers">
      <div className="container">
        <div className="section-header">
          <span className="badge-premium mb-3" style={{ display: 'inline-block', marginBottom: '1rem' }}>CAREERS & INTERNSHIPS</span>
          <h2 className="section-title">Join the <span className="text-gradient">Collective</span></h2>
          <p className="section-subtitle">
            We don't just teach technology; we build it. Help us shape the future of engineering education.
          </p>
        </div>

        <div className="careers-grid">
          {/* Active Role: IDE Stress Test Intern */}
          <div className="career-card glass-panel-premium highlight">
            <div className="card-badge">OPEN INTERNSHIP</div>
            <div className="role-header">
              <div className="role-icon">
                <FiZap />
              </div>
              <div className="role-title">
                <h3>IDE Stress Test Intern</h3>
                <span className="location">Remote</span>
              </div>
            </div>

            <div className="role-description">
              <p>
                Push the <span className="text-white fw-bold">Kone Code IDE</span> to its absolute limits. We are looking for detail-oriented individuals to find edge cases, break compilers, and help us build the most robust browser-based development environment.
              </p>
            </div>

            <div className="role-features">
              <div className="feature">
                <FiTarget style={{ color: 'var(--accent-primary)' }} />
                <span>Edge-case discovery & QA</span>
              </div>
              <div className="feature">
                <FiActivity style={{ color: 'var(--accent-primary)' }} />
                <span>Performance Benchmarking</span>
              </div>
            </div>

            <div className="role-footer mt-4">
              <a
                href="https://forms.gle/5ZcJBtAgqpJsxs8o9"
                target="_blank"
                rel="noreferrer"
                className="btn-primary apply-btn w-100 py-3"
              >
                Apply for Internship
              </a>
            </div>
          </div>

          {/* Coming Soon / General Interest */}
          <div className="career-card glass-panel-premium secondary">
            <h3 className="text-white mb-2" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Future Opportunities</h3>
            <p className="text-secondary small mb-3">
              We are constantly expanding our divisions. If you are a specialist in physical engineering, system design, or smart commerce, apply to join our talent pool:
            </p>
            
            <div className="future-divisions-list mb-4">
              <div className="future-division-item">
                <span className="future-division-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                  </svg>
                </span>
                <div>
                  <h4 className="future-division-name">Kone Lab</h4>
                  <p className="future-division-desc">Robotics, IoT telemetry & embedded circuits.</p>
                </div>
              </div>
              <div className="future-division-item">
                <span className="future-division-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </span>
                <div>
                  <h4 className="future-division-name">Kone Consult</h4>
                  <p className="future-division-desc">Enterprise system architecture & cloud cost ops.</p>
                </div>
              </div>
              <div className="future-division-item">
                <span className="future-division-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </span>
                <div>
                  <h4 className="future-division-name">Kone Shop</h4>
                  <p className="future-division-desc">E-commerce storefront for hardware & merchandise.</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <a href="mailto:philipkone45@gmail.com" className="text-link">General Application →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

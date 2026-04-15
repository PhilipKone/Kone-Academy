import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container glass-panel">
        <div className="cta-content">
          <h2 className="cta-title">Ready to <span className="text-gradient">Initialize?</span></h2>
          <p className="cta-description">
            Join the community and start building your future today.
          </p>

          <div className="cta-terminal">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cmd">kca join --user=you</span>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cta-btn"
            >
              Execute Join Command
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

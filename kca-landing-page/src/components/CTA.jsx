import React from 'react';
import './CTA.css';

const CTA = ({ onOpenOnboarding }) => {
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
              <span className="cmd">ka join --user=you</span>
            </div>
            <button
              onClick={onOpenOnboarding}
              className="btn-primary cta-btn"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Execute Join Command
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

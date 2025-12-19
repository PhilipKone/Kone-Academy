import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision" id="vision">
      <div className="vision-container glass-panel">
        <div className="vision-content">
          <h2 className="vision-title">Our <span className="text-gradient">Vision</span></h2>
          <p className="vision-text">
            Kone Academy is an EduTech company with a long-term vision to foster a community of learners, researchers, and builders. We aim to make high-quality education and resources accessible to everyone, from beginners to seasoned professionals.
          </p>
          <div className="vision-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

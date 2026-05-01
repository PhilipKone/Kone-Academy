import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision" id="vision">
      <div className="vision-container glass-panel">
        <h2 className="section-title">Our <span className="text-gradient">Purpose</span></h2>

        <div className="vision-grid">
          <div className="vision-card">
            <h3 className="card-title">Vision</h3>
            <p className="vision-text">
              Kone Academy is an EdTech company with a long-term vision to foster a community of learners, researchers, and builders. We aim to make high-quality education and resources accessible to everyone, from beginners to seasoned professionals.
            </p>
          </div>

          <div className="vision-card">
            <h3 className="card-title">Mission</h3>
            <p className="vision-text">
              Our mission is to empower the next generation of innovators and developers by providing world-class software, education, and research opportunities through software resources that are accessible to all.
            </p>
          </div>
        </div>

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
    </section>
  );
};

export default Vision;

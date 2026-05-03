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
              Kone Academy is a multidisciplinary technology and innovation collective. We foster a powerful, global community of learners, researchers, and builders, where high-quality education and professional resources are made accessible to everyone. We blend deep educational accessibility with cutting-edge engineering, leveraging our collective talent to provide custom, high-performance digital, creative, and strategic solutions. From personalized learning pathways to commercial B2B growth platforms, we empower innovators and businesses at all levels to solve real-world problems through advanced design and computational precision.
            </p>
          </div>

          <div className="vision-card">
            <h3 className="card-title">Mission</h3>
            <p className="vision-text">
              Our mission is to empower innovators and developers at all levels by merging world-class software education and research with high-performance engineering, deploying custom digital solutions and creative services that deliver measurable results and sustainable competitive advantage to businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

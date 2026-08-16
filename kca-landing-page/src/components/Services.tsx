import React from 'react';
import './Services.css';

import { FaGraduationCap, FaChartBar, FaBookOpen, FaPython, FaMicrochip, FaCube, FaRobot } from 'react-icons/fa';
import { SiCplusplus, SiR } from 'react-icons/si';

const ServiceCard = ({ item, onOpenOnboarding }) => {
  return (
    <div className="service-item glass-panel">
      <div className="service-content">
        <span className="service-icon" aria-hidden="true" style={{ color: 'var(--accent-primary)', fontSize: '2rem' }}>{item.icon}</span>
        <h4 className="service-title">{item.title}</h4>
        <p className="service-desc">{item.desc}</p>
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <button
            onClick={onOpenOnboarding}
            className="btn-primary"
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              fontSize: '0.85rem'
            }}
          >
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = ({ onOpenOnboarding }) => {
  const services = [
    {
      category: 'Coding',
      items: [
        { title: 'Python Masterclass', desc: 'From syntax to advanced algorithms.', icon: <FaPython /> },
        { title: 'C / C++ School', desc: 'System programming and memory management.', icon: <SiCplusplus /> },
        { title: 'R & MATLAB', desc: 'Statistical computing and data visualization.', icon: <SiR /> }
      ]
    },
    {
      category: 'Engineering',
      items: [
        { title: 'IoT Systems', desc: 'Arduino & ESP32 prototyping.', icon: <FaMicrochip /> },
        { title: '3D Simulation', desc: 'CAD modeling for manufacturing.', icon: <FaCube /> },
        { title: 'Robotics', desc: 'Control systems and automation.', icon: <FaRobot /> }
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Available <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Comprehensive tools and resources for your growth.</p>
        </div>

        <div className="services-layout">
          {services.map((category, idx) => (
            <div key={idx} className="service-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="category-grid">
                {category.items.map((item, i) => (
                  <ServiceCard key={i} item={item} onOpenOnboarding={onOpenOnboarding} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

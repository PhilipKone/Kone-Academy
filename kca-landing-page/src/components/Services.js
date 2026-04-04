import React from 'react';
import './Services.css';

const ServiceCard = ({ item }) => {
  return (
    <div className="service-item glass-panel">
      <div className="service-content">
        <span className="service-icon">{item.icon}</span>
        <h4 className="service-title">{item.title}</h4>
        <p className="service-desc">{item.desc}</p>
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
              padding: '0.5rem',
              fontSize: '0.85rem'
            }}
          >
            Request Service
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      category: 'Research',
      items: [
        { title: 'Thesis Guidance', desc: 'End-to-end support for academic writing.', icon: '🎓' },
        { title: 'Data Analysis', desc: 'Processing complex datasets with Python/R.', icon: '📊' },
        { title: 'Publication', desc: 'Assistance with journal submissions.', icon: '✍️' }
      ]
    },
    {
      category: 'Coding',
      items: [
        { title: 'Python Masterclass', desc: 'From syntax to advanced algorithms.', icon: '🐍' },
        { title: 'C / C++ School', desc: 'System programming and memory management.', icon: '💻' },
        { title: 'R & MATLAB', desc: 'Statistical computing and data visualization.', icon: '📊' }
      ]
    },
    {
      category: 'Engineering',
      items: [
        { title: 'IoT Systems', desc: 'Arduino & ESP32 prototyping.', icon: '📡' },
        { title: '3D Simulation', desc: 'CAD modeling for manufacturing.', icon: '🧊' },
        { title: 'Robotics', desc: 'Control systems and automation.', icon: '🤖' }
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
                  <ServiceCard key={i} item={item} />
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

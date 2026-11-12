import React from 'react';
import './Services.css';
import { FaPython, FaMicrochip, FaCube, FaRobot, FaArrowRight } from 'react-icons/fa';
import { SiCplusplus, SiR } from 'react-icons/si';

interface ServiceItem {
  title: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  item: ServiceItem;
  onOpenOnboarding?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, onOpenOnboarding }) => {
  return (
    <div className="service-item glass-panel">
      <div className="service-content">
        <div className="service-icon" aria-hidden="true">
          {item.icon}
        </div>
        <span className="service-track-badge">{item.tag}</span>
        <h4 className="service-title">{item.title}</h4>
        <p className="service-desc">{item.desc}</p>
        <div className="service-action-wrap">
          <button
            onClick={onOpenOnboarding}
            className="service-card-btn"
          >
            <span>Explore Curriculum</span>
            <FaArrowRight size={11} className="service-btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ServicesProps {
  onOpenOnboarding?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenOnboarding }) => {
  const services = [
    {
      category: 'Software & Systems',
      items: [
        { title: 'Python Masterclass', desc: 'From clean syntax to production-grade algorithms.', tag: '12 Weeks • 4 Modules', icon: <FaPython /> },
        { title: 'C / C++ School', desc: 'Low-level systems programming and memory management.', tag: 'Systems • OS Architecture', icon: <SiCplusplus /> },
        { title: 'R & Data Analytics', desc: 'Statistical computing and mathematical data modeling.', tag: 'Research • Machine Learning', icon: <SiR /> }
      ]
    },
    {
      category: 'Hardware & Physical AI',
      items: [
        { title: 'IoT Systems', desc: 'Arduino, ESP32 prototyping, and telemetry telemetry.', tag: 'Sensors • FreeRTOS', icon: <FaMicrochip /> },
        { title: '3D Simulation', desc: 'CAD structural modeling and physics simulation engines.', tag: 'CAD • Physics Sandbox', icon: <FaCube /> },
        { title: 'Robotics Engineering', desc: 'Closed-loop control systems, kinematics, and automation.', tag: 'Robotics • Kinematics', icon: <FaRobot /> }
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Available <span className="text-gradient">Tracks</span></h2>
          <p className="section-subtitle">Hands-on architecture blueprints and sandboxes built for real-world engineering.</p>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaYoutube, FaGraduationCap, FaCode, FaFlask, FaChartBar, FaStar, 
  FaClock, FaCogs, FaCube, FaMicrochip, FaTerminal, FaLaptopCode, 
  FaChevronLeft, FaCreditCard, FaMapMarkedAlt, FaBrain, FaCloud, 
  FaGamepad, FaShoppingCart, FaShieldAlt, FaCheckCircle, FaRocket, 
  FaTimes, FaLayerGroup, FaTools
} from 'react-icons/fa';
import { SiPython, SiJavascript } from 'react-icons/si';
import { courses } from '../data/courses';
import ArchitectureVisualizer from '../components/ArchitectureVisualizer';
import OnboardingModal from '../components/OnboardingModal';
import CareerPathfinder from '../components/CareerPathfinder';
import CertificateValidator from '../components/CertificateValidator';
import './TrainingHub.css';

const iconMap = {
  'FaGraduationCap': FaGraduationCap,
  'FaChartBar': FaChartBar,
  'FaCode': FaCode,
  'FaFlask': FaFlask,
  'FaYoutube': FaYoutube,
  'FaCogs': FaCogs,
  'FaCube': FaCube,
  'FaMicrochip': FaMicrochip,
  'FaTerminal': FaTerminal,
  'FaLaptopCode': FaLaptopCode,
  'SiPython': SiPython,
  'SiJavascript': SiJavascript,
  'FaCreditCard': FaCreditCard,
  'FaMapMarkedAlt': FaMapMarkedAlt,
  'FaBrain': FaBrain,
  'FaCloud': FaCloud,
  'FaGamepad': FaGamepad,
  'FaShoppingCart': FaShoppingCart,
  'FaShieldAlt': FaShieldAlt
};

const CourseCard = ({ course, onSelectCourse }) => {
  const { title, division, icon, description, skills, level, duration, colorClass, youtubeLink } = course;
  const IconComponent = iconMap[icon] || FaGraduationCap;

  return (
    <div className="glass-card hover-y transition-all h-100 training-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className={`glass-icon ${colorClass}`} style={{ width: '52px', height: '52px', fontSize: '1.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconComponent />
        </div>
        <div className={`badge-pill bg-${colorClass.replace('text-', '')} text-white`}>
          Kone {division}
        </div>
      </div>

      <h3 className="h6 text-white fw-bold mb-2 card-title-text">{title}</h3>
      <p className="text-secondary small mb-3 flex-grow-1 card-description">{description}</p>

      {/* Clean Skills Badges Group */}
      <div className="skills-badge-group mb-3">
        {skills.slice(0, 4).map((skill, i) => (
          <span key={i} className="skill-chip">
            {skill}
          </span>
        ))}
        {skills.length > 4 && (
          <span className="skill-chip extra-chip">+{skills.length - 4}</span>
        )}
      </div>

      {/* Card Footer Metadata */}
      <div className="card-meta-footer mt-auto pt-3 pb-1 border-top border-secondary-subtle d-flex justify-content-between align-items-center mb-3">
        <span className="extra-small text-secondary fw-semibold">
          Level: <strong className="text-white ms-1">{level}</strong>
        </span>
        <span className="duration-chip text-cyan extra-small fw-bold d-inline-flex align-items-center">
          <FaClock style={{ marginRight: '6px' }} />
          <span>{duration}</span>
        </span>
      </div>

      <div className="d-flex flex-column gap-2">
        <button
          onClick={() => onSelectCourse(course)}
          className="enroll-btn w-100 d-inline-flex align-items-center justify-content-center"
        >
          <FaLayerGroup size={14} style={{ marginRight: '8px' }} />
          <span>View Syllabus & Projects</span>
        </button>
        <a 
          href={youtubeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="watch-btn w-100 text-center d-inline-flex align-items-center justify-content-center"
        >
          <FaYoutube size={15} className="text-danger" style={{ marginRight: '8px' }} />
          <span>Watch Intro on YouTube</span>
        </a>
      </div>
    </div>
  );
};

const CourseDetailsModal = ({ course, onClose, onOpenOnboarding }) => {
  if (!course) return null;

  const IconComponent = iconMap[course.icon] || FaGraduationCap;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content-glass" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={16} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-box mb-4">
          <div className={`glass-icon ${course.colorClass}`} style={{ width: '56px', height: '56px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IconComponent />
          </div>
          <div>
            <span className={`badge-pill bg-${course.colorClass.replace('text-', '')} text-white mb-2 d-inline-block`}>
              Kone {course.division} Track
            </span>
            <h2 className="h4 text-white fw-bold mb-0 modal-title">{course.title}</h2>
          </div>
        </div>

        <p className="modal-description text-secondary mb-4">{course.description}</p>

        {/* 3 Stats Chips in Clean Grid */}
        <div className="modal-stats-grid mb-4">
          <div className="modal-stat-card">
            <span className="stat-label">LEVEL</span>
            <strong className="stat-value text-white">{course.level}</strong>
          </div>
          <div className="modal-stat-card">
            <span className="stat-label">DURATION</span>
            <strong className="stat-value text-white">{course.duration}</strong>
          </div>
          <div className="modal-stat-card">
            <span className="stat-label">CURRICULUM BUILDS</span>
            <strong className="stat-value text-cyan">4 Micro + 2 Mini + 1 Capstone</strong>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        {course.techStackSlug && (
          <ArchitectureVisualizer slug={course.techStackSlug} />
        )}

        {/* 4 Micro-Projects */}
        <div className="mb-4">
          <h4 className="h6 text-gradient fw-bold mb-3 d-flex align-items-center gap-2 modal-section-heading">
            <FaCheckCircle className="text-info" /> 4 Module Micro-Projects
          </h4>
          <div className="projects-grid-container">
            {course.microProjects.map((mp, index) => (
              <div key={index} className="project-card-item micro-card">
                <div className="fw-semibold text-white mb-1 project-title">{mp.title}</div>
                <div className="text-secondary project-desc">{mp.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Mini-Projects */}
        <div className="mb-4">
          <h4 className="h6 text-gradient fw-bold mb-3 d-flex align-items-center gap-2 modal-section-heading">
            <FaTools className="text-warning" /> 2 Integration Mini-Projects
          </h4>
          <div className="projects-grid-container">
            {course.miniProjects.map((mini, index) => (
              <div key={index} className="project-card-item mini-card">
                <div className="fw-semibold text-white mb-1 project-title">{mini.title}</div>
                <div className="text-secondary project-desc">{mini.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 1 Final Product */}
        <div className="mb-4 final-product-banner">
          <h4 className="h6 text-success fw-bold mb-2 d-flex align-items-center gap-2">
            <FaRocket /> Final Live Deployed Product
          </h4>
          <h5 className="h6 text-white fw-bold mb-1">{course.finalProduct.title}</h5>
          <p className="text-secondary small mb-3">{course.finalProduct.description}</p>
          <div className="stack-badge text-cyan">
            <strong>Stack:</strong> {course.finalProduct.stack}
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-4 modal-actions">
          <button
            onClick={() => {
              onClose();
              onOpenOnboarding(course);
            }}
            className="enroll-btn flex-grow-1 text-center"
          >
            Enroll Now in Cohort
          </button>
          <button className="watch-btn" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const TrainingHub = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [onboardingCourse, setOnboardingCourse] = useState(null);
  const [showPathfinderModal, setShowPathfinderModal] = useState(false);

  const categories = [
    'All',
    'Software & Web',
    'Hardware & IoT',
    'AI & Research',
    'Cloud & Security',
    'Youth & Commerce'
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredCourses = activeFilter === 'All'
    ? courses
    : courses.filter(course => course.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 }
    }
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0, scale: 0.97 },
    visible: { 
      y: 0, opacity: 1, scale: 1,
      transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <div className="container py-5 min-vh-100 animate-fade-in position-relative">
      {/* Top Action Navigation Bar */}
      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
        {onBack ? (
          <button onClick={onBack} className="back-btn-capsule">
            <FaChevronLeft className="me-1" /> Back to Main Site
          </button>
        ) : <div />}

        {/* Pathfinder Quiz Launcher Pill */}
        <button 
          onClick={() => setShowPathfinderModal(true)} 
          className="back-btn-capsule text-cyan"
          style={{ borderColor: 'rgba(0, 229, 255, 0.35)', background: 'rgba(0, 229, 255, 0.06)' }}
        >
          🎯 Pathfinder Quiz <strong className="ms-1">— Match Your Skill & Goals</strong>
        </button>
      </div>

      {/* Centered Hero Header */}
      <motion.div 
        className="training-header-wrapper text-center mb-5"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="training-main-title text-center">12 Technology Tracks</h1>

        <p className="training-subtitle text-center">
          Learn how all 12 Kone Technologies are built for the real world. Master 48 Micro-Projects, 24 Mini-Projects, and deploy 12 Production Products.
        </p>

        {/* Pill Category Filters */}
        <div className="nav-tabs-premium d-flex flex-wrap justify-content-center gap-2 mt-2">
          {categories.map(topic => (
            <button
              key={topic}
              className={`tab-btn-premium ${activeFilter === topic ? 'active' : ''}`}
              onClick={() => handleFilterClick(topic)}
            >
              {topic === 'All' ? 'All 12 Tracks' : topic}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Clean 3-Column Course Grid */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeFilter}
          className="tracks-grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
        >
          {filteredCourses.map((course) => (
            <motion.div key={course.id} variants={itemVariants} style={{ height: '100%' }}>
              <CourseCard course={course} onSelectCourse={setSelectedCourse} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pathfinder Quiz Modal Overlay */}
      <AnimatePresence>
        {showPathfinderModal && (
          <div className="modal-overlay" onClick={() => setShowPathfinderModal(false)}>
            <motion.div 
              className="modal-content-glass"
              style={{ maxWidth: '720px' }}
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button className="modal-close-btn" onClick={() => setShowPathfinderModal(false)} aria-label="Close modal">
                <FaTimes size={16} />
              </button>
              <CareerPathfinder 
                onSelectTrack={(course) => {
                  setShowPathfinderModal(false);
                  setOnboardingCourse(course);
                }} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailsModal 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
            onOpenOnboarding={(course) => setOnboardingCourse(course)}
          />
        )}
      </AnimatePresence>

      {/* Native Multi-Step Onboarding Modal */}
      <AnimatePresence>
        {onboardingCourse && (
          <OnboardingModal 
            isOpen={!!onboardingCourse}
            onClose={() => setOnboardingCourse(null)}
            defaultCourse={onboardingCourse}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingHub;

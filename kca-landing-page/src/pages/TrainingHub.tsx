import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
import { injectJSONLD, removeJSONLD } from '../utils/seo';
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

  const getLevelBadgeClass = (lvl: string) => {
    if (lvl.toLowerCase().includes('beginner')) return 'level-badge-beginner';
    if (lvl.toLowerCase().includes('intermediate')) return 'level-badge-intermediate';
    return 'level-badge-advanced';
  };

  return (
    <div className="training-card">
      <div className="training-card-header">
        <div className={`card-icon-badge ${colorClass}`}>
          <IconComponent />
        </div>
        <span className="card-division-badge">
          Kone {division}
        </span>
      </div>

      <div className="training-card-body">
        <h3 className="card-title-text">{title}</h3>
        <p className="card-description">{description}</p>

        {/* Clean Skills Badges Group */}
        <div className="skills-badge-group">
          {skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="skill-chip">
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="skill-chip extra-chip">+{skills.length - 3}</span>
          )}
        </div>
      </div>

      {/* Card Footer Metadata */}
      <div className="card-meta-footer">
        <span className={`level-badge ${getLevelBadgeClass(level)}`}>
          <span className="level-dot"></span>
          <span>{level}</span>
        </span>
        <span className="duration-chip">
          <FaClock size={11} />
          <span>{duration}</span>
        </span>
      </div>

      <div className="card-actions-group">
        <button
          onClick={() => onSelectCourse(course)}
          className="enroll-btn"
        >
          <FaLayerGroup size={13} />
          <span>View Syllabus & Projects</span>
        </button>
        <a 
          href={youtubeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="watch-btn"
        >
          <FaYoutube size={14} className="youtube-icon" />
          <span>Watch Intro on YouTube</span>
        </a>
      </div>
    </div>
  );
};

const CourseDetailsModal = ({ course, onClose, onOpenOnboarding }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!course) return null;

  const IconComponent = iconMap[course.icon] || FaGraduationCap;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content-glass" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={14} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-box">
          <div className={`modal-header-icon ${course.colorClass}`}>
            <IconComponent />
          </div>
          <div className="modal-header-text">
            <span className="modal-track-badge">
              Kone {course.division} Track
            </span>
            <h2 className="modal-title">{course.title}</h2>
          </div>
        </div>

        <p className="modal-description">{course.description}</p>

        {/* 3 Stats Chips in Clean Grid */}
        <div className="modal-stats-grid">
          <div className="modal-stat-card">
            <span className="stat-label">LEVEL</span>
            <strong className="stat-value">{course.level}</strong>
          </div>
          <div className="modal-stat-card">
            <span className="stat-label">DURATION</span>
            <strong className="stat-value">{course.duration}</strong>
          </div>
          <div className="modal-stat-card">
            <span className="stat-label">BUILDS</span>
            <strong className="stat-value text-accent">4 Micro + 2 Mini + 1 Final</strong>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        {course.techStackSlug && (
          <ArchitectureVisualizer slug={course.techStackSlug} />
        )}

        {/* 4 Micro-Projects */}
        <div className="modal-section-block">
          <h4 className="modal-section-heading">
            <FaCheckCircle className="heading-icon text-info" /> 
            <span>4 Module Micro-Projects</span>
          </h4>
          <div className="projects-grid-container">
            {course.microProjects.map((mp, index) => (
              <div key={index} className="project-card-item micro-card">
                <div className="project-card-header">
                  <span className="project-step-badge">0{index + 1}</span>
                  <span className="project-title">{mp.title}</span>
                </div>
                <div className="project-desc">{mp.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Mini-Projects */}
        <div className="modal-section-block">
          <h4 className="modal-section-heading">
            <FaTools className="heading-icon text-warning" /> 
            <span>2 Integration Mini-Projects</span>
          </h4>
          <div className="projects-grid-container">
            {course.miniProjects.map((mini, index) => (
              <div key={index} className="project-card-item mini-card">
                <div className="project-card-header">
                  <span className="project-step-badge warning-step">0{index + 1}</span>
                  <span className="project-title">{mini.title}</span>
                </div>
                <div className="project-desc">{mini.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 1 Final Product */}
        <div className="final-product-banner">
          <div className="capstone-header-row">
            <span className="capstone-tag">
              <FaRocket size={12} />
              <span>Capstone Build</span>
            </span>
          </div>
          <h4 className="capstone-title">{course.finalProduct.title}</h4>
          <p className="capstone-desc">{course.finalProduct.description}</p>
          <div className="capstone-stack-row">
            <span className="stack-label">Stack:</span>
            <div className="stack-chips-wrap">
              {course.finalProduct.stack.split(',').map((tech, i) => (
                <span key={i} className="stack-chip">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-actions-bar">
          <button
            onClick={() => {
              onClose();
              onOpenOnboarding(course);
            }}
            className="enroll-btn modal-enroll-cta"
          >
            Enroll Now in Cohort
          </button>
          <button className="watch-btn modal-close-cta" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

const PathfinderModal = ({ isOpen, onClose, onSelectTrack }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 99999 }}>
      <motion.div 
        className="modal-content-glass"
        style={{ maxWidth: '780px', width: '92%', padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
          style={{ top: '16px', right: '16px', zIndex: 20 }}
        >
          <FaTimes size={16} />
        </button>
        <CareerPathfinder 
          onSelectTrack={onSelectTrack} 
        />
      </motion.div>
    </div>,
    document.body
  );
};

const TrainingHub = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [onboardingCourse, setOnboardingCourse] = useState(null);
  const [showPathfinderModal, setShowPathfinderModal] = useState(false);

  useEffect(() => {
    // Dynamic Course List Schema for Google Sitelinks, Rich Snippets, and AI Overview indexing
    const coursesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kone Academy 12 Technology Tracks",
      "description": "Master 48 Micro-Projects, 24 Mini-Projects, and deploy 12 Production Products across Software, Hardware, AI, Cloud, and IoT.",
      "numberOfItems": courses.length,
      "itemListElement": courses.map((course, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Kone Academy",
            "sameAs": "https://www.koneacademy.io",
            "url": "https://www.koneacademy.io"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online, Face-to-Face & Hybrid",
            "duration": course.duration
          },
          "educationalCredentialAwarded": `Certificate of Engineering Proficiency in ${course.title}`,
          "teaches": course.skills,
          "courseCode": course.id,
          "url": `https://www.koneacademy.io/training?track=${course.id}`
        }
      }))
    };

    injectJSONLD('training-courses-jsonld', coursesSchema);

    return () => {
      removeJSONLD('training-courses-jsonld');
    };
  }, []);

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
      transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] as any }
    }
  };

  return (
    <div className="container py-4 min-vh-100 animate-fade-in position-relative">
      {/* Top Action Navigation Bar */}
      <div className="training-top-nav">
        {onBack ? (
          <button onClick={onBack} className="nav-action-btn back-btn">
            <FaChevronLeft size={11} />
            <span>Main Site</span>
          </button>
        ) : (
          <div />
        )}

        {/* Pathfinder Quiz Launcher Pill */}
        <button 
          onClick={() => setShowPathfinderModal(true)} 
          className="nav-action-btn pathfinder-btn"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>Pathfinder Match</span>
        </button>
      </div>

      {/* Centered Hero Header */}
      <motion.div 
        className="training-header-wrapper text-center mb-4"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="training-main-title text-center">12 Technology Tracks</h1>

        <p className="training-subtitle text-center">
          Learn how all 12 Kone Technologies are built for the real world. Master 48 Micro-Projects, 24 Mini-Projects, and deploy 12 Production Products.
        </p>

        {/* Horizontal Category Filter Rail */}
        <div className="filter-tabs-container">
          <div className="filter-tabs-rail">
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

      {/* 60-Second Interactive Career Pathfinder Modal */}
      <AnimatePresence>
        {showPathfinderModal && (
          <PathfinderModal 
            isOpen={showPathfinderModal}
            onClose={() => setShowPathfinderModal(false)}
            onSelectTrack={(course) => {
              setShowPathfinderModal(false);
              setOnboardingCourse(course);
            }}
          />
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

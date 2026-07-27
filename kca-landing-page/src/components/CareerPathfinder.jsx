import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCompass, FaCheckCircle, FaRocket, FaRedo, FaChevronRight,
  FaCreditCard, FaMicrochip, FaMapMarkedAlt, FaCube, FaBrain,
  FaChartBar, FaCogs, FaCode, FaCloud, FaShieldAlt,
  FaGraduationCap, FaLaptopCode, FaTerminal
} from 'react-icons/fa';
import './CareerPathfinder.css';
import { courses } from '../data/courses';

const QUESTIONS = [
  {
    id: 1,
    title: "What technology domain excites you most?",
    subtitle: "Select the primary field you want to engineer",
    options: [
      { label: "Fintech & Ledger Gateways", icon: FaCreditCard, trackId: "course-pay" },
      { label: "Agritech IoT & Sensors", icon: FaMicrochip, trackId: "course-farms" },
      { label: "Geospatial & Logistics Dispatch", icon: FaMapMarkedAlt, trackId: "course-warp" },
      { label: "3D WebGL & Shader Graphics", icon: FaCube, trackId: "course-studio" },
      { label: "Neural RAG AI & Vector Search", icon: FaBrain, trackId: "course-ai" },
      { label: "Full-Stack SaaS Web Apps", icon: FaCode, trackId: "course-code" },
      { label: "Cloud DevOps & Kubernetes", icon: FaCloud, trackId: "course-digital" },
      { label: "Enterprise Architecture & Security", icon: FaShieldAlt, trackId: "course-tech" }
    ]
  },
  {
    id: 2,
    title: "What is your current coding background?",
    subtitle: "We match curriculum depth to your experience",
    options: [
      { label: "Beginner — New to programming", icon: FaGraduationCap, level: "Beginner" },
      { label: "Intermediate — Basic syntax & side projects", icon: FaLaptopCode, level: "Intermediate" },
      { label: "Advanced — Built production APIs or services", icon: FaTerminal, level: "Advanced" }
    ]
  },
  {
    id: 3,
    title: "What is your main goal for joining?",
    subtitle: "Targeting your capstone product outcome",
    options: [
      { label: "Land a High-Paying Engineering Role", icon: FaRocket, goal: "Career" },
      { label: "Build & Launch My Own Startup MVP", icon: FaCube, goal: "Startup" },
      { label: "Upskill in My Current Corporate Role", icon: FaCogs, goal: "Upskill" },
      { label: "Publish Academic Research & Data Models", icon: FaChartBar, goal: "Research" }
    ]
  }
];

const CareerPathfinder = ({ onSelectTrack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({
    trackId: "course-pay",
    level: "Intermediate",
    goal: "Career"
  });
  const [matchedCourse, setMatchedCourse] = useState(null);

  const handleOptionSelect = (option) => {
    const updated = { ...selectedAnswers };
    if (option.trackId) updated.trackId = option.trackId;
    if (option.level) updated.level = option.level;
    if (option.goal) updated.goal = option.goal;

    setSelectedAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      const match = courses.find(c => c.id === updated.trackId) || courses[0];
      setMatchedCourse(match);
      setCurrentStep(QUESTIONS.length);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setMatchedCourse(null);
  };

  const q = QUESTIONS[currentStep];

  return (
    <div className="pathfinder-card-wrapper">
      <div className="pathfinder-header p-4">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <div className="pathfinder-badge-icon">
              <FaCompass />
            </div>
            <div>
              <h3 className="h6 text-white fw-bold mb-0 d-flex align-items-center gap-2">
                Kone Pathfinder: 60-Second Track Matcher
              </h3>
              <span className="extra-small text-secondary">Discover your ideal technology track & capstone build</span>
            </div>
          </div>

          {currentStep < QUESTIONS.length && (
            <span className="extra-small text-cyan fw-bold">
              QUESTION {currentStep + 1} OF 3
            </span>
          )}
        </div>
      </div>

      <div className="pathfinder-body p-4">
        <AnimatePresence mode="wait">
          {currentStep < QUESTIONS.length ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="h5 text-white fw-bold mb-1">{q.title}</h4>
              <p className="text-secondary small mb-4">{q.subtitle}</p>

              <div className="pathfinder-options-grid">
                {q.options.map((opt, idx) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={idx}
                      className="pathfinder-opt-btn"
                      onClick={() => handleOptionSelect(opt)}
                    >
                      {Icon && <Icon className="opt-icon text-cyan" />}
                      <span className="opt-label text-white">{opt.label}</span>
                      <FaChevronRight className="arrow-icon ms-auto text-secondary" size={12} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            matchedCourse && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="pathfinder-result-box"
              >
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-2">
                  <span className="match-score-badge">
                    <FaCheckCircle className="me-1" /> 98% MATCH RECOMMENDED TRACK
                  </span>
                  <button className="reset-quiz-btn" onClick={handleReset}>
                    <FaRedo className="me-1" /> Retake Quiz
                  </button>
                </div>

                <h4 className="h4 text-gradient fw-bold mb-2">{matchedCourse.title}</h4>
                <p className="text-secondary small mb-3">{matchedCourse.description}</p>

                <div className="result-details-grid mb-4">
                  <div className="detail-card">
                    <span className="detail-lbl">LEVEL</span>
                    <strong className="detail-val text-white">{matchedCourse.level}</strong>
                  </div>
                  <div className="detail-card">
                    <span className="detail-lbl">DURATION</span>
                    <strong className="detail-val text-white">{matchedCourse.duration}</strong>
                  </div>
                  <div className="detail-card">
                    <span className="detail-lbl">CAPSTONE PRODUCT</span>
                    <strong className="detail-val text-cyan">{matchedCourse.finalProduct.title}</strong>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <button 
                    className="enroll-btn px-4 flex-grow-1 text-center"
                    onClick={() => onSelectTrack(matchedCourse)}
                  >
                    <FaRocket className="me-2" /> Enroll in {matchedCourse.division} Track
                  </button>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerPathfinder;

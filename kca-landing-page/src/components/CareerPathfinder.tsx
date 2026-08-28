import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCompass, FaCheckCircle, FaRocket, FaRedo, FaChevronRight,
  FaCreditCard, FaMicrochip, FaMapMarkedAlt, FaCube, FaBrain,
  FaChartBar, FaCogs, FaCode, FaCloud, FaShieldAlt,
  FaGraduationCap, FaLaptopCode, FaTerminal, FaShoppingCart,
  FaGamepad, FaServer, FaLightbulb, FaLayerGroup, FaArrowRight,
  FaClock, FaProjectDiagram
} from 'react-icons/fa';
import './CareerPathfinder.css';
import { courses, Course } from '../data/courses';

interface QuestionOption {
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; size?: number }>;
  trackId?: string;
  level?: string;
  goal?: string;
  modality?: string;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "What technology domain excites you most?",
    subtitle: "Select the primary engineering discipline you want to master",
    options: [
      { label: "Fintech & Ledger Gateways", sublabel: "Double-entry bookkeeping & PCI-DSS", icon: FaCreditCard, trackId: "course-pay" },
      { label: "Neural RAG AI & Vector Search", sublabel: "PyTorch, embeddings & LLM agents", icon: FaBrain, trackId: "course-ai" },
      { label: "Full-Stack SaaS & Web Apps", sublabel: "TypeScript, React, Node.js & Prisma", icon: FaCode, trackId: "course-code" },
      { label: "Agritech IoT & Sensor Networks", sublabel: "ESP32, MQTT telemetry & TimescaleDB", icon: FaMicrochip, trackId: "course-farms" },
      { label: "Geospatial & Real-Time Logistics", sublabel: "Redis GEO, WebSockets & Mapbox", icon: FaMapMarkedAlt, trackId: "course-warp" },
      { label: "Embedded Systems & Hardware", sublabel: "Circuit prototyping, KiCAD & C++", icon: FaCogs, trackId: "course-lab" },
      { label: "3D WebGL Graphics & Shaders", sublabel: "Three.js, GLSL shaders & physics", icon: FaCube, trackId: "course-studio" },
      { label: "Cloud Infrastructure & DevOps", sublabel: "Docker, Kubernetes, AWS & Terraform", icon: FaCloud, trackId: "course-digital" },
      { label: "Enterprise Architecture & Security", sublabel: "System design, SOC2 & OWASP", icon: FaShieldAlt, trackId: "course-tech" },
      { label: "Quantitative Research & Analytics", sublabel: "Statistical modeling, Python & R", icon: FaChartBar, trackId: "course-consult" },
      { label: "E-Commerce Systems & Storefronts", sublabel: "Stripe API, cart state & inventory", icon: FaShoppingCart, trackId: "course-shop" },
      { label: "Youth STEM & Gamified Robotics", sublabel: "Scratch, Micro:bit & logic basics", icon: FaGamepad, trackId: "course-kids" }
    ]
  },
  {
    id: 2,
    title: "What is your current coding background?",
    subtitle: "We calibrate project complexity and starting modules to your skill level",
    options: [
      { label: "Beginner — New to Programming", sublabel: "Zero coding experience or beginner syntax", icon: FaGraduationCap, level: "Beginner" },
      { label: "Intermediate — Built Scripts & Side Projects", sublabel: "Comfortable with functions, APIs & basic git", icon: FaLaptopCode, level: "Intermediate" },
      { label: "Advanced — Built Production Systems", sublabel: "Experienced with backend services, databases & architectures", icon: FaTerminal, level: "Advanced" }
    ]
  },
  {
    id: 3,
    title: "What is your primary milestone outcome?",
    subtitle: "Targeting your capstone deliverable and post-academy path",
    options: [
      { label: "Land a High-Paying Engineering Role", sublabel: "Build an undeniable enterprise portfolio with audited capstones", icon: FaRocket, goal: "Career" },
      { label: "Build & Launch My Own Startup MVP", sublabel: "Ship a production commercial product with real-world users", icon: FaCube, goal: "Startup" },
      { label: "Master Enterprise Systems & Security", sublabel: "Architect fault-tolerant microservices and high-concurrency clouds", icon: FaServer, goal: "Enterprise" },
      { label: "Publish Research & Statistical Models", sublabel: "Produce mathematical models, benchmarks & academic whitepapers", icon: FaChartBar, goal: "Research" }
    ]
  },
  {
    id: 4,
    title: "What is your preferred engineering focus?",
    subtitle: "Fine-tuning your practical lab modality and tooling ecosystem",
    options: [
      { label: "High-Concurrency Cloud & Backend", sublabel: "Distributed ledgers, queues, databases & microservices", icon: FaServer, modality: "Distributed" },
      { label: "Physical Electronics & Hardware IoT", sublabel: "Microcontrollers, breadboards, sensors & telemetry", icon: FaMicrochip, modality: "Hardware" },
      { label: "Interactive Web, UI & Visual Graphics", sublabel: "SaaS dashboards, React frontend, 3D WebGL & mobile apps", icon: FaCode, modality: "FrontendVisual" },
      { label: "Machine Learning & Data Intelligence", sublabel: "Neural embeddings, RAG vector pipelines & statistical modeling", icon: FaBrain, modality: "Intelligence" }
    ]
  }
];

interface PathfinderProps {
  onSelectTrack: (course: Course) => void;
}

interface MatchResult {
  primaryCourse: Course;
  primaryScore: number;
  secondaryCourse: Course;
  secondaryScore: number;
  reason: string;
}

const CareerPathfinder: React.FC<PathfinderProps> = ({ onSelectTrack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    trackId: string;
    level: string;
    goal: string;
    modality: string;
  }>({
    trackId: "course-pay",
    level: "Intermediate",
    goal: "Career",
    modality: "Distributed"
  });
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

  const calculateMatch = (answers: typeof selectedAnswers): MatchResult => {
    const scored = courses.map(course => {
      let score = 50;

      // 1. Direct Domain match
      if (course.id === answers.trackId) {
        score += 45;
      }

      // 2. Experience Level alignment
      if (course.level === "All Levels") {
        score += 15;
      } else if (answers.level === "Beginner" && (course.level.includes("Beginner") || course.division === "Kids")) {
        score += 20;
      } else if (answers.level === "Intermediate" && course.level.includes("Intermediate")) {
        score += 20;
      } else if (answers.level === "Advanced" && (course.level.includes("Advanced") || course.level.includes("+"))) {
        score += 20;
      } else {
        score += 8;
      }

      // 3. Goal affinity
      if (answers.goal === "Career" && ["course-code", "course-digital", "course-pay", "course-ai", "course-tech"].includes(course.id)) {
        score += 15;
      } else if (answers.goal === "Startup" && ["course-code", "course-shop", "course-pay", "course-warp"].includes(course.id)) {
        score += 15;
      } else if (answers.goal === "Enterprise" && ["course-tech", "course-digital", "course-pay"].includes(course.id)) {
        score += 15;
      } else if (answers.goal === "Research" && ["course-consult", "course-ai", "course-farms"].includes(course.id)) {
        score += 15;
      }

      // 4. Modality alignment
      if (answers.modality === "Hardware" && ["course-farms", "course-lab", "course-kids"].includes(course.id)) {
        score += 15;
      } else if (answers.modality === "FrontendVisual" && ["course-studio", "course-code", "course-shop", "course-kids"].includes(course.id)) {
        score += 15;
      } else if (answers.modality === "Distributed" && ["course-pay", "course-warp", "course-digital", "course-tech"].includes(course.id)) {
        score += 15;
      } else if (answers.modality === "Intelligence" && ["course-ai", "course-consult"].includes(course.id)) {
        score += 15;
      }

      return { course, score };
    });

    scored.sort((a, b) => b.score - a.score);

    const primary = scored[0].course;
    const secondary = scored[1] ? scored[1].course : (courses.find(c => c.id !== primary.id) || courses[1]);

    let reason = `Tailored for your interest in ${primary.division} engineering, calibrated for ${answers.level.toLowerCase()} developers aiming to ${
      answers.goal === 'Career' ? 'break into elite engineering roles' :
      answers.goal === 'Startup' ? 'launch a scalable startup MVP' :
      answers.goal === 'Enterprise' ? 'master enterprise architecture & security' :
      'publish quantitative research & data models'
    }.`;

    return {
      primaryCourse: primary,
      primaryScore: 98,
      secondaryCourse: secondary,
      secondaryScore: 92,
      reason
    };
  };

  const handleOptionSelect = (option: QuestionOption) => {
    const updated = { ...selectedAnswers };
    if (option.trackId) updated.trackId = option.trackId;
    if (option.level) updated.level = option.level;
    if (option.goal) updated.goal = option.goal;
    if (option.modality) updated.modality = option.modality;

    setSelectedAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      const result = calculateMatch(updated);
      setMatchResult(result);
      setCurrentStep(QUESTIONS.length);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setMatchResult(null);
  };

  const q = QUESTIONS[currentStep];

  return (
    <div className="pathfinder-card-wrapper">
      {/* Pathfinder Header */}
      <div className="pathfinder-header">
        <div className="pathfinder-header-content">
          <div className="pathfinder-brand">
            <div className="pathfinder-badge-icon">
              <FaCompass />
            </div>
            <div>
              <h3 className="pathfinder-title">
                Kone Pathfinder: 60-Second Track Matcher
              </h3>
              <p className="pathfinder-subtitle">
                Calibrate your curriculum, lab stack, and production capstone build
              </p>
            </div>
          </div>

          {currentStep < QUESTIONS.length && (
            <div className="pathfinder-step-counter">
              <span className="step-pill">
                Step {currentStep + 1} of {QUESTIONS.length}
              </span>
            </div>
          )}
        </div>

        {/* Hairline Progress Bar */}
        {currentStep < QUESTIONS.length && (
          <div className="pathfinder-progress-track">
            <div 
              className="pathfinder-progress-fill" 
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Pathfinder Body */}
      <div className="pathfinder-body">
        <AnimatePresence mode="wait">
          {currentStep < QUESTIONS.length ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pathfinder-question-block"
            >
              <div className="pathfinder-question-meta">
                <h4 className="question-title">{q.title}</h4>
                <p className="question-subtitle">{q.subtitle}</p>
              </div>

              <div className={`pathfinder-options-grid ${q.options.length > 6 ? 'grid-dense' : ''}`}>
                {q.options.map((opt, idx) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={idx}
                      className="pathfinder-opt-btn"
                      onClick={() => handleOptionSelect(opt)}
                    >
                      <div className="opt-icon-wrapper">
                        {Icon && <Icon className="opt-icon" />}
                      </div>
                      <div className="opt-text-block">
                        <span className="opt-label">{opt.label}</span>
                        {opt.sublabel && (
                          <span className="opt-sublabel">{opt.sublabel}</span>
                        )}
                      </div>
                      <FaChevronRight className="arrow-icon" size={11} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            matchResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="pathfinder-result-container"
              >
                {/* Result Top Banner */}
                <div className="result-header-row">
                  <div className="match-score-badge">
                    <FaCheckCircle className="score-icon" />
                    <span>{matchResult.primaryScore}% MATCH • RECOMMENDED PRIMARY TRACK</span>
                  </div>
                  <button className="reset-quiz-btn" onClick={handleReset}>
                    <FaRedo className="reset-icon" />
                    <span>Retake Matcher</span>
                  </button>
                </div>

                {/* Primary Track Card */}
                <div className="primary-match-card">
                  <div className="match-card-top">
                    <div className="division-badge">
                      <span>{matchResult.primaryCourse.division} DIVISION</span>
                    </div>
                    <span className="category-tag">{matchResult.primaryCourse.category}</span>
                  </div>

                  <h3 className="primary-course-title">
                    {matchResult.primaryCourse.title}
                  </h3>

                  <p className="primary-course-desc">
                    {matchResult.primaryCourse.description}
                  </p>

                  <div className="match-rationale-box">
                    <FaLightbulb className="rationale-icon" />
                    <span className="rationale-text">{matchResult.reason}</span>
                  </div>

                  {/* Metadata Grid */}
                  <div className="result-metrics-grid">
                    <div className="metric-chip">
                      <FaGraduationCap className="metric-icon" />
                      <div className="metric-info">
                        <span className="metric-lbl">CURRICULUM LEVEL</span>
                        <strong className="metric-val">{matchResult.primaryCourse.level}</strong>
                      </div>
                    </div>
                    <div className="metric-chip">
                      <FaClock className="metric-icon" />
                      <div className="metric-info">
                        <span className="metric-lbl">TOTAL DURATION</span>
                        <strong className="metric-val">{matchResult.primaryCourse.duration}</strong>
                      </div>
                    </div>
                    <div className="metric-chip">
                      <FaProjectDiagram className="metric-icon" />
                      <div className="metric-info">
                        <span className="metric-lbl">PROJECT BLUEPRINTS</span>
                        <strong className="metric-val">4 Micro • 2 Mini • 1 Capstone</strong>
                      </div>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="skills-section">
                    <span className="skills-title">Core Technologies & Systems:</span>
                    <div className="skills-chips-row">
                      {matchResult.primaryCourse.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-chip">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Preview */}
                  <div className="capstone-preview-box">
                    <div className="capstone-header">
                      <FaRocket className="capstone-icon" />
                      <span className="capstone-lbl">PRODUCTION CAPSTONE DELIVERABLE</span>
                    </div>
                    <h5 className="capstone-title">{matchResult.primaryCourse.finalProduct.title}</h5>
                    <p className="capstone-desc">{matchResult.primaryCourse.finalProduct.description}</p>
                    {matchResult.primaryCourse.finalProduct.stack && (
                      <div className="capstone-stack">
                        <span className="stack-lbl">Deployment Stack:</span>
                        <span className="stack-val">{matchResult.primaryCourse.finalProduct.stack}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="result-cta-row">
                    <button 
                      className="enroll-primary-btn"
                      onClick={() => onSelectTrack(matchResult.primaryCourse)}
                    >
                      <FaRocket className="btn-icon" />
                      <span>Enroll in {matchResult.primaryCourse.division} Track</span>
                      <FaArrowRight className="btn-arrow" />
                    </button>
                  </div>
                </div>

                {/* Secondary Complementary Track */}
                {matchResult.secondaryCourse && (
                  <div className="secondary-match-card">
                    <div className="secondary-top">
                      <div className="secondary-badge">
                        <FaLayerGroup className="sec-icon" />
                        <span>{matchResult.secondaryScore}% CROSS-DISCIPLINE SYNERGY</span>
                      </div>
                      <span className="sec-division">{matchResult.secondaryCourse.division}</span>
                    </div>
                    <div className="secondary-content">
                      <div>
                        <h4 className="secondary-title">{matchResult.secondaryCourse.title}</h4>
                        <p className="secondary-desc">{matchResult.secondaryCourse.description}</p>
                      </div>
                      <button 
                        className="explore-secondary-btn"
                        onClick={() => onSelectTrack(matchResult.secondaryCourse)}
                      >
                        <span>Explore Syllabus</span>
                        <FaChevronRight size={10} />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerPathfinder;

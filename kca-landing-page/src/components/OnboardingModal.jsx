import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronRight, FaChevronLeft, FaGraduationCap, 
  FaCheckCircle, FaRocket, FaUser, FaEnvelope, FaCodeBranch,
  FaCalendarAlt, FaDownload, FaLaptopCode, FaShieldAlt
} from 'react-icons/fa';
import './OnboardingModal.css';

const OnboardingModal = ({ isOpen, onClose, defaultCourse }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    track: defaultCourse ? defaultCourse.title : "Fintech & Ledger Gateways Track",
    division: defaultCourse ? defaultCourse.division : "Pay",
    format: "Cohort", // Cohort, Self-Paced, Enterprise
    experience: "Intermediate",
    goal: "Upskilling",
    fullName: "",
    email: "",
    github: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitted(true);
    setStep(4);
  };

  const generatePDFSummary = () => {
    // Generates a clean text download of their custom syllabus
    const syllabusText = `=====================================================
KONE ACADEMY - CUSTOM COHORT SYLLABUS & SCHEDULE
=====================================================
Student Name: ${formData.fullName || "Kone Student"}
Email: ${formData.email}
Selected Track: ${formData.track} (Kone ${formData.division})
Format: ${formData.format} Intensive
Experience Level: ${formData.experience}
Primary Goal: ${formData.goal}
Reservation Token: KONE-2026-${Math.floor(100000 + Math.random() * 900000)}
=====================================================
CURRICULUM BREAKDOWN:
- 4 Module Micro-Projects (Hands-on Checkpoints)
- 2 Integration Mini-Projects (Sub-system Architecture)
- 1 Final Live Deployed Product (Hosted Production App)
=====================================================
Next Steps: Check your email inbox for Slack Cohort invite & Remote Labs access credentials.
=====================================================`;

    const blob = new Blob([syllabusText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kone_Academy_Syllabus_${formData.division}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="onboarding-modal-glass" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={16} />
        </button>

        {/* Progress Bar Header */}
        {!isSubmitted && (
          <div className="onboarding-header mb-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="extra-small text-cyan fw-bold">STEP {step} OF 3</span>
              <span className="extra-small text-secondary">
                {step === 1 ? "Track & Format" : step === 2 ? "Experience & Goals" : "Reservation"}
              </span>
            </div>
            <div className="onboarding-progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Track & Format Selection */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <h3 className="h5 text-white fw-bold mb-1">Select Cohort Format</h3>
              <p className="text-secondary small mb-4">
                Enrolling in: <strong className="text-cyan">{formData.track}</strong>
              </p>

              <div className="format-options-grid mb-4">
                <div 
                  className={`format-card ${formData.format === 'Cohort' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Cohort' })}
                >
                  <div className="format-icon"><FaCalendarAlt /></div>
                  <div>
                    <strong className="text-white d-block small">Full-Time Live Cohort</strong>
                    <span className="extra-small text-secondary">12 Weeks • Live Code Reviews & Mentorship</span>
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Self-Paced' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Self-Paced' })}
                >
                  <div className="format-icon"><FaLaptopCode /></div>
                  <div>
                    <strong className="text-white d-block small">Self-Paced Intensive</strong>
                    <span className="extra-small text-secondary">Flexible Schedule • 24/7 Remote Lab Access</span>
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Enterprise' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Enterprise' })}
                >
                  <div className="format-icon"><FaShieldAlt /></div>
                  <div>
                    <strong className="text-white d-block small">Corporate Team Training</strong>
                    <span className="extra-small text-secondary">Custom Architecture & Team Onboarding</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="enroll-btn px-4" onClick={handleNext}>
                  Next Step <FaChevronRight size={12} className="ms-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Experience Level & Goals */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <h3 className="h5 text-white fw-bold mb-1">Your Background & Goals</h3>
              <p className="text-secondary small mb-4">Help us tailor your 4 Micro-Projects and Capstone build.</p>

              <div className="mb-4">
                <label className="form-label text-secondary small fw-bold">Current Experience Level</label>
                <div className="d-flex gap-2 flex-wrap">
                  {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                    <button
                      key={lvl}
                      type="button"
                      className={`pill-select-btn ${formData.experience === lvl ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, experience: lvl })}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary small fw-bold">Primary Outcome Goal</label>
                <div className="d-flex gap-2 flex-wrap">
                  {['Upskilling', 'Career Switch', 'Startup MVP', 'Academic Research'].map(g => (
                    <button
                      key={g}
                      type="button"
                      className={`pill-select-btn ${formData.goal === g ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, goal: g })}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button className="watch-btn" onClick={handlePrev}>
                  <FaChevronLeft size={12} className="me-1" /> Back
                </button>
                <button className="enroll-btn px-4" onClick={handleNext}>
                  Next Step <FaChevronRight size={12} className="ms-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Contact & Reservation Details */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <h3 className="h5 text-white fw-bold mb-1">Reserve Your Seat</h3>
              <p className="text-secondary small mb-4">Enter your details to generate your custom syllabus & invite token.</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-secondary small">Full Name *</label>
                  <div className="input-glass-wrapper">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      required
                      placeholder="Philip Kone" 
                      value={formData.fullName} 
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-secondary small">Email Address *</label>
                  <div className="input-glass-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input 
                      type="email" 
                      required
                      placeholder="philip@koneacademy.io" 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-secondary small">GitHub Handle (Optional)</label>
                  <div className="input-glass-wrapper">
                    <FaCodeBranch className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="github.com/philipkone" 
                      value={formData.github} 
                      onChange={e => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="button" className="watch-btn" onClick={handlePrev}>
                    <FaChevronLeft size={12} className="me-1" /> Back
                  </button>
                  <button type="submit" className="enroll-btn px-4">
                    Confirm Seat & Generate Syllabus
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 4: Success & Download Card */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-3"
            >
              <div className="success-icon-badge mb-3">
                <FaCheckCircle size={40} className="text-success" />
              </div>
              <h3 className="h4 text-white fw-bold mb-2">Cohort Seat Reserved!</h3>
              <p className="text-secondary small mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
                Welcome aboard, <strong className="text-white">{formData.fullName}</strong>! You are enrolled in the <strong className="text-cyan">{formData.track}</strong> ({formData.format}).
              </p>

              <div className="reservation-box mb-4 p-3 rounded">
                <span className="extra-small text-secondary d-block mb-1">YOUR RESERVATION TOKEN</span>
                <strong className="text-gradient h5 fw-bold mb-0">KONE-2026-X8419</strong>
              </div>

              <div className="d-flex flex-column gap-2 max-w-sm mx-auto">
                <button className="enroll-btn w-100" onClick={generatePDFSummary}>
                  <FaDownload className="me-2" /> Download Custom Syllabus & Schedule
                </button>
                <button className="watch-btn w-100" onClick={onClose}>
                  Return to Main Hub
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OnboardingModal;

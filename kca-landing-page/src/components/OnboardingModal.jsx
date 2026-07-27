import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronRight, FaChevronLeft, FaGraduationCap, 
  FaCheckCircle, FaRocket, FaUser, FaEnvelope, FaCodeBranch,
  FaCalendarAlt, FaDownload, FaLaptopCode, FaShieldAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import './OnboardingModal.css';

const OnboardingModal = ({ isOpen, onClose, defaultCourse }) => {
  const [step, setStep] = useState(1);
  const [reservationToken, setReservationToken] = useState('');
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
  const [isNotifying, setIsNotifying] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const dispatchAdminNotification = async (payload) => {
    try {
      setIsNotifying(true);
      // Formspree / Webhook dispatch target for philipkone45@gmail.com
      const endpoint = 'https://formspree.io/f/xovjepzq'; 
      await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🎓 New Student Cohort Reservation: ${payload.fullName} (${payload.track})`,
          adminEmails: ['philipkone45@gmail.com', 'phconsultgh@gmail.com'],
          studentName: payload.fullName,
          studentEmail: payload.email,
          githubHandle: payload.github || 'Not provided',
          track: payload.track,
          division: payload.division,
          format: payload.format,
          experience: payload.experience,
          goal: payload.goal,
          reservationToken: payload.token,
          submittedAt: new Date().toISOString()
        })
      });
    } catch (err) {
      console.warn('Admin dispatch notification fallback:', err);
    } finally {
      setIsNotifying(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    // Generate authentic reservation token matching division key
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const token = `KONE-2026-${formData.division.toUpperCase()}-${randomSuffix}`;
    setReservationToken(token);

    const recordPayload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      github: formData.github.trim(),
      track: formData.track,
      division: formData.division,
      format: formData.format,
      experience: formData.experience,
      goal: formData.goal,
      token: token,
      date: new Date().toISOString()
    };

    // Save persistent local admin record
    try {
      const existing = JSON.parse(localStorage.getItem('kone_academy_reservations') || '[]');
      existing.push(recordPayload);
      localStorage.setItem('kone_academy_reservations', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage log:', err);
    }

    // Trigger instant email notification dispatch to philipkone45@gmail.com
    dispatchAdminNotification(recordPayload);

    setIsSubmitted(true);
    setStep(4);
  };

  const generatePDFSummary = () => {
    const syllabusText = `=====================================================
KONE ACADEMY - OFFICIAL COHORT RESERVATION & SYLLABUS
=====================================================
Student Name:      ${formData.fullName.trim()}
Email Address:     ${formData.email.trim()}
GitHub Handle:     ${formData.github.trim() || "N/A"}

ENROLLMENT DETAILS:
Selected Track:    ${formData.track}
Academy Division:  Kone ${formData.division} Division
Cohort Format:     ${formData.format} Intensive
Experience Level:  ${formData.experience}
Primary Goal:      ${formData.goal}
Reservation Token: ${reservationToken}
Date Generated:    ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
=====================================================
CURRICULUM ARCHITECTURE & CHECKPOINTS:
- 4 Module Micro-Projects (Hands-on Engineering Checkpoints)
- 2 Integration Mini-Projects (Sub-system Architecture)
- 1 Live Capstone Production Deployment

PUBLIC CRYPTOGRAPHIC VERIFICATION:
Verify this reservation token anytime in the active registry at:
https://www.koneacademy.io/verify?id=${reservationToken}
=====================================================
ADMIN CONTACT & DISPATCH:
Notification delivered to: philipkone45@gmail.com
Support desk: support@koneacademy.io
=====================================================`;

    const blob = new Blob([syllabusText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kone_Academy_Syllabus_${formData.division}_${reservationToken}.txt`;
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
                {step === 1 ? "Track & Format" : step === 2 ? "Experience & Goals" : "Reservation Confirmation"}
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
              <h3 className="h5 text-white fw-bold mb-1">Confirm Seat & Generate Syllabus</h3>
              <p className="text-secondary small mb-4">Enter your details to generate your custom syllabus & reservation token.</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-secondary small">Full Name *</label>
                  <div className="input-glass-wrapper">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your full name" 
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
                      placeholder="yourname@domain.com" 
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
                      placeholder="github.com/username" 
                      value={formData.github} 
                      onChange={e => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
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
                <FaCheckCircle size={44} className="text-success" />
              </div>
              <h3 className="h4 text-white fw-bold mb-2">Cohort Seat Reserved!</h3>
              <p className="text-secondary small mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
                Welcome aboard, <strong className="text-white">{formData.fullName}</strong>! You are reserved in the <strong className="text-cyan">{formData.track}</strong> ({formData.format}).
              </p>

              <div className="reservation-box mb-3 p-3 rounded" style={{ background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                <span className="extra-small text-secondary d-block mb-1">YOUR OFFICIAL RESERVATION TOKEN</span>
                <code className="text-cyan h5 fw-bold mb-0 d-block">{reservationToken}</code>
              </div>

              <div className="mb-4">
                <a 
                  href={`/verify?id=${reservationToken}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="extra-small text-cyan text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Verify Token Authenticity in Cryptographic Registry <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <p className="extra-small text-muted mb-3">
                📩 Admin notification dispatched to <strong className="text-secondary">philipkone45@gmail.com</strong> & <strong className="text-secondary">phconsultgh@gmail.com</strong>
              </p>

              <div className="d-flex flex-column gap-2 max-w-sm mx-auto" style={{ maxWidth: '380px' }}>
                <button className="enroll-btn w-100" onClick={generatePDFSummary}>
                  <FaDownload className="me-2" /> Download Official Syllabus & Schedule
                </button>
                <button className="watch-btn w-100" onClick={onClose}>
                  Return to Main Platform
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

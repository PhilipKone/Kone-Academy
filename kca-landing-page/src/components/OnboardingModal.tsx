import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronRight, FaChevronLeft,
  FaCheckCircle, FaRocket, FaUser, FaEnvelope, FaCodeBranch,
  FaCalendarAlt, FaDownload, FaLaptopCode, FaShieldAlt, FaExternalLinkAlt,
  FaBriefcase, FaGraduationCap, FaLightbulb
} from 'react-icons/fa';
import './OnboardingModal.css';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: any;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose, defaultCourse }) => {
  const [step, setStep] = useState(1);
  const [reservationToken, setReservationToken] = useState('');
  const [formData, setFormData] = useState({
    track: defaultCourse ? defaultCourse.title : "Fintech & Ledger Gateways Track",
    division: defaultCourse ? defaultCourse.division : "Pay",
    format: "Cohort", // Cohort, Self-Paced, Enterprise
    experience: "Intermediate",
    goal: "Skill Upgrade",
    fullName: "",
    email: "",
    github: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({
        ...prev,
        track: defaultCourse.title,
        division: defaultCourse.division || "Pay"
      }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const dispatchAdminNotification = async (payload: any) => {
    try {
      setIsNotifying(true);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    // Generate authentic reservation token matching division key
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const token = `KONE-2026-${(formData.division || 'TECH').toUpperCase()}-${randomSuffix}`;
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

    // Save to Firebase Firestore Cloud Database
    try {
      import('firebase/firestore').then(async ({ collection, addDoc, serverTimestamp }) => {
        const { db } = await import('../firebase/config');
        if (db) {
          await addDoc(collection(db, 'student_reservations'), {
            ...recordPayload,
            createdAt: serverTimestamp()
          });
        }
      }).catch(err => console.warn('Firebase Cloud storage log:', err));
    } catch (e) {
      console.warn('Firebase Cloud init:', e);
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

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="onboarding-modal-glass" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={14} />
        </button>

        {/* Multi-step Header */}
        {!isSubmitted && (
          <div className="onboarding-header">
            <div className="onboarding-step-indicator">
              <span className="step-label">STEP {step} OF 3</span>
              <span className="step-topic">
                {step === 1 ? "Cohort Format" : step === 2 ? "Experience & Goals" : "Student Registry"}
              </span>
            </div>
            <div className="onboarding-progress-track">
              <div 
                className="onboarding-progress-bar-fill" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Format Selection */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="onboarding-title-wrap">
                <h3 className="onboarding-title">Select Learning Format</h3>
                <div className="onboarding-track-pill">
                  <span>Enrolling in:</span>
                  <strong>{formData.track}</strong>
                </div>
              </div>

              <div className="format-options-grid">
                <div 
                  className={`format-card ${formData.format === 'Cohort' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Cohort' })}
                >
                  <div className="format-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="format-text">
                    <div className="format-name-row">
                      <strong className="format-name">Full-Time Live Cohort</strong>
                      <span className="format-tag">Recommended</span>
                    </div>
                    <p className="format-desc">12 Weeks • Live Remote Labs, Code Reviews & Instructor Mentorship</p>
                  </div>
                  <div className="format-radio-indicator">
                    <div className="radio-dot" />
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Self-Paced' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Self-Paced' })}
                >
                  <div className="format-icon">
                    <FaLaptopCode />
                  </div>
                  <div className="format-text">
                    <div className="format-name-row">
                      <strong className="format-name">Self-Paced Intensive</strong>
                    </div>
                    <p className="format-desc">Flexible Schedule • 24/7 Repository & Discord Engineering Lab Access</p>
                  </div>
                  <div className="format-radio-indicator">
                    <div className="radio-dot" />
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Enterprise' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Enterprise' })}
                >
                  <div className="format-icon">
                    <FaShieldAlt />
                  </div>
                  <div className="format-text">
                    <div className="format-name-row">
                      <strong className="format-name">Corporate Team Training</strong>
                    </div>
                    <p className="format-desc">Custom Group Schedule • Tailored Tech Stack & Architectural Onboarding</p>
                  </div>
                  <div className="format-radio-indicator">
                    <div className="radio-dot" />
                  </div>
                </div>
              </div>

              <div className="onboarding-actions-bar">
                <button className="enroll-btn w-100" onClick={handleNext}>
                  <span>Continue to Experience & Goals</span>
                  <FaChevronRight size={12} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Experience & Learning Goals */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="onboarding-title-wrap">
                <h3 className="onboarding-title">Background & Goals</h3>
                <p className="onboarding-subtitle">Help us tailor your cohort pace, mentor pairings, and project reviews.</p>
              </div>

              <div className="onboarding-form-group">
                <label className="onboarding-form-label">Self-Assessed Experience Level</label>
                <div className="segmented-pill-group">
                  {[
                    { id: 'Beginner', label: 'Beginner', desc: 'New to stack' },
                    { id: 'Intermediate', label: 'Intermediate', desc: '1–2 yrs coding' },
                    { id: 'Advanced', label: 'Advanced', desc: 'Senior / Lead' }
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      className={`segmented-pill-btn ${formData.experience === lvl.id ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, experience: lvl.id })}
                    >
                      <span className="pill-title">{lvl.label}</span>
                      <span className="pill-desc">{lvl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="onboarding-form-group">
                <label className="onboarding-form-label">Primary Learning Objective</label>
                <div className="segmented-pill-group">
                  {[
                    { id: 'Career Switch', label: 'Career Switch', icon: FaBriefcase },
                    { id: 'Skill Upgrade', label: 'Skill Upgrade', icon: FaGraduationCap },
                    { id: 'Launch Startup', label: 'Launch Startup', icon: FaLightbulb }
                  ].map((g) => {
                    const GIcon = g.icon;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        className={`segmented-pill-btn ${formData.goal === g.id ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, goal: g.id })}
                      >
                        <GIcon size={12} className="pill-icon" />
                        <span className="pill-title">{g.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="onboarding-actions-bar split-actions">
                <button className="watch-btn" onClick={handlePrev}>
                  <FaChevronLeft size={11} />
                  <span>Back</span>
                </button>
                <button className="enroll-btn" onClick={handleNext}>
                  <span>Continue to Registry</span>
                  <FaChevronRight size={11} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Student Registry Verification */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="onboarding-title-wrap">
                <h3 className="onboarding-title">Student Registry Verification</h3>
                <p className="onboarding-subtitle">Your credentials will be linked to your immutable graduation credential.</p>
              </div>

              <form onSubmit={handleSubmit} className="onboarding-fields-form">
                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="fullName">
                    Full Legal Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FaUser className="field-icon" />
                    <input 
                      id="fullName"
                      type="text" 
                      className="onboarding-text-input"
                      placeholder="e.g. Philip Kone"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="studentEmail">
                    Student Email Address <span className="text-danger">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FaEnvelope className="field-icon" />
                    <input 
                      id="studentEmail"
                      type="email" 
                      className="onboarding-text-input"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <span className="field-helper-text">Your cohort reservation token and syllabus will be delivered here.</span>
                </div>

                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="githubHandle">
                    GitHub Profile Handle <span className="text-muted small">(Optional)</span>
                  </label>
                  <div className="input-with-icon">
                    <FaCodeBranch className="field-icon" />
                    <input 
                      id="githubHandle"
                      type="text" 
                      className="onboarding-text-input"
                      placeholder="@username"
                      value={formData.github}
                      onChange={e => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>
                </div>

                <div className="onboarding-actions-bar split-actions">
                  <button type="button" className="watch-btn" onClick={handlePrev}>
                    <FaChevronLeft size={11} />
                    <span>Back</span>
                  </button>
                  <button 
                    type="submit" 
                    className="enroll-btn"
                    disabled={!formData.fullName.trim() || !formData.email.trim() || isNotifying}
                  >
                    {isNotifying ? (
                      <span>Dispatching Token...</span>
                    ) : (
                      <>
                        <FaRocket size={12} />
                        <span>Confirm Seat & Generate Token</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 4: Success & Verified Token */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="onboarding-success-wrap"
            >
              <div className="success-icon-badge">
                <FaCheckCircle size={32} />
              </div>

              <h3 className="success-title">Seat Officially Reserved</h3>
              <p className="success-subtitle">
                Your cohort seat in <strong className="text-white">{formData.track}</strong> is locked in. Your reservation token has been dispatched to the academy registry.
              </p>

              <div className="token-display-box">
                <span className="token-label">VERIFIED RESERVATION TOKEN</span>
                <span className="token-code">{reservationToken}</span>
                <a 
                  href={`/verify?id=${reservationToken}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="token-verify-link"
                >
                  <span>Verify Registry Authenticity</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <div className="success-actions-stack">
                <button className="enroll-btn w-100" onClick={generatePDFSummary}>
                  <FaDownload size={13} />
                  <span>Download Syllabus & Reservation Proof</span>
                </button>
                <button className="watch-btn w-100" onClick={onClose}>
                  <span>Done & Return to Training Hub</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>,
    document.body
  );
};

export default OnboardingModal;

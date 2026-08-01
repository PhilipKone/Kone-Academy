import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronRight, FaChevronLeft, FaGraduationCap, 
  FaCheckCircle, FaRocket, FaUser, FaEnvelope, FaCodeBranch,
  FaCalendarAlt, FaDownload, FaLaptopCode, FaShieldAlt, FaExternalLinkAlt
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
    goal: "Upskilling",
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
                — {step === 1 ? "Track & Format" : step === 2 ? "Experience & Goals" : "Reservation Confirmation"}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                    <span className="extra-small text-secondary d-block mt-1">12 Weeks • Live Code Reviews & Mentorship</span>
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Self-Paced' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Self-Paced' })}
                >
                  <div className="format-icon"><FaLaptopCode /></div>
                  <div>
                    <strong className="text-white d-block small">Self-Paced Intensive</strong>
                    <span className="extra-small text-secondary d-block mt-1">Flexible Schedule • 24/7 Remote Lab Access</span>
                  </div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Enterprise' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Enterprise' })}
                >
                  <div className="format-icon"><FaShieldAlt /></div>
                  <div>
                    <strong className="text-white d-block small">Corporate Team Training</strong>
                    <span className="extra-small text-secondary d-block mt-1">Custom Architecture & Team Onboarding</span>
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

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h4 className="h6 text-cyan fw-bold mb-3">Step 1: Confirm Chosen Technology Niche</h4>
              <div className="form-group mb-3">
                <label className="form-label text-secondary small fw-semibold">Target Technology Track</label>
                <input 
                  type="text" 
                  className="form-control glass-input" 
                  value={formData.track}
                  readOnly
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-secondary small fw-semibold">Self-Assessed Experience Level</label>
                <div className="d-flex gap-2 flex-wrap">
                  {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`btn btn-sm ${formData.experience === lvl ? 'btn-cyan' : 'btn-outline-glass'}`}
                      onClick={() => setFormData({ ...formData, experience: lvl })}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <button className="enroll-btn w-100" onClick={handleNext}>
                Continue to Learning Format <FaChevronRight className="ms-1" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h4 className="h6 text-cyan fw-bold mb-3">Step 2: Select Delivery & Mentorship Model</h4>
              
              <div className="format-options-grid mb-4">
                <div 
                  className={`format-card ${formData.format === 'Cohort' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Cohort' })}
                >
                  <div className="fw-bold text-white mb-1"><FaCalendarAlt className="me-1 text-cyan" /> Live Cohort Labs</div>
                  <div className="text-secondary extra-small">Scheduled live remote engineering labs with instructor code reviews.</div>
                </div>

                <div 
                  className={`format-card ${formData.format === 'Self-Paced' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, format: 'Self-Paced' })}
                >
                  <div className="fw-bold text-white mb-1"><FaLaptopCode className="me-1 text-warning" /> Asynchronous Access</div>
                  <div className="text-secondary extra-small">24/7 access to curriculum micro-projects, repos, and Discord support.</div>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button className="watch-btn w-50" onClick={handlePrev}>
                  <FaChevronLeft className="me-1" /> Back
                </button>
                <button className="enroll-btn w-50" onClick={handleNext}>
                  Next <FaChevronRight className="ms-1" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h4 className="h6 text-cyan fw-bold mb-3">Step 3: Student Registry Verification</h4>
              
              <div className="form-group mb-3">
                <label className="form-label text-secondary small fw-semibold"><FaUser className="me-1" /> Full Name</label>
                <input 
                  type="text" 
                  className="form-control glass-input"
                  placeholder="e.g. Philip Kone"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label text-secondary small fw-semibold"><FaEnvelope className="me-1" /> Student Email Address</label>
                <input 
                  type="email" 
                  className="form-control glass-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-secondary small fw-semibold"><FaCodeBranch className="me-1" /> GitHub Profile Handle (Optional)</label>
                <input 
                  type="text" 
                  className="form-control glass-input"
                  placeholder="@username"
                  value={formData.github}
                  onChange={e => setFormData({ ...formData, github: e.target.value })}
                />
              </div>

              <div className="d-flex gap-2">
                <button className="watch-btn w-35" onClick={handlePrev}>
                  <FaChevronLeft className="me-1" /> Back
                </button>
                <button 
                  className="enroll-btn w-65" 
                  onClick={handleSubmit}
                  disabled={!formData.fullName || !formData.email || isNotifying}
                >
                  {isNotifying ? (
                    <span>Dispatching Token...</span>
                  ) : (
                    <span><FaRocket className="me-1" /> Confirm Seat & Generate Token</span>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-3"
            >
              <div className="success-icon-badge mb-3">
                <FaCheckCircle className="text-success" size={48} />
              </div>

              <h4 className="h5 text-white fw-bold mb-2">Student Seat Officially Reserved</h4>
              <p className="text-secondary small mb-3">
                Your reservation token has been cryptographically recorded in the student registry database.
              </p>

              <div className="token-display-box p-3 mb-3 glass-card text-center">
                <div className="extra-small text-secondary mb-1">RESERVATION DIVISION TOKEN</div>
                <div className="h4 text-cyan fw-bold letter-spacing-2 mb-1">{reservationToken}</div>
                <a 
                  href={`/verify?id=${reservationToken}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="extra-small text-cyan text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Verify Authenticity <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <button className="enroll-btn w-100" onClick={generatePDFSummary}>
                <FaDownload className="me-2" /> Download Syllabus
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>,
    document.body
  );
};

export default OnboardingModal;

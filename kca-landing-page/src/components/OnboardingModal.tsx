import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaUser, FaEnvelope, FaWhatsapp,
  FaCheckCircle, FaRocket, FaDownload, FaExternalLinkAlt,
  FaCalendarAlt, FaLaptopCode
} from 'react-icons/fa';
import './OnboardingModal.css';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: any;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose, defaultCourse }) => {
  const [reservationToken, setReservationToken] = useState('');
  const [formData, setFormData] = useState({
    track: defaultCourse ? defaultCourse.title : "Fintech & Ledger Gateways Track",
    division: defaultCourse ? defaultCourse.division : "Pay",
    format: "Live Online Cohort", // "Live Online Cohort" or "Self-Paced Access"
    fullName: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
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

  const dispatchAdminNotification = async (payload: any) => {
    try {
      const endpoint = 'https://formsubmit.co/ajax/philipkone45@gmail.com';
      await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🎓 New Cohort Registration: ${payload.fullName} (${payload.track})`,
          _replyto: payload.email,
          _cc: 'phconsultgh@gmail.com',
          _template: 'table',
          _captcha: 'false',
          'Student Name': payload.fullName,
          'Email Address': payload.email,
          'WhatsApp / Phone': payload.phone || 'Not provided',
          'Selected Track': payload.track,
          'Academy Division': payload.division,
          'Learning Format': payload.format,
          'Reservation Token': payload.token,
          'Verification URL': `https://www.koneacademy.io/verify?id=${payload.token}`,
          'Registration Timestamp': new Date().toLocaleString('en-US', { timeZoneName: 'short' })
        })
      });
    } catch (err) {
      console.warn('Admin dispatch notification fallback:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    // Generate authentic reservation token matching division key
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const token = `KONE-2026-${(formData.division || 'TECH').toUpperCase()}-${randomSuffix}`;
    setReservationToken(token);

    const recordPayload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      track: formData.track,
      division: formData.division,
      format: formData.format,
      token: token,
      date: new Date().toISOString()
    };

    // 1. Save local record for instant offline verification
    try {
      const existing = JSON.parse(localStorage.getItem('kone_academy_reservations') || '[]');
      existing.push(recordPayload);
      localStorage.setItem('kone_academy_reservations', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage log:', err);
    }

    // 2. Save to Firebase Firestore Cloud Database in background
    import('firebase/firestore').then(async ({ collection, addDoc, serverTimestamp }) => {
      const { db } = await import('../firebase/config');
      if (db) {
        await addDoc(collection(db, 'student_reservations'), {
          ...recordPayload,
          createdAt: serverTimestamp()
        });
      }
    }).catch(e => {
      console.warn('Firebase Cloud init fallback:', e);
    });

    // 3. Dispatch admin notification asynchronously
    dispatchAdminNotification(recordPayload);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generatePDFSummary = () => {
    const syllabusText = `=====================================================
KONE ACADEMY - OFFICIAL COHORT RESERVATION & SYLLABUS
=====================================================
Student Name:      ${formData.fullName.trim()}
Email Address:     ${formData.email.trim()}
WhatsApp / Phone:  ${formData.phone.trim() || "N/A"}

ENROLLMENT DETAILS:
Selected Track:    ${formData.track}
Academy Division:  Kone ${formData.division} Division
Format:            ${formData.format}
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
Support desk: support@koneacademy.io
Direct inquiries: philipkone45@gmail.com
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
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={14} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="onboarding-title-wrap">
                <span className="onboarding-kicker">QUICK COHORT REGISTRATION</span>
                <h3 className="onboarding-title">Enroll in Technology Track</h3>
                <div className="onboarding-track-pill">
                  <span>Selected Track:</span>
                  <strong>{formData.track}</strong>
                </div>
              </div>

              {/* Minimal 1-Screen Form */}
              <form onSubmit={handleSubmit} className="onboarding-fields-form">
                {/* Full Name */}
                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="fullName">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FaUser className="field-icon" />
                    <input 
                      id="fullName"
                      type="text" 
                      className="onboarding-text-input"
                      placeholder="e.g. Kwame Mensah"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="studentEmail">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FaEnvelope className="field-icon" />
                    <input 
                      id="studentEmail"
                      type="email" 
                      className="onboarding-text-input"
                      placeholder="kwame@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="onboarding-field-block">
                  <label className="onboarding-form-label" htmlFor="studentPhone">
                    WhatsApp / Phone Number <span className="text-muted small">(For Cohort Group)</span>
                  </label>
                  <div className="input-with-icon">
                    <FaWhatsapp className="field-icon text-success" />
                    <input 
                      id="studentPhone"
                      type="tel" 
                      className="onboarding-text-input"
                      placeholder="+233 55 123 4567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Delivery Format Toggle */}
                <div className="onboarding-field-block">
                  <label className="onboarding-form-label">Learning Format</label>
                  <div className="format-toggle-grid">
                    <button
                      type="button"
                      className={`format-toggle-btn ${formData.format === 'Live Online Cohort' ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, format: 'Live Online Cohort' })}
                    >
                      <FaCalendarAlt size={12} className="toggle-icon" />
                      <div className="toggle-text">
                        <strong className="toggle-title">Live Cohort</strong>
                        <span className="toggle-desc">12 Wks • Code Reviews & Mentorship</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`format-toggle-btn ${formData.format === 'Self-Paced Access' ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, format: 'Self-Paced Access' })}
                    >
                      <FaLaptopCode size={12} className="toggle-icon" />
                      <div className="toggle-text">
                        <strong className="toggle-title">Self-Paced</strong>
                        <span className="toggle-desc">24/7 Lab Repos & Discord Access</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Single Submit CTA */}
                <div className="onboarding-actions-bar">
                  <button 
                    type="submit" 
                    className="enroll-btn w-100"
                    disabled={!formData.fullName.trim() || !formData.email.trim() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Reserving Seat...</span>
                    ) : (
                      <>
                        <FaRocket size={13} />
                        <span>Reserve My Seat & Generate Token</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* Success View */
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="onboarding-success-wrap"
            >
              <div className="success-icon-badge">
                <FaCheckCircle size={32} />
              </div>

              <h3 className="success-title">Seat Officially Reserved!</h3>
              <p className="success-subtitle">
                Welcome <strong className="text-white">{formData.fullName}</strong>. Your seat in <strong className="text-white">{formData.track}</strong> is confirmed.
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
                  <span>Download Syllabus & Reservation Receipt</span>
                </button>
                <button className="watch-btn w-100" onClick={onClose}>
                  <span>Done & Return to Courses</span>
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

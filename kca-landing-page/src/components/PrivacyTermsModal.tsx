import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt, FaFileContract, FaTimes,
  FaCheckCircle, FaUserShield, FaExternalLinkAlt
} from 'react-icons/fa';
import './PrivacyTermsModal.css';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

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

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="privacy-modal-glass"
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={15} />
        </button>

        {/* Header */}
        <div className="privacy-modal-header">
          <div className="privacy-header-brand">
            <div className="privacy-badge-icon">
              <FaShieldAlt />
            </div>
            <div className="privacy-header-text">
              <h2 className="privacy-title">Legal & Governance Center</h2>
              <span className="privacy-subtitle">Kone Academy Educational Ecosystem Transparency</span>
            </div>
          </div>

          <div className="privacy-tabs-selector">
            <button
              type="button"
              className={`privacy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <FaUserShield className="tab-icon" /> Privacy Policy
            </button>
            <button
              type="button"
              className={`privacy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <FaFileContract className="tab-icon" /> Terms of Service
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="privacy-document-body">
          <AnimatePresence mode="wait">
            {activeTab === 'privacy' ? (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="doc-content-pane"
              >
                <div className="doc-meta-bar">
                  <span className="badge-pill badge-cyan">Effective Date: 2026</span>
                  <span className="doc-meta-detail">Ghana DPA 2012 (Act 843) & Global Data Ethics</span>
                </div>

                <h3 className="doc-section-heading">1. Scope & Corporate Attribution</h3>
                <p className="doc-text">
                  Kone Academy (<code>www.koneacademy.io</code>) is an elite engineering and software education division operated by <strong>Kone Technologies</strong> and <strong>it's ecosystem</strong>. This Privacy Policy governs all student registrations, course inquiries, syllabus downloads, and interactive lab access.
                </p>

                <h3 className="doc-section-heading">2. Student Data Collection</h3>
                <p className="doc-text">
                  We collect only the personal information strictly required to facilitate cohort enrollment and mentorship:
                </p>
                <ul className="doc-list">
                  <li><strong>Contact Identifiers:</strong> Full Name, Email Address, and WhatsApp / Phone number.</li>
                  <li><strong>Cohort Preferences:</strong> Selected engineering track, learning format (Live Online vs. Self-Paced), and technical focus area.</li>
                  <li><strong>Technical Telemetry:</strong> Minimal performance telemetry used strictly for site stability and security logging.</li>
                </ul>

                <h3 className="doc-section-heading">3. Zero Commercial Data Selling</h3>
                <p className="doc-text">
                  We strictly <strong>never sell, rent, monetize, or disclose your personal information</strong> to third-party data brokers or marketing networks. All communication is directly from Kone Academy for cohort schedules, curriculum updates, and lab credentials.
                </p>

                <h3 className="doc-section-heading">4. Communications & WhatsApp Group Policy</h3>
                <p className="doc-text">
                  WhatsApp phone numbers provided during registration are used exclusively for official admissions outreach, Discord lab onboarding invites, and cohort peer study groups. You may request to be removed from group channels at any time.
                </p>

                <h3 className="doc-section-heading">5. Cryptographic Certificate Verification</h3>
                <p className="doc-text">
                  Our public credential registry (<code>/verify</code>) uses SHA-256 cryptographic proof digests to validate graduate credentials and course completions for recruiters without exposing phone numbers, emails, or private student contact records.
                </p>

                <h3 className="doc-section-heading">6. Student Data Rights & Deletion</h3>
                <p className="doc-text">
                  You maintain full rights to access, modify, or permanently delete your registration records. To submit a data deletion request, contact our privacy desk at <code>phconsultgh@gmail.com</code> or <code>philipkone45@gmail.com</code>.
                </p>

                <div className="b2b-notice-box b2b-cyan">
                  <div className="b2b-notice-title">
                    <FaShieldAlt /> Enterprise & B2B Consulting Notice
                  </div>
                  <p className="b2b-notice-desc">
                    For corporate consulting agreements, enterprise NDAs, and B2B client contracts, please refer to the <a href="https://consult.koneacademy.io" target="_blank" rel="noreferrer">Kone Consult Enterprise Governance Portal <FaExternalLinkAlt size={10} /></a>.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="doc-content-pane"
              >
                <div className="doc-meta-bar">
                  <span className="badge-pill badge-purple">Effective Date: 2026</span>
                  <span className="doc-meta-detail">Educational Terms & Code of Conduct</span>
                </div>

                <h3 className="doc-section-heading">1. Educational Scope & Training</h3>
                <p className="doc-text">
                  Kone Academy provides intensive software engineering education, interactive architecture visualizers, module micro-projects, and capstone production blueprints designed for practical engineering readiness.
                </p>

                <h3 className="doc-section-heading">2. 100% Student Intellectual Property Ownership</h3>
                <p className="doc-text">
                  <strong>You own what you build.</strong> All students retain 100% full intellectual property and commercial copyright over their original source code, custom applications, and capstone projects created during their training at Kone Academy.
                </p>

                <h3 className="doc-section-heading">3. Acceptable Use of Shared Labs & Community</h3>
                <p className="doc-text">
                  Students granted access to shared cloud sandboxes, remote hardware benches, and community channels (Discord, Slack, WhatsApp) must conduct themselves professionally. Unauthorized vulnerability probing against academy servers or harassment of fellow learners results in immediate revocation of lab access.
                </p>

                <h3 className="doc-section-heading">4. Cohort Reservations & Syllabus Materials</h3>
                <p className="doc-text">
                  Course syllabi and curriculum documentation downloaded from this portal are provided for individual learning. Re-distribution or commercial resale of proprietary course blueprints without written permission is prohibited.
                </p>

                <h3 className="doc-section-heading">5. Credential Issuance & Verification</h3>
                <p className="doc-text">
                  Official certificates and verification records are awarded upon successful completion and code review of all required micro-projects and capstone deliverables.
                </p>

                <div className="b2b-notice-box b2b-purple">
                  <div className="b2b-notice-title">
                    <FaFileContract /> Corporate Consulting Engagements
                  </div>
                  <p className="b2b-notice-desc">
                    Commercial software delivery, statements of work (SOW), and enterprise development services are governed under separate client MSAs through <a href="https://consult.koneacademy.io" target="_blank" rel="noreferrer">Kone Consult <FaExternalLinkAlt size={10} /></a>.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Footer */}
        <div className="privacy-modal-footer">
          <span className="privacy-footer-copy">Kone Academy &copy; {new Date().getFullYear()}</span>
          <button className="privacy-accept-btn" onClick={onClose}>
            <FaCheckCircle /> I Understand & Accept
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default PrivacyTermsModal;

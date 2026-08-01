import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShieldAlt, FaFileContract, FaTimes, FaLock, 
  FaCheckCircle, FaUserShield
} from 'react-icons/fa';
import './PrivacyTermsModal.css';

const PrivacyTermsModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="privacy-modal-glass" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={16} />
        </button>

        {/* Header Tabs */}
        <div className="privacy-modal-header mb-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="privacy-badge-icon">
              <FaShieldAlt />
            </div>
            <div>
              <h2 className="h5 text-white fw-bold mb-0">Legal & Governance Center</h2>
              <span className="extra-small text-secondary">Authentic Transparency & Operational Guidelines</span>
            </div>
          </div>

          <div className="privacy-tabs-selector">
            <button 
              className={`privacy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <FaUserShield className="me-2" /> Privacy Policy
            </button>
            <button 
              className={`privacy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <FaFileContract className="me-2" /> Terms of Service
            </button>
          </div>
        </div>

        {/* Body Scrollable Document */}
        <div className="privacy-document-body">
          <AnimatePresence mode="wait">
            {activeTab === 'privacy' ? (
              <motion.div 
                key="privacy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="doc-content-pane"
              >
                <div className="doc-meta-bar mb-3">
                  <span className="badge-pill bg-cyan text-dark fw-bold">Effective Date: 2026</span>
                  <span className="extra-small text-secondary ms-2">Transparent Data Protection Standard</span>
                </div>

                <h3 className="doc-section-heading">1. Authentic Data Collection</h3>
                <p className="doc-text">
                  Kone Academy collects only information explicitly provided during cohort reservation or interactive tools—specifically student names, email addresses, technical background preferences, and selected course tracks.
                </p>

                <h3 className="doc-section-heading">2. Zero Commercial Data Selling</h3>
                <p className="doc-text">
                  We guarantee that your personal data is never sold, rented, monetized, or shared with third-party advertisers. All communications are strictly limited to cohort enrollment details, learning updates, and remote lab instructions.
                </p>

                <h3 className="doc-section-heading">3. Local Browser Storage & Privacy</h3>
                <p className="doc-text">
                  We use browser <code>localStorage</code> solely to save user interface preferences (such as dark neon theme choices and onboarding modal states). We do not deploy cross-site tracking pixels or invasive behavioral profiling.
                </p>

                <h3 className="doc-section-heading">4. Cryptographic Hashing Verification</h3>
                <p className="doc-text">
                  Certificate token verifications via <code>/verify</code> utilize SHA-256 cryptographic hashing to confirm authentic cohort completion without exposing private contact details to the public.
                </p>

                <h3 className="doc-section-heading">5. Data Deletion & Privacy Enquiries</h3>
                <p className="doc-text">
                  You retain full ownership of your data. You may request complete deletion of your registration records at any time by emailing <code>phconsultgh@gmail.com</code> or <code>philipkone45@gmail.com</code>.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="terms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="doc-content-pane"
              >
                <div className="doc-meta-bar mb-3">
                  <span className="badge-pill bg-purple text-white fw-bold">Effective Date: 2026</span>
                  <span className="extra-small text-secondary ms-2">Open-Source & Educational Terms</span>
                </div>

                <h3 className="doc-section-heading">1. Educational Scope & Training</h3>
                <p className="doc-text">
                  Kone Academy provides practical technology education, hands-on micro-projects, and engineering blueprints. Our training tracks are designed to build real-world skills through building software and hardware prototypes.
                </p>

                <h3 className="doc-section-heading">2. 100% Student Intellectual Property Ownership</h3>
                <p className="doc-text">
                  Students retain complete 100% intellectual property ownership of all custom code, personal projects, and capstone applications they independently build during their training tracks.
                </p>

                <h3 className="doc-section-heading">3. Acceptable Use of Shared Labs & Community</h3>
                <p className="doc-text">
                  Learners are expected to use remote hardware labs, sandbox terminals, and community channels (Discord, Slack, WhatsApp) respectfully. Malicious testing, abuse of remote infrastructure, or harassment will result in immediate termination of lab access.
                </p>

                <h3 className="doc-section-heading">4. Code of Conduct & Academic Integrity</h3>
                <p className="doc-text">
                  We foster an inclusive, collaborative environment for developers of all backgrounds. Academic honesty and constructive feedback are core values of the Kone Academy ecosystem.
                </p>

                <h3 className="doc-section-heading">5. Updates & Governance</h3>
                <p className="doc-text">
                  Kone Academy reserves the right to update these terms as our curriculum and infrastructure evolve. Any changes will be posted transparently on this portal.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="privacy-modal-footer mt-4 pt-3 d-flex justify-content-between align-items-center">
          <span className="extra-small text-secondary">Kone Academy Governance</span>
          <button className="enroll-btn px-4" onClick={onClose}>
            <FaCheckCircle className="me-2" /> I Understand & Accept
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyTermsModal;

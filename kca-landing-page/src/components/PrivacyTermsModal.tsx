import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt, FaFileContract, FaTimes,
  FaCheckCircle, FaUserShield, FaExternalLinkAlt,
  FaSearch, FaLink, FaCheck, FaInfoCircle, FaPrint, FaLock
} from 'react-icons/fa';
import './PrivacyTermsModal.css';

interface LegalSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  keywords: string;
  content: string | React.ReactNode;
  isB2B?: boolean;
}

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'scope',
    number: '01',
    title: 'Scope & Corporate Attribution',
    summary: 'Kone Academy is the engineering education division operated under Kone Technologies. This policy covers all learning platforms, lab sandboxes, and verification systems.',
    keywords: 'scope attribution corporate holding company ecosystem platform lab sandboxes',
    content: (
      <p>
        Kone Academy (<code>www.koneacademy.io</code>) operates as an advanced engineering and technology training division of <strong>Kone Technologies</strong> and its broader ecosystem. This Privacy Policy governs all student registrations, enrollment inquiries, syllabus downloads, software lab access, and cryptographic credential validations across our global platforms.
      </p>
    )
  },
  {
    id: 'data-collection',
    number: '02',
    title: 'Student Data Collection & Telemetry',
    summary: 'We only collect essential contact identifiers required for cohort admissions and mentorship. We do not track invasive ad trackers.',
    keywords: 'collection data name email phone whatsapp telemetry tracking metrics privacy',
    content: (
      <>
        <p>
          We strictly collect only the minimum personal information necessary to facilitate cohort registration, identity authentication, and curriculum delivery:
        </p>
        <ul className="legal-structured-list">
          <li><strong>Contact Identifiers:</strong> Full Name, verified Email Address, and WhatsApp / Telephone number for admissions coordination.</li>
          <li><strong>Cohort Preferences:</strong> Selected engineering track (e.g. Fintech Gateways, Physical AI, Neural Systems) and learning format (Live Online vs. Self-Paced).</li>
          <li><strong>System Telemetry:</strong> Minimal client diagnostics strictly for uptime, session authentication, and DDoS prevention.</li>
        </ul>
      </>
    )
  },
  {
    id: 'zero-selling',
    number: '03',
    title: 'Zero Commercial Data Monetization',
    summary: 'We never sell, rent, or trade your data to brokers, advertising networks, or third-party marketing agencies. Period.',
    keywords: 'zero data selling monetization broker advertising third party marketing spam',
    content: (
      <p>
        Kone Academy enforces an absolute <strong>zero data-selling policy</strong>. Your personal identity, contact details, and student performance metrics will never be monetized, sold, or shared with commercial marketing networks or data brokers. All communications are direct from our admissions, mentorship, or engineering faculty.
      </p>
    )
  },
  {
    id: 'communications',
    number: '04',
    title: 'Communications & WhatsApp Policy',
    summary: 'WhatsApp numbers are used solely for admissions confirmations, peer cohort study channels, and Discord lab access. No spam, ever.',
    keywords: 'whatsapp communications contact phone study group cohort discord channel',
    content: (
      <p>
        Phone numbers provided during enrollment are used exclusively for official admissions outreach, Discord lab server invitations, and designated cohort peer groups. Students may opt out or request removal from group channels at any time with immediate effect.
      </p>
    )
  },
  {
    id: 'sha256-verification',
    number: '05',
    title: 'Cryptographic SHA-256 Verification',
    summary: 'Public credential verification uses one-way SHA-256 cryptographic digests to authenticate diplomas without exposing student contact information to recruiters.',
    keywords: 'sha256 cryptographic verification certificate diploma credentials public registry hash',
    content: (
      <p>
        Our public credential registry (<code>/verify</code>) uses decentralized SHA-256 cryptographic digests. Recruiters and employers can verify graduate milestone authenticity and course completion certificates without accessing phone numbers, emails, or personal student records.
      </p>
    )
  },
  {
    id: 'data-rights',
    number: '06',
    title: 'Student Data Rights & Deletion',
    summary: 'Full compliance with Ghana DPA 2012 (Act 843) and international data protection standards. Request permanent record deletion anytime.',
    keywords: 'rights deletion dpa act 843 gdpr removal erasure privacy desk support email',
    content: (
      <p>
        You have the legal right to request a full transcript of collected records, correct inaccurate data, or request permanent deletion from our active registries. Formal privacy inquiries and deletion requests are processed within 48 hours via <code>phconsultgh@gmail.com</code> or <code>philipkone45@gmail.com</code>.
      </p>
    )
  },
  {
    id: 'b2b-notice',
    number: '07',
    title: 'Enterprise & B2B Consulting Notice',
    summary: 'Corporate client agreements, enterprise NDAs, and custom team training programs are governed under separate Master Service Agreements (MSAs).',
    keywords: 'b2b corporate enterprise msa consulting contract commercial nda',
    isB2B: true,
    content: (
      <p>
        Commercial custom software engagements, enterprise engineering contracts, and dedicated workforce upskilling agreements are managed through our corporate division. For corporate governance terms, visit the <a href="https://consult.koneacademy.io" target="_blank" rel="noreferrer">Kone Consult Enterprise Portal <FaExternalLinkAlt size={10} /></a>.
      </p>
    )
  }
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'scope-education',
    number: '01',
    title: 'Educational Scope & Engineering Rigor',
    summary: 'Kone Academy delivers production-grade engineering curricula with hands-on architecture blueprints, micro-projects, and live capstone deployments.',
    keywords: 'education curriculum tracks engineering micro projects capstones training rigor',
    content: (
      <p>
        Kone Academy provides intensive engineering tracks, architectural visualizers, micro-project checkpoints, and production capstone blueprints. Our curriculum is engineered to simulate high-concurrency production environments and real-world engineering accountability.
      </p>
    )
  },
  {
    id: 'ip-ownership',
    number: '02',
    title: '100% Student IP & Copyright Ownership',
    summary: 'You own what you build. Students retain 100% full intellectual property, commercial copyright, and patent rights over their original capstones and code.',
    keywords: 'ip intellectual property copyright ownership code rights patent commercial student you own what you build',
    content: (
      <p>
        <strong>You own what you build.</strong> All students maintain 100% exclusive intellectual property and commercial copyright ownership over all source code, proprietary algorithms, database schemas, and capstone applications created during training at Kone Academy. Kone Academy claims zero equity, royalties, or ownership claims over student creations.
      </p>
    )
  },
  {
    id: 'lab-conduct',
    number: '03',
    title: 'Acceptable Use of Shared Labs & Cloud Sandboxes',
    summary: 'Professional conduct is mandatory in remote cloud sandboxes, hardware benches, Discord rooms, and cohort channels.',
    keywords: 'acceptable use lab conduct security sandboxes ethics rules hacking probes harassment',
    content: (
      <p>
        Students granted access to shared remote hardware benches, cloud server sandboxes, and community workspaces (Discord, Slack, GitHub Classrooms) must adhere to professional ethics. Unauthorized vulnerability scanning against academy infrastructure, credential scraping, or harassment of peers results in immediate permanent expulsion without refund.
      </p>
    )
  },
  {
    id: 'curriculum-copyright',
    number: '04',
    title: 'Curriculum Materials & Course Reservation',
    summary: 'Curriculum syllabi and architectural diagrams are licensed for individual study. Unauthorized commercial resale or duplication is prohibited.',
    keywords: 'materials syllabi diagrams license single user copyright commercial resale reproduction',
    content: (
      <p>
        All proprietary instructional materials, system architecture blueprints, and curriculum videos downloaded from this portal are granted under a personal single-user educational license. Commercial resale, automated scraping, or unauthorized redistribution without prior written consent is strictly prohibited.
      </p>
    )
  },
  {
    id: 'certification-issuance',
    number: '05',
    title: 'Credential Issuance & Code Review Thresholds',
    summary: 'Certificates of completion are awarded only after successful peer and instructor code reviews on all required checkpoints and the live capstone.',
    keywords: 'credentials certification diploma passing code review micro-projects checkpoints graduation',
    content: (
      <p>
        Official Kone Academy credentials, verifiable SHA-256 certificates, and recommendation endorsements are strictly merit-based. Students must achieve passing code reviews across all 4 module micro-projects, 2 integration mini-projects, and the final production capstone deployment.
      </p>
    )
  },
  {
    id: 'b2b-consulting',
    number: '06',
    title: 'Enterprise & Client Consulting Engagements',
    summary: 'Commercial software development, statement of work (SOW) deliverables, and enterprise SLAs are governed separately under Kone Consult.',
    keywords: 'enterprise consulting sow master service agreement b2b client bespoke software sla',
    isB2B: true,
    content: (
      <p>
        Statements of Work (SOW), client software deliverables, bespoke enterprise staff training, and corporate consulting agreements operate under independent MSAs. For commercial contracts, refer to <a href="https://consult.koneacademy.io" target="_blank" rel="noreferrer">Kone Consult <FaExternalLinkAlt size={10} /></a>.
      </p>
    )
  }
];

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveTab(initialTab);
    setSearchQuery('');
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const currentSections = useMemo(() => {
    const list = activeTab === 'privacy' ? PRIVACY_SECTIONS : TERMS_SECTIONS;
    if (!searchQuery.trim()) return list;
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    return list.filter(s => {
      const fullCorpus = `${s.number} ${s.title} ${s.summary} ${s.keywords}`.toLowerCase();
      return words.every(w => fullCorpus.includes(w));
    });
  }, [activeTab, searchQuery]);

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}${activeTab === 'privacy' ? '/privacy' : '/terms'}#${sectionId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(sectionId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const el = document.getElementById(`legal-sec-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="mobbin-legal-modal"
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Modal Top Bar */}
        <div className="mobbin-modal-topbar">
          <div className="mobbin-brand-badge">
            <div className="mobbin-shield-icon">
              <FaShieldAlt />
            </div>
            <div className="mobbin-badge-text">
              <div className="mobbin-doc-title">Legal & Governance Center</div>
              <div className="mobbin-doc-meta">
                <span className="mobbin-meta-status"><span className="status-dot"></span> Active Policy</span>
                <span className="mobbin-meta-sep">•</span>
                <span>Updated August 2026</span>
                <span className="mobbin-meta-sep">•</span>
                <span>Ghana DPA (Act 843)</span>
              </div>
            </div>
          </div>

          <div className="mobbin-topbar-actions">
            <button 
              type="button" 
              className="mobbin-utility-btn" 
              onClick={handlePrint}
              title="Print document summary"
              aria-label="Print legal document"
            >
              <FaPrint size={13} />
              <span className="btn-text-desktop">Print</span>
            </button>
            <button 
              type="button" 
              className="mobbin-close-btn" 
              onClick={onClose} 
              aria-label="Close modal"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {/* Mobbin Segmented Control & Search Row */}
        <div className="mobbin-controls-row">
          <div className="mobbin-segmented-control" role="tablist" aria-label="Legal document switcher">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              className={`mobbin-segment-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => { setActiveTab('privacy'); setSearchQuery(''); }}
            >
              <FaUserShield size={13} />
              <span>Privacy Policy</span>
              <span className="mobbin-tab-version">v2.6</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              className={`mobbin-segment-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => { setActiveTab('terms'); setSearchQuery(''); }}
            >
              <FaFileContract size={13} />
              <span>Terms of Service</span>
              <span className="mobbin-tab-version">100% IP</span>
            </button>
          </div>

          {/* Inline Clause Search */}
          <div className="mobbin-search-wrapper">
            <FaSearch className="mobbin-search-icon" size={12} />
            <input
              type="text"
              className="mobbin-search-input"
              placeholder={`Filter ${activeTab === 'privacy' ? 'privacy clauses' : 'terms'}...`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search legal clauses"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="mobbin-search-clear" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <FaTimes size={10} />
              </button>
            )}
          </div>
        </div>

        {/* Quick Jump Anchors Row */}
        {!searchQuery && (
          <div className="mobbin-jump-pills-scroll">
            <span className="mobbin-jump-label">Jump to:</span>
            {currentSections.map(sec => (
              <button
                key={sec.id}
                type="button"
                className={`mobbin-jump-chip ${activeSectionId === sec.id ? 'active' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                <span className="chip-num">{sec.number}</span>
                <span className="chip-text">{sec.title.split(' ')[0]} {sec.title.split(' ')[1] || ''}</span>
              </button>
            ))}
          </div>
        )}

        {/* Scrollable Document Body */}
        <div className="mobbin-document-viewport" ref={bodyRef}>
          {currentSections.length === 0 ? (
            <div className="mobbin-empty-search">
              <FaInfoCircle size={24} className="mb-2 text-secondary opacity-50" />
              <p className="mb-1 fw-bold text-white">No clauses matching "{searchQuery}"</p>
              <span className="text-secondary small">Try searching for keywords like "IP", "Ownership", "SHA-256", or "Data".</span>
              <button 
                type="button" 
                className="mobbin-action-pill mt-3" 
                onClick={() => setSearchQuery('')}
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="mobbin-clauses-stack">
              {currentSections.map(section => (
                <article 
                  key={section.id} 
                  id={`legal-sec-${section.id}`} 
                  className={`mobbin-clause-card ${section.isB2B ? 'is-b2b-card' : ''}`}
                >
                  <div className="mobbin-clause-header">
                    <div className="mobbin-clause-identity">
                      <span className="mobbin-clause-num">{section.number}</span>
                      <h3 className="mobbin-clause-title">{section.title}</h3>
                    </div>
                    <button
                      type="button"
                      className={`mobbin-clause-link-btn ${copiedId === section.id ? 'copied' : ''}`}
                      onClick={() => handleCopyLink(section.id)}
                      title="Copy direct link to this clause"
                      aria-label={`Copy link to section ${section.title}`}
                    >
                      {copiedId === section.id ? (
                        <>
                          <FaCheck size={11} />
                          <span>Link Copied</span>
                        </>
                      ) : (
                        <>
                          <FaLink size={11} />
                          <span className="btn-text-desktop">Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* "In Plain English" Key Takeaway Box */}
                  <div className="mobbin-takeaway-box">
                    <div className="takeaway-badge">
                      <FaInfoCircle size={12} />
                      <span>Plain English Summary</span>
                    </div>
                    <p className="takeaway-text">{section.summary}</p>
                  </div>

                  {/* Formal Legal Clause */}
                  <div className="mobbin-legal-text">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mobbin-modal-footer">
          <div className="mobbin-footer-meta">
            <FaLock size={11} className="text-emerald" />
            <span>Cryptographically Verified &bull; Kone Academy Ecosystem &copy; {new Date().getFullYear()}</span>
          </div>

          <div className="mobbin-footer-buttons">
            <button type="button" className="mobbin-btn-secondary" onClick={onClose}>
              Dismiss
            </button>
            <button type="button" className="mobbin-btn-primary" onClick={onClose}>
              <FaCheckCircle size={13} />
              <span>I Understand & Accept</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default PrivacyTermsModal;

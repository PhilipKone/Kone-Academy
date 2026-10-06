import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  FaTimes, FaPrint, FaWhatsapp, FaCopy, FaCheck,
  FaFileInvoiceDollar, FaFileAlt, FaLock, FaCheckCircle, FaShieldAlt
} from 'react-icons/fa';
import './DocumentPrintModal.css';
import { courses } from '../data/courses';

export interface DocumentPrintData {
  studentName?: string;
  email?: string;
  phone?: string;
  token?: string;
  track?: string;
  division?: string;
  format?: string;
  issueDate?: string;
  cryptoHash?: string;
}

interface DocumentPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocType?: 'invoice' | 'syllabus';
  data: DocumentPrintData;
}

const DocumentPrintModal: React.FC<DocumentPrintModalProps> = ({
  isOpen,
  onClose,
  initialDocType = 'invoice',
  data
}) => {
  const [docType, setDocType] = useState<'invoice' | 'syllabus'>(initialDocType);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setDocType(initialDocType);
  }, [initialDocType]);

  if (!isOpen) return null;

  // Resolve matching course curriculum
  const token = (data.token || 'KONE-2026-CODE-9513').trim().toUpperCase();
  const matchedCourse = courses.find(c => 
    (data.track && c.title.toLowerCase().includes(data.track.toLowerCase())) ||
    (data.division && c.division.toLowerCase() === data.division.toLowerCase())
  ) || courses.find(c => c.id === 'course-code') || courses[0];

  const isThomasToken = token === 'KONE-2026-CODE-9513';
  const studentName = data.studentName || (isThomasToken ? 'Thomas Kangah' : 'Student Candidate');
  const email = data.email || (isThomasToken ? 'thomaskangah803@gmail.com' : 'philipkone45@gmail.com');
  const phone = data.phone || (isThomasToken ? '+233 24 023 9469' : '+233 55 199 3820');
  const trackTitle = data.track || matchedCourse.title;
  const division = data.division || matchedCourse.division;
  const issueDate = data.issueDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const invoiceNumber = `INV-2026-${token.split('-').slice(-2).join('-') || 'TK-9513'}`;
  const verificationUrl = `https://www.koneacademy.io/verify?id=${encodeURIComponent(token)}`;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = docType === 'invoice'
      ? `Hello ${studentName}! Here is your official Kone Academy tuition admission invoice for the ${trackTitle} (${token}): ${verificationUrl}\nLive Online Cohort: GHS 100.00 / session.`
      : `Official Curriculum & Syllabus for Kone Academy ${trackTitle} (${token}): ${verificationUrl}`;
    const url = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return createPortal(
    <div className="doc-modal-overlay" onClick={onClose}>
      <div className="doc-modal-shell" onClick={e => e.stopPropagation()}>
        
        {/* Interactive Top Bar (Hidden on Print) */}
        <div className="doc-modal-actions-bar">
          <div className="doc-tab-buttons">
            <button 
              className={`doc-tab-btn ${docType === 'invoice' ? 'active' : ''}`}
              onClick={() => setDocType('invoice')}
            >
              Invoice
            </button>
            <button 
              className={`doc-tab-btn ${docType === 'syllabus' ? 'active' : ''}`}
              onClick={() => setDocType('syllabus')}
            >
              Syllabus
            </button>
          </div>

          <div className="doc-tool-buttons">
            <button className="doc-action-btn primary" onClick={handlePrint} title="Print or save as PDF" aria-label="Print or save as PDF">
              <FaPrint size={14} />
            </button>
            <button className="doc-action-btn whatsapp" onClick={handleShareWhatsApp} title="Share directly to WhatsApp" aria-label="Share on WhatsApp">
              <FaWhatsapp size={15} />
            </button>
            <button className="doc-action-btn secondary" onClick={handleCopyLink} title="Copy official link" aria-label="Copy official link">
              {copied ? <FaCheck className="text-success" size={13} /> : <FaCopy size={13} />}
            </button>
            <button className="doc-close-btn" onClick={onClose} title="Close modal" aria-label="Close modal">
              <FaTimes size={15} />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="doc-paper-scroller">
          <div className="doc-paper-sheet" id="kca-printable-doc">
            
            {/* Header / Brand Letterhead */}
            <header className="doc-letterhead">
              <div className="doc-brand-block">
                <div className="doc-brand-logo-wrap">
                  <img src="/logo-circle-blue.svg" alt="Kone Academy" className="doc-brand-logo-img" />
                </div>
                <div>
                  <h1 className="doc-brand-title">KONE ACADEMY</h1>
                  <p className="doc-brand-sub">Research, Coding &amp; Engineering Collective</p>
                  <p className="doc-brand-contact">
                    Accra, Ghana &bull; philipkone45@gmail.com &bull; +233 55 199 3820 &bull; www.koneacademy.io
                  </p>
                </div>
              </div>

              <div className="doc-seal-block">
                <div className="doc-badge-pill">
                  <FaShieldAlt className="me-1" /> Admissions Registry
                </div>
                <div className="doc-meta-item">
                  <span className="lbl">Enrollment Ref:</span>
                  <span className="val token-val">{token}</span>
                </div>
              </div>
            </header>

            <div className="doc-rule-line" />

            {/* DOCUMENT 1: PRO-FORMA INVOICE */}
            {docType === 'invoice' && (
              <div className="doc-content-body">
                <div className="doc-title-row">
                  <div>
                    <h2 className="doc-main-heading">PRO-FORMA TUITION INVOICE & ACCEPTANCE</h2>
                    <p className="doc-heading-desc">Official Enrollment Confirmation & Tuition Remittance Schedule</p>
                  </div>
                  <div className="doc-invoice-meta-card">
                    <div><strong>Invoice No:</strong> {invoiceNumber}</div>
                    <div><strong>Issue Date:</strong> {issueDate}</div>
                    <div><strong>Due Date:</strong> Prior to First Cohort Session</div>
                    <div><strong>Status:</strong> <span className="status-badge-pending">OFFER RESERVED</span></div>
                  </div>
                </div>

                {/* Student Profile Card */}
                <div className="doc-student-info-box">
                  <div className="doc-info-col">
                    <span className="info-label">CANDIDATE INFORMATION</span>
                    <h3 className="candidate-name">{studentName}</h3>
                    <div className="info-line"><strong>Email:</strong> {email}</div>
                    <div className="info-line"><strong>WhatsApp / Phone:</strong> {phone}</div>
                  </div>
                  <div className="doc-info-col">
                    <span className="info-label">TRACK ALLOCATION</span>
                    <h3 className="track-name">{trackTitle}</h3>
                    <div className="info-line"><strong>Academy Division:</strong> Kone {division} Engineering</div>
                    <div className="info-line"><strong>Verification Portal:</strong> <a href={verificationUrl} target="_blank" rel="noreferrer" className="doc-verify-link">koneacademy.io/verify</a> <code>({token})</code></div>
                  </div>
                </div>

                {/* Tuition Pricing Breakdown Table */}
                <h4 className="doc-section-heading">TUITION & SESSION INVESTMENT SCHEDULE</h4>
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th style={{ width: '70%' }}>Enrollment Track / Program</th>
                      <th style={{ width: '30%', textAlign: 'right' }}>Rate / Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Live Online Cohort</strong>
                        <div className="item-sub">Live interactive virtual engineering labs, GitHub PR reviews &amp; community discord access.</div>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '0.92rem' }}>GHS 100.00</td>
                    </tr>
                  </tbody>
                </table>

                {/* Remittance Instructions */}
                <div className="doc-payment-grid">
                  <div className="doc-payment-box">
                    <h5 className="payment-heading">OFFICIAL PAYMENT INSTRUCTIONS (GHANA CEDIS - GHS)</h5>
                    <p className="payment-intro">Payments can be completed securely via Mobile Money or Bank Transfer:</p>
                    <ul className="payment-list">
                      <li><strong>Mobile Money:</strong> MTN MoMo / Telecel Cash</li>
                      <li><strong>Account Name:</strong> Philip Hotor</li>
                      <li><strong>Payment Reference:</strong> <code className="pay-ref">{token}</code> (or Student Name: {studentName})</li>
                      <li><strong>Admissions WhatsApp Desk:</strong> +233 55 199 3820</li>
                    </ul>
                    <p className="payment-footnote">
                      *Upon payment completion, forward your transaction screenshot to <strong>+233 55 199 3820</strong> or <strong>philipkone45@gmail.com</strong> for instant activation of your student portal and lab calendar.
                    </p>
                  </div>

                  <div className="doc-signoff-box">
                    <span className="signoff-label">ISSUING AUTHORITY & REGISTRAR</span>
                    <div className="doc-signature-line">
                      <div className="sign-name">Philip Hotor</div>
                      <div className="sign-role">Lead Engineer & Academy Director</div>
                      <div className="sign-org">Kone Academy Admissions Directorate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 2: OFFICIAL SYLLABUS */}
            {docType === 'syllabus' && (
              <div className="doc-content-body">
                <div className="doc-title-row">
                  <div>
                    <h2 className="doc-main-heading">CURRICULUM SPECIFICATION & SYLLABUS</h2>
                    <p className="doc-heading-desc">Comprehensive Module Checkpoints, Mini-Projects, and Capstone Architecture</p>
                  </div>
                  <div className="doc-invoice-meta-card">
                    <div><strong>Academic Track:</strong> {trackTitle}</div>
                    <div><strong>Division:</strong> Kone {division}</div>
                    <div><strong>Duration:</strong> {matchedCourse.duration || '14 Weeks'}</div>
                    <div><strong>Credential:</strong> Proficiency Certificate</div>
                  </div>
                </div>

                {/* Course Overview */}
                <div className="doc-student-info-box">
                  <div className="doc-info-col" style={{ width: '100%' }}>
                    <span className="info-label">TRACK MISSION & ARCHITECTURE</span>
                    <p style={{ margin: '6px 0 12px', fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
                      {matchedCourse.description}
                    </p>
                    <div className="info-line">
                      <strong>Core Technologies & Tooling:</strong> {matchedCourse.skills?.join(', ') || 'React, TypeScript, Node.js, Express, PostgreSQL'}
                    </div>
                  </div>
                </div>

                {/* Micro-Projects */}
                <h4 className="doc-section-heading">4 MODULE MICRO-PROJECTS (HANDS-ON CHECKPOINTS)</h4>
                <div className="syllabus-projects-list">
                  {matchedCourse.microProjects?.map((mp, i) => (
                    <div key={i} className="syllabus-project-item">
                      <div className="project-badge">Micro 0{i + 1}</div>
                      <div className="project-body">
                        <strong className="project-title">{mp.title}</strong>
                        <p className="project-desc">{mp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini-Projects & Capstone */}
                <h4 className="doc-section-heading" style={{ marginTop: '24px' }}>INTEGRATION MINI-PROJECTS & PRODUCTION CAPSTONE</h4>
                <div className="syllabus-projects-list">
                  {matchedCourse.miniProjects?.map((mp, i) => (
                    <div key={i} className="syllabus-project-item mini">
                      <div className="project-badge mini-badge">Mini 0{i + 1}</div>
                      <div className="project-body">
                        <strong className="project-title">{mp.title}</strong>
                        <p className="project-desc">{mp.description}</p>
                      </div>
                    </div>
                  ))}

                  {matchedCourse.finalProduct && (
                    <div className="syllabus-project-item capstone">
                      <div className="project-badge capstone-badge">Capstone</div>
                      <div className="project-body">
                        <strong className="project-title">{matchedCourse.finalProduct.title}</strong>
                        <p className="project-desc">{matchedCourse.finalProduct.description}</p>
                        <div className="project-stack"><strong>Production Stack:</strong> {matchedCourse.finalProduct.stack}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Certification Note */}
                <div className="doc-payment-grid" style={{ marginTop: '24px' }}>
                  <div className="doc-payment-box" style={{ width: '100%' }}>
                    <h5 className="payment-heading">CERTIFICATION & REGISTRY VERIFICATION</h5>
                    <p style={{ fontSize: '0.85rem', color: '#475569', margin: '4px 0 8px' }}>
                      Graduates must successfully submit all micro-projects via GitHub Pull Request, complete both system mini-projects, and deploy a live production capstone product. All issued certificates are permanently verifiable at <a href={verificationUrl}>{verificationUrl}</a>.
                    </p>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pt-2 border-top">
                      <span className="extra-small text-muted">Issuing Body: Kone Academy Admissions & Registry Desk</span>
                      <span className="extra-small text-muted">Direct Email: philipkone45@gmail.com</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Document Bottom Footer */}
            <footer className="doc-footer">
              <div className="doc-footer-meta">
                <span>Kone Academy &bull; Empowering Africa's Next-Generation Software Engineers</span>
                <span>Document ID: {invoiceNumber} &bull; Verification URL: koneacademy.io/verify</span>
              </div>
            </footer>

          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default DocumentPrintModal;

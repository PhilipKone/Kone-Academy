import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBookMedical, FaBuilding, FaLaptopCode, FaExternalLinkAlt, 
  FaSearch, FaTimes, FaFlask, FaShieldAlt, FaCalendarAlt, FaFileContract,
  FaGithub, FaChevronLeft, FaInfoCircle
} from 'react-icons/fa';
import { protocols } from '../data/protocols';

const getNormalizedCategory = (category) => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('academic') || cat.includes('analysis') || cat.includes('clinical') || cat.includes('research')) return 'academic';
  if (cat.includes('business') || cat.includes('operation') || cat.includes('corporate') || cat.includes('finance')) return 'business';
  if (cat.includes('software') || cat.includes('development') || cat.includes('app') || cat.includes('web') || cat.includes('system') || cat.includes('cryptographic')) return 'software';
  return cat;
};

const Protocols = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProtocols = protocols.filter(proto => {
    const matchesFilter = activeFilter === 'All' || getNormalizedCategory(proto.category) === activeFilter.toLowerCase();
    const matchesSearch = proto.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proto.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proto.tools.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-container position-relative container py-5" style={{ minHeight: '100vh', color: '#e2e8f0' }}>
      <div className="page-background-glow" />

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="btn btn-link text-white d-flex align-items-center gap-2 mb-4 p-0 text-decoration-none"
        style={{ zIndex: 10, position: 'relative' }}
      >
        <FaChevronLeft /> Back to Home
      </button>

      <motion.div
        className="text-center section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="badge mb-3">RESEARCH & COMPLIANCE</div>
        <h1 className="text-gradient mb-3 display-4">Technical Protocols</h1>
        <p className="lead text-secondary mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Standardized telemetry, clinical, and software development protocols engineered by Kone Academy and Labs.
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-4">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <FaSearch />
            </span>
            <input 
              type="text" 
              className="form-control bg-dark border-secondary text-white" 
              placeholder="Search protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="nav-tabs-premium mb-5 d-flex justify-content-center gap-3">
          {['All', 'Academic', 'Business', 'Software'].map(category => (
            <button
              key={category}
              className={`tab-btn-premium ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Protocol List Grid */}
      <div className="row g-4 justify-content-center">
        <AnimatePresence>
          {filteredProtocols.map((proto) => (
            <motion.div 
              key={proto.id} 
              className="col-md-6"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card hover-y p-4 h-100 d-flex flex-column" style={{ background: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className="badge bg-secondary">{proto.category}</span>
                  <span className="small text-secondary">{proto.institution}</span>
                </div>
                <h3 className="h5 text-white fw-bold mb-2">{proto.title}</h3>
                <p className="text-secondary small mb-3 flex-grow-1">{proto.description}</p>
                <div className="mb-4">
                  <strong className="small text-white me-2">Tools:</strong>
                  {proto.tools.split(',').map((tool, i) => (
                    <span key={i} className="badge bg-dark text-info me-1">{tool.trim()}</span>
                  ))}
                </div>

                <button 
                  className="btn btn-outline-primary btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => setSelectedProtocol(proto)}
                >
                  <FaInfoCircle /> View Specifications
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedProtocol && (
          <motion.div 
            className="modal-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          >
            <motion.div 
              className="glass-card p-4 text-white" 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              style={{ maxWidth: '600px', width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0 text-gradient">{selectedProtocol.title}</h4>
                <button className="btn btn-link text-white p-0" onClick={() => setSelectedProtocol(null)}>
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="mb-4">
                <h5 className="text-primary small uppercase fw-bold mb-2">Methodology</h5>
                <p className="text-secondary small">{selectedProtocol.details.methodology}</p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary small uppercase fw-bold mb-2">Data Processing</h5>
                <p className="text-secondary small">{selectedProtocol.details.dataProcessing}</p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary small uppercase fw-bold mb-2">Compliance & Data Protection</h5>
                <p className="text-secondary small">{selectedProtocol.details.compliance}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary">
                <span className="small text-secondary">Timeline: {selectedProtocol.details.timeline}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => setSelectedProtocol(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Protocols;

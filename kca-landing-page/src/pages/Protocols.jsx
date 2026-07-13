import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaTimes, FaChevronLeft, FaInfoCircle
} from 'react-icons/fa';
import { protocols } from '../data/protocols';
import './Protocols.css';

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
    <div className="page-container">
      <div className="page-background-glow" />

      {/* Back Button */}
      <button onClick={onBack} className="btn-back-home">
        <FaChevronLeft /> Back to Home
      </button>

      <motion.div
        className="section-title-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="badge-compliance">RESEARCH & COMPLIANCE</div>
        <h1 className="text-gradient mb-3 display-4 fw-bold">Technical Protocols</h1>
        <p className="lead text-secondary mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Standardized telemetry, clinical, and software development protocols engineered by Kone Academy and Labs.
        </p>

        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input-field" 
              placeholder="Search protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="nav-filters">
          {['All', 'Academic', 'Business', 'Software'].map(category => (
            <button
              key={category}
              className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Protocol List Grid */}
      <div className="protocols-grid">
        <AnimatePresence>
          {filteredProtocols.map((proto) => (
            <motion.div 
              key={proto.id} 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`protocol-card ${getNormalizedCategory(proto.category)}`}>
                <div className="card-top-row">
                  <span className="tag-category">{proto.category}</span>
                  <span className="institution-text">{proto.institution}</span>
                </div>
                <h3 className="protocol-title">{proto.title}</h3>
                <p className="protocol-desc">{proto.description}</p>
                <div className="tools-box">
                  <span className="tools-title">Tools:</span>
                  {proto.tools.split(',').map((tool, i) => (
                    <span key={i} className="tool-capsule">{tool.trim()}</span>
                  ))}
                </div>

                <button 
                  className="btn-view-spec"
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
            className="modal-backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-card" 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              <div className="modal-header">
                <h4 className="modal-title text-gradient">{selectedProtocol.title}</h4>
                <button className="btn-close-modal" onClick={() => setSelectedProtocol(null)} aria-label="Close modal">
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div>
                  <h5 className="modal-section-title">Methodology</h5>
                  <p className="modal-text">{selectedProtocol.details.methodology}</p>
                </div>

                <div>
                  <h5 className="modal-section-title">Data Processing</h5>
                  <p className="modal-text">{selectedProtocol.details.dataProcessing}</p>
                </div>

                <div>
                  <h5 className="modal-section-title">Compliance & Data Protection</h5>
                  <p className="modal-text">{selectedProtocol.details.compliance}</p>
                </div>
              </div>

              <div className="modal-footer">
                <span className="modal-timeline">Timeline: {selectedProtocol.details.timeline}</span>
                <button className="btn-close-footer" onClick={() => setSelectedProtocol(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Protocols;

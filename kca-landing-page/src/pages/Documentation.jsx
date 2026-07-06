import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChevronLeft, FaSearch, FaBook, FaCode, FaFlask, FaCheckCircle, 
  FaExclamationTriangle, FaLightbulb, FaExternalLinkAlt, FaBookOpen
} from 'react-icons/fa';
import { codingErrors } from '../data/codingErrors';
import { techStacks } from '../data/techStacks';
import './Documentation.css';

// Helper to inject JSON-LD schema dynamically into the document head (crucial for pSEO indexation)
const injectJSONLD = (schemaId, schemaData) => {
  let scriptEl = document.getElementById(schemaId);
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = schemaId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(schemaData);
};

const removeJSONLD = (schemaId) => {
  const scriptEl = document.getElementById(schemaId);
  if (scriptEl) {
    scriptEl.remove();
  }
};

const Documentation = ({ category, subcategory, slug, onBack, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Determine active content
  let activeContent = null;
  let activeType = null; // 'error' or 'stack'

  if (category === 'code' && subcategory === 'errors' && slug) {
    activeContent = codingErrors.find(item => item.slug === slug);
    activeType = 'error';
  } else if (category === 'consult' && subcategory === 'architecture' && slug) {
    activeContent = techStacks.find(item => item.slug === slug);
    activeType = 'stack';
  }

  // 2. SEO & Schema injection on Mount/Update
  useEffect(() => {
    if (activeContent) {
      // Dynamic Title & Description for Googlebot / ReactSnap
      document.title = activeContent.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', activeContent.summary || activeContent.cause.substring(0, 150));
      }

      // Dynamic JSON-LD Schema
      if (activeType === 'error') {
        const schema = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": activeContent.title,
          "description": activeContent.cause,
          "step": [
            {
              "@type": "HowToStep",
              "text": activeContent.solution
            }
          ]
        };
        injectJSONLD('pseo-jsonld', schema);
      } else if (activeType === 'stack') {
        const schema = {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": activeContent.title,
          "description": activeContent.summary,
          "articleBody": activeContent.recommendation
        };
        injectJSONLD('pseo-jsonld', schema);
      }
    } else {
      document.title = "Kone Academy | Documentation Hub";
    }

    return () => {
      removeJSONLD('pseo-jsonld');
    };
  }, [activeContent, activeType]);

  // Sidebar navigation click
  const handleNavClick = (e, cat, subcat, slg) => {
    if (e) e.preventDefault();
    window.history.pushState({}, '', `/docs/${cat}/${subcat}/${slg}`);
    onNavigate(cat, subcat, slg);
  };

  // Filter lists based on search
  const filteredErrors = codingErrors.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.errorText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStacks = techStacks.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.target.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Renders the left navigation sidebar
  const Sidebar = () => (
    <div className="doc-sidebar p-4 d-flex flex-column h-100" style={{ background: '#090B10', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mb-4">
        <h5 className="small text-secondary uppercase fw-bold tracking-wider mb-3">Filter Guides</h5>
        <div className="input-group">
          <span className="input-group-text bg-dark border-secondary text-secondary">
            <FaSearch />
          </span>
          <input 
            type="text" 
            className="form-control bg-dark border-secondary text-white small" 
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ fontSize: '0.85rem' }}
          />
        </div>
      </div>

      <div className="flex-grow-1 overflow-auto pe-1">
        {/* Code Errors Group */}
        <div className="mb-4">
          <h6 className="small text-primary fw-bold mb-2 d-flex align-items-center gap-2">
            <FaCode /> Coding Errors
          </h6>
          <div className="d-flex flex-column gap-1">
            {filteredErrors.map(item => (
              <a 
                key={item.slug}
                href={`/docs/code/errors/${item.slug}`}
                onClick={(e) => handleNavClick(e, 'code', 'errors', item.slug)}
                className={`text-start text-decoration-none small p-2 ${slug === item.slug ? 'active-doc-link text-white' : 'inactive-doc-link text-secondary'}`}
                style={{ fontSize: '0.85rem', display: 'block' }}
              >
                {item.slug.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stacks Group */}
        <div>
          <h6 className="small text-success fw-bold mb-2 d-flex align-items-center gap-2">
            <FaFlask /> Architecture Stacks
          </h6>
          <div className="d-flex flex-column gap-1">
            {filteredStacks.map(item => (
              <a 
                key={item.slug}
                href={`/docs/consult/architecture/${item.slug}`}
                onClick={(e) => handleNavClick(e, 'consult', 'architecture', item.slug)}
                className={`text-start text-decoration-none small p-2 ${slug === item.slug ? 'active-doc-link text-white' : 'inactive-doc-link text-secondary'}`}
                style={{ fontSize: '0.85rem', display: 'block' }}
              >
                {item.slug.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="docs-page-wrapper d-flex flex-column" style={{ minHeight: '100vh', background: '#0A0F1E', color: '#e2e8f0' }}>
      
      {/* Upper header action bar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-secondary-subtle" style={{ background: '#090B10' }}>
        <button 
          onClick={onBack}
          className="btn btn-link text-white d-flex align-items-center gap-2 p-0 text-decoration-none"
        >
          <FaChevronLeft /> Back to Main Hub
        </button>
        <span className="small text-secondary">Kone Academy Docs Hub (pSEO System)</span>
      </div>

      <div className="flex-grow-1 d-flex">
        {/* Left Navigation Sidebar */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          <Sidebar />
        </div>

        {/* Right Main Content Area */}
        <div className="flex-grow-1 p-4 p-md-5 overflow-auto" style={{ maxHeight: 'calc(100vh - 60px)' }}>
          {activeContent ? (
            <motion.div 
              key={slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-content mx-auto"
              style={{ maxWidth: '800px' }}
            >
              <h1 className="h2 text-white fw-bold mb-4">{activeContent.title}</h1>
              
              {activeType === 'error' ? (
                // --- Error Details Rendering ---
                <div>
                  <div className="glass-card bg-danger-subtle border border-danger-subtle p-3 mb-4 rounded d-flex align-items-center gap-3">
                    <FaExclamationTriangle className="text-danger fs-3" />
                    <div>
                      <strong className="text-danger d-block">Error Code:</strong>
                      <code className="text-white bg-dark px-2 py-1 rounded small">{activeContent.errorText}</code>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-primary fw-bold mb-2">Why It Happens (The Cause)</h3>
                    <p className="text-secondary">{activeContent.cause}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-primary fw-bold mb-2">How to Fix It</h3>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line' }}>{activeContent.solution}</p>
                  </div>

                  {/* Buggy Code vs Clean Code Diffs */}
                  <div className="row g-4 mb-5">
                    <div className="col-lg-6">
                      <h4 className="small text-danger uppercase fw-bold mb-2">❌ Buggy Code</h4>
                      <pre className="bg-dark p-3 rounded border border-danger-subtle overflow-auto" style={{ maxHeight: '350px', fontSize: '0.85rem' }}>
                        <code className="text-danger-subtle">{activeContent.badCode}</code>
                      </pre>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="small text-success uppercase fw-bold mb-2">✅ Correct Code</h4>
                      <pre className="bg-dark p-3 rounded border border-success-subtle overflow-auto" style={{ maxHeight: '350px', fontSize: '0.85rem' }}>
                        <code className="text-success-subtle">{activeContent.goodCode}</code>
                      </pre>
                    </div>
                  </div>

                  {/* High-conversion CTA to IDE */}
                  <div className="glass-card p-4 rounded text-center" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <h4 className="h5 text-white fw-bold mb-3">Want to test this solution?</h4>
                    <p className="text-secondary small mb-4">Open the clean code snippet inside the Kone Code editor and compile it directly inside your browser.</p>
                    <a 
                      href={`https://code.koneacademy.io/ide?template=${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary d-inline-flex align-items-center gap-2 fw-bold"
                    >
                      Open in Kone Code Editor <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              ) : (
                // --- Tech Stack Details Rendering ---
                <div>
                  <div className="glass-card bg-success-subtle border border-success-subtle p-3 mb-4 rounded d-flex align-items-center gap-3">
                    <FaLightbulb className="text-success fs-3" />
                    <div>
                      <strong className="text-success d-block">Architecture Focus:</strong>
                      <span className="text-white small">{activeContent.target}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Summary</h3>
                    <p className="text-secondary">{activeContent.summary}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Recommended Tech Stack</h3>
                    <p className="text-white bg-dark p-3 rounded border border-secondary" style={{ fontSize: '0.95rem' }}>{activeContent.recommendation}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Architecture Workflow</h3>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line' }}>{activeContent.architecture}</p>
                  </div>

                  <div className="mb-5">
                    <h3 className="h5 text-success fw-bold mb-3">Engineering Checklist</h3>
                    <div className="d-flex flex-column gap-2">
                      {activeContent.checklist.map((item, i) => (
                        <div key={i} className="d-flex align-items-start gap-2 text-secondary small">
                          <FaCheckCircle className="text-success mt-1" style={{ flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-conversion CTA to Consult */}
                  <div className="glass-card p-4 rounded text-center" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <h4 className="h5 text-white fw-bold mb-3">Need custom implementation help?</h4>
                    <p className="text-secondary small mb-4">Book a consultation session with Kone Consult to design and deploy this tech stack for your project.</p>
                    <a 
                      href="https://consult.koneacademy.io/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success d-inline-flex align-items-center gap-2 fw-bold"
                    >
                      Book a Tech Consultation <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            // --- Empty / Landing State for Documentation Hub ---
            <div className="text-center max-w-content mx-auto py-5" style={{ maxWidth: '600px' }}>
              <div className="icon mb-4 text-primary" style={{ fontSize: '4rem' }}>
                <FaBookOpen />
              </div>
              <h2 className="fw-bold text-white mb-3">Kone Academy Documentation Hub</h2>
              <p className="lead text-secondary mb-5">
                Welcome to our centralized repository of coding troubleshooting guides, agritech telemetry specs, and startup architecture templates.
              </p>
              
              <div className="row g-4 text-start">
                <div className="col-md-6">
                  <div className="glass-card p-3 h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(30, 41, 59, 0.2)' }}>
                    <h4 className="h6 text-primary fw-bold mb-2">🔧 Developer Errors</h4>
                    <p className="text-secondary small mb-0">Learn how to identify, debug, and resolve common React, JavaScript, and Python errors using our Web IDE.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="glass-card p-3 h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(30, 41, 59, 0.2)' }}>
                    <h4 className="h6 text-success fw-bold mb-2">⚡ Startup Architectures</h4>
                    <p className="text-secondary small mb-0">Explore vetted software stacks and high-scale time-series agritech telemetry infrastructure designs.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documentation;

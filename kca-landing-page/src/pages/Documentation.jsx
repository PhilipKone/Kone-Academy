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
    <div className="doc-sidebar">
      <div className="sidebar-search-group">
        <h5 className="sidebar-search-title">Filter Guides</h5>
        <div className="search-input-wrapper">
          <FaSearch style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
          <input 
            type="text" 
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="sidebar-links-container">
        {/* Code Errors Group */}
        <div style={{ marginBottom: '24px' }}>
          <h6 style={{ color: 'var(--neon-blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCode /> Coding Errors
          </h6>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {filteredErrors.map(item => (
              <a 
                key={item.slug}
                href={`/docs/code/errors/${item.slug}`}
                onClick={(e) => handleNavClick(e, 'code', 'errors', item.slug)}
                className={slug === item.slug ? 'active-doc-link' : 'inactive-doc-link'}
              >
                {item.slug.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stacks Group */}
        <div>
          <h6 style={{ color: 'var(--neon-green)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaFlask /> Architecture Stacks
          </h6>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {filteredStacks.map(item => (
              <a 
                key={item.slug}
                href={`/docs/consult/architecture/${item.slug}`}
                onClick={(e) => handleNavClick(e, 'consult', 'architecture', item.slug)}
                className={slug === item.slug ? 'active-doc-link' : 'inactive-doc-link'}
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
    <div className="docs-page-wrapper">
      
      {/* Upper header action bar */}
      <div className="docs-header-bar">
        <button 
          onClick={onBack}
          className="docs-header-btn"
        >
          <FaChevronLeft /> Back to Main Hub
        </button>
        <span className="small text-secondary">Kone Academy Docs Hub (pSEO System)</span>
      </div>

      <div className="docs-main-layout">
        {/* Left Navigation Sidebar */}
        <Sidebar />

        {/* Right Main Content Area */}
        <div className="docs-content-container">
          {activeContent ? (
            <motion.div 
              key={slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-content"
            >
              <h1 className="h2 fw-bold mb-4 text-gradient-docs">{activeContent.title}</h1>
              
              {activeType === 'error' ? (
                // --- Error Details Rendering ---
                <div>
                  <div className="alert-card danger mb-4">
                    <FaExclamationTriangle className="text-danger fs-3" style={{ flexShrink: 0 }} />
                    <div>
                      <strong className="text-danger d-block mb-1" style={{ fontSize: '0.85rem' }}>Error Console Output:</strong>
                      <code>{activeContent.errorText}</code>
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
                  <div className="code-panel-deck">
                    <div>
                      <h4 className="small text-danger-subtle uppercase fw-bold mb-2">❌ Buggy Code</h4>
                      <div className="ide-window buggy">
                        <div className="ide-header">
                          <div className="ide-dots">
                            <span className="ide-dot red"></span>
                            <span className="ide-dot yellow"></span>
                            <span className="ide-dot green"></span>
                          </div>
                          <span className="ide-title">broken_implementation.js</span>
                        </div>
                        <pre className="ide-body">
                          <code>{activeContent.badCode}</code>
                        </pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="small text-success-subtle uppercase fw-bold mb-2">✅ Correct Code</h4>
                      <div className="ide-window correct">
                        <div className="ide-header">
                          <div className="ide-dots">
                            <span className="ide-dot red"></span>
                            <span className="ide-dot yellow"></span>
                            <span className="ide-dot green"></span>
                          </div>
                          <span className="ide-title">fixed_implementation.js</span>
                        </div>
                        <pre className="ide-body">
                          <code>{activeContent.goodCode}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* High-conversion CTA to IDE */}
                  <div className="seo-card text-center" style={{ background: 'rgba(59,130,246,0.03)', borderColor: 'rgba(59,130,246,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <h4 className="h5 text-white fw-bold mb-1">Want to test this solution?</h4>
                    <p className="text-secondary small mb-3">Open the clean code snippet inside the Kone Code editor and compile it directly inside your browser.</p>
                    <a 
                      href={`https://code.koneacademy.io/ide?template=${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pulse-cta-blue"
                    >
                      Open in Kone Code Editor <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              ) : (
                // --- Tech Stack Details Rendering ---
                <div>
                  <div className="alert-card success mb-4">
                    <FaLightbulb className="text-success fs-3" style={{ flexShrink: 0 }} />
                    <div>
                      <strong className="text-success d-block mb-1" style={{ fontSize: '0.85rem' }}>Architecture target:</strong>
                      <span className="text-white small">{activeContent.target}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Summary</h3>
                    <p className="text-secondary">{activeContent.summary}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Recommended Tech Stack</h3>
                    <p className="text-white bg-dark p-3 rounded border border-secondary" style={{ fontSize: '0.85rem', fontFamily: 'Fira Code, monospace', margin: 0 }}>{activeContent.recommendation}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-success fw-bold mb-2">Architecture Workflow</h3>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line' }}>{activeContent.architecture}</p>
                  </div>

                  <div className="mb-5">
                    <h3 className="h5 text-success fw-bold mb-3">Engineering Checklist</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {activeContent.checklist.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }} className="text-secondary small">
                          <FaCheckCircle className="text-success mt-1" style={{ flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-conversion CTA to Consult */}
                  <div className="seo-card text-center" style={{ background: 'rgba(16,185,129,0.03)', borderColor: 'rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <h4 className="h5 text-white fw-bold mb-1">Need custom implementation help?</h4>
                    <p className="text-secondary small mb-3">Book a consultation session with Kone Consult to design and deploy this tech stack for your project.</p>
                    <a 
                      href="https://consult.koneacademy.io/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pulse-cta-green"
                    >
                      Book a Tech Consultation <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            // --- Empty / Landing State for Documentation Hub ---
            <div className="text-center max-w-content" style={{ padding: '40px 0' }}>
              <div className="landing-hero-icon-wrapper">
                <FaBookOpen />
              </div>
              <h2 className="fw-bold mb-3 text-gradient-docs">Kone Academy Documentation Hub</h2>
              <p className="lead text-secondary" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
                Welcome to our centralized repository of coding troubleshooting guides, agritech telemetry specs, and startup architecture templates.
              </p>
              
              <div className="landing-cards-grid">
                <div 
                  className="seo-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleNavClick(e, 'code', 'errors', codingErrors[0].slug)}
                >
                  <h4 className="h6 text-primary fw-bold mb-2">🔧 Developer Errors</h4>
                  <p className="text-secondary small mb-0">Learn how to identify, debug, and resolve common React, JavaScript, and Python errors using our Web IDE.</p>
                </div>
                <div 
                  className="seo-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleNavClick(e, 'consult', 'architecture', techStacks[0].slug)}
                >
                  <h4 className="h6 text-success fw-bold mb-2">⚡ Startup Architectures</h4>
                  <p className="text-secondary small mb-0">Explore vetted software stacks and high-scale time-series agritech telemetry infrastructure designs.</p>
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

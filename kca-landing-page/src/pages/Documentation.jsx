import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChevronLeft, FaSearch, FaBook, FaCode, FaFlask, FaCheckCircle, 
  FaExclamationTriangle, FaLightbulb, FaExternalLinkAlt, FaBookOpen
} from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import { ecosystemGuides } from '../data/ecosystemGuides';
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

const formatSlugLabel = (slug, type) => {
  if (type === 'guide') {
    if (slug === 'getting-started') return 'Getting Started & Onboarding';
    if (slug === 'remote-labs') return 'Remote Labs Access';
    if (slug === 'git-workflows') return 'Git Collaboration Workflow';
  } else {
    if (slug === 'fintech-app-tech-stack') return 'Fintech App Architecture';
    if (slug === 'saas-mvp-tech-stack') return 'SaaS MVP Fast Stack';
    if (slug === 'iot-telemetry-tech-stack') return 'IoT Telemetry Architecture';
  }
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const getLanguageClass = (slug) => {
  if (slug.includes('python')) return 'language-python';
  return 'language-bash';
};

const Documentation = ({ category, subcategory, slug, onBack, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Determine active content
  let activeContent = null;
  let activeType = null; // 'guide' or 'stack'

  if (category === 'code' && subcategory === 'guides' && slug) {
    activeContent = ecosystemGuides.find(item => item.slug === slug);
    activeType = 'guide';
  } else if (category === 'consult' && subcategory === 'architecture' && slug) {
    activeContent = techStacks.find(item => item.slug === slug);
    activeType = 'stack';
  }

  // 2. SEO, Schema & Prism injection on Mount/Update
  useEffect(() => {
    if (activeContent) {
      // Dynamic Title & Description for Googlebot / ReactSnap
      document.title = activeContent.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', activeContent.summary || activeContent.cause.substring(0, 150));
      }

      // Dynamic JSON-LD Schema
      if (activeType === 'guide') {
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

    // Highlight code blocks after rendering
    setTimeout(() => {
      Prism.highlightAll();
    }, 50);

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
  const filteredGuides = ecosystemGuides.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.errorText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.cause.toLowerCase().includes(searchQuery.toLowerCase())
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
        {filteredGuides.length === 0 && filteredStacks.length === 0 && (
          <div className="sidebar-no-results">
            No guides match your search query.
          </div>
        )}

        {/* Ecosystem Guides Group */}
        {filteredGuides.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h6 style={{ color: 'var(--neon-blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaBookOpen /> Ecosystem Guides
            </h6>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {filteredGuides.map(item => (
                <a 
                  key={item.slug}
                  href={`/docs/code/guides/${item.slug}`}
                  onClick={(e) => handleNavClick(e, 'code', 'guides', item.slug)}
                  className={slug === item.slug ? 'active-doc-link' : 'inactive-doc-link'}
                >
                  {formatSlugLabel(item.slug, 'guide')}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stacks Group */}
        {filteredStacks.length > 0 && (
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
                  {formatSlugLabel(item.slug, 'stack')}
                </a>
              ))}
            </div>
          </div>
        )}
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
        <span className="small text-secondary">Kone Academy Docs Hub</span>
      </div>

      <div className={`docs-main-layout ${slug ? 'has-active-doc' : ''}`}>
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
              {/* Mobile Back Link */}
              <button 
                onClick={(e) => handleNavClick(e, null, null, null)}
                className="mobile-back-link"
              >
                <FaChevronLeft /> Back to Guides List
              </button>

              <h1 className="h2 fw-bold mb-4 text-gradient-docs">{activeContent.title}</h1>
              
              {activeType === 'guide' ? (
                // --- Guide Details Rendering ---
                <div>
                  <div className="alert-card info mb-4" style={{ background: 'rgba(88,166,255,0.05)', borderColor: 'rgba(88,166,255,0.15)', borderLeft: '4px solid var(--accent-primary)', display: 'flex', gap: '16px', padding: '1.25rem', borderRadius: '8px' }}>
                    <FaBookOpen className="text-info fs-3" style={{ flexShrink: 0, color: 'var(--accent-primary)' }} />
                    <div>
                      <strong className="text-info d-block mb-1" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)' }}>Key Reference Command / Concept:</strong>
                      <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#fff' }}>{activeContent.errorText}</code>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-gradient-blue fw-bold mb-2">Overview & Purpose</h3>
                    <p className="text-secondary" style={{ lineHeight: '1.6' }}>{activeContent.cause}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-gradient-blue fw-bold mb-2">Execution Guidelines</h3>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{activeContent.solution}</p>
                  </div>

                  {/* Visual Setup / Flow Comparison */}
                  <div className="code-panel-deck">
                    <div>
                      <div className="code-panel-badge error" style={{ background: 'rgba(248,81,73,0.1)', color: 'var(--accent-danger)', border: '1px solid rgba(248,81,73,0.2)' }}>
                        {slug === 'getting-started' ? '❌ Traditional Model' : slug === 'remote-labs' ? '❌ Local Setup' : '❌ Bad Flow'}
                      </div>
                      <div className="ide-window buggy">
                        <div className="ide-header">
                          <div className="ide-dots">
                            <span className="ide-dot red"></span>
                            <span className="ide-dot yellow"></span>
                            <span className="ide-dot green"></span>
                          </div>
                          <span className="ide-title">{slug === 'getting-started' ? 'traditional_classroom.txt' : slug === 'remote-labs' ? 'local_serial.sh' : 'direct_push.sh'}</span>
                        </div>
                        <pre className="ide-body" style={{ background: '#090e1a' }}>
                          <code className="language-bash">{activeContent.badCode}</code>
                        </pre>
                      </div>
                    </div>
                    <div>
                      <div className="code-panel-badge success" style={{ background: 'rgba(63,185,80,0.1)', color: 'var(--accent-success)', border: '1px solid rgba(63,185,80,0.2)' }}>
                        {slug === 'getting-started' ? '✅ Kone Academy Model' : slug === 'remote-labs' ? '✅ Remote Flash Gateway' : '✅ Best Practice Workflow'}
                      </div>
                      <div className="ide-window correct">
                        <div className="ide-header">
                          <div className="ide-dots">
                            <span className="ide-dot red"></span>
                            <span className="ide-dot yellow"></span>
                            <span className="ide-dot green"></span>
                          </div>
                          <span className="ide-title">{slug === 'getting-started' ? 'kone_cohort_learning.txt' : slug === 'remote-labs' ? 'remote_flashing.sh' : 'team_pull_request.sh'}</span>
                        </div>
                        <pre className="ide-body" style={{ background: '#090e1a' }}>
                          <code className="language-bash">{activeContent.goodCode}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* High-conversion CTA to Platform Workspace */}
                  <div className="seo-card text-center" style={{ background: 'rgba(59,130,246,0.03)', borderColor: 'rgba(59,130,246,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '2.5rem' }}>
                    <h4 className="h5 text-white fw-bold mb-1">Ready to start practicing?</h4>
                    <p className="text-secondary small mb-3">Initialize your local projects and connect them to our remote infrastructure sandbox.</p>
                    <a 
                      href="https://code.koneacademy.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pulse-cta-blue"
                    >
                      Open Workspace <FaExternalLinkAlt />
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
                    <h3 className="h5 text-gradient-green fw-bold mb-2">Summary</h3>
                    <p className="text-secondary">{activeContent.summary}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-gradient-green fw-bold mb-2">Recommended Tech Stack</h3>
                    <div className="ide-window" style={{ maxHeight: 'none', borderColor: 'rgba(57, 255, 20, 0.25)' }}>
                      <div className="ide-header" style={{ background: '#0d1326' }}>
                        <div className="ide-dots">
                          <span className="ide-dot red"></span>
                          <span className="ide-dot yellow"></span>
                          <span className="ide-dot green"></span>
                        </div>
                        <span className="ide-title">recommended_stack.sh</span>
                      </div>
                      <pre className="ide-body" style={{ maxHeight: 'none', background: '#090e1a' }}>
                        <code className="language-typescript">{activeContent.recommendation}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 text-gradient-green fw-bold mb-2">Architecture Workflow</h3>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line' }}>{activeContent.architecture}</p>
                  </div>

                  <div className="mb-5">
                    <h3 className="h5 text-gradient-green fw-bold mb-3">Engineering Checklist</h3>
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
                Welcome to our centralized repository of onboarding materials, remote lab guides, and production architecture blueprints.
              </p>
              
              <div className="landing-cards-grid">
                <div 
                  className="seo-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleNavClick(e, 'code', 'guides', ecosystemGuides[0].slug)}
                >
                  <h4 className="h6 text-primary fw-bold mb-2">📚 Ecosystem Guides</h4>
                  <p className="text-secondary small mb-0">Learn how to get onboarded, configure remote lab hardware, and submit pull requests for code reviews.</p>
                </div>
                <div 
                  className="seo-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleNavClick(e, 'consult', 'architecture', techStacks[0].slug)}
                >
                  <h4 className="h6 text-success fw-bold mb-2">⚡ Architecture Blueprints</h4>
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

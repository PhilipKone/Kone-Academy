import React from 'react';
import './Sitemap.css';
import { 
  FaGlobe, 
  FaCode, 
  FaFlask, 
  FaBook, 
  FaInfoCircle, 
  FaChevronLeft, 
  FaExternalLinkAlt, 
  FaChevronRight 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import our programmatic datasets
import { codingErrors } from '../data/codingErrors';
import { techStacks } from '../data/techStacks';

const Sitemap = ({ onBack }) => {

  const handleLinkClick = (e, path) => {
    // Intercept client-side routing to keep SPA navigation smooth
    if (path.startsWith('/')) {
      e.preventDefault();
      window.history.pushState({}, '', path);
      // Dispatch popstate to update routing state in App.jsx
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="sitemap-page">
      {/* Header action bar */}
      <div className="docs-header-bar">
        <button onClick={onBack} className="docs-header-btn">
          <FaChevronLeft /> Back to Main Hub
        </button>
        <span className="small text-secondary">Kone Academy Hub (Central Index)</span>
      </div>

      <div className="sitemap-content-area">
        <div className="sitemap-max-w">
          
          <div className="sitemap-title-wrapper">
            <h1 className="sitemap-title">Kone Academy Sitemap</h1>
            <p className="sitemap-subtitle">
              The central index connecting all 11 active subdomains, developer documentation guides, industrial telemetry specs, and software architecture blueprints.
            </p>
          </div>

          {/* Master Grid */}
          <div className="sitemap-grid">
            
            {/* Column 1: Ecosystem Platforms */}
            <div className="sitemap-column platforms">
              <h2 className="sitemap-column-title">
                <FaGlobe /> Subdomain Platforms
              </h2>
              <div className="sitemap-link-list">
                <div className="sitemap-item">
                  <a href="https://www.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Main Academy Hub <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Central landing page, courses, and protocol specs.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://code.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Code <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Web-based IDE editor and compiler tools.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://consult.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Consult <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Enterprise software consulting & custom integrations.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://farms.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Farms <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Industrial agritech IoT monitoring dashboards.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://ai.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone AI <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Specialized LLM agentic workflow orchestration.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://warp.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Warp <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Next-generation ridesharing & logistics systems.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://shop.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Shop <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">E-commerce storefront for hardware and lab supplies.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://kids.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Kids <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Visual drag-and-drop coding courses for children.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://lab.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Lab <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Experimental physics and embedded hardware telemetry.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://digital.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Digital <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Product marketing, branding, and asset design studio.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://konetech.koneacademy.io" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Tech <FaExternalLinkAlt />
                  </a>
                  <span className="sitemap-link-desc">Ecosystem parent organization hub.</span>
                </div>
              </div>
            </div>

            {/* Column 2: Programmatic Developer Documentation */}
            <div className="sitemap-column docs">
              <h2 className="sitemap-column-title">
                <FaCode /> Developer Guides (pSEO)
              </h2>
              <div className="sitemap-link-list">
                <div className="sitemap-item">
                  <a href="/docs" onClick={(e) => handleLinkClick(e, '/docs')} className="sitemap-link">
                    Documentation Index
                  </a>
                  <span className="sitemap-link-desc">Central dashboard for error logs and blueprints.</span>
                </div>
                {codingErrors.map(item => (
                  <div key={item.slug} className="sitemap-item">
                    <a 
                      href={`/docs/code/errors/${item.slug}`} 
                      onClick={(e) => handleLinkClick(e, `/docs/code/errors/${item.slug}`)} 
                      className="sitemap-link"
                    >
                      {item.title}
                    </a>
                    <span className="sitemap-link-desc">Troubleshooting guide for console output: <code>{item.errorText}</code>.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Startup Architectures & Telemetry Specs */}
            <div className="sitemap-column architectures">
              <h2 className="sitemap-column-title">
                <FaFlask /> Architecture Blueprints
              </h2>
              <div className="sitemap-link-list">
                {techStacks.map(item => (
                  <div key={item.slug} className="sitemap-item">
                    <a 
                      href={`/docs/consult/architecture/${item.slug}`} 
                      onClick={(e) => handleLinkClick(e, `/docs/consult/architecture/${item.slug}`)} 
                      className="sitemap-link"
                    >
                      {item.title}
                    </a>
                    <span className="sitemap-link-desc">Production workflow for target: {item.target}.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Resources & Compliance */}
            <div className="sitemap-column company">
              <h2 className="sitemap-column-title">
                <FaBook /> Hub Resources & Legal
              </h2>
              <div className="sitemap-link-list">
                <div className="sitemap-item">
                  <a href="/training" onClick={(e) => handleLinkClick(e, '/training')} className="sitemap-link">
                    Training Hub
                  </a>
                  <span className="sitemap-link-desc">Interactive curriculum and professional code modules.</span>
                </div>
                <div className="sitemap-item">
                  <a href="/protocols" onClick={(e) => handleLinkClick(e, '/protocols')} className="sitemap-link">
                    Research Protocols
                  </a>
                  <span className="sitemap-link-desc">Academic studies and industrial engineering specifications.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://www.koneacademy.io/.well-known/security.txt" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Vulnerability Disclosure Protocol
                  </a>
                  <span className="sitemap-link-desc">Our public security disclosure and PGP credentials.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://www.koneacademy.io/.well-known/mcp.json" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    MCP Integration Spec
                  </a>
                  <span className="sitemap-link-desc">Model Context Protocol endpoint definitions.</span>
                </div>
                <div className="sitemap-item">
                  <a href="https://github.com/PhilipKone/Kone-Academy" className="sitemap-link" target="_blank" rel="noopener noreferrer">
                    Ecosystem Source Code
                  </a>
                  <span className="sitemap-link-desc">View and contribute to our public GitHub repository.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Slider Section */}
          <div className="showcase-section">
            <div className="showcase-header">
              <div className="showcase-header-left">
                <h3>Discover our core divisions</h3>
                <p>Learn more about what you can build inside the Kone Academy ecosystem.</p>
              </div>
              <div className="slider-controls">
                <button className="slider-btn"><FaChevronLeft /></button>
                <button className="slider-btn"><FaChevronRight /></button>
              </div>
            </div>

            <div className="showcase-slider">
              
              <div className="showcase-card">
                <img src="/app-code.svg" alt="Kone Code" className="showcase-card-img" style={{ background: '#0a0f1d', padding: '20px' }} />
                <div className="showcase-card-content">
                  <h4 className="showcase-card-title">Kone Code Compiler</h4>
                  <p className="showcase-card-desc">
                    A web-based interactive compiler sandbox. Test code snippets, run benchmarks, and complete challenges directly in your browser.
                  </p>
                  <a href="https://code.koneacademy.io" className="showcase-card-link" target="_blank" rel="noopener noreferrer">
                    Explore Platform <FaChevronRight />
                  </a>
                </div>
              </div>

              <div className="showcase-card">
                <img src="/app-farms.svg" alt="Kone Farms" className="showcase-card-img" style={{ background: '#0a0f1d', padding: '20px' }} />
                <div className="showcase-card-content">
                  <h4 className="showcase-card-title">Kone Farms Telemetry</h4>
                  <p className="showcase-card-desc">
                    High-scale agricultural IoT tracking. Access soil moisture telemetry, electric fence status, and automated yield projections.
                  </p>
                  <a href="https://farms.koneacademy.io" className="showcase-card-link" target="_blank" rel="noopener noreferrer">
                    Access Dashboard <FaChevronRight />
                  </a>
                </div>
              </div>

              <div className="showcase-card">
                <img src="/app-ai.svg" alt="Kone AI" className="showcase-card-img" style={{ background: '#0a0f1d', padding: '30px', width: '100%', height: '200px' }} />
                <div className="showcase-card-content">
                  <h4 className="showcase-card-title">Kone AI agentic Workflows</h4>
                  <p className="showcase-card-desc">
                    Orchestrate large language models, execute complex automated code analysis, and run clinical research data pipelines.
                  </p>
                  <a href="https://ai.koneacademy.io" className="showcase-card-link" target="_blank" rel="noopener noreferrer">
                    Deploy Agents <FaChevronRight />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sitemap;

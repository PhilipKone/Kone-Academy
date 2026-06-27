import React, { useEffect } from 'react';
import { localSeoData } from '../data/localSeoData';
import './LocalSEOPage.css';

export const LocalSEOPage = ({ niche, city, onBack }) => {
  const nicheInfo = localSeoData.niches[niche];
  const cityInfo = localSeoData.cities[city];

  // Fallbacks in case route parameters are invalid
  if (!nicheInfo || !cityInfo) {
    return (
      <div className="local-seo-error-container">
        <h2 className="glow-text">Location Page Not Found</h2>
        <p>It seems this specific local hub page does not exist yet.</p>
        <button onClick={onBack} className="btn-back-home">Back to Hub</button>
      </div>
    );
  }

  const pageTitle = `${nicheInfo.name} Academy in ${cityInfo.cityName} | Kone Academy`;
  const pageDesc = `${nicheInfo.description} Based in ${cityInfo.cityName}, ${cityInfo.country}. Connect with the elite global tech collective.`;

  useEffect(() => {
    // 1. Update document metadata dynamically for SEO indexation
    document.title = pageTitle;

    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', pageDesc);
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDesc, true);
    updateMetaTag('og:url', `https://www.koneacademy.io/academy/${niche}/${city}`, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.koneacademy.io/academy/${niche}/${city}`);

    // 2. Inject localized LocalBusiness Schema
    const SCHEMA_ID = 'local-seo-jsonld';
    let schemaScript = document.getElementById(SCHEMA_ID);
    if (schemaScript) {
      schemaScript.remove();
    }

    const localizedSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `${nicheInfo.name} - Kone Academy ${cityInfo.cityName}`,
      "description": pageDesc,
      "url": `https://www.koneacademy.io/academy/${niche}/${city}`,
      "telephone": cityInfo.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityInfo.cityName,
        "addressCountry": cityInfo.country,
        "streetAddress": cityInfo.address
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Kone Academy",
        "url": "https://www.koneacademy.io/"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": cityInfo.mapCoords.lat,
        "longitude": cityInfo.mapCoords.lng
      }
    };

    schemaScript = document.createElement('script');
    schemaScript.id = SCHEMA_ID;
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.innerHTML = JSON.stringify(localizedSchema);
    document.head.appendChild(schemaScript);

    return () => {
      // Clean up injected schema on unmount
      const script = document.getElementById(SCHEMA_ID);
      if (script) script.remove();
    };
  }, [niche, city, pageTitle, pageDesc]);

  return (
    <div className="local-seo-page-container">
      <div className="glow-bg-accent" />
      
      <header className="local-seo-header">
        <button onClick={onBack} className="back-link">
          &larr; Back to Global Hub
        </button>
        <div className="local-seo-brand">
          <img src="/logo-circle-blue.svg" alt="KCA Logo" className="brand-logo" />
          <span className="brand-name">Kone Academy</span>
        </div>
      </header>

      <main className="local-seo-content">
        <section className="hero-section-local">
          <span className="location-badge">{cityInfo.cityName}, {cityInfo.country}</span>
          <h1 className="local-title">
            Elite <span className="highlight-text">{nicheInfo.name}</span> Programs
          </h1>
          <p className="local-subtitle">{nicheInfo.tagline}</p>
          <p className="local-description">{nicheInfo.description}</p>
          
          <div className="cta-wrapper">
            <a href={nicheInfo.ctaLink} target="_blank" rel="noopener noreferrer" className="btn-cta-premium">
              {nicheInfo.ctaText} &rarr;
            </a>
          </div>
        </section>

        <section className="features-grid-local">
          <h2 className="section-heading-local">Why Choose Our {cityInfo.cityName} Hub?</h2>
          <div className="features-container-local">
            {nicheInfo.features.map((feat, idx) => (
              <div key={idx} className="feature-card-local">
                <div className="feature-icon-glow">✓</div>
                <h3>{feat}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-details-local">
          <div className="contact-card-local">
            <h3>Local Contact Information</h3>
            <p><strong>Address:</strong> {cityInfo.address}</p>
            <p><strong>Inquiries:</strong> {cityInfo.phone}</p>
            <p><strong>Support:</strong> support@koneacademy.io</p>
          </div>
        </section>
      </main>

      <footer className="local-seo-footer">
        <p>&copy; {new Date().getFullYear()} Kone Academy. Connecting talent globally.</p>
      </footer>
    </div>
  );
};

export default LocalSEOPage;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Divisions from './components/Divisions';
import Services from './components/Services';
import CTA from './components/CTA';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InstallBanner from './components/InstallBanner';

import LoadingScreen from './components/LoadingScreen';
import InteractiveGrid from './components/InteractiveGrid';

const KoneFarms = React.lazy(() => import('./components/KoneFarms'));
const LocalSEOPage = React.lazy(() => import('./pages/LocalSEOPage'));
const TrainingHub = React.lazy(() => import('./pages/TrainingHub'));
const Protocols = React.lazy(() => import('./pages/Protocols'));
const Documentation = React.lazy(() => import('./pages/Documentation'));

import { applyTheme } from './components/ThemeSelector';

function App() {
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    window.__PRERENDER_INJECTED
  );

  const [isInitializing, setIsInitializing] = React.useState(!isPrerender);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [localRoute, setLocalRoute] = React.useState(null);
  const [docRoute, setDocRoute] = React.useState({ category: null, subcategory: null, slug: null });

  const parseRoute = () => {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    if (pathParts[0] === 'academy' && pathParts[1] && pathParts[2]) {
      setLocalRoute({ niche: pathParts[1], city: pathParts[2] });
      setCurrentPage('local-seo');
    } else if (pathParts[0] === 'training') {
      setCurrentPage('training');
    } else if (pathParts[0] === 'protocols') {
      setCurrentPage('protocols');
    } else if (pathParts[0] === 'docs') {
      setCurrentPage('docs');
      setDocRoute({
        category: pathParts[1] || null,
        subcategory: pathParts[2] || null,
        slug: pathParts[3] || null
      });
    } else {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'farms') {
        setCurrentPage('farms');
      } else {
        setCurrentPage('home');
        setLocalRoute(null);
      }
    }
  };
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const savedTheme = localStorage.getItem('kca-neon-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    parseRoute();

    window.addEventListener('popstate', parseRoute);
    return () => {
      window.removeEventListener('popstate', parseRoute);
    };
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    parseRoute();
  };

  const handleDocNavigate = (cat, subcat, slg) => {
    window.history.pushState({}, '', `/docs/${cat}/${subcat}/${slg}`);
    parseRoute();
  };

  return (
    <>
      {currentPage === 'farms' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <KoneFarms onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'local-seo' && localRoute ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <LocalSEOPage niche={localRoute.niche} city={localRoute.city} onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'training' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <TrainingHub onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'protocols' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <Protocols onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'docs' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <Documentation 
            category={docRoute.category} 
            subcategory={docRoute.subcategory} 
            slug={docRoute.slug} 
            onBack={handleBackToHome} 
            onNavigate={handleDocNavigate}
          />
        </React.Suspense>
      ) : (
        <>
          {!isPrerender && <LoadingScreen onFinished={() => setIsInitializing(false)} />}
          {(!isInitializing || isPrerender) && (
            <div className="App animate-fade-in">
              <InteractiveGrid />
              <Header />
              <main id="main-content">
                <Hero />
                <Vision />
                <Divisions />
                <Services />
                <Careers />
                <FAQ />
                <CTA />
              </main>
              <Footer />
              <InstallBanner />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;




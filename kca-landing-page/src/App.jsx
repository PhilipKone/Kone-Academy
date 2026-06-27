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
import KoneFarms from './components/KoneFarms';
import LocalSEOPage from './pages/LocalSEOPage';

import { applyTheme } from './components/ThemeSelector';

function App() {
  const [isInitializing, setIsInitializing] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [localRoute, setLocalRoute] = React.useState(null);
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const savedTheme = localStorage.getItem('kca-neon-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    // Parse path: /academy/:niche/:city
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    if (pathParts[0] === 'academy' && pathParts[1] && pathParts[2]) {
      setLocalRoute({ niche: pathParts[1], city: pathParts[2] });
      setCurrentPage('local-seo');
    } else {
      // Check url search params on load
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'farms') {
        setCurrentPage('farms');
      }
    }
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
    setLocalRoute(null);
  };

  return (
    <>
      {currentPage === 'farms' ? (
        <KoneFarms onBack={handleBackToHome} />
      ) : currentPage === 'local-seo' && localRoute ? (
        <LocalSEOPage niche={localRoute.niche} city={localRoute.city} onBack={handleBackToHome} />
      ) : (
        <>
          <LoadingScreen onFinished={() => setIsInitializing(false)} />
          {!isInitializing && (
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



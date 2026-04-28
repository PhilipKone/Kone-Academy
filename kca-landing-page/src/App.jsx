import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Divisions from './components/Divisions';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import InstallBanner from './components/InstallBanner';

import LoadingScreen from './components/LoadingScreen';
import InteractiveGrid from './components/InteractiveGrid';

function App() {
  const [isInitializing, setIsInitializing] = React.useState(true);
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <LoadingScreen onFinished={() => setIsInitializing(false)} />
      {!isInitializing && (
        <div className="App animate-fade-in">
          <InteractiveGrid />
          <Header />
          <Hero />
          <Vision />
          <Divisions />
          <Services />
          <CTA />
          <Footer />
          <InstallBanner />
        </div>
      )}
    </>
  );
}

export default App;



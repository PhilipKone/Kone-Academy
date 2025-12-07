import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Divisions from './components/Divisions';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Vision />
      <Divisions />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;


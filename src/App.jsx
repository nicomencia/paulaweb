import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import Servicios from './components/Servicios';
import Contactame from './components/Contactame';
import Footer from './components/Footer';
import TerapiaIndividual from './components/TerapiaIndividual';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'quien-soy':
        return <QuienSoy />;
      case 'servicios':
        return <Servicios setCurrentView={setCurrentView} />;
      case 'terapia-individual':
        return <TerapiaIndividual onBack={() => setCurrentView('servicios')} />;
      case 'contactame':
        return <Contactame />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      {renderContent()}
      <Footer setCurrentView={setCurrentView} />
    </>
  );
}

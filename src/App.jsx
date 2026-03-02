import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import Servicios from './components/Servicios';
import Contactame from './components/Contactame';
import Footer from './components/Footer';
import TerapiaIndividual from './components/TerapiaIndividual';
import TerapiaPareja from './components/TerapiaPareja';
import ArteterapiaGrupal from './components/ArteterapiaGrupal';
import FormacionProfesionales from './components/FormacionProfesionales';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [previousView, setPreviousView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view) => {
    setPreviousView(currentView);
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'quien-soy':
        return <QuienSoy />;
      case 'servicios':
        return <Servicios setCurrentView={navigateTo} />;
      case 'terapia-individual':
        return <TerapiaIndividual onBack={() => navigateTo(previousView)} />;
      case 'terapia-pareja':
        return <TerapiaPareja onBack={() => navigateTo(previousView)} />;
      case 'arteterapia-grupal':
        return <ArteterapiaGrupal onBack={() => navigateTo(previousView)} />;
      case 'formacion-profesionales':
        return <FormacionProfesionales onBack={() => navigateTo(previousView)} />;
      case 'contactame':
        return <Contactame />;
      default:
        return <Hero setCurrentView={navigateTo} />;
    }
  };

  return (
    <>
      <Navigation currentView={currentView} setCurrentView={navigateTo} />
      {renderContent()}
      <Footer setCurrentView={navigateTo} />
    </>
  );
}

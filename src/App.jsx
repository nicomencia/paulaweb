import { useState, useEffect, useRef } from 'react';
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
import AvisoLegal from './components/AvisoLegal';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import PoliticaCookies from './components/PoliticaCookies';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [previousView, setPreviousView] = useState('home');
  const scrollToServiciosRef = useRef(false);

  useEffect(() => {
    if (scrollToServiciosRef.current) {
      scrollToServiciosRef.current = false;
      const el = document.getElementById('hero-servicios');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view, scrollToServices = false) => {
    setPreviousView(currentView);
    if (view === 'home' && scrollToServices) {
      scrollToServiciosRef.current = true;
    }
    setCurrentView(view);
  };

  const goBack = () => {
    navigateTo(previousView, previousView === 'home');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'quien-soy':
        return <QuienSoy />;
      case 'servicios':
        return <Servicios setCurrentView={navigateTo} />;
      case 'terapia-individual':
        return <TerapiaIndividual onBack={goBack} />;
      case 'terapia-pareja':
        return <TerapiaPareja onBack={goBack} />;
      case 'arteterapia-grupal':
        return <ArteterapiaGrupal onBack={goBack} />;
      case 'formacion-profesionales':
        return <FormacionProfesionales onBack={goBack} />;
      case 'contactame':
        return <Contactame />;
      case 'aviso-legal':
        return <AvisoLegal onBack={goBack} />;
      case 'politica-privacidad':
        return <PoliticaPrivacidad onBack={goBack} />;
      case 'politica-cookies':
        return <PoliticaCookies onBack={goBack} />;
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

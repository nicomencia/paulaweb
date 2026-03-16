import { useState, useRef, useEffect } from 'react';
import './Navigation.css';

export default function Navigation({ currentView, setCurrentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isHome = currentView === 'home';

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsOpen(false);
    setServiciosOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiciosOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navigation ${!isHome ? 'navigation--solid' : ''}`}>
      <div className="nav-container">
        {!isHome && (
          <button
            className="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            aria-label="Ir a inicio"
          >
            <img src="/logo.png" alt="Paula Sastre Valverde" className="nav-logo" />
          </button>
        )}

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'nav-menu--open' : ''}`}>
          <li>
            <button onClick={() => handleNavClick('quien-soy')}>
              Quién soy
            </button>
          </li>
          <li className="nav-dropdown-wrapper" ref={dropdownRef}>
            <button
              className="nav-dropdown-trigger"
              onClick={() => setServiciosOpen(!serviciosOpen)}
            >
              Servicios
              <svg
                className={`dropdown-chevron ${serviciosOpen ? 'dropdown-chevron--open' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="2,4 6,8 10,4" />
              </svg>
            </button>
            <ul className={`nav-dropdown ${serviciosOpen ? 'nav-dropdown--open' : ''}`}>
              <li className="nav-dropdown-header">
                <button onClick={() => handleNavClick('servicios')} className="nav-dropdown-all">
                  Todos los servicios
                </button>
              </li>
              <li className="nav-dropdown-divider"></li>
              <li>
                <button onClick={() => handleNavClick('terapia-individual')}>
                  Terapia Individual
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('terapia-pareja')}>
                  Terapia de Pareja
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('arteterapia-grupal')}>
                  Arteterapia Grupal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('formacion-profesionales')}>
                  Formación
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button onClick={() => handleNavClick('contactame')}>
              Contáctame
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

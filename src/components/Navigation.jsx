import { useState } from 'react';
import './Navigation.css';

export default function Navigation({ currentView, setCurrentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = currentView === 'home';

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsOpen(false);
  };

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
          <li>
            <button onClick={() => handleNavClick('servicios')}>
              Servicios
            </button>
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

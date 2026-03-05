import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner({ onNavigateCookies }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-banner__text">
        Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el uso
        del sitio. Puede aceptar todas las cookies, rechazarlas o consultar nuestra{' '}
        <button
          onClick={onNavigateCookies}
          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
        >
          Política de Cookies
        </button>.
      </p>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__btn cookie-banner__btn--reject" onClick={handleReject}>
          Rechazar
        </button>
        <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

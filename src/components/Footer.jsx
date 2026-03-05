import './Footer.css';

export default function Footer({ setCurrentView }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="Paula Sastre" className="footer-logo" />
            <p className="footer-name">Paula Sastre Valverde</p>
            <p>Psicóloga Integrativa</p>
            <p>(COL. 30979)</p>
          </div>

          <div className="footer-links">
            <h4>Navegar</h4>
            <ul>
              <li><button onClick={() => setCurrentView('quien-soy')}>Quién soy</button></li>
              <li><button onClick={() => setCurrentView('servicios')}>Servicios</button></li>
              <li><button onClick={() => setCurrentView('contactame')}>Contáctame</button></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Conectar</h4>
            <div className="footer-social-links">
              <a href="mailto:paulaysusespacios@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://instagram.com/paulaysusespacios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/paula-sastre-valverde-584769169/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal-links">
            <button onClick={() => setCurrentView('aviso-legal')}>Aviso legal</button>
            <span className="footer-legal-sep">·</span>
            <button onClick={() => setCurrentView('politica-privacidad')}>Política de privacidad</button>
            <span className="footer-legal-sep">·</span>
            <button onClick={() => setCurrentView('politica-cookies')}>Política de cookies</button>
          </div>
          <p>&copy; {new Date().getFullYear()} Paula Sastre Valverde. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

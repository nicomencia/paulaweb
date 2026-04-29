import { useState } from 'react';
import './Contactame.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function Contactame() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'No se pudo enviar el mensaje. Inténtalo de nuevo.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactame">
      <div className="contactame-layout">
        <div className="contactame-izquierda">
          <div className="contactame-flower-wrap">
            <img src="/flor.png" alt="" className="contactame-flower" />
            <img src="/contacto.jpg" alt="Paula Sastre" className="contactame-paula" />
          </div>
          <a href="mailto:paulaysusespacios@gmail.com" className="contactame-email">
            paulaysusespacios@gmail.com
          </a>
          <div className="contactame-social">
            <a href="https://instagram.com/paulaysusespacios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/paula-sastre-valverde-584769169/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contactame-derecha">
          <h2 className="contactame-titulo">Contacto</h2>

          {submitted ? (
            <div className="contactame-success">
              <p>Gracias por escribirme. Te responderé pronto.</p>
            </div>
          ) : (
            <form className="contactame-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <span className="form-check">✓</span>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Nombre"
                />
              </div>
              <div className="form-row">
                <span className="form-check">✓</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="form-row form-row--textarea">
                <span className="form-check form-check--top">✓</span>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Mensaje"
                />
              </div>
              {error && <p className="contactame-error">{error}</p>}
              <button type="submit" className="contactame-btn" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

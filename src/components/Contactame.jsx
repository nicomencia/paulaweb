import { useState } from 'react';
import './Contactame.css';

export default function Contactame() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;
    const subject = encodeURIComponent(`Mensaje de ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:paulaysusespacios@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="contactame">
      <div className="container">
        <h2>Contáctame</h2>
        <p className="contactame-intro">
          Si tienes alguna pregunta o quieres dar el primer paso, escríbeme. Estaré encantada de acompañarte.
        </p>

        <div className="contactame-content">
          <div className="contactame-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:paulaysusespacios@gmail.com">paulaysusespacios@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <h4>Instagram</h4>
                <a href="https://instagram.com/paulaysusespacios" target="_blank" rel="noopener noreferrer">
                  @paulaysusespacios
                </a>
              </div>
            </div>
          </div>

          <form className="contactame-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contactame-success">
                <p>Gracias por escribirme. Te responderé pronto.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Cuéntame cómo puedo ayudarte..."
                  />
                </div>
                <button type="submit" className="contactame-btn">Enviar mensaje</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

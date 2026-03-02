import './Hero.css';
import './Servicios.css';

const servicios = [
  {
    id: 'terapia-individual',
    titulo: 'Terapia Individual',
    subtitulo: 'Barcelona · Online',
    imagen: '/servicios_individual.png',
  },
  {
    id: 'terapia-pareja',
    titulo: 'Terapia de Pareja',
    subtitulo: 'Barcelona · Online',
    imagen: '/servicios_pareja.png',
  },
  {
    id: 'arteterapia-grupal',
    titulo: 'Arteterapia Grupal',
    subtitulo: null,
    imagen: '/servicios_grupo.png',
  },
  {
    id: 'formacion-profesionales',
    titulo: 'Formación para Profesionales',
    subtitulo: null,
    imagen: '/servicios_formacion.png',
  },
];

export default function Hero({ setCurrentView }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Paula Saste</h1>
          <p className="hero-subtitle">Psicóloga</p>
        </div>
      </section>

      <section className="hero-intro">
        <p className="hero-intro-text">
          La terapia es aquel lugar seguro en el que poder (re)conocerte y mirarte sin juicios, con calma y con la calidez de un acompañamiento profesional. Durante tu proceso cada emoción, pensamiento, y vivencia encuentran su lugar, permitiéndote integrar tus heridas y encontrar el equilibrio en este mundo lleno de caos. Recuperaremos tus herramientas, adquirirás nuevos aprendizajes y mejorarás la relación contigo misma y las demás.
        </p>
        <p className="hero-intro-quote">
          El primer paso para sanar es reconocer que mereces vivir en bienestar.
        </p>
      </section>

      <section className="hero-servicios">
        <h2 className="hero-servicios-titulo">¿En qué puedo ayudarte?</h2>
        <div className="hero-servicios-grid">
          {servicios.map((servicio) => (
            <button
              className="servicio-card"
              key={servicio.id}
              onClick={() => setCurrentView && setCurrentView(servicio.id)}
            >
              <div className="servicio-imagen">
                <img src={servicio.imagen} alt={servicio.titulo} />
              </div>
              <p className="servicio-titulo">{servicio.titulo}</p>
              {servicio.subtitulo && (
                <p className="servicio-subtitulo">{servicio.subtitulo}</p>
              )}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

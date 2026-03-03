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
          <h1 className="hero-name">Paula Sastre Valverde</h1>
          <p className="hero-subtitle">Psicóloga Integrativa</p>
        </div>
      </section>

      <section className="hero-intro">
        <div className="hero-intro-inner">
          <p className="hero-intro-text">
            La terapia es aquel lugar seguro en el que poder (re)conocerte y mirarte sin juicios, con calma y con la calidez de un acompañamiento profesional. Durante tu proceso cada emoción, pensamiento y vivencia encuentran su lugar, permitiéndote integrar tus heridas y encontrar el equilibrio en este mundo lleno de caos. Recuperaremos tus herramientas, adquirirás nuevos aprendizajes y mejorarás la relación contigo misma y las demás.
          </p>
          <p className="hero-intro-quote">
            <em>El primer paso para sanar es reconocer<br />que mereces vivir en bienestar.</em>
          </p>
        </div>
      </section>

      <section className="hero-servicios" id="hero-servicios">
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

      <div className="hero-sobre-spacer" />
      <section className="hero-sobre">
        <div className="hero-sobre-top">
          <div className="hero-sobre-text">
            <h3 className="hero-sobre-titulo">Sobre mi...</h3>
            <p className="hero-sobre-p-full">Soy Paula Sastre Valverde, psicóloga sanitaria y personita curiosa siempre buscando la forma de conectar consigo misma, su creatividad, las demás y con el entorno en el que vive.</p>
            <div className="hero-sobre-photo">
              <img src="/sobreMi.jpg" alt="Paula Sastre" />
            </div>
            <p>Mi enfoque terapéutico se basa en la integración de diferentes modelos y técnicas, lo cual me permite adaptarme a las necesidades de las personas a las que acompaño y ofrecerles las visiones más adecuadas a su momento vital.</p>
            <p>Dada mi diversa formación y experiencia, integro la perspectiva feminista e interseccional, reconociendo los malestares y opresiones sistemáticas que nos atraviesan y ofreciendo una mirada crítica sobre nuestro contexto y sus aprendizajes.</p>
            <p>Ofrezco un trabajo integral de cuerpo, mente y emociones, no dejando nada atrás.</p>
            <p>Recuerda que eres mucho más que tus problemas y en esto se basa mi intervención. Miraremos con respeto y ternura cada parte de tu ser y (re)conoceremos tus herramientas y fortalezas, mientras integramos aquello que busca su lugar.</p>
          </div>
        </div>
        <div className="hero-sobre-bottom">
          <div className="hero-sobre-imagen">
            <img src="/sobreMi2.jpg" alt="" />
          </div>
          <blockquote className="hero-sobre-cita">
            <p>Conozca todas las teorías, domine todas las técnicas, pero al tocar un alma humana sea apenas otra alma humana.</p>
            <cite>Carl G. Jung</cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}

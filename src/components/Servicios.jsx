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

const proceso = [
  {
    id: 'primera-visita',
    titulo: 'Primera Visita',
    subtitulo: 'En esta sesión...',
    imagen: '/procesos_visita.png',
  },
  {
    id: 'evaluacion',
    titulo: 'Evaluación',
    subtitulo: 'Dedicaremos...',
    imagen: '/procesos_evaluacion.png',
  },
  {
    id: 'devolucion',
    titulo: 'Devolución',
    subtitulo: 'Juntas...',
    imagen: '/procesos_devolucion.png',
  },
  {
    id: 'proceso',
    titulo: 'Proceso',
    subtitulo: 'Caminaremos...',
    imagen: '/procesos_proceso.png',
  },
  {
    id: 'cierre',
    titulo: 'Cierre',
    subtitulo: 'Alta...',
    imagen: '/procesos_cierre.png',
  },
];

export default function Servicios() {
  return (
    <section className="servicios">
      <div className="container">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <button className="servicio-card" key={servicio.id}>
              <div className="servicio-imagen">
                {servicio.imagen ? (
                  <img src={servicio.imagen} alt={servicio.titulo} />
                ) : (
                  <div className="servicio-imagen-placeholder" />
                )}
              </div>
              <p className="servicio-titulo">{servicio.titulo}</p>
              {servicio.subtitulo && (
                <p className="servicio-subtitulo">{servicio.subtitulo}</p>
              )}
            </button>
          ))}
        </div>

        <h3 className="servicios-proceso-titulo">El proceso...</h3>
        <div className="proceso-grid">
          {proceso.map((item) => (
            <div className="proceso-card" key={item.id}>
              <div className="proceso-imagen">
                {item.imagen ? (
                  <img src={item.imagen} alt={item.titulo} />
                ) : (
                  <div className="servicio-imagen-placeholder" />
                )}
              </div>
              <p className="proceso-titulo">{item.titulo}</p>
              {item.subtitulo && (
                <p className="proceso-subtitulo">{item.subtitulo}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

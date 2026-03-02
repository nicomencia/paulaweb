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
    imagen: '/grupo.png',
  },
  {
    id: 'formacion-profesionales',
    titulo: 'Formación para Profesionales',
    subtitulo: null,
    imagen: '/formacion.png',
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
      </div>
    </section>
  );
}

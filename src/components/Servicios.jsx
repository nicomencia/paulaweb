import './Servicios.css';

const servicios = [
  {
    titulo: 'Terapia Individual',
    descripcion: 'Un espacio personal y confidencial para explorar tus emociones, superar obstáculos y trabajar hacia el bienestar que mereces. Sesiones adaptadas a tu ritmo y necesidades.',
  },
  {
    titulo: 'Gestión de Ansiedad y Estrés',
    descripcion: 'Aprende herramientas prácticas para manejar la ansiedad y el estrés del día a día. Trabajamos juntos para identificar patrones y desarrollar estrategias que te devuelvan la calma.',
  },
  {
    titulo: 'Autoconocimiento y Desarrollo Personal',
    descripcion: 'Un proceso de exploración profunda para conocerte mejor, comprender tus necesidades y construir una vida más alineada con quién eres y quién quieres ser.',
  },
  {
    titulo: 'Acompañamiento en Momentos de Cambio',
    descripcion: 'Los momentos de transición vital pueden ser desafiantes. Te ofrezco un apoyo cercano para navegar cambios importantes con mayor claridad y confianza.',
  },
];

export default function Servicios() {
  return (
    <section className="servicios">
      <div className="container">
        <h2>Servicios</h2>
        <p className="servicios-intro">
          Ofrezco un acompañamiento psicológico personalizado, adaptado a cada persona y momento vital.
        </p>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div className="servicio-card" key={index}>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './ServicioPage.css';

const temas = [
  'Puedo acompañaros en...',
  'Crisis de pareja',
  'Problemas de comunicación',
  'Conflictos recurrentes',
  'Infidelidad y reconstrucción del vínculo',
  'Celos y desconfianza',
  'Distanciamiento emocional',
  'Dificultades en la intimidad',
  'Gestión de las diferencias',
  'Transiciones vitales',
  'Convivencia y rutinas',
  'Decisiones importantes (hijos, proyectos...)',
  'Dependencia emocional en la pareja',
  'y más...',
];

export default function TerapiaPareja({ onBack }) {
  return (
    <section className="servicio-page">
      <div className="sp-header">
        <button className="sp-back" onClick={onBack}>← Volver</button>
        <h1 className="sp-titulo">TERAPIA DE PAREJA</h1>
      </div>

      <div className="sp-body">
        <div className="sp-columna sp-columna-center">
          <ul className="sp-temas">
            {temas.map((tema, i) => (
              <li key={i} className={i === 0 ? 'sp-temas-intro' : tema === 'y más...' ? '' : 'sp-temas-punto'}>{tema === 'y más...' ? <em>{tema}</em> : tema}</li>
            ))}
          </ul>
        </div>

        <div className="sp-columna sp-columna-center">
          <p>Un espacio para vosotros dos.</p>
          <p>Un lugar donde poder hablar, escucharos y entenderos con una mirada nueva.</p>
          <p>Donde revisar los patrones que os distancian y construir juntos los puentes que os acercan.</p>
          <p>Un espacio donde reconectar con lo que os unió, con lo que sois como equipo, con lo que queréis construir.</p>
          <p>Porque las relaciones también necesitan cuidado, atención y espacio para crecer.</p>
        </div>
      </div>

      <div className="sp-precios">
        <div className="sp-precio-bloque">
          <h2 className="sp-precio-ciudad">BARCELONA</h2>
          <p className="sp-precio-valor">80€</p>
          <div className="sp-precio-lugar">
            <p><strong>Espacio ATMOS</strong></p>
            <p>CASA COMALAT</p>
            <p>Avinguda Diagonal 442, 3º 1º</p>
            <img src="/Atmos.jpg" alt="Espacio ATMOS" />
          </div>
        </div>

        <div className="sp-precio-bloque sp-precio-bloque--right">
          <h2 className="sp-precio-ciudad">ONLINE</h2>
          <p className="sp-precio-valor">70€</p>
        </div>
      </div>

      <p className="sp-sesiones">Sesiones de 1 hora</p>
    </section>
  );
}

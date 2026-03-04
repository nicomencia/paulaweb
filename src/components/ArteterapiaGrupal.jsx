import './ServicioPage.css';

export default function ArteterapiaGrupal({ onBack }) {
  return (
    <section className="servicio-page">
      <div className="sp-header">
        <button className="sp-back" onClick={onBack}>← Volver</button>
        <h1 className="sp-titulo">ARTETERAPIA GRUPAL</h1>
      </div>

      <div className="sp-texto-centrado">
        <p>Además del acompañamiento individual, ofrezco espacios de arteterapia grupal donde la creatividad se convierte en vehículo de exploración, conexión e integración.</p>
        <p>El grupo es un lugar profundamente transformador. A través del arte —sin necesidad de experiencia previa— creamos un espacio seguro donde poder expresarnos, mirarnos con mayor profundidad y compartir desde la autenticidad. La creación artística nos permite acceder a partes de nosotras que a veces no encuentran palabras, facilitando procesos de autoconocimiento, regulación emocional y transformación.</p>
        <p>Estos espacios están pensados como:</p>
        <ul>
          <li>Un refugio seguro, libre de juicios.</li>
          <li>Un lugar para explorar el mundo interno desde la creatividad.</li>
          <li>Una oportunidad para nutrirnos del sostén y la mirada del grupo.</li>
          <li>Un espacio para habitar el presente con mayor consciencia.</li>
        </ul>
        <p>Si deseas proponer un espacio grupal (asociaciones, centros educativos, equipos de trabajo, colectivos…), estaré encantada de escucharte y valorar juntas una propuesta.</p>
        <p>Próximamente anunciaré nuevos grupos en Barcelona, con diversas temáticas y un encuadre específico, adaptado a las necesidades de las personas que lo conformen.</p>
      </div>

    </section>
  );
}

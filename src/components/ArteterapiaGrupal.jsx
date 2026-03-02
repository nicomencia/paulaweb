import './ServicioPage.css';

export default function ArteterapiaGrupal({ onBack }) {
  return (
    <section className="servicio-page">
      <div className="sp-header">
        <button className="sp-back" onClick={onBack}>← Volver</button>
        <h1 className="sp-titulo">ARTETERAPIA GRUPAL</h1>
      </div>

      <div className="sp-texto-centrado">
        <p>Un espacio de creación y encuentro.</p>
        <p>A través del arte como lenguaje, exploramos emociones, vivencias y recursos internos en un entorno seguro y de confianza.</p>
        <p>No es necesaria ninguna experiencia artística. El proceso creativo es el camino, no el resultado.</p>
        <p>Un lugar donde conectar contigo y con otros, donde expresar lo que a veces las palabras no alcanzan.</p>
        <p>Donde la creatividad se convierte en una herramienta de autoconocimiento y transformación.</p>
      </div>

      <div className="sp-precios" style={{ gridTemplateColumns: '1fr' }}>
        <div className="sp-precio-bloque">
          <h2 className="sp-precio-ciudad">BARCELONA</h2>
          <div className="sp-precio-lugar">
            <p><strong>Espacio ATMOS</strong></p>
            <p>CASA COMALAT</p>
            <p>Avinguda Diagonal 442, 3º 1º</p>
          </div>
        </div>
      </div>

      <p className="sp-sesiones">Consulta próximas fechas y grupos</p>
    </section>
  );
}

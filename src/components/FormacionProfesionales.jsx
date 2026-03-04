import './ServicioPage.css';

export default function FormacionProfesionales({ onBack }) {
  return (
    <section className="servicio-page">
      <div className="sp-header">
        <button className="sp-back" onClick={onBack}>← Volver</button>
        <h1 className="sp-titulo">FORMACIÓN</h1>
      </div>

      <div className="sp-texto-centrado">
        <p>Si estás buscando una profesional que imparta pequeñas píldoras formativas sobre psicoeducación emocional, trauma, prevención del ASI, crisis vitales, gestión de conflictos y habilidades sociales, o el uso del arte como herramienta terapéutica, entre otros… ¡Soy tu persona!.</p>
        <p>Cuéntame qué necesitas y juntas generaremos un espacio riguroso y vivencial, donde integro teoría y práctica desde una mirada integradora, sensible y adaptada al contexto y necesidades del grupo.</p>
      </div>

    </section>
  );
}

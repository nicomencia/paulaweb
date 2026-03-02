import './ServicioPage.css';

export default function FormacionProfesionales({ onBack }) {
  return (
    <section className="servicio-page">
      <div className="sp-header">
        <button className="sp-back" onClick={onBack}>← Volver</button>
        <h1 className="sp-titulo">FORMACIÓN PARA PROFESIONALES</h1>
      </div>

      <div className="sp-texto-centrado">
        <p>Un espacio de aprendizaje y crecimiento para profesionales del ámbito de la salud mental, educación y acompañamiento.</p>
        <p>Talleres y formaciones orientados a ampliar la mirada clínica, integrar nuevas herramientas terapéuticas y enriquecer la práctica profesional.</p>
        <p>Desde la teoría hacia la experiencia vivida, con un enfoque práctico, reflexivo y aplicable.</p>
        <p>Porque cuidar a quienes cuidan también es parte del trabajo.</p>
      </div>

      <div className="sp-precios" style={{ gridTemplateColumns: '1fr' }}>
        <div className="sp-precio-bloque">
          <h2 className="sp-precio-ciudad">BARCELONA · ONLINE</h2>
          <div className="sp-precio-lugar">
            <p>Formaciones presenciales y en formato online.</p>
            <p>Consulta el calendario de próximas formaciones.</p>
          </div>
        </div>
      </div>

      <p className="sp-sesiones">Consulta disponibilidad y próximas fechas</p>
    </section>
  );
}

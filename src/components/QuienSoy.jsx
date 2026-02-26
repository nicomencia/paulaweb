import './QuienSoy.css';

export default function QuienSoy() {
  return (
    <section className="quien-soy">
      <div className="container">
        <h2>Quién soy</h2>
        <div className="quien-soy-content">
          <div className="quien-soy-text">
            <p>Soy Paula Saste, psicóloga especializada en bienestar emocional y desarrollo personal.</p>

            <p>Mi trabajo nace de la convicción de que cada persona lleva en sí misma la capacidad de transformar su vida. Acompañar ese proceso es lo que me apasiona.</p>

            <p>Con una mirada integradora y cercana, combino diferentes enfoques terapéuticos para adaptarme a las necesidades únicas de cada persona. Creo en la importancia de crear un espacio seguro, sin juicios, donde poder explorar, sentir y crecer.</p>

            <p>Mi formación y experiencia me permiten trabajar con adultos en distintos momentos vitales: desde la gestión del estrés y la ansiedad, hasta procesos de cambio profundo y autoconocimiento.</p>

            <p className="psychologist-name">Paula Saste</p>
          </div>
          <div className="quien-soy-image">
            <img src="/paula.jpg" alt="Paula Saste" />
          </div>
        </div>
      </div>
    </section>
  );
}

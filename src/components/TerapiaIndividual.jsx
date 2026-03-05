import './TerapiaIndividual.css';

const temas = [
  'Puedo acompañarte en...',
  'Ansiedad',
  'Depresión',
  'Tristeza, llanto descontrolado "sin motivo"',
  'Crisis vitales',
  'Conexión y gestión emocional',
  'Labilidad emocional',
  'Preocupaciones',
  'Habilidades personales y sociales',
  'Dependencia emocional',
  'Problemas de autoestima',
  'Autoexigencia',
  'Inseguridades y miedos',
  'Experiencias complejas (bullying, acoso laboral, etc)',
  'Duelos',
  'Inestabilidad emocional',
  'Sexualidad y bienestar',
  'Violencia de género',
  'Trauma y apego',
  'ASI',
  'Problemas familiares y relacionales',
  'y más...',
];

export default function TerapiaIndividual({ onBack }) {
  return (
    <section className="terapia-individual">
      <div className="ti-header">
        <button className="ti-back" onClick={onBack}>← Volver</button>
        <h1 className="ti-titulo">TERAPIA INDIVIDUAL</h1>
      </div>

      <div className="ti-body">
        <div className="ti-columna-izquierda">
          <ul className="ti-temas">
            {temas.map((tema, i) => (
              <li key={i} className={i === 0 ? 'ti-temas-intro' : tema === 'y más...' ? '' : 'ti-temas-punto'}>{tema === 'y más...' ? <em>{tema}</em> : tema}</li>
            ))}
          </ul>
        </div>

        <div className="ti-columna-derecha">
          <p>Este será tu espacio seguro.</p>
          <p>Aquel lugar en el que poder mirarte y reconocer cada faceta de tu ser.</p>
          <p>Un lugar donde revisar tu historia, recolocar tus vivencias e integrar tus traumas.</p>
          <p>Un lugar donde conectar con tu peque interior, tu espontaneidad, tus emociones y tu creatividad.</p>
          <p>Un lugar donde escuchar tus valores, donde diseñar esa brújula que guiará tu camino.</p>
          <p>Aquel lugar en el que reconocer tu capacidad para sanar y florecer. Para reinventar esas herramientas que te ayudarán a vivir en equilibrio y abrazar en el desequilibrio.</p>
        </div>
      </div>

      <div className="ti-precios">
        <div className="ti-precio-bloque">
          <h2 className="ti-precio-ciudad">BARCELONA</h2>
          <p className="ti-precio-valor">65€</p>
          <div className="ti-precio-lugar">
            <p><strong>Espacio ATMOS</strong></p>
            <p>CASA COMALAT</p>
            <p>Avinguda Diagonal 442, 3º 1º</p>
            <img src="/Atmos.jpg" alt="Espacio ATMOS" />
          </div>
        </div>

        <div className="ti-precio-bloque ti-precio-bloque--right">
          <h2 className="ti-precio-ciudad">ONLINE</h2>
          <img src="/Online55.jpg" alt="Sesión online" className="ti-online-img" />
          <p className="ti-precio-valor">55€</p>
        </div>
      </div>

      <p className="ti-sesiones">Sesiones de 1 hora</p>
    </section>
  );
}

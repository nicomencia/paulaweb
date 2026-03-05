import './LegalPage.css';

export default function AvisoLegal({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="legal-back" onClick={onBack}>← Volver</button>
        <h1 className="legal-titulo">Aviso Legal</h1>
        <div className="legal-content">

          <h2 className="legal-subtitulo">1. Datos identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en la normativa vigente, y en particular en la Ley 34/2002,
            de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa
            que el presente sitio web:
          </p>
          <p><strong>paulaysusespacios.es</strong></p>
          <p>es titularidad de:</p>
          <p>
            <strong>Titular:</strong> Paula Sastre Valverde<br />
            <strong>NIF:</strong> 70832476C<br />
            <strong>Email de contacto:</strong>{' '}
            <a href="mailto:paulaysusespacios@gmail.com">paulaysusespacios@gmail.com</a>
          </p>
          <p><strong>Datos profesionales</strong></p>
          <p>
            Profesión: Psicóloga<br />
            Número de colegiada: 30979<br />
            Colegio profesional: Colegio Oficial de Psicología de Cataluña
          </p>
          <p>
            El acceso, navegación y uso del presente sitio web atribuye la condición de usuario e implica la aceptación
            plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal, así como en la Política de
            Privacidad y la Política de Cookies.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">2. Objeto del sitio web</h2>
          <p>
            El presente sitio web tiene como finalidad ofrecer información sobre los servicios profesionales de psicología
            prestados por Paula Sastre Valverde, así como facilitar el contacto con personas interesadas en dichos servicios.
          </p>
          <p>
            La información publicada en este sitio web tiene carácter meramente informativo y divulgativo, y en ningún caso
            sustituye la evaluación, diagnóstico o tratamiento psicológico realizado por un profesional cualificado en el
            marco de una consulta individual.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la legislación
            vigente, el presente Aviso Legal, la buena fe y el orden público.
          </p>
          <p>
            Queda prohibido el uso del sitio web con fines ilícitos o lesivos para terceros, o que de cualquier forma
            puedan causar perjuicio o impedir el normal funcionamiento del sitio web.
          </p>
          <p>En particular, el usuario se compromete a no:</p>
          <ul>
            <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
            <li>
              Introducir o difundir virus informáticos u otros sistemas que puedan causar daños en los sistemas
              informáticos del titular del sitio web o de terceros.
            </li>
            <li>
              Intentar acceder a áreas restringidas del sitio web o a sistemas informáticos sin la debida autorización.
            </li>
          </ul>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo a título enunciativo textos, imágenes, diseño, logotipos,
            estructura, código fuente, gráficos o cualquier otro elemento, están protegidos por la normativa de propiedad
            intelectual e industrial y son titularidad de Paula Sastre Valverde o cuentan con las licencias necesarias
            para su uso.
          </p>
          <p>
            Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma
            de explotación sin la autorización previa y expresa de la titular.
          </p>
          <p>El acceso al sitio web no implica en ningún caso la cesión de derechos sobre los contenidos del mismo.</p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">5. Responsabilidad</h2>
          <p>
            La titular del sitio web no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso
            indebido de los contenidos de la web por parte de los usuarios.
          </p>
          <p>
            Asimismo, no se garantiza la ausencia de errores en los contenidos ni la disponibilidad permanente del sitio
            web, aunque se adoptarán las medidas razonables para evitarlos y corregirlos cuando sea posible.
          </p>
          <p>
            La titular no se hace responsable de los posibles daños derivados de interferencias, interrupciones, virus
            informáticos, averías telefónicas o desconexiones en el funcionamiento del sistema electrónico por causas
            ajenas a su control.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">6. Enlaces a terceros</h2>
          <p>
            En caso de que en el sitio web se dispongan enlaces o hipervínculos hacia otros sitios de Internet, la
            titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
          </p>
          <p>
            En ningún caso se asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio
            web ajeno, ni se garantiza la disponibilidad técnica, exactitud o veracidad de la información contenida en
            los mismos.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">7. Protección de datos personales</h2>
          <p>
            Los datos personales que puedan recabarse a través del sitio web serán tratados conforme a lo establecido en
            la normativa vigente en materia de protección de datos personales, incluyendo el Reglamento General de
            Protección de Datos (RGPD) y la normativa española aplicable.
          </p>
          <p>
            Para más información sobre el tratamiento de datos personales, el usuario puede consultar la Política de
            Privacidad disponible en este sitio web.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">8. Modificaciones del sitio web</h2>
          <p>
            La titular se reserva el derecho de modificar en cualquier momento y sin necesidad de previo aviso la
            presentación, configuración y contenidos del sitio web, así como el presente Aviso Legal, con el objetivo de
            adaptarlo a cambios normativos o mejoras del sitio.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">9. Legislación aplicable y jurisdicción</h2>
          <p>
            La relación entre la titular del sitio web y los usuarios se regirá por la legislación española vigente.
          </p>
          <p>
            Para la resolución de cualquier conflicto que pudiera derivarse del acceso o uso del sitio web, las partes se
            someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.
          </p>

        </div>
      </div>
    </div>
  );
}

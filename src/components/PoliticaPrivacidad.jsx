import './LegalPage.css';

export default function PoliticaPrivacidad({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="legal-back" onClick={onBack}>← Volver</button>
        <h1 className="legal-titulo">Política de Privacidad</h1>
        <div className="legal-content">

          <h2 className="legal-subtitulo">1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
            de 27 de abril de 2016 (Reglamento General de Protección de Datos – RGPD), se informa al usuario de que
            los datos personales que facilite a través de este sitio web serán tratados por:
          </p>
          <p>
            <strong>Titular:</strong> Paula Sastre Valverde<br />
            <strong>NIF:</strong> 70832476C<br />
            <strong>Correo electrónico:</strong>{' '}
            <a href="mailto:paulaysusespacios@gmail.com">paulaysusespacios@gmail.com</a>
          </p>
          <p>En adelante, la <strong>Responsable del tratamiento</strong>.</p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">2. Finalidad del tratamiento de los datos</h2>
          <p>
            Los datos personales que el usuario facilite a través del formulario de contacto o mediante correo
            electrónico serán tratados con las siguientes finalidades:
          </p>
          <ul>
            <li>Atender consultas, solicitudes o peticiones realizadas por el usuario.</li>
            <li>Contactar con el usuario para responder a su solicitud.</li>
            <li>Facilitar información relacionada con los servicios profesionales solicitados.</li>
          </ul>
          <p>Los datos proporcionados no serán utilizados para tomar decisiones automatizadas ni para elaborar perfiles.</p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">3. Datos que se recogen</h2>
          <p>
            A través de este sitio web se pueden recoger los siguientes datos personales cuando el usuario utiliza
            el formulario de contacto o envía un correo electrónico:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (si el usuario lo facilita)</li>
            <li>Información contenida en el mensaje enviado por el usuario</li>
          </ul>
          <p>
            Asimismo, durante la navegación por la web pueden recogerse datos técnicos de forma automática, como la
            dirección IP o el tipo de navegador utilizado, con fines estadísticos y de mejora del funcionamiento del
            sitio web.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">4. Base legal para el tratamiento de los datos</h2>
          <p>
            La base jurídica que legitima el tratamiento de los datos es el <strong>consentimiento del usuario</strong>,
            que se otorga al enviar voluntariamente sus datos a través del formulario de contacto o al enviar un
            correo electrónico.
          </p>
          <p>
            El usuario puede retirar su consentimiento en cualquier momento escribiendo al correo electrónico indicado
            en esta política.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">5. Conservación de los datos</h2>
          <p>
            Los datos personales se conservarán únicamente durante el tiempo necesario para atender la solicitud del
            usuario o mantener la comunicación derivada de la misma.
          </p>
          <p>
            Posteriormente podrán conservarse durante el tiempo necesario para cumplir con posibles obligaciones legales
            o para la defensa ante posibles reclamaciones.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">6. Destinatarios de los datos</h2>
          <p>Los datos personales no serán cedidos a terceros, salvo obligación legal.</p>
          <p>
            No obstante, determinados proveedores de servicios técnicos (por ejemplo, servicios de alojamiento web o
            correo electrónico) podrían tener acceso a los datos en calidad de{' '}
            <strong>encargados del tratamiento</strong>, únicamente para prestar dichos servicios y siempre bajo las
            correspondientes garantías de confidencialidad y seguridad.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">7. Derechos de los usuarios</h2>
          <p>El usuario tiene derecho a:</p>
          <ul>
            <li>Acceder a sus datos personales.</li>
            <li>Solicitar la rectificación de datos inexactos.</li>
            <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
            <li>Solicitar la limitación del tratamiento de sus datos.</li>
            <li>Oponerse al tratamiento de sus datos.</li>
            <li>Solicitar la portabilidad de sus datos cuando proceda.</li>
          </ul>
          <p>Para ejercer estos derechos puede enviar una solicitud al correo electrónico:</p>
          <p>
            <strong>
              <a href="mailto:paulaysusespacios@gmail.com">paulaysusespacios@gmail.com</a>
            </strong>
          </p>
          <p>
            La solicitud deberá indicar claramente el derecho que desea ejercer e ir acompañada de una copia de un
            documento identificativo.
          </p>
          <p>
            Asimismo, si el usuario considera que sus derechos no han sido atendidos correctamente, puede presentar
            una reclamación ante la Agencia Española de Protección de Datos (
            <a href="http://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">8. Seguridad de los datos</h2>
          <p>
            La responsable del tratamiento adopta las medidas técnicas y organizativas necesarias para garantizar la
            seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">9. Menores de edad</h2>
          <p>
            Este sitio web está dirigido a personas mayores de <strong>16 años</strong>. No se recaban deliberadamente
            datos personales de menores de dicha edad.
          </p>
          <p>
            En caso de que se detecte que un menor de <strong>16 años</strong> ha proporcionado datos personales a
            través del sitio web, dichos datos serán eliminados lo antes posible.
          </p>

          <hr className="legal-divider" />

          <h2 className="legal-subtitulo">10. Modificaciones de la política de privacidad</h2>
          <p>
            La presente Política de Privacidad podrá ser actualizada en cualquier momento con el fin de adaptarla a
            posibles cambios legislativos o a modificaciones en el funcionamiento del sitio web.
          </p>

        </div>
      </div>
    </div>
  );
}

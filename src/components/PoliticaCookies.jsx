import './LegalPage.css';

export default function PoliticaCookies({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="legal-back" onClick={onBack}>← Volver</button>
        <h1 className="legal-titulo">Política de Cookies</h1>
        <div className="legal-content">
          <p><strong>Última actualización:</strong> marzo de 2026</p>

          <h2 className="legal-subtitulo">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
            cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período
            de tiempo, para que no tenga que volver a introducirlas cada vez que visite el sitio o navegue de una
            página a otra.
          </p>

          <h2 className="legal-subtitulo">¿Qué tipos de cookies utilizamos?</h2>
          <p>Este sitio web utiliza los siguientes tipos de cookies:</p>

          <p>
            <strong>Cookies técnicas o estrictamente necesarias:</strong> Son indispensables para el correcto
            funcionamiento del sitio web. Permiten navegar por la página y utilizar sus funcionalidades básicas.
            Sin estas cookies, los servicios solicitados no pueden prestarse. No requieren su consentimiento.
          </p>

          <p>
            <strong>Cookies de preferencias o personalización:</strong> Permiten recordar información para que el
            usuario acceda al servicio con determinadas características, como el idioma o la región, y así
            personalizar la experiencia de navegación.
          </p>

          <p>
            <strong>Cookies de análisis o estadísticas:</strong> Permiten cuantificar el número de usuarios y
            realizar mediciones y análisis estadísticos sobre cómo los usuarios utilizan el servicio. Esto
            permite mejorar los contenidos y la experiencia de uso.
          </p>

          <h2 className="legal-subtitulo">¿Cómo puede controlar las cookies?</h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración
            de las opciones de su navegador. A continuación, le indicamos cómo hacerlo en los navegadores más
            habituales:
          </p>
          <p>
            <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.
          </p>
          <p>
            <strong>Mozilla Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies y datos del sitio.
          </p>
          <p>
            <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web.
          </p>
          <p>
            <strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies.
          </p>
          <p>
            Tenga en cuenta que deshabilitar las cookies puede afectar al funcionamiento de algunas funcionalidades
            del sitio web.
          </p>

          <h2 className="legal-subtitulo">Cookies de terceros</h2>
          <p>
            Este sitio web puede utilizar servicios de terceros que instalan sus propias cookies con finalidades
            técnicas o analíticas. Estos servicios tienen sus propias políticas de privacidad y cookies, sobre
            las cuales no tenemos control directo. Le recomendamos que consulte las políticas de privacidad de
            dichos terceros.
          </p>

          <h2 className="legal-subtitulo">Consentimiento</h2>
          <p>
            Al navegar por este sitio web, usted acepta el uso de las cookies descritas en esta política. Puede
            retirar su consentimiento en cualquier momento eliminando las cookies almacenadas en su dispositivo a
            través de la configuración de su navegador.
          </p>

          <h2 className="legal-subtitulo">Actualizaciones de esta política</h2>
          <p>
            Podemos actualizar esta Política de Cookies en cualquier momento para reflejar cambios en las cookies
            que utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise
            esta página periódicamente para estar informado sobre el uso que hacemos de las cookies.
          </p>

          <h2 className="legal-subtitulo">Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre el uso de cookies en este sitio web, puede ponerse en contacto con
            nosotros a través del formulario de contacto disponible en la web.
          </p>
        </div>
      </div>
    </div>
  );
}

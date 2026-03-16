import { useState } from 'react';
import './Servicios.css';

const servicios = [
  {
    id: 'terapia-individual',
    titulo: 'Terapia Individual',
    subtitulo: 'Barcelona · Online',
    imagen: '/servicios_individual.png',
  },
  {
    id: 'terapia-pareja',
    titulo: 'Terapia de Pareja',
    subtitulo: 'Barcelona · Online',
    imagen: '/servicios_pareja.png',
  },
  {
    id: 'arteterapia-grupal',
    titulo: 'Arteterapia Grupal',
    subtitulo: null,
    imagen: '/servicios_grupo.png',
  },
  {
    id: 'formacion-profesionales',
    titulo: 'Formación',
    subtitulo: null,
    imagen: '/servicios_formacion.png',
  },
];

const proceso = [
  {
    id: 'primera-visita',
    titulo: 'Primera Visita',
    subtitulo: 'Haremos una primera fotografía de lo que te trae a terapia, quién eres y tu contexto.',
    imagen: '/procesos_visita.png',
  },
  {
    id: 'evaluacion',
    titulo: 'Evaluación',
    subtitulo: 'Dedicaremos las primeras sesiones a mirar en profundidad tu historia vital y vincular para recolocar el de dónde vienes y cómo has llegado hasta aquí.',
    imagen: '/procesos_evaluacion.png',
  },
  {
    id: 'devolucion',
    titulo: 'Devolución',
    subtitulo: 'Juntas reajustaremos objetivos.',
    imagen: '/procesos_devolucion.png',
  },
  {
    id: 'proceso',
    titulo: 'Proceso',
    subtitulo: 'Caminaremos, a tu ritmo, y haciendo los ajustes necesarios, hacia aquellos lugares que nos hayamos propuesto.',
    imagen: '/procesos_proceso.png',
  },
  {
    id: 'cierre',
    titulo: 'Cierre',
    subtitulo: 'Cuando hayamos llegado, será tu momento de caminar sola. Dedicaremos unas sesiones de seguimiento y este siempre será un espacio donde volver.',
    imagen: '/procesos_cierre.png',
  },
];

const faqs = [
  {
    id: 'faq-1',
    pregunta: '¿Cómo saber si necesito ayuda psicológica o si es mi momento para empezar terapia?',
    respuesta: (
      <>
        <p>A diferencia de lo que a veces se piensa, no todo el mundo necesita ir a terapia constantemente o en todos los momentos de su vida. Revisar nuestra historia y nuestros patrones puede ser muy enriquecedor, pero la terapia funciona especialmente cuando existe un compromiso con el proceso.</p>
        <p>La mayoría de personas acuden a terapia cuando están atravesando situaciones que generan malestar o cuando ocurre algo en su vida que no saben muy bien cómo manejar. Puede tratarse de ansiedad, tristeza, bloqueos, dificultades en las relaciones, momentos de cambio o simplemente la necesidad de comprenderse mejor.</p>
        <p>No es necesario estar atravesando una situación muy grave para empezar un proceso terapéutico, ni significa que estés enfermo o enferma. Este es un proceso para cuidar tu bienestar emocional o encontrar nuevas maneras de afrontar lo que estás viviendo o has vivido.</p>
        <p>Acudir a terapia es una forma de cuidar la salud mental y el bienestar emocional.</p>
        <p>Puede ser un buen momento para empezar si sientes que necesitas un espacio seguro donde poder hablar con libertad, entender mejor lo que te ocurre y encontrar nuevas herramientas para afrontarlo.</p>
        <p>No necesitas tener todo claro antes de empezar. A veces simplemente sentimos que algo no está bien o que queremos vivir de una forma diferente. La terapia puede ser un buen lugar para explorar todo eso.</p>
      </>
    ),
  },
  {
    id: 'faq-2',
    pregunta: '¿Qué puedo trabajar en terapia?',
    respuesta: (
      <>
        <p>Acompaño a personas adultas, mayores de 16 años, en su camino hacia una vida más valiosa, integrando sus experiencias y (re)conociendo sus propios recursos y herramientas.</p>
        <p>En terapia podemos abordar diferentes áreas de la vida, como por ejemplo:</p>
        <ul>
          <li>Sintomatología ansiosa o depresiva</li>
          <li>Autoestima y autoconocimiento</li>
          <li>Procesos de cambio o crisis vitales</li>
          <li>Gestión emocional</li>
          <li>Relaciones personales o de pareja</li>
          <li>Procesos de duelo</li>
          <li>Situaciones de abuso o violencia</li>
          <li>Etc.</li>
        </ul>
        <p>Cada proceso terapéutico es único, por lo que el trabajo se adapta siempre a tus necesidades, tus objetivos y tu momento vital.</p>
      </>
    ),
  },
  {
    id: 'faq-3',
    pregunta: '¿Qué pasa en una sesión con una psicóloga?',
    respuesta: (
      <>
        <p>Esta es una pregunta compleja de responder, porque —como comentábamos— cada proceso es único y se adapta a cada persona.</p>
        <p>Pero hay algo que sí puedo asegurarte: el espacio terapéutico debe ser un lugar seguro, donde puedas narrar y mirar cada parte de ti con libertad.</p>
        <p>Dependiendo de los objetivos que vayamos definiendo conjuntamente, las sesiones pueden moverse entre el pasado y el presente: integrando experiencias que quizá no han encontrado todavía su lugar, desarrollando herramientas que aumenten tu bienestar y construyendo una forma de vivir más presente y valiosa.</p>
      </>
    ),
  },
  {
    id: 'faq-4',
    pregunta: '¿Cómo es la primera visita? ¿Tengo que llevar algo preparado?',
    respuesta: (
      <>
        <p>El objetivo de la primera sesión es conocernos.</p>
        <p>En ella haremos una primera fotografía de lo que te ha traído a terapia, pero también de quién eres: cómo es tu contexto, tus hábitos, vínculos, qué cosas disfrutas o con qué sueñas.</p>
        <p>No es necesario preparar nada previamente. Puedes venir tal y como estés y con aquello que necesites compartir.</p>
      </>
    ),
  },
  {
    id: 'faq-5',
    pregunta: '¿Cuánto dura una sesión y cada cuánto se realizan?',
    respuesta: (
      <>
        <p>Las sesiones tienen una duración aproximada de 60 minutos.</p>
        <p>Lo más habitual es empezar con una frecuencia semanal, ya que esto permite dar continuidad al proceso terapéutico. Con el tiempo, y dependiendo de cada caso, la frecuencia puede adaptarse.</p>
        <p>También soy consciente de que hoy en día acceder a terapia puede suponer un esfuerzo importante, por lo que siempre intentaremos encontrar una forma de trabajo que se adapte a tus necesidades.</p>
      </>
    ),
  },
  {
    id: 'faq-6',
    pregunta: '¿Cuánto tiempo se tarda en notar cambios y cuánto dura un proceso terapéutico?',
    respuesta: (
      <>
        <p>Cada persona y cada proceso son diferentes. Algunas personas empiezan a notar cambios en pocas sesiones, mientras que en otros casos el proceso requiere más tiempo.</p>
        <p>La duración del proceso depende de muchos factores: la situación que estés viviendo, tus objetivos y el ritmo que necesites. Algunas personas acuden durante unos meses para trabajar una situación concreta, mientras que otras prefieren un proceso más largo de acompañamiento y autoconocimiento.</p>
        <p>Y pequeña advertencia: en terapia se abren cajas de pandora que llevaban mucho tiempo cerradas, por lo que a veces podrás notar que "sales peor de lo que has entrado". Aquí te pido confianza, es parte del proceso y este, te aseguro, que no es lineal, pero nos lleva a lugares de mayor calma y claridad.</p>
      </>
    ),
  },
  {
    id: 'faq-7',
    pregunta: '¿Es igual de efectiva la terapia online que la presencial? ¿Qué necesito para realizarla?',
    respuesta: (
      <>
        <p>La terapia online puede ser tan efectiva como la presencial y ofrece mayor flexibilidad para muchas personas.</p>
        <p>Para realizar una sesión online solo necesitas:</p>
        <ul>
          <li>Un dispositivo con cámara (ordenador, tablet o móvil)</li>
          <li>Conexión a internet</li>
          <li>Un espacio tranquilo donde puedas hablar con privacidad</li>
          <li>Y también suelo recomendar tener cerca una libreta de terapia, bolígrafos y colores para poder anotar o trabajar durante las sesiones.</li>
        </ul>
        <p>Si prefieres realizar la terapia de forma presencial, puedes encontrarme en Barcelona, en el Espacio ATMOS, situado en la Casa Comalat (Av. Diagonal con Passeig de Gràcia).</p>
      </>
    ),
  },
  {
    id: 'faq-8',
    pregunta: '¿Cómo elegir psicóloga? ¿Qué ocurre si no me siento a gusto con ella?',
    respuesta: (
      <>
        <p>Elegir psicóloga es una decisión personal y, a veces, no resulta fácil.</p>
        <p>Algunos aspectos que pueden ayudarte son:</p>
        <ul>
          <li>Que sea una profesional cualificada y colegiada</li>
          <li>Que su enfoque terapéutico encaje contigo</li>
          <li>Que te transmita seguridad, confianza, calidez y cercanía</li>
        </ul>
        <p>Presta atención a cómo te sientes en las primeras sesiones. La relación terapéutica es un elemento clave del proceso, por lo que sentirte cómoda y escuchada es fundamental.</p>
        <p>Si en algún momento sientes que no se genera ese vínculo, es importante que puedas comunicarlo. Puede significar que otra profesional encaje mejor contigo, y eso también forma parte del proceso. Las psicólogas sabemos lo importante que es el vínculo terapéutico y descuida ¡No nos vamos a enfadar!</p>
        <p>También puede ocurrir que en una sesión la terapeuta señale o confronte algo que te resulte incómodo. Si eso sucede, es importante poder hablarlo. La terapia es precisamente un espacio seguro donde poder expresar lo que sentimos —incluso el enfado o la incomodidad— sin consecuencias desproporcionadas y mirar aquellas partes de nosotras que nos generan mayor malestar. Un lugar donde todo puede ser mirado, comprendido y validado.</p>
      </>
    ),
  },
  {
    id: 'faq-9',
    pregunta: '¿Qué es la psicología integrativa?',
    respuesta: (
      <>
        <p>La psicología integrativa combina diferentes enfoques y herramientas de la psicología para adaptarse a las necesidades de cada persona.</p>
        <p>En lugar de centrarse en un único modelo terapéutico, utiliza aportaciones de distintas corrientes psicológicas para construir un acompañamiento más flexible y personalizado.</p>
        <p>Este enfoque permite trabajar emociones, pensamientos, comportamientos, sensaciones y relaciones desde una mirada más amplia, adaptando el proceso terapéutico a tu ritmo y a tu momento vital.</p>
        <p>Además, integro una perspectiva feminista, que invita a mirar las demandas terapéuticas teniendo en cuenta los roles, expectativas y relaciones de poder construidas socialmente. Sin olvidar la interseccionalidad: el género, la clase social, el lugar de procedencia, la edad u otras variables se entrecruzan y pueden impactar en nuestra salud mental de formas muy diversas.</p>
        <p>En terapia podemos comprender y reconocer estas influencias, pero también cuestionar aquellas estructuras sociales y vinculares que contribuyen a generar o mantener determinados malestares.</p>
        <p>Y todo esto… te lo cuento con calma en la primera sesión.</p>
      </>
    ),
  },
  {
    id: 'faq-10',
    pregunta: '¿Cómo puedo pedir una cita? ¿Se puede cambiar o cancelar una sesión?',
    respuesta: (
      <>
        <p>Puedes solicitar una primera visita a través del formulario de contacto de la web o escribiendo a paulaysusespacios@gmail.com, contándome brevemente quién eres, tu disponibilidad horaria y el motivo de consulta.</p>
        <p>Si necesitas cambiar o cancelar una sesión, es importante avisar con al menos 25-48 horas de antelación para poder reorganizar la agenda y la reserva del despacho. Si se entra dentro de las 25 horas, deberás abonar la sesión íntegra (salvo casos de extrema necesidad como accidentes o enfermedad), pues la terapeuta ha reservado el espacio y tiempo para únicamente para ti, y al no cancelar con suficiente antelación, no es posible ofrecer este espacio a otra persona que lo necesite. Agradezco tu comprensión.</p>
      </>
    ),
  },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-pregunta" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{faq.pregunta}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-respuesta-wrapper" style={{ maxHeight: open ? '2000px' : '0' }}>
        <div className="faq-respuesta">{faq.respuesta}</div>
      </div>
    </div>
  );
}

export default function Servicios({ setCurrentView }) {
  return (
    <section className="servicios">
      <div className="container">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <button
              className="servicio-card"
              key={servicio.id}
              onClick={() => setCurrentView(servicio.id)}
            >
              <div className="servicio-imagen">
                {servicio.imagen ? (
                  <img src={servicio.imagen} alt={servicio.titulo} />
                ) : (
                  <div className="servicio-imagen-placeholder" />
                )}
              </div>
              <p className="servicio-titulo">{servicio.titulo}</p>
              {servicio.subtitulo && (
                <p className="servicio-subtitulo">{servicio.subtitulo}</p>
              )}
            </button>
          ))}
        </div>

        <h3 className="servicios-proceso-titulo">El proceso...</h3>
        <div className="proceso-grid">
          {proceso.map((item) => (
            <div className="proceso-card" key={item.id}>
              <div className="proceso-imagen">
                {item.imagen ? (
                  <img src={item.imagen} alt={item.titulo} />
                ) : (
                  <div className="servicio-imagen-placeholder" />
                )}
              </div>
              <p className="proceso-titulo">{item.titulo}</p>
              {item.subtitulo && (
                <p className="proceso-subtitulo">{item.subtitulo}</p>
              )}
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h3 className="faq-titulo">Preguntas frecuentes</h3>
          <div className="faq-list">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
          <p className="faq-cierre">Si tienes alguna otra duda o sientes que podría ser un buen momento para empezar tu proceso, puedes escribirme y estaré encantada de escucharte.</p>
        </div>
      </div>
    </section>
  );
}

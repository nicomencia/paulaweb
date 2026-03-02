import './QuienSoy.css';

export default function QuienSoy() {
  return (
    <section className="quien-soy">

      <div className="qs-intro">
        <p>
          Mi nombre es Paula y tengo la suerte de poder dedicarme a aquello que me hace estar alineada con mis valores: acompañar a las personas durante sus procesos de (auto)conocimiento y sanación. Trabajo desde una perspectiva integradora y feminista, mirando a cada ser como un todo que interacciona con su contexto y circunstancias.
        </p>
        <p>
          Crecí en un pequeño pueblito de Castilla pero en una gran familia, lo que me ha enseñado no sólo el respeto y amor hacia la naturaleza, sino también a valorar la importancia de encontrar vínculos valiosos centrados en los cuidados y porqué no decirlo: en el humor y la diversión. También desarrollé un marcado sentido de la justicia, lo que me llevó a militar en diversos colectivos desde la universidad.
        </p>
      </div>

      <div className="qs-middle">
        <div className="qs-middle-text">
          <p>
            Disfruto de aprender, explorar y observar. Estoy en constante formación y (de)construcción profesional y personalmente, realizando cursos, supervisiones, charlas, encuentros, excursiones, viajes... En todos los lugares hay una oportunidad de crecimiento.
          </p>
          <p>
            Soy de la filosofía de que vivenciar desde el no juicio las emociones y procesos que transitamos nos permite cultivar relaciones saludables y en clave de bienestar con nosotras mismas y las demás, colaborando en conocernos desde una mirada más completa y autocompasiva.
          </p>
          <p>
            Cada día colaborando con mi propósito de vida: Dejar el mundo un poquito más bonito de lo que nos lo encontramos.
          </p>
        </div>
        <div className="qs-middle-images">
          <div className="qs-img-placeholder">Paula</div>
        </div>
      </div>

      <div className="qs-curriculum">
        <div className="qs-curriculum-text">
          <p className="qs-curriculum-label">Sobre mi curriculum...</p>

          <p>
            Estudié Psicología en la Universidad de Salamanca, realizando mi Erasmus+ en Panteion University en Atenas, lugar donde empecé a adentrarme en el mundo del Arteterapia. Tras ello, volví a cursar Máster en Estudios Interdisciplinares de Género con mención jurídica en la USAL y un año después el Máster en Psicología General Sanitaria en la Universidad de Oviedo.
          </p>

          <p>Tengo formación en:</p>
          <ul>
            <li>Trauma y apego;</li>
            <li>Arteterapia;</li>
            <li>Sexualidad;</li>
            <li>Violencia contra las mujeres;</li>
            <li>Cuerpo, movimiento y risoterapia;</li>
            <li>Psicoterapia en Infancia y Adolescencia;</li>
            <li>Metodologías participativas y Gamificación;</li>
          </ul>

          <p>
            Y experiencia tanto en psicoterapia 1:1, de pareja y grupal, además de haber impartido numerosas formaciones sobre diversos temas. He trabajado tanto en la clínica privada como en diversos proyectos sociales con colectivos en riesgo de vulnerabilidad y personas migrantes; cooperación internacional; mujeres víctimas de violencias machistas; centros residenciales; y gestionando proyectos de promoción de la equidad y los buenos tratos.
          </p>
        </div>
        <div className="qs-curriculum-image">
          <div className="qs-img-placeholder">Stars</div>
        </div>
      </div>

    </section>
  );
}

import './Projects.css'

const projects = [
  { slug: 'vadi-evleri', name: 'Vadi Evleri', location: 'Sakarya', type: 'Konut', description: 'Doğayla bütünleşen çağdaş yaşam alanları.', alt: 'Vadi Evleri: peyzajlı giriş alanı, geniş balkonlar ve gün batımında yükselen konut blokları' },
  { slug: 'kent-rezidans', name: 'Kent Rezidans', location: 'İstanbul', type: 'Karma Yaşam', description: 'Şehir yaşamına modern ve işlevsel bir yaklaşım.', alt: 'Kent Rezidans: yeşil avlu ve su öğesi çevresinde konumlanan balkonlu modern yapılar' },
  { slug: 'nehir-konutlari', name: 'Nehir Konutları', location: 'Sapanca', type: 'Konut', description: 'Sakinlik, manzara ve mimariyi bir araya getiren özel yaşam alanları.', alt: 'Nehir Konutları: su kıyısında peyzajlı yürüyüş alanları ve az katlı konutlar' },
]

export function Projects({ onInspect }: { onInspect: (name: string) => void }) {
  return <section className="projects" id="projeler" aria-labelledby="projects-heading">
    <div className="projects-inner">
      <header className="projects-heading">
        <h2 id="projects-heading">Projeler</h2>
        <p>Yaşamı, mimariyi ve mühendisliği bir araya getiren seçili projelerimiz.</p>
      </header>
      <div className="projects-showcase">
        {projects.map(project => <article className={`project project--${project.slug}`} key={project.slug} aria-labelledby={`${project.slug}-heading`}>
          <figure className="project-visual">
            <img src={`/images/projects/${project.slug}.jpg`} width="1672" height="941" alt={project.alt} loading="lazy" decoding="async" />
          </figure>
          <div className="project-details">
            <div className="project-title">
              <p className="project-location">{project.location}<span aria-hidden="true"> / </span><span className="sr-only">, </span>{project.type}</p>
              <h3 id={`${project.slug}-heading`}>{project.name}</h3>
            </div>
            <div className="project-summary">
              <p>{project.description}</p>
              <button className="project-link" type="button" aria-label={`${project.name} projesini incele`} onClick={() => onInspect(project.name)}>
                Projeyi İncele<svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" /></svg>
              </button>
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>
}

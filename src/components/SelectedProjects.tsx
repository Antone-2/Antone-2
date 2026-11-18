export function SelectedProjects() {
  const evidence = [
    {
      title: 'Live product',
      type: 'Production',
      status: 'Deployed',
      description: 'Explore the production marketplace experience, including catalog, buyer journeys, quotation workflows, and checkout.',
      url: 'https://mabawacreations.com',
      label: 'Visit Mabawa Creations',
    },
    {
      title: 'Private project source',
      type: 'Mabawa + Safety',
      status: 'Client-confidential',
      description: 'Frontend and backend source for both projects remains private under client agreements. I can discuss an approved, limited code review or share sanitized technical material.',
      url: '/contact',
      label: 'Discuss code review',
    },
  ]

  return (
    <section className="portfolio" id="projects">
      <h2 className="heading">Evidence, <span className="accent">not claims</span></h2>
      <div className="projects-container">
        {evidence.map((item) => (
          <article key={item.title} className="project-card">
            <div className="project-badge">
              <span className="skill-badge">{item.type}</span>
              <span className="skill-badge">{item.status}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="project-links">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {item.label}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

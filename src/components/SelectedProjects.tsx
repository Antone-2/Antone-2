import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ExternalLink, Lock } from 'lucide-react'
import { GitHubIcon } from './Icons'
import { Link } from 'react-router-dom'

const evidence = [
  {
    title: 'Private Client Projects',
    type: 'Full-Stack Applications',
    status: 'Client Confidential',
    description:
      'Multiple freelance projects including marketplace features, admin dashboards, and API integrations. Source code is private under NDAs.',
    url: '/contact',
    label: 'Discuss Code Review',
    icon: Lock,
    repoUrl: null,
    repoLabel: null,
  },
]

export function SelectedProjects() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section id="projects" className="section section--compact projects-page" aria-labelledby="projects-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <p className="overline">Beyond the Featured Work</p>
          <h2 id="projects-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Other Projects
          </h2>
          <p className="body-lg">
            Additional client work across marketplace features, admin dashboards, and API
            integrations. I can discuss architecture, decisions, and sanitized code samples.
          </p>
        </header>

        <div className={`projects-grid projects-grid--single ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-5)',
        }} role="list">
          {evidence.map((item) => (
            <article
              key={item.title}
              className="card card--interactive project-card"
              role="listitem"
            >
              <div className="project-card-copy">
                <div className="project-card-tags">
                  <span className="badge badge--primary">{item.type}</span>
                </div>
                <h3 className="heading-2 project-card-title">{item.title}</h3>
                <p className="body project-card-description">{item.description}</p>
              </div>

              <div className="project-card-action">
                <div className="project-card-status">
                  <item.icon className="icon" aria-hidden="true" />
                  <span>{item.status}</span>
                </div>
                {item.url.startsWith('http') ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary project-card-cta"
                  >
                    <span className="project-card-cta-label">{item.label}</span>
                    <ExternalLink className="icon" aria-hidden="true" />
                  </a>
                ) : (
                  <Link to={item.url} className="btn btn--primary project-card-cta">
                    <span className="project-card-cta-label">{item.label}</span>
                    <ExternalLink className="icon" aria-hidden="true" />
                  </Link>
                )}
                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    <GitHubIcon className="icon" aria-hidden="true" />
                    {item.repoLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
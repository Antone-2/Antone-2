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
    <section id="projects" className="section section--compact" aria-labelledby="projects-heading" ref={ref}>
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
          {evidence.map((item, index) => (
            <article
              key={item.title}
              className="card card--interactive"
              style={{
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                animationDelay: `${index * 120}ms`,
              }}
              role="listitem"
            >
              <div className="project-header" style={{ marginBottom: 'var(--space-5)' }}>
                <div className="flex items-center gap-2 mb-3" style={{ flexWrap: 'wrap' }}>
                  <item.icon className="icon" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <span className="badge badge--primary">{item.type}</span>
                  <span className="badge badge--success">{item.status}</span>
                </div>
                <h3 className="heading-2" style={{ margin: 0 }}>{item.title}</h3>
              </div>

              <p className="body" style={{ color: 'var(--color-fg-muted)', flex: 1, marginBottom: 'var(--space-6)' }}>{item.description}</p>

              <div className="project-links" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-3)',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'auto',
              }}>
                {item.url.startsWith('http') ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    {item.label}
                    <ExternalLink className="icon" aria-hidden="true" />
                  </a>
                ) : (
                  <Link to={item.url} className="btn btn--primary">
                    {item.label}
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
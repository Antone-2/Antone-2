import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { EXPERIENCE } from '../data/experience'
import { Briefcase, Code, Award } from 'lucide-react'

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section id="experience" className="section section--compact" aria-labelledby="experience-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <p className="overline">Professional Journey</p>
          <h2 id="experience-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Experience
          </h2>
        </header>

        <div className={`experience-timeline ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
          maxWidth: '800px',
          marginInline: 'auto',
        }} role="list">
          {EXPERIENCE.map((item, index) => (
            <article
              key={item.period}
              className="card card--interactive"
              style={{
                padding: 'var(--space-6)',
                position: 'relative',
                paddingLeft: 'var(--space-10)',
                borderLeft: '2px solid var(--color-border)',
                animationDelay: `${index * 120}ms`,
              }}
              role="listitem"
            >
              <div className="experience-meta" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-4)',
              }}>
                <div className="experience-icon" style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--color-accent-muted)',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                  flexShrink: 0,
                }} aria-hidden="true">
                  <Briefcase className="icon-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1" style={{
                    flexWrap: 'wrap',
                    columnGap: 'var(--space-3)',
                    rowGap: 'var(--space-2)',
                  }}>
                    <h3 className="heading-3" style={{ margin: 0 }}>{item.role}</h3>
                    <span className="badge badge--primary">{item.type}</span>
                  </div>
                  <p className="caption" style={{ fontWeight: 500 }}>{item.period}</p>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} role="list" aria-label={`${item.role} responsibilities`}>
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                    position: 'relative',
                    paddingLeft: 'var(--space-4)',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--color-fg-muted)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    <Code className="icon" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Transparency note */}
        <div className={`card card--border-accent ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`} style={{
          marginTop: 'var(--space-10)',
          maxWidth: '800px',
          marginInline: 'auto',
          padding: 'var(--space-6)',
          animationDelay: '300ms',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
            <Award className="icon-lg" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
            <div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', marginBottom: 'var(--space-2)' }}>Transparency Note</h4>
              <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>
                My professional background consists of freelance and personal project work. I don't
                list unverifiable employment history. The projects above are real, deployed, and
                demonstrable. I'm happy to walk through architecture, decisions, and code samples
                in a technical interview.
              </p>
            </div>
          </div>
        </div>

        {/* Freelance highlights */}
        <div className={`freelance-highlights ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{
          marginTop: 'var(--space-10)',
          animationDelay: '400ms',
        }}>
          <h3 className="heading-3" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Selected Freelance Work</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-4)',
            maxWidth: '800px',
            marginInline: 'auto',
          }}>
            {[
              { title: 'B2B Marketplace Platform', desc: 'Mabawa Creations — Full-stack development, deployment, maintenance' },
              { title: 'Admin Dashboard & Analytics', desc: 'Client project — React, Node.js, PostgreSQL, Chart.js' },
              { title: 'API Integration Layer', desc: 'Client project — REST APIs, webhook handling, third-party services' },
              { title: 'E-commerce Features', desc: 'Client project — Cart, checkout, payment integration, order management' },
            ].map((item, index) => (
              <div key={item.title} className="card" style={{
                padding: 'var(--space-5)',
                borderLeft: '3px solid var(--color-accent)',
                animationDelay: `${index * 80}ms`,
              }}>
                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.title}</h4>
                <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
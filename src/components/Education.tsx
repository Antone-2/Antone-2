import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { EDUCATION } from '../data/education'
import { GraduationCap, BookOpen, Certificate, ExternalLink } from 'lucide-react'

export function Education() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  const formalEducation = EDUCATION.filter((e) => e.type === 'Formal')
  const selfDirected = EDUCATION.filter((e) => e.type === 'Self-Directed')

  return (
    <section id="education" className="section section--compact" aria-labelledby="education-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <p className="overline">Learning & Credentials</p>
          <h2 id="education-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Education
          </h2>
        </header>

        <div className={`education-grid ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-5)',
          maxWidth: '800px',
          marginInline: 'auto',
        }} role="list">
          {formalEducation.length > 0 && (
            <div className="card" style={{ padding: 'var(--space-6)' }} role="listitem">
              <h3 className="heading-3" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                paddingBottom: 'var(--space-4)',
                marginBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--color-border)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-fg-muted)',
              }}>
                <GraduationCap className="icon" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                Formal Education
              </h3>
              <div className="space-y-4">
                {formalEducation.map((item) => (
                  <div key={item.program} className="education-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4) 0',
                    borderTop: '1px solid var(--color-border)',
                  }}>
                    <div className="education-icon" style={{
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
                      <Certificate className="icon-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.program}</h4>
                      <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>{item.institution} · {item.dates}</p>
                      <p className="body-sm" style={{ color: 'var(--color-fg-muted)', marginTop: 'var(--space-1)' }}>{item.credential}</p>
                    </div>
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--ghost btn--sm"
                        aria-label={`View ${item.program} certificate`}
                      >
                        <ExternalLink className="icon" aria-hidden="true" />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selfDirected.length > 0 && (
            <div className="card" style={{ padding: 'var(--space-6)' }} role="listitem">
              <h3 className="heading-3" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                paddingBottom: 'var(--space-4)',
                marginBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--color-border)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-fg-muted)',
              }}>
                <BookOpen className="icon" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                Self-Directed Learning
              </h3>
              <div className="space-y-4">
                {selfDirected.map((item) => (
                  <div key={item.program} className="education-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4) 0',
                    borderTop: '1px solid var(--color-border)',
                  }}>
                    <div className="education-icon" style={{
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
                      <BookOpen className="icon-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.program}</h4>
                      <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>{item.institution} · {item.dates}</p>
                      <p className="body-sm" style={{ color: 'var(--color-fg-muted)', marginTop: 'var(--space-1)' }}>{item.credential}</p>
                      {item.note && (
                        <p className="caption" style={{ marginTop: 'var(--space-2)', fontStyle: 'italic' }}>{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="card" style={{ padding: 'var(--space-6)' }} role="listitem">
            <h3 className="heading-3" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              paddingBottom: 'var(--space-4)',
              marginBottom: 'var(--space-4)',
              borderBottom: '1px solid var(--color-border)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-fg-muted)',
            }}>
              <Certificate className="icon" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              Certifications & Achievements
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-3)',
            }}>
              <div className="cert-item card" style={{
                padding: 'var(--space-4)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <span className="badge badge--primary">In Progress</span>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>AWS Certified Developer – Associate</p>
                <p className="caption">Studying via AWS Skill Builder</p>
              </div>
              <div className="cert-item card" style={{
                padding: 'var(--space-4)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <span className="badge badge--secondary">Planned</span>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Google Cloud Associate Cloud Engineer</p>
                <p className="caption">Planned for Q2 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
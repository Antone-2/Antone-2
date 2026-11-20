import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SKILL_CATEGORIES } from '../data/skills'

export function TechnicalSkills() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section id="skills" className="section section--compact" aria-labelledby="skills-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <p className="overline">Technical Expertise</p>
          <h2 id="skills-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Skills
          </h2>
          <p className="body-lg">
            Technologies I use in production, grouped by domain. Each skill is backed by real
            project experience—no keyword stuffing, just demonstrated capability.
          </p>
        </header>

        <div className={`skills-grid ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-4)',
        }} role="list">
          {SKILL_CATEGORIES.map((cat, catIndex) => (
            <div
              key={cat.category}
              className="card"
              style={{
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                animationDelay: `${catIndex * 80}ms`,
              }}
              role="listitem"
            >
              <h3 className="heading-3" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                paddingBottom: 'var(--space-3)',
                marginBottom: 'var(--space-3)',
                borderBottom: '1px solid var(--color-border)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-fg-muted)',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))' }} aria-hidden="true" />
                {cat.category}
              </h3>
              <div className="skills-list" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
                flex: 1,
              }}>
                {cat.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      transition: 'all var(--transition-fast)',
                      animationDelay: `${skillIndex * 30}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.background = 'var(--color-accent-muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'var(--color-bg)';
                    }}
                  >
                    <div className="flex items-center gap-2 flex-wrap" style={{
                      width: '100%',
                      columnGap: 'var(--space-2)',
                      rowGap: 'var(--space-2)',
                    }}>
                      <span style={{ fontWeight: 500, color: 'var(--color-fg)', fontSize: 'var(--text-sm)' }}>{skill.name}</span>
                      <span className="badge badge--outline" style={{ fontSize: 'var(--text-xs)', textTransform: 'capitalize' }}>{skill.level.toLowerCase()}</span>
                    </div>
                    <div className="skill-projects" style={{
                      width: '100%',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-fg-subtle)',
                      fontWeight: 500,
                      whiteSpace: 'normal',
                      overflow: 'visible',
                      textOverflow: 'unset',
                    }}>
                      {skill.projects.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skills-legend ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`} style={{
          marginTop: 'var(--space-10)',
          padding: 'var(--space-5)',
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          animationDelay: '300ms',
        }}>
          <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-fg-muted)', marginBottom: 'var(--space-4)' }}>Proficiency Levels</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex items-center gap-2">
              <span className="badge badge--primary">Expert</span>
              <span className="caption">Production-grade, can architect & lead</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge badge--secondary">Advanced</span>
              <span className="caption">Comfortable building complex features independently</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge badge--outline">Intermediate</span>
              <span className="caption">Solid understanding, growing through practice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
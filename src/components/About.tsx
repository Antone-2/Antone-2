import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Database, Server, Globe } from 'lucide-react'

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  const focusAreas = [
    { icon: Code, title: 'Frontend', desc: 'React, TypeScript, Tailwind, Accessible UI' },
    { icon: Server, title: 'Backend', desc: 'Node.js, Express, REST APIs, Auth' },
    { icon: Database, title: 'Data', desc: 'PostgreSQL, MongoDB, Prisma, Mongoose' },
    { icon: Globe, title: 'Cloud', desc: 'Vercel, Render, Cloudflare R2, CI/CD' },
  ]

  const stats = [
    { value: '1', label: 'Live Marketplace' },
    { value: '3+', label: 'Years Shipping' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '100%', label: 'Remote-Ready' },
  ]

  return (
    <section id="about" className="section section--compact about-page" aria-labelledby="about-heading" ref={ref}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-12)',
          alignItems: 'start',
        }}>
          {/* Visual - profile with expertise tags */}
          <div className={`about-visual ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-8)', order: -1 }}>
            <div className="about-image-wrapper" style={{ position: 'relative', maxWidth: '280px', width: '100%' }}>
              <img
                src="/profile.jpg"
                alt="Kesa Onyango"
                width={1120}
                height={1120}
                loading="lazy"
                decoding="async"
                className="about-image"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--color-bg)',
                  boxShadow: 'var(--shadow-xl), 0 0 0 1px var(--color-border), 0 0 60px -20px var(--color-accent)',
                }}
              />
              <div className="about-image-accent" style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                zIndex: -1,
                opacity: 0.1,
                animation: 'pulse 4s ease-in-out infinite',
              }} aria-hidden="true" />
            </div>

            {/* Expertise pills around profile */}
            <div className="expertise-ring" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              maxWidth: '320px',
            }}>
              {focusAreas.map((area, i) => (
                <div key={area.title} className="expertise-pill card" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-3)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  animationDelay: `${i * 100 + 300}ms`,
                }}>
                  <area.icon className="icon" style={{ color: 'var(--color-accent)', width: '16px', height: '16px' }} aria-hidden="true" />
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-fg)' }}>{area.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={`about-content ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ animationDelay: '150ms', maxWidth: '720px', marginInline: 'auto' }}>
            <header className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <p className="overline">About</p>
              <h2 id="about-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
                Engineer Who <span className="text-gradient">Ships Products</span>
              </h2>
              <p className="body-lg" style={{ color: 'var(--color-fg-muted)', maxWidth: '560px', marginInline: 'auto' }}>
                Full-stack engineer building production-grade web applications from Nairobi, Kenya.
              </p>
            </header>

            {/* Intro paragraph */}
            <div className="about-intro card card--border-accent" style={{
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-10)',
              background: 'var(--color-accent-muted)',
              borderLeft: '3px solid var(--color-accent)',
            }}>
              <p className="body" style={{ textAlign: 'center', color: 'var(--color-fg)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
                I design and ship full-stack web applications across the complete product surface—React
                interfaces, Node.js APIs, PostgreSQL databases, cloud infrastructure. My focus: marketplace
                platforms, complex workflows, and clean architecture that lasts.
              </p>
            </div>

            {/* What I do - focus areas */}
            <div className="about-focus" style={{ marginBottom: 'var(--space-10)' }}>
              <h3 className="heading-3" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Where I Focus</h3>
              <div className="focus-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'var(--space-3)',
              }}>
                {focusAreas.map((area, i) => (
                  <article key={area.title} className="focus-card card" style={{
                    padding: 'var(--space-5)',
                    textAlign: 'center',
                    transition: 'all var(--transition-base)',
                    animationDelay: `${i * 80}ms`,
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg), var(--shadow-glow)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <div className="focus-icon" style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-3)',
                      background: 'var(--color-accent-muted)',
                      color: 'var(--color-accent)',
                      borderRadius: 'var(--radius-lg)',
                    }} aria-hidden="true">
                      <area.icon className="icon-lg" />
                    </div>
                    <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-fg)' }}>{area.title}</h4>
                    <p className="caption" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>{area.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Highlights - responsive grid */}
            <div className="about-highlights" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-10)',
            }}>
              {stats.map((item, index) => (
                <div key={item.label} className="card highlight-card" style={{
                  textAlign: 'center',
                  padding: 'var(--space-5)',
                  animationDelay: `${index * 80}ms`,
                  borderTop: '3px solid var(--color-accent)',
                  transition: 'all var(--transition-base)',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <span className="stat-value" style={{
                    display: 'block',
                    lineHeight: 1,
                    fontSize: 'clamp(var(--text-xl), 4vw, var(--text-2xl))',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--color-fg), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>{item.value}</span>
                  <span className="caption" style={{ display: 'block', marginTop: 'var(--space-2)', fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>
              <Link to="/featured" className="btn btn--primary btn--lg touch-target" style={{ width: '100%', maxWidth: '320px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
                View Featured Work
                <ArrowRight className="icon" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
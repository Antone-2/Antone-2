import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'
import { Link } from 'react-router-dom'

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section id="home" className="section section--hero" aria-labelledby="hero-heading" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Background atmosphere */}
      <div
        className="animate-fade-in"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 85% -10%, var(--color-accent-muted) 0%, transparent 55%),
            radial-gradient(ellipse at -10% 110%, rgba(212, 168, 67, 0.06) 0%, transparent 60%),
            var(--color-bg)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-12)',
          alignItems: 'start',
          maxWidth: 'var(--container-max)',
          marginInline: 'auto',
        }}>
          {/* Content - leads with work, not person */}
          <div className={`hero-content ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{
            textAlign: 'center',
            paddingTop: 'var(--space-8)',
          }}>
            <p className="overline" style={{ marginBottom: 'var(--space-6)' }}>Full-Stack Engineer · Nairobi, Kenya</p>

            <h1 id="hero-heading" className="display-1" style={{
              marginBottom: 'var(--space-6)',
              maxWidth: '900px',
              marginInline: 'auto',
            }}>
              <span className="hero-title-line">I Build Digital Products</span>
              <br className="hero-title-break" />
              <span className="text-gradient hero-title-line">That Solve Real Problems</span>
            </h1>

            <p className="body-lg" style={{
              maxWidth: '680px',
              margin: '0 auto var(--space-8)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              I'm Kesa Onyango. I design and ship full-stack web applications—React interfaces,
              Node.js APIs, PostgreSQL databases, cloud infrastructure. My focus: marketplace platforms,
              complex workflows, and clean architecture that lasts.
            </p>

            {/* Status badges */}
            <div className="hero-badges" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              justifyContent: 'center',
              marginBottom: 'var(--space-8)',
            }}>
              <span className="badge badge--primary">Open to remote full-time roles</span>
              <span className="badge badge--primary">Available for contract work</span>
              <span className="badge badge--secondary">Based in Nairobi (EAT, UTC+3)</span>
            </div>

            {/* Primary CTAs - stacked on mobile, inline on desktop */}
            <div className="cta-buttons" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              alignItems: 'center',
              marginBottom: 'var(--space-10)',
            }}>
              <Link to="/featured" className="btn btn--primary btn--lg" style={{ width: '100%', maxWidth: '320px' }}>
                View Work
                <ArrowRight className="icon" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--lg" style={{ width: '100%', maxWidth: '320px' }}>
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download="Kesa-Onyango-Resume.pdf"
                className="btn btn--ghost btn--lg"
                aria-label="Download résumé as PDF"
                style={{ width: '100%', maxWidth: '320px' }}
              >
                <Download className="icon" aria-hidden="true" />
                <span className="hidden sm:inline">Download Résumé</span>
              </a>
            </div>

            {/* Social proof - inline */}
            <div className="hero-social" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              justifyContent: 'center',
            }}>
              <a
                href="https://www.linkedin.com/in/kesa-onyango"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn-icon touch-target"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="icon" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Antone-2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn-icon touch-target"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="icon" aria-hidden="true" />
              </a>
              <a
                href="mailto:onyangoantone1@gmail.com"
                className="btn btn--ghost btn-icon touch-target"
                aria-label="Email me"
              >
                <Mail className="icon" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Personal visual keeps the hero focused on the engineer */}
          <div className={`hero-visual ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{
            animationDelay: '200ms',
            order: -1, /* Visual first on mobile */
          }}>
            <div className="hero-image-wrapper" style={{
              position: 'relative',
              maxWidth: '320px',
              marginInline: 'auto',
            }}>
              <img
                src="/profile.jpg"
                alt="Portrait of Kesa Onyango"
                loading="eager"
                fetchPriority="high"
                className="hero-image"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--color-bg)',
                  boxShadow: 'var(--shadow-xl), 0 0 0 1px var(--color-border), 0 0 60px -20px var(--color-accent)',
                }}
              />
              <div className="hero-image-accent" style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                zIndex: -1,
                opacity: 0.1,
                animation: 'pulse 4s ease-in-out infinite',
              }} aria-hidden="true" />
            </div>

            {/* Quick proof stats - responsive grid */}
            <div className="hero-stats" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--color-border)',
            }} aria-label="Quick stats">
              <div className="stat" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-1)',
                textAlign: 'center',
                padding: 'var(--space-2)',
              }}>
                <span className="stat-value" style={{
                  fontSize: 'clamp(var(--text-xl), 5vw, var(--text-3xl))',
                  fontWeight: 700,
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--color-fg), var(--color-accent))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>2+</span>
                <span className="stat-label caption" style={{ fontWeight: 500 }}>Years Shipping</span>
              </div>
              <div className="stat" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-1)',
                textAlign: 'center',
                padding: 'var(--space-2)',
              }}>
                <span className="stat-value" style={{
                  fontSize: 'clamp(var(--text-xl), 5vw, var(--text-3xl))',
                  fontWeight: 700,
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--color-fg), var(--color-accent))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>10+</span>
                <span className="stat-label caption" style={{ fontWeight: 500 }}>Projects Delivered</span>
              </div>
              <div className="stat" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-1)',
                textAlign: 'center',
                padding: 'var(--space-2)',
              }}>
                <span className="stat-value" style={{
                  fontSize: 'clamp(var(--text-xl), 5vw, var(--text-3xl))',
                  fontWeight: 700,
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--color-fg), var(--color-accent))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>100%</span>
                <span className="stat-label caption" style={{ fontWeight: 500 }}>Remote-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
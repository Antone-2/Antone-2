import { Link } from 'react-router-dom'
import { Home, Search, RotateCcw } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function NotFound() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section className="section" aria-labelledby="not-found-heading" ref={ref} style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'var(--space-16)',
      paddingBottom: 'var(--space-16)',
    }}>
      <div className="container">
        <div className={`not-found-content ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '480px', marginInline: 'auto' }}>
          <div className="not-found-code" aria-hidden="true" style={{
            fontSize: 'clamp(8rem, 20vw, 14rem)',
            fontWeight: 700,
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--color-fg), var(--color-accent))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'var(--font-display)',
            marginBottom: 'var(--space-6)',
          }}>
            404
          </div>
          <h1 id="not-found-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Page Not Found
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-fg-muted)', marginBottom: 'var(--space-10)' }}>
            The page you're looking for doesn't exist or has been moved. It happens.
          </p>
          <div className="not-found-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center' }}>
            <Link to="/" className="btn btn--primary">
              <Home className="icon" aria-hidden="true" />
              Back to Home
            </Link>
            <Link to="/featured" className="btn btn--secondary">
              <Search className="icon" aria-hidden="true" />
              View Featured Work
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn--ghost"
              disabled={window.history.length <= 1}
              aria-label="Go back"
            >
              <RotateCcw className="icon" aria-hidden="true" />
              Go Back
            </button>
          </div>
          <p className="caption" style={{ marginTop: 'var(--space-8)', color: 'var(--color-fg-subtle)' }}>
            Or <Link to="/contact" className="link">get in touch</Link> if you think this is a mistake.
          </p>
        </div>
      </div>
    </section>
  )
}
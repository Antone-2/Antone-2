import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ExternalLink, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const inventorySearchExample = `// Inventory search client — server-side only
export async function searchInventory(query: string) {
  const baseUrl = process.env.MABAWA_BASE_URL;
  const accessToken = process.env.MABAWA_ACCESS_TOKEN;

  if (!baseUrl || !accessToken) {
    throw new Error('Missing Mabawa API configuration');
  }

  const url = new URL('/v1/inventory/search', baseUrl);
  url.searchParams.set('q', query);
  url.searchParams.set('page', '1');
  url.searchParams.set('pageSize', '24');

  const response = await fetch(url.toString(), {
    headers: { Authorization: \`Bearer \${accessToken}\` },
  });

  if (!response.ok) {
    throw new Error(\`Inventory search failed: \${response.status}\`);
  }

  return response.json();
}`

export function FeaturedProject() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  const features = [
    'Product catalog & discovery with faceted search',
    'Supplier workspace & onboarding flow',
    'RFQ & bulk quotation workflows with negotiation',
    'Cart, checkout & order tracking',
    'Role-based access control (Buyer, Supplier, Admin)',
    'Inventory & stock management',
    'Secure file upload with malware scanning',
    'Developer platform with API documentation',
  ]

  return (
    <section id="featured" className="section section--compact featured-page" aria-labelledby="featured-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <h2 id="featured-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Featured Work
          </h2>
        </header>

        <div className="featured-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-10)',
          alignItems: 'start',
        }}>
          {/* Visual Preview - first on mobile, left on desktop */}
          <div className={`featured-visual ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ position: 'relative', order: -1 }}>
            <div className="browser-mock card card--elevated" style={{
              overflow: 'hidden',
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
            }} role="img" aria-label="Mabawa Creations marketplace preview">
              <div className="browser-chrome" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--color-bg)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                <div className="browser-dots" style={{ display: 'flex', gap: 'var(--space-1-5)' }} aria-hidden="true">
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div className="browser-url" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-mono)', fontWeight: 500 }} aria-hidden="true">
                  mabawacreations.com
                </div>
              </div>
              <div className="browser-content" style={{ padding: 'var(--space-5)', background: 'var(--color-bg)' }}>
                <nav className="mock-nav" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--space-3) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                }} aria-label="Mock navigation">
                  <img src="/mabawa-logo.png" alt="Mabawa Creations logo" className="mock-logo" style={{ height: '36px', width: 'auto' }} />
                  <div className="mock-nav-links" style={{ display: 'flex', gap: 'var(--space-5)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-fg-muted)', letterSpacing: '0.02em' }} aria-hidden="true">
                    <span>Shop</span>
                    <span>Categories</span>
                    <span>RFQ</span>
                    <span>Account</span>
                  </div>
                </nav>
                <div className="mock-hero" style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: '#0a0a0a',
                  aspectRatio: '16/9',
                }}>
                  <img
                    src="/mabawa-hero.webp"
                    alt="Industrial procurement platform interface showing product catalog"
                    loading="lazy"
                    className="mock-hero-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
                  />
                  <div className="mock-hero-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-8)',
                    background: 'linear-gradient(90deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.8) 40%, transparent 85%)',
                  }}>
                    <strong style={{ color: 'white', fontSize: 'clamp(var(--text-xl), 3vw, var(--text-3xl))', fontWeight: 700, textAlign: 'center', maxWidth: '85%', lineHeight: 1.15, textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
                      Industrial procurement made simpler.
                    </strong>
                  </div>
                </div>
                <div className="mock-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }} aria-hidden="true">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="mock-product" style={{
                      aspectRatio: '1',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      transition: 'transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)',
                    }}>
                      <div className="mock-product-image" style={{ width: '100%', height: '60%', background: 'linear-gradient(135deg, var(--color-border) 0%, var(--color-accent-muted) 100%)' }} />
                      <div className="mock-product-info" style={{ padding: 'var(--space-2)' }}>
                        <div className="mock-product-title" style={{ height: '1rem', background: 'var(--color-border)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-1)' }} />
                        <div className="mock-product-meta" style={{ height: '0.75rem', width: '60%', background: 'var(--color-fg-subtle)', borderRadius: 'var(--radius-sm)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details - second on mobile, right on desktop */}
          <div className={`featured-details ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms', display: 'flex', flexDirection: 'column' }}>
            <div className="project-header" style={{ marginBottom: 'var(--space-6)' }}>
              <h3 className="display-3" style={{ marginBottom: 'var(--space-4)' }}>Mabawa Creations</h3>
              <p className="body" style={{ maxWidth: '560px' }}>
                I designed and developed Mabawa Creations end-to-end: a commerce platform for PPE
                and industrial procurement across buyers, suppliers, and operations teams.
              </p>
            </div>

            <div className="project-meta" style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="meta-item card" style={{ padding: 'var(--space-4)', textAlign: 'left' }}>
                <span className="caption" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>Status</span>
                <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-success)' }}>Live in Production</strong>
              </div>
              <div className="meta-item card" style={{ padding: 'var(--space-4)', textAlign: 'left' }}>
                <span className="caption" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>My Role</span>
                <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-fg)' }}>Sole Developer — Product, Frontend, Backend, Integrations, Deployment, Maintenance</strong>
              </div>
            </div>

            <ul className="feature-list" style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 var(--space-8)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-3)',
            }} role="list" aria-label="Key features">
              {features.map((feature, index) => (
                <li key={index} className="feature-item card" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4)',
                }}>
                  <Check className="icon" style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                  <span className="body-sm" style={{ color: 'var(--color-fg-muted)' }}>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="engineering-notes card card--border-accent" style={{
              padding: 'var(--space-5)',
              background: 'var(--color-accent-muted)',
              borderLeft: '3px solid var(--color-accent)',
            }}>
              <span className="caption" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Engineering Focus</span>
              <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>
                Separate frontend/backend repositories · Role-aware workflows · External service
                integrations · Responsive, maintainable interfaces · Server-side credential handling
              </p>
            </div>

            <div className="project-actions" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
              marginTop: 'auto',
            }}>
              <a
                href="https://mabawacreations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary featured-action-btn"
                aria-label="Visit live Mabawa Creations platform"
              >
                Live Platform
                <ExternalLink className="icon" aria-hidden="true" />
              </a>
              <Link to="/case-study/mabawa-creations" className="btn btn--secondary featured-action-btn">
                Read Case Study
                <ArrowRight className="icon" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Code Sample */}
        <section className={`code-sample ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{
          marginTop: 'var(--space-16)',
          padding: 'var(--space-6)',
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          animationDelay: '200ms',
        }} aria-labelledby="code-sample-title">
          <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
            <div className="code-sample-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-6)',
              alignItems: 'start',
            }}>
              <div className="code-sample-copy">
                <span className="overline" style={{ display: 'inline-block', marginBottom: 'var(--space-3)' }}>Developer Experience</span>
                <h3 id="code-sample-title" className="heading-1" style={{ marginBottom: 'var(--space-4)' }}>API Integration Example</h3>
                <p className="body" style={{ marginBottom: 'var(--space-5)', maxWidth: '560px' }}>
                  This TypeScript example follows the inventory search flow documented in the
                  Mabawa Developer Platform. It demonstrates server-side credential management,
                  explicit pagination, and clear error handling—patterns used throughout the
                  production codebase.
                </p>
                <ul className="code-principles" style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 var(--space-6)',
                  display: 'grid',
                  gap: 'var(--space-3)',
                }} role="list">
                  {[
                    'Credentials read from server-side environment variables only',
                    'Search parameters and pagination are explicit',
                    'Non-success responses fail with descriptive errors',
                    'Type-safe response handling with TypeScript',
                  ].map((principle, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-3)',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                    }}>
                      <Check className="icon" style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                      <span className="body-sm" style={{ color: 'var(--color-fg-muted)' }}>{principle}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.mabawacreations.com/developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary featured-docs-btn"
                >
                  Explore Developer Docs
                  <ExternalLink className="icon" aria-hidden="true" />
                </a>
              </div>
              <div className="code-window card card--elevated" style={{ overflow: 'hidden' }}>
                <div className="code-window-bar" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderBottom: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                }}>
                  <div className="code-dots" style={{ display: 'flex', gap: 'var(--space-1-5)' }} aria-hidden="true">
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                  </div>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-mono)' }}>inventory-client.ts</span>
                  <span style={{ marginLeft: 'auto', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-accent)' }}>TypeScript</span>
                </div>
                <pre className="code-block"><code>{inventorySearchExample}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
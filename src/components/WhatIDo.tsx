import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Code, Database, Globe, Layers, Server, Zap } from 'lucide-react'

const capabilities = [
  {
    title: 'Full-Stack Web Applications',
    description: 'Build cohesive React interfaces and supporting APIs around real business workflows.',
    icon: Layers,
  },
  {
    title: 'Marketplace & Workflow Products',
    description: 'Design catalog, quotation, vendor, inventory, and operational journeys for B2B platforms.',
    icon: Globe,
  },
  {
    title: 'Backend Development & APIs',
    description: 'Implement REST APIs, authentication, validation, external services, and cloud file handling.',
    icon: Server,
  },
  {
    title: 'Frontend Engineering',
    description: 'Architect performant, accessible React applications with TypeScript and modern CSS.',
    icon: Code,
  },
  {
    title: 'Database Design & Optimization',
    description: 'Model relational and document data, design indexes, and optimize queries for production scale.',
    icon: Database,
  },
  {
    title: 'DevOps & Cloud Integration',
    description: 'Deploy and maintain applications on Vercel, Render, Railway with CI/CD and monitoring.',
    icon: Zap,
  },
]

export function WhatIDo() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })

  return (
    <section id="capabilities" className="section section--compact" aria-labelledby="capabilities-heading" ref={ref}>
      <div className="container">
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-12)' }}>
          <p className="overline">What I Build</p>
          <h2 id="capabilities-heading" className="display-2" style={{ marginBottom: 'var(--space-4)' }}>
            Capabilities
          </h2>
          <p className="body-lg">
            I deliver production-ready software across the full stack, with a focus on marketplace
            platforms, complex workflows, and clean architecture.
          </p>
        </header>

        <div className={`capability-grid ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-5)',
        }} role="list">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="card card--interactive"
              style={{
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                animationDelay: `${index * 80}ms`,
              }}
              role="listitem"
            >
              <div className="capability-icon" style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-accent-muted)',
                color: 'var(--color-accent)',
                borderRadius: 'var(--radius-lg)',
                transition: 'all var(--transition-base)',
                flexShrink: 0,
              }} aria-hidden="true">
                <capability.icon className="icon-xl" />
              </div>
              <h3 className="heading-3" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-3)' }}>{capability.title}</h3>
              <p className="body-sm" style={{ color: 'var(--color-fg-muted)', flex: 1 }}>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
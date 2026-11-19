import { ArrowLeft, ExternalLink, Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function MabawaCaseStudy() {
  const techStack = [
    { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Hook Form'] },
    { category: 'Backend', technologies: ['Node.js', 'Express', 'TypeScript', 'JWT Auth', 'RBAC'] },
    { category: 'Database', technologies: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Mongoose'] },
    { category: 'Infrastructure', technologies: ['Vercel', 'Render', 'Cloudflare R2', 'ClamAV', 'Docker'] },
    { category: 'Integrations', technologies: ['Payment Gateway', 'Email Service', 'SMS API', 'File Processing'] },
  ]

  const challenges = [
    {
      title: 'Complex Multi-Role Workflows',
      problem: 'Buyers, suppliers, and admins each needed distinct interfaces, permissions, and data views—all sharing the same product catalog and order system.',
      solution: 'Implemented a role-based access control system at both API and UI layers. Created reusable permission hooks and higher-order components. Separated frontend bundles per role where appropriate to reduce client-side bundle size.',
    },
    {
      title: 'RFQ & Quotation Pipeline',
      problem: 'Industrial procurement requires Request for Quotation (RFQ) flows with multiple suppliers, negotiation rounds, and BOQ (Bill of Quantities) support—not standard retail checkout.',
      solution: 'Designed a flexible quotation engine with states: draft → submitted → under review → negotiated → accepted/rejected. Built supplier notification system with email/SMS. Implemented BOQ upload, parsing, and line-item management.',
    },
    {
      title: 'Secure File Handling at Scale',
      problem: 'Suppliers upload product images, certificates, and BOQ documents. Files must be scanned for malware, validated, optimized, and served via CDN.',
      solution: 'Built upload pipeline: client-side validation → presigned Cloudflare R2 URLs → server-side ClamAV scanning → Sharp image optimization → CDN delivery. Implemented quarantine for failed scans with admin review.',
    },
    {
      title: 'Search & Discovery Performance',
      problem: 'Thousands of industrial products across hundreds of categories needed fast, faceted search with pagination, sorting, and real-time stock updates.',
      solution: 'Implemented PostgreSQL full-text search with trigram indexes for fuzzy matching. Added Redis caching for popular queries. Built debounced client search with optimistic UI updates. Paginated with cursor-based pagination for consistent performance.',
    },
  ]

  const outcomes = [
    'Live platform serving real buyers and suppliers daily',
    'Documented developer platform with OpenAPI specs',
    'Responsive design working on mobile, tablet, desktop',
    'WCAG 2.1 AA compliant critical user flows',
    'Sub-200ms API response times for core endpoints',
    'Zero-downtime deployments via Vercel/Render',
  ]

  const decisions = [
    {
      title: 'Separate Frontend & Backend Repositories',
      rationale: 'Enables independent deployments, team scaling, and technology choices. Shared types package ensures contract safety without monorepo complexity.',
    },
    {
      title: 'TypeScript End-to-End',
      rationale: 'Shared types between frontend/backend catch breaking changes at compile time. OpenAPI spec generates client SDK and server validation.',
    },
    {
      title: 'Server-Side Credential Management',
      rationale: 'All secrets (API keys, DB credentials, JWT secrets) live only in server environment variables. Frontend never touches sensitive config.',
    },
    {
      title: 'Presigned Upload URLs',
      rationale: 'Clients upload directly to Cloudflare R2 via presigned URLs. Backend never handles file bytes—reduces memory, scales horizontally, avoids egress costs.',
    },
    {
      title: 'Cursor-Based Pagination',
      rationale: 'Consistent performance regardless of page depth. Works naturally with infinite scroll. Avoids offset pagination degradation on large datasets.',
    },
    {
      title: 'Accessibility as Default',
      rationale: 'Semantic HTML, ARIA labels, focus management, color contrast, keyboard navigation built in—not retrofitted. Tested with screen readers.',
    },
  ]

  const lessons = [
    'Start with the user workflow, not the technology—let requirements drive stack choices',
    'Invest in type safety early; shared types prevent entire classes of runtime bugs',
    'Design APIs for consumers first (OpenAPI spec), then implement—contract-first development',
    'Security and accessibility are not afterthoughts; they are architectural constraints',
    'Observability (logging, metrics, tracing) pays for itself during incidents',
    'Automate deployments from day one; manual deploys don\'t scale',
    'Document decisions (ADRs) so future you—and future teammates—understand the why',
  ]

  return (
    <article id="mabawa-case-study" className="case-study section section--compact" aria-labelledby="case-study-title" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="container">
        <header className="case-study-header" style={{ marginBottom: 'var(--space-16)', maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
          <Link to="/featured" className="btn btn--ghost btn--sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
            <ArrowLeft className="icon" aria-hidden="true" />
            Back to Featured Work
          </Link>
          <p className="overline" style={{ marginBottom: 'var(--space-3)' }}>Production B2B Marketplace</p>
          <h1 id="case-study-title" className="display-2" style={{ marginBottom: 'var(--space-5)' }}>Mabawa Creations</h1>
          <p className="body-lg" style={{ maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-8)' }}>
            A B2B industrial procurement platform for PPE, machinery, project supply, and bulk quotation
            workflows. Designed, developed, and maintained end-to-end as sole engineer.
          </p>
          <div className="case-study-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center' }}>
            <a
              href="https://mabawacreations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label="Open live Mabawa Creations platform"
            >
              Open Live Platform
              <ExternalLink className="icon" aria-hidden="true" />
            </a>
            <a
              href="https://www.mabawacreations.com/developer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              aria-label="View Mabawa developer documentation"
            >
              Developer Documentation
              <ExternalLink className="icon" aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="case-study-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-8)',
          maxWidth: '1200px',
          marginInline: 'auto',
        }}>
          <aside className="case-study-summary card" aria-label="Project summary" style={{ padding: 'var(--space-6)', position: 'sticky', top: 'var(--space-6)', alignSelf: 'start' }}>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>Audience</dt>
                <dd className="body">Business buyers & industrial procurement teams</dd>
              </div>
              <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>Product Scope</dt>
                <dd className="body">Catalog, quotations, vendor workflows, order operations</dd>
              </div>
              <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>My Role</dt>
                <dd className="body">Full-stack product development & delivery</dd>
              </div>
              <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>Source</dt>
                <dd className="body">Private under client agreements</dd>
              </div>
              <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>Status</dt>
                <dd className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)' }} aria-hidden="true" />
                  <span className="font-medium" style={{ color: 'var(--color-success)' }}>Live in Production</span>
                </dd>
              </div>
              <div>
                <dt className="caption" style={{ color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-2)' }}>Links</dt>
                <dd style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <a href="https://mabawacreations.com" target="_blank" rel="noopener noreferrer" className="link link--sm flex items-center gap-1">
                    Live Platform <ExternalLink className="icon icon-xs" aria-hidden="true" />
                  </a>
                  <a href="https://www.mabawacreations.com/developer" target="_blank" rel="noopener noreferrer" className="link link--sm flex items-center gap-1">
                    Developer Docs <ExternalLink className="icon icon-xs" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="case-study-content">
            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Overview</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                Mabawa Creations helps business buyers discover industrial and safety products and
                request sourcing or quotations. The public experience includes product discovery,
                category navigation, bulk PPE supply requests, vendor onboarding, and order tracking.
                Unlike standard e-commerce, the platform centers on procurement workflows: RFQs,
                BOQs, bulk orders, and multi-party negotiation rather than simple add-to-cart checkout.
              </p>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)' }}>
                The system serves three primary user types: <strong>Buyers</strong> who discover and
                request products, <strong>Suppliers</strong> who manage catalogs and respond to
                quotations, and <strong>Operations</strong> who oversee orders, inventory, and
                platform health. Each role has a tailored interface with appropriate permissions.
              </p>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>The Problem</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                Industrial procurement spans many product categories and requires structured
                conversations between buyers, suppliers, and internal operations teams. Existing
                solutions were either too rigid (standard e-commerce) or too fragmented (email +
                spreadsheets). The client needed a unified platform that could handle:
              </p>
              <ul style={{ marginTop: 'var(--space-5)', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }} role="list">
                {[
                  'Multi-step RFQ (Request for Quotation) workflows with negotiation rounds',
                  'BOQ (Bill of Quantities) upload, parsing, and line-item management',
                  'Role-aware interfaces for buyers, suppliers, and operations',
                  'Secure document handling for certifications, specs, and compliance docs',
                  'Real-time inventory visibility across multiple warehouses',
                  'Audit trails for compliance and dispute resolution',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-fg-muted)' }}>
                    <Check className="icon" style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span className="body">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>My Role</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                As the sole engineer, I owned the complete product lifecycle:
              </p>
              <ul style={{ marginTop: 'var(--space-5)', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }} role="list">
                {[
                  'Product discovery & requirements gathering with stakeholders',
                  'System architecture: frontend/backend separation, database design, API contracts',
                  'Frontend: React/TypeScript interfaces, responsive design, accessibility',
                  'Backend: Node.js/Express APIs, authentication, authorization, validation',
                  'Database: PostgreSQL (relational) + MongoDB (documents), Prisma/Mongoose ORMs',
                  'Infrastructure: Vercel (frontend), Render (backend), Cloudflare R2 (storage)',
                  'Security: JWT auth, RBAC, ClamAV scanning, input validation, rate limiting',
                  'Deployment: CI/CD pipelines, environment management, monitoring',
                  'Maintenance: Bug fixes, feature iterations, performance optimization',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-fg-muted)' }}>
                    <Check className="icon" style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span className="body">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)' }}>
                Source repositories are private under client agreements. Implementation details
                below are presented at a level approved for public review.
              </p>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Technical Architecture</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                The system follows a modular architecture separating concerns across frontend,
                backend services, and data layers:
              </p>

              <div className="tech-stack-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-8)',
              }}>
                {techStack.map((stack) => (
                  <div key={stack.category} className="card" style={{ padding: 'var(--space-5)' }}>
                    <h3 className="heading-4" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      marginBottom: 'var(--space-3)',
                    }}>
                      <span className="w-2 h-2 rounded-full bg-accent" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} aria-hidden="true" />
                      {stack.category}
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }} role="list">
                      {stack.technologies.map((tech, i) => (
                        <li key={i} className="flex items-center gap-2" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-fg-muted)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)' }} aria-hidden="true" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="card card--border-accent" style={{
                marginTop: 'var(--space-10)',
                padding: 'var(--space-6)',
              }}>
                <h3 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Architecture Highlights</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-fg-muted)' }} role="list">
                  <li><strong>Frontend/Backend Separation:</strong> Independent deployments, separate repos, shared TypeScript types via npm package</li>
                  <li><strong>API-First Design:</strong> OpenAPI 3.0 spec drives both backend validation and frontend type generation</li>
                  <li><strong>Role-Based Access:</strong> Middleware-enforced RBAC at API layer; UI conditionally renders via permission hooks</li>
                  <li><strong>File Pipeline:</strong> Presigned URLs → ClamAV → Sharp optimization → Cloudflare R2 → CDN</li>
                  <li><strong>Search:</strong> PostgreSQL full-text + trigram indexes, Redis cache layer, cursor pagination</li>
                  <li><strong>Observability:</strong> Structured logging, error tracking, uptime monitoring, API metrics</li>
                </ul>
              </div>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Engineering Decisions</h2>
              <div className="decisions-grid" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '800px' }}>
                {decisions.map((decision, i) => (
                  <div key={i} className="card" style={{ padding: 'var(--space-5)' }}>
                    <h3 className="heading-4" style={{ marginBottom: 'var(--space-2)' }}>{decision.title}</h3>
                    <p className="body" style={{ color: 'var(--color-fg-muted)' }}>{decision.rationale}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Challenges & Solutions</h2>
              <div className="challenges-grid" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: '800px' }}>
                {challenges.map((challenge, index) => (
                  <div key={index} className="card" style={{ padding: 'var(--space-6)' }}>
                    <div className="flex items-start gap-4" style={{ marginBottom: 'var(--space-5)' }}>
                      <div className="challenge-number" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--color-accent-muted)',
                        color: 'var(--color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--text-lg)',
                        flexShrink: 0,
                      }} aria-hidden="true">
                        {index + 1}
                      </div>
                      <h3 className="heading-4" style={{ margin: 0 }}>{challenge.title}</h3>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: 'var(--space-4)',
                    }}>
                      <div className="card" style={{
                        padding: 'var(--space-4)',
                        background: 'var(--color-error-muted)',
                        borderColor: 'var(--color-error-muted)',
                      }}>
                        <h4 className="font-semibold" style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          marginBottom: 'var(--space-2)',
                          color: 'var(--color-error)',
                        }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-error" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-error)' }} aria-hidden="true" />
                          Challenge
                        </h4>
                        <p className="body-sm" style={{ color: 'var(--color-fg-muted)' }}>{challenge.problem}</p>
                      </div>
                      <div className="card" style={{
                        padding: 'var(--space-4)',
                        background: 'var(--color-success-muted)',
                        borderColor: 'var(--color-success-muted)',
                      }}>
                        <h4 className="font-semibold" style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          marginBottom: 'var(--space-2)',
                          color: 'var(--color-success)',
                        }}>
                          <Check className="icon icon-sm" aria-hidden="true" />
                          Solution
                        </h4>
                        <p className="body-sm" style={{ color: 'var(--color-fg-muted)' }}>{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Key Capabilities Delivered</h2>
              <div className="capabilities-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-3)',
                maxWidth: '800px',
                marginTop: 'var(--space-5)',
              }}>
                {[
                  'Industrial product & category discovery',
                  'RFQ, BOQ, bulk PPE, general quote requests',
                  'Vendor registration & marketplace onboarding',
                  'Role-aware product, inventory, order operations',
                  'Cloud-hosted assets & external service integrations',
                  'Real-time notifications (email, SMS, in-app)',
                  'Audit trails & compliance documentation',
                  'Admin dashboard with analytics & user management',
                  'Developer platform with API documentation',
                ].map((cap, i) => (
                  <div key={i} className="card" style={{
                    padding: 'var(--space-4)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                  }}>
                    <Check className="icon" style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span className="body" style={{ color: 'var(--color-fg-muted)' }}>{cap}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="case-study-section" style={{ marginBottom: 'var(--space-16)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Outcomes & Evidence</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                The platform is live and publicly accessible with verified buyer and supplier journeys.
                The strongest evidence is the deployed product and its documented developer platform.
                No unavailable private metrics or unsubstantiated performance claims are included.
              </p>
              <ul style={{ marginTop: 'var(--space-5)', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }} role="list">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-fg-muted)' }}>
                    <Check className="icon" style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span className="body">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="case-study-links" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
                <a
                  href="https://mabawacreations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Live Marketplace
                  <ExternalLink className="icon" aria-hidden="true" />
                </a>
                <a
                  href="https://www.mabawacreations.com/developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  Developer Platform
                  <ExternalLink className="icon" aria-hidden="true" />
                </a>
              </div>
            </section>

            <section className="case-study-section">
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Lessons Learned</h2>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                This project demonstrates end-to-end product thinking: translating a complex business
                workflow into usable interface states, structuring the supporting data and APIs,
                integrating third-party services securely, and delivering a maintainable production
                system that serves real users daily.
              </p>
              <p className="body" style={{ maxWidth: '800px', color: 'var(--color-fg-muted)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)' }}>
                Key takeaways that inform my engineering approach:
              </p>
              <ul style={{ marginTop: 'var(--space-5)', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }} role="list">
                {lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-fg-muted)' }}>
                    <ChevronRight className="icon" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span className="body">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
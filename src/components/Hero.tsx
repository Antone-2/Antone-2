import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="eyebrow">Full-stack engineer · Nairobi, Kenya</p>
        <h1>
          Full-stack engineer building <span>products that ship.</span>
        </h1>
        <p>
          Full-stack engineer working across React, Node.js, databases, APIs, and cloud integrations. I turn complex workflows into fast, reliable products.
        </p>
        <p className="location">
          <span className="status-dot" aria-hidden="true" />
          Open to remote full-time and contract roles
        </p>
        <div className="cta-buttons">
          <a href="/featured" className="btn">
            View featured work
            <ArrowRight className="svg-icon-sm" aria-hidden="true" />
          </a>
          <a href="/resume.pdf" download="Kesa-Onyango-CV.pdf" className="btn-outline">
            <Download className="svg-icon-sm" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="/profile.jpg" alt="Portrait of Kesa Onyango" fetchPriority="high" />
      </div>
    </section>
  )
}

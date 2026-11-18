export function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/profile.jpg" alt="Kesa Onyango" loading="lazy" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span className="accent">Me</span></h2>
        <p>
          I build full-stack web applications across the complete product surface: React interfaces, Node.js APIs, relational and document databases, authentication, file handling, and deployment.
        </p>
        <p>
          My work is centered on practical software: marketplace workflows, catalog and inventory systems, order management, procurement requests, and operational dashboards.
        </p>
        <p>
          I care about the details that make products dependable—clear data models, useful error states, responsive interfaces, secure integrations, and code another engineer can maintain.
        </p>
        <p>
          I am open to remote full-time and contract software engineering roles. I want to join a product engineering team where I can contribute to production systems, review code, ship features, and continue growing as a full-stack engineer.
        </p>
        <a href="/featured" className="btn">
          View Featured Work
        </a>
      </div>
    </section>
  )
}

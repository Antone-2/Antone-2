export function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Let’s work <span className="accent">together</span></h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Live project</h3>
          <p><a href="https://mabawacreations.com" target="_blank" rel="noopener noreferrer">mabawacreations.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:onyangoantone1@gmail.com">onyangoantone1@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/kesa-onyango" target="_blank" rel="noopener noreferrer">linkedin.com/in/kesa-onyango</a></p>
        </div>
        <div className="contact-item">
          <h3>GitHub profile</h3>
          <p>
            <a href="https://github.com/Antone-2" target="_blank" rel="noopener noreferrer">github.com/Antone-2</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Project source</h3>
          <p>Repositories for Mabawa Creations and the Safety project are private under client agreements.</p>
        </div>
        <div className="contact-item">
          <h3>Availability</h3>
          <p>Open to remote full-time and contract software engineering roles.</p>
        </div>
      </div>
      <div className="contact-form">
        <p>Interested in a full-stack engineer who owns products from interface to API and deployment?</p>
        <div className="project-action-row">
          <a href="/resume.pdf" download className="btn">Download résumé</a>
          <a href="https://github.com/Antone-2" target="_blank" rel="noopener noreferrer" className="btn-outline">Explore GitHub</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Kesa Onyango. Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
      <div className="social-links">
        <a href="mailto:onyangoantone1@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/kesa-onyango" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Antone-2" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}

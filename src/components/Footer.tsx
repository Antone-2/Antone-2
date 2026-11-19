import { ArrowRight, Code, Heart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkedInIcon, GitHubIcon } from './Icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-eyebrow">Full-stack engineer · Nairobi, Kenya</p>
            <h2 className="footer-brand-title">Kesa Onyango</h2>
            <p className="footer-description">
              Building production-ready web applications, marketplaces, and useful digital products.
            </p>
            <Link to="/contact" className="footer-cta">
              Let&apos;s connect
              <ArrowRight className="icon" aria-hidden="true" />
            </Link>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <h3 className="footer-heading">Explore</h3>
            <ul>
              <li><Link to="/featured">Featured Work</Link></li>
              <li><Link to="/projects">Other Projects</Link></li>
              <li><Link to="/capabilities">Capabilities</Link></li>
              <li><Link to="/skills">Technical Skills</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="footer-social">
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/in/kesa-onyango"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="icon" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Antone-2"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <GitHubIcon className="icon" aria-hidden="true" />
              </a>
              <a
                href="mailto:onyangoantone1@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail className="icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Kesa Onyango
            <span className="footer-built-with">
              Built with <Code className="icon" aria-hidden="true" /> React &amp; TypeScript
              <Heart className="icon footer-heart" aria-hidden="true" /> in Nairobi
            </span>
          </p>
          <div className="footer-bottom-links">
            <a href="/resume.pdf" download="Kesa-Onyango-Resume.pdf">Download résumé</a>
            <Link to="/featured">Featured work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

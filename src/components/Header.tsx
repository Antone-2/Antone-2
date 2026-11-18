import { useState, useEffect } from 'react'
import { Menu, X, Mail, FileText } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const RESUME_URL = '/resume.pdf'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  className?: string
  onClick?: () => void
}

export function NavLink({ href, label, isActive, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${isActive ? 'active' : ''} ${className ?? ''}`}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  className?: string
}

export function ThemeToggle({ theme, toggleTheme, className }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`btn-outline ${className ?? ''}`}
    >
      {theme === 'light' ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM8 15A7 7 0 0 0 1 8a7 7 0 0 0 7-7 7 7 0 0 0 7 7 7 7 0 0 0-7 7z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <circle cx="8" cy="8" r="5" />
          <line x1="8" x2="8" y1="2" y2="3" />
          <line x1="8" x2="8" y1="13" y2="14" />
          <line x1="2" x2="3" y1="8" y2="8" />
          <line x1="13" x2="14" y1="8" y2="8" />
          <line x1="5.19" x2="6.34" y1="5.19" y2="6.34" />
          <line x1="9.66" x2="10.81" y1="9.66" y2="10.81" />
          <line x1="3.34" x2="4.66" y1="11.34" y2="12.66" />
          <line x1="11.34" x2="12.66" y1="3.34" y2="4.66" />
        </svg>
      )}
    </button>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { getTheme, applyTheme } = useTheme()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const t = getTheme()
    setTheme(t)
    applyTheme(t)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  const links = [
    { href: '/featured', label: 'Featured Work' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${scrolled ? 'sticky' : ''}`}>
      <div className="logo-container">
        <a href="/" className="logo" aria-label="Kesa Onyango homepage">Kesa Onyango</a>
      </div>

      <nav className={`navbar ${isOpen ? 'active' : ''}`} id="navbar">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} isActive={false} onClick={() => setIsOpen(false)} />
        ))}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>

      <div className="header-actions">
        <a
          href={RESUME_URL}
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
                <FileText className="svg-icon-sm" aria-hidden="true" />
          Résumé
        </a>
        <a href="/contact" className="btn">
                <Mail className="svg-icon-sm" aria-hidden="true" />
          Contact
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="menu-icon"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="svg-icon" /> : <Menu className="svg-icon" />}
        </button>
      </div>
    </header>
  )
}

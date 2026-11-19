import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, FileText, Mail } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { NavLink } from './NavLink'
import { Link, useLocation } from 'react-router-dom'

const RESUME_URL = '/resume.pdf'

interface NavItem {
  href: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/featured', label: 'Featured Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { getTheme, applyTheme } = useTheme()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = getTheme()
    setTheme(t)
    applyTheme(t)
    setMounted(true)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [getTheme, applyTheme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  if (!mounted) {
    return (
      <header className="header" role="banner">
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label="Kesa Onyango - Home">Kesa Onyango</Link>
        </div>
      </header>
    )
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <div className="logo-container">
          <Link to="/" className="logo" aria-label="Kesa Onyango - Home">Kesa Onyango</Link>
        </div>

        <nav className={`navbar ${isOpen ? 'open' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} isActive={pathname === item.href} onClick={closeMenu} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="btn btn--ghost btn--sm theme-toggle"
          >
            {theme === 'light' ? <Moon className="icon" aria-hidden="true" /> : <Sun className="icon" aria-hidden="true" />}
          </button>
          <a
            href={RESUME_URL}
            download="Kesa-Onyango-Resume.pdf"
            className="btn btn--secondary btn--sm"
            aria-label="Download résumé"
          >
            <FileText className="icon" aria-hidden="true" />
            <span className="hidden sm:inline">Résumé</span>
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm" aria-label="Contact me">
            <Mail className="icon" aria-hidden="true" />
            <span className="hidden sm:inline">Contact</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="menu-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="navbar"
            className="menu-toggle touch-target"
          >
            {isOpen ? <X className="icon" aria-hidden="true" /> : <Menu className="icon" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
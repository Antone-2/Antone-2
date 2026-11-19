import { Link } from 'react-router-dom'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  className?: string
  onClick?: () => void
}

export function NavLink({ href, label, isActive, className, onClick }: NavLinkProps) {
  return (
    <Link
      to={href}
      className={`nav-link ${isActive ? 'active' : ''} ${className ?? ''}`}
      onClick={onClick}
      style={{
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        color: isActive ? 'var(--color-accent)' : 'var(--color-fg-muted)',
        padding: 'var(--space-2) var(--space-3)',
        borderRadius: 'var(--radius-md)',
        transition: 'color var(--transition-fast), background-color var(--transition-fast)',
        position: 'relative',
        textDecoration: 'none',
      }}
    >
      {label}
      <span
        style={{
          content: '""',
          position: 'absolute',
          bottom: '4px',
          left: '50%',
          width: '0',
          height: '2px',
          background: 'var(--color-accent)',
          transform: 'translateX(-50%)',
          transition: 'width var(--transition-fast)',
          borderRadius: 'var(--radius-full)',
        }}
        aria-hidden="true"
      />
    </Link>
  )
}
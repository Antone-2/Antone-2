interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
}

export function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-accent ${
        isActive ? 'text-accent' : ''
      }`}
    >
      {label}
    </a>
  )
}

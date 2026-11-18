import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="btn-ghost btn p-2 rounded-lg hover:bg-accent/10 transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  )
}

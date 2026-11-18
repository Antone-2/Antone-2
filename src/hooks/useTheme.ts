export function useTheme() {
  const getTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const applyTheme = (theme: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }

  return { getTheme, applyTheme }
}

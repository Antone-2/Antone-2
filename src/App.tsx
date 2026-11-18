import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedProject } from './components/FeaturedProject'
import { SelectedProjects } from './components/SelectedProjects'
import { TechnicalSkills } from './components/TechnicalSkills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useState, useEffect } from 'react'
import { NotFound } from './components/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  const { getTheme, applyTheme } = useTheme()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = getTheme()
    setTheme(t)
    applyTheme(t)
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/featured" element={<FeaturedProject />} />
            <Route path="/projects" element={<SelectedProjects />} />
            <Route path="/skills" element={<TechnicalSkills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

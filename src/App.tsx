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
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MabawaCaseStudy } from './components/MabawaCaseStudy'
import { WhatIDo } from './components/WhatIDo'
import { ArchitecturalLoader } from './components/ArchitecturalLoader'

function HomePage() {
  return (
    <Hero />
  )
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isCaseStudy = pathname.startsWith('/case-study/')
    const title = isCaseStudy
      ? 'Mabawa Creations Engineering Case Study — Kesa Onyango'
      : 'Kesa Onyango — Full-Stack Engineer'
    const description = isCaseStudy
      ? 'Engineering case study for Mabawa Creations, a live B2B industrial procurement marketplace built with React, Node.js, PostgreSQL, and cloud services.'
      : 'Kesa Onyango is a full-stack engineer in Nairobi, Kenya, building web applications, marketplace workflows, APIs, and cloud-integrated products.'
    const canonical = isCaseStudy
      ? 'https://portfolio-psi-seven-f13u6doewx.vercel.app/case-study/mabawa-creations'
      : 'https://portfolio-psi-seven-f13u6doewx.vercel.app/'

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)

    let canonicalElement = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalElement) {
      canonicalElement = document.createElement('link')
      canonicalElement.rel = 'canonical'
      document.head.appendChild(canonicalElement)
    }
    canonicalElement.href = canonical

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [pathname])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previousScrollBehavior
  }, [pathname])

  return null
}

export function App() {
  const { getTheme, applyTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = getTheme()
    applyTheme(t)
    const timer = window.setTimeout(() => setMounted(true), 850)
    return () => window.clearTimeout(timer)
  }, [])

  if (!mounted) return <ArchitecturalLoader />

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoManager />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/mabawa-creations" element={<MabawaCaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/featured" element={<FeaturedProject />} />
            <Route path="/capabilities" element={<WhatIDo />} />
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
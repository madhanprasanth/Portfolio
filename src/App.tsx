import { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import WhatIBuild from './sections/WhatIBuild'
import Contact from './sections/Contact'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

export default function App() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {!isMobile && <CustomCursor />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhatIBuild />
        <Contact />
      </main>
    </div>
  )
}

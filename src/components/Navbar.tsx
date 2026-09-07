import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsub = scrollYProgress.on('change', v => setScrolled(v > 0.01))
    return unsub
  }, [scrollYProgress])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={e => handleClick(e, '#hero')}
          className="text-white font-bold text-lg tracking-tight"
        >
          <span className="text-gradient">M</span>adhanprasanth
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleClick(e, link.href)}
              className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={e => handleClick(e, '#contact')}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/[0.12] text-white hover:border-[#8b5cf6]/60 hover:bg-[#8b5cf6]/10 transition-all duration-300"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
        >
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : 'mb-1'}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-6 py-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.08] flex flex-col gap-3"
        >
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => {
                handleClick(e, link.href)
                setMobileOpen(false)
              }}
              className="text-[#94a3b8] hover:text-white text-base font-medium py-2 transition-colors border-b border-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => {
              handleClick(e, '#contact')
              setMobileOpen(false)
            }}
            className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold text-sm shadow-md"
          >
            Hire me
          </a>
        </motion.div>
      )}

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  )
}

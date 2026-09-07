import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, Mail, ArrowRight, Sparkles, Code2, Cpu } from 'lucide-react'

const ROLES = [
  'React.js & TypeScript Specialist',
  'Angular & Modern UI/UX',
  'Real-Time WebSocket Telemetry',
  'AI Workflow Interfaces (BPMN)',
]

function useTypewriter(words: string[], speed = 65, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const role = useTypewriter(ROLES)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] pt-28 pb-16"
    >
      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Atmospheric Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #3b82f6 0%, #8b5cf6 50%, transparent 75%)',
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Clean Editorial Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-[#cbd5e1]">
                Frontend Developer @ <strong className="text-white font-semibold">Kumaran Systems</strong>
              </span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-gradient">Madhanprasanth</span>
            </h1>

            {/* Role Typewriter */}
            <div className="h-9 flex items-center mb-5">
              <p className="text-lg sm:text-xl font-medium text-[#94a3b8]">
                Crafting{' '}
                <span className="text-white font-semibold underline decoration-[#3b82f6] decoration-2 underline-offset-4">
                  {role}
                </span>
                <span className="text-[#3b82f6] animate-pulse">|</span>
              </p>
            </div>

            {/* Short High-Impact Bio */}
            <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Specialized in engineering real-time monitoring dashboards, legacy banking modernization, and visual AI workflow platforms with React.js, Angular, TypeScript & Tailwind CSS.
            </p>

            {/* Quick Skills Strip */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 max-w-xl">
              {['React.js', 'Angular', 'TypeScript', 'Python', 'Tailwind CSS', 'Redux Toolkit', 'WebSockets', 'Figma UI/UX'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#94a3b8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.15] bg-white/[0.03] text-white font-semibold text-sm hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                Let's Talk
              </button>

              <a
                href="https://linkedin.com/in/madhanprasanth-p-566601264"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full border border-white/[0.08] text-[#94a3b8] hover:text-white hover:border-white/20 text-sm font-medium transition-all"
              >
                <ExternalLink size={14} className="text-[#0ea5e9]" />
                LinkedIn
              </a>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white">3+ <span className="text-xs font-normal text-[#3b82f6]">Yrs</span></p>
                <p className="text-xs text-[#64748b]">Frontend Exp</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5+ <span className="text-xs font-normal text-[#8b5cf6]">Apps</span></p>
                <p className="text-xs text-[#64748b]">Production Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">Google</p>
                <p className="text-xs text-[#64748b]">AI Certified</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Cinematic Portrait without Boxy Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Neon Glow Aura Behind Portrait */}
            <div
              className="absolute w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] rounded-full opacity-35 blur-[100px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
                transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            />

            {/* The Cinematic Portrait Cutout */}
            <div
              className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px]"
              style={{
                transform: `perspective(1000px) rotateY(${mouse.x * 3}deg) rotateX(${-mouse.y * 3}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              {/* Image with bottom fade out */}
              <div className="relative">
                <img
                  src="/madhan.png"
                  alt="Madhanprasanth Palanisamy — Frontend Developer"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(139,92,246,0.25)]"
                  loading="eager"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  }}
                />
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 right-2 sm:right-6 px-3.5 py-2 rounded-2xl border border-white/[0.12] bg-[#0f0f0f]/85 backdrop-blur-md shadow-2xl flex items-center gap-2.5 select-none"
              >
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-[#64748b]">Role</p>
                  <p className="text-xs font-semibold text-white">Frontend Specialist</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 left-0 sm:left-4 px-3.5 py-2 rounded-2xl border border-white/[0.12] bg-[#0f0f0f]/85 backdrop-blur-md shadow-2xl flex items-center gap-2.5 select-none"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Code2 size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-[#64748b]">Stack</p>
                  <p className="text-xs font-semibold text-white">React + Angular</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-1.5 text-[#64748b] hover:text-white transition-colors text-xs font-mono"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.div>
            <span>scroll</span>
          </button>
        </div>
      </div>
    </section>
  )
}


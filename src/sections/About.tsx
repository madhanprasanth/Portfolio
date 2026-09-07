import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { Code2, Palette, Zap, Trophy, GraduationCap, Award, Cpu, ShieldCheck } from 'lucide-react'
import ProfileAvatar from '../components/ProfileAvatar'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: 'Years Experience', target: 3, suffix: '+' },
  { label: 'Enterprise Projects', target: 5, suffix: '+' },
  { label: 'Company Recognition Awards', target: 3, suffix: '' },
  { label: 'Core Frontend Technologies', target: 15, suffix: '+' },
]

const highlights = [
  {
    icon: Code2,
    title: 'React & Angular Specialist',
    desc: 'Deep expertise building modular component architectures, design systems, and responsive applications in React.js & Angular with TypeScript.',
  },
  {
    icon: Zap,
    title: 'Real-Time & WebSockets',
    desc: 'Architecting high-frequency telemetry, live operational metrics, and concurrent session tracking with WebSockets and Teams SDK.',
  },
  {
    icon: Palette,
    title: 'UI/UX & Figma Design',
    desc: 'Translating complex requirements and Figma prototypes into WCAG-accessible, pixel-perfect interfaces with seamless user journeys.',
  },
  {
    icon: Cpu,
    title: 'AI Automation & Performance',
    desc: 'BPMN visual workflow automation, Google AI certified, coupled with extreme rendering optimizations (lazy loading, code-splitting, Redux Toolkit).',
  },
]

const recognitions = [
  {
    title: 'Best Team Player Award',
    desc: 'Recognized for consistently meeting delivery timelines ahead of schedule across Agile/Scrum sprints.',
    icon: Trophy,
    color: '#3b82f6',
  },
  {
    title: 'Extra Go-Mile Award',
    desc: 'Awarded for exceptional quick learning ability, proactive initiative, and outstanding delivery performance.',
    icon: Award,
    color: '#8b5cf6',
  },
  {
    title: 'Commitment & Attendance Award',
    desc: 'Honored for dedication, punctuality, and reliability directly elevating overall team velocity and productivity.',
    icon: ShieldCheck,
    color: '#10b981',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          number="01 —"
          title="About Me"
          subtitle="Frontend Developer at Kumaran Systems passionate about crafting high-performance, accessible web products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-5">
              I'm <span className="text-white font-semibold">Madhanprasanth Palanisamy</span>, a Frontend Developer with{' '}
              <span className="text-[#3b82f6] font-semibold">3+ years of professional experience</span> currently engineering
              mission-critical web applications at <span className="text-white font-semibold">Kumaran Systems</span> in Chennai.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-5">
              My core focus spans <span className="text-white">React.js, Angular, TypeScript, and Tailwind CSS</span>. I have a proven track record delivering
              real-time monitoring platforms, banking modernization systems, AI workflow automation portals with BPMN visual designers,
              and native Microsoft Teams embedded applications.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
              I bridge engineering and design by transforming Figma mockups into WCAG-accessible, pixel-perfect web experiences,
              with a relentless focus on performance optimization (code splitting, Redux Toolkit memoization, and low-latency WebSockets).
            </p>

            {/* Quick Education & Cert badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-white/[0.08]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <GraduationCap className="text-[#3b82f6] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-xs text-[#94a3b8] uppercase font-mono">Education</p>
                  <p className="text-sm font-medium text-white">B.E. Computer Science & Engineering</p>
                  <p className="text-xs text-[#64748b]">Nandha Engineering College • 2019 – 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-purple-500/20 bg-purple-500/[0.03]">
                <Award className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-xs text-purple-300 uppercase font-mono">Certification</p>
                  <p className="text-sm font-medium text-white">Google AI Professional Certificate</p>
                  <p className="text-xs text-[#64748b]">AI Workflows & Prompt Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code / Summary Panel with Avatar Header */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <ProfileAvatar size="sm" showStatus={false} />
                  <div>
                    <p className="text-white text-xs font-semibold">Madhanprasanth P</p>
                    <span className="text-[11px] font-mono text-[#3b82f6]">Frontend Dev @ Kumaran Systems</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm text-left space-y-1.5 leading-relaxed text-[#cbd5e1]">
                <p><span className="text-[#8b5cf6]">export const</span> <span className="text-[#3b82f6]">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-[#94a3b8]">name:</span> <span className="text-emerald-400">"Madhanprasanth Palanisamy"</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">role:</span> <span className="text-emerald-400">"Frontend Developer"</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">company:</span> <span className="text-amber-300">"Kumaran Systems"</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">location:</span> <span className="text-emerald-400">"Chennai, India"</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">experience:</span> <span className="text-cyan-400">"3+ Years"</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">stack:</span> [<span className="text-purple-300">"React"</span>, <span className="text-purple-300">"Angular"</span>, <span className="text-purple-300">"TypeScript"</span>, <span className="text-purple-300">"Python"</span>],</p>
                <p className="pl-4"><span className="text-[#94a3b8]">specialties:</span> [<span className="text-emerald-400">"Real-time Dashboards"</span>, <span className="text-emerald-400">"Teams SDK"</span>],</p>
                <p className="pl-4"><span className="text-[#94a3b8]">aiCertified:</span> <span className="text-[#3b82f6]">true</span>,</p>
                <p className="pl-4"><span className="text-[#94a3b8]">openToOpportunities:</span> <span className="text-[#3b82f6]">true</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-6 text-center hover:border-[#8b5cf6]/30 transition-all duration-300"
            >
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-[#64748b] text-sm mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-6 group hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:from-[#3b82f6]/30 group-hover:to-[#8b5cf6]/30 transition-all duration-300">
                <h.icon size={18} className="text-[#8b5cf6]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{h.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Recognitions & Awards */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="text-amber-400" size={20} />
            Professional Honors & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0f0f0f] relative overflow-hidden group hover:border-white/[0.18] transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${rec.color}15`, border: `1px solid ${rec.color}30` }}
                >
                  <rec.icon size={18} style={{ color: rec.color }} />
                </div>
                <h4 className="text-white font-semibold text-base mb-2">{rec.title}</h4>
                <p className="text-[#64748b] text-sm leading-relaxed">{rec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

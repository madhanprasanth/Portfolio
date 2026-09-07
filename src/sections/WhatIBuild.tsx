import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { Zap, Bot, BarChart3, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Modern Web Apps & Design Systems',
    description:
      'High-performance, accessible (WCAG compliant) web applications using React.js and Angular. Expert in modular component architecture, custom React hooks, Redux Toolkit, and scalable design systems.',
    features: [
      'React.js & Angular with TypeScript',
      'Figma-to-Code with Tailwind CSS',
      'Performance Tuning (Code-Splitting & Memoization)',
      'WCAG Accessibility & Cross-Browser Stability',
      'Role-Based Access Control (RBAC) & Enterprise Security',
    ],
    color: '#3b82f6',
    gradient: 'from-[#3b82f6]/15 to-transparent',
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI Workflow Automation & Portals',
    description:
      'Visual workflow automation systems and intelligent interfaces. Certified by Google in AI & Prompt Engineering, with production experience building BPMN 2.0 drag-and-drop orchestration engines.',
    features: [
      'Google AI Professional Certified',
      'BPMN 2.0 Visual Workflow Canvas',
      'Dynamic Node Configuration & Forms',
      'Prompt Engineering & AI Model Integration',
      'Live Execution Status & Log Telemetry',
    ],
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6]/15 to-transparent',
    featured: true,
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Real-Time Telemetry & Teams Apps',
    description:
      'Low-latency WebSocket streaming dashboards and native Microsoft Teams embedded applications that streamline operations, reduce manual check-ins, and visualize live system metrics.',
    features: [
      'WebSocket Real-Time Data Streams (<50ms)',
      'Microsoft Teams SDK Native Embedding',
      'High-Frequency Charting (CPU, Memory, Network)',
      'Single Sign-On (Azure AD / MSAL Integration)',
      'Full-Stack Coordination (REST APIs, PostgreSQL, MySQL)',
    ],
    color: '#06b6d4',
    gradient: 'from-[#06b6d4]/15 to-transparent',
  },
]

export default function WhatIBuild() {
  return (
    <section id="build" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          number="05 —"
          title="What I Build"
          subtitle="Three core domains where I deliver high business impact and exceptional engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl border bg-[#0f0f0f] p-8 overflow-hidden group transition-all duration-300 flex flex-col justify-between ${
                card.featured
                  ? 'border-[#8b5cf6]/40 shadow-[0_0_40px_rgba(139,92,246,0.12)]'
                  : 'border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-60 pointer-events-none`}
              />

              {/* Featured badge */}
              {card.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30">
                  Specialized Focus
                </div>
              )}

              <div className="relative mb-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{ backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  {card.emoji}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{card.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-2">
                  {card.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: card.color }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative pt-4 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: card.color }}
                >
                  Discuss a project
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

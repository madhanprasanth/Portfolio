import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

interface SkillItem {
  name: string
  level: number
  color: string
  category: 'Frontend' | 'State & Performance' | 'UI/UX & Tools' | 'Backend & AI'
}

const allSkills: SkillItem[] = [
  // Frontend
  { name: 'React.js', level: 95, color: '#61dafb', category: 'Frontend' },
  { name: 'Angular', level: 90, color: '#dd0031', category: 'Frontend' },
  { name: 'TypeScript', level: 92, color: '#3178c6', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, color: '#06b6d4', category: 'Frontend' },
  { name: 'HTML5 & SCSS', level: 92, color: '#e34f26', category: 'Frontend' },
  { name: 'Web Accessibility (WCAG)', level: 88, color: '#10b981', category: 'Frontend' },
  { name: 'Material UI & Bootstrap', level: 85, color: '#007fff', category: 'Frontend' },

  // State & Performance
  { name: 'Redux Toolkit', level: 92, color: '#764abc', category: 'State & Performance' },
  { name: 'Performance Optimization (Memoization & Lazy Loading)', level: 94, color: '#10b981', category: 'State & Performance' },
  { name: 'WebSockets (Real-Time)', level: 90, color: '#3b82f6', category: 'State & Performance' },
  { name: 'RESTful APIs', level: 94, color: '#8b5cf6', category: 'State & Performance' },
  { name: 'Microsoft Teams SDK', level: 88, color: '#5b5fc7', category: 'State & Performance' },
  { name: 'GraphQL', level: 80, color: '#e535ab', category: 'State & Performance' },
  { name: 'Azure AD / MSAL', level: 82, color: '#008ad7', category: 'State & Performance' },

  // UI/UX & Tools
  { name: 'Figma UI/UX Design', level: 90, color: '#f24e1e', category: 'UI/UX & Tools' },
  { name: 'Design Systems', level: 92, color: '#a855f7', category: 'UI/UX & Tools' },
  { name: 'Git & GitHub', level: 90, color: '#f05032', category: 'UI/UX & Tools' },
  { name: 'Vite & Webpack', level: 88, color: '#646cff', category: 'UI/UX & Tools' },
  { name: 'Jest & Unit Testing', level: 82, color: '#c21325', category: 'UI/UX & Tools' },
  { name: 'CI/CD Pipelines', level: 80, color: '#38bdf8', category: 'UI/UX & Tools' },

  // Backend & AI
  { name: 'Python', level: 85, color: '#3776ab', category: 'Backend & AI' },
  { name: 'BPMN Workflow Automation', level: 88, color: '#f59e0b', category: 'Backend & AI' },
  { name: 'Google AI & Prompting', level: 86, color: '#4285f4', category: 'Backend & AI' },
  { name: 'Node.js', level: 80, color: '#3c873a', category: 'Backend & AI' },
  { name: 'PostgreSQL & MySQL', level: 78, color: '#336791', category: 'Backend & AI' },
  { name: '.NET & Java (CRUD APIs)', level: 75, color: '#512bd4', category: 'Backend & AI' },
]

const categories = ['All', 'Frontend', 'State & Performance', 'UI/UX & Tools', 'Backend & AI'] as const

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-5 cursor-default select-none group"
      whileHover={{
        borderColor: `${skill.color}50`,
        boxShadow: `0 0 30px ${skill.color}15`,
      }}
    >
      {/* Category tag */}
      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] block mb-2">
        {skill.category}
      </span>

      {/* Title & percentage */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-white font-semibold text-sm group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-[#94a3b8]">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 + index * 0.02, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})` }}
        />
      </div>

      {/* Glow on hover */}
      {hovered && (
        <div
          className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
        />
      )}
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All')

  const filteredSkills = activeTab === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeTab)

  return (
    <section id="skills" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          number="02 —"
          title="Technical Skills"
          subtitle="Specialized in frontend architectures, real-time telemetry, design systems, and modern web frameworks."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                  : 'bg-[#0f0f0f] border border-white/[0.08] text-[#94a3b8] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

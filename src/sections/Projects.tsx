import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { ArrowRight, Activity, ShieldCheck, Cpu, Plane, Gauge } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'User Monitor Application',
    subtitle: 'Real-time monitoring & Microsoft Teams embedded workflows',
    description:
      'Designed end-to-end UI/UX in Figma and developed a real-time monitoring application using React and TypeScript. Engineered modular components with custom hooks and WebSocket streaming for concurrent sessions, and integrated Microsoft Teams SDK for direct in-app monitoring.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Microsoft Teams SDK', 'Figma'],
    color: '#3b82f6',
    icon: Activity,
    gradient: 'from-[#3b82f6]/20 to-[#8b5cf6]/10',
    accentGradient: 'from-[#3b82f6] to-[#8b5cf6]',
    stats: [
      { label: 'Latency', value: '<50ms' },
      { label: 'Platform', value: 'Teams + Web' },
      { label: 'Sessions', value: 'Concurrent' },
    ],
    highlights: [
      'Engineered WebSocket hooks for live status streams',
      'Designed end-to-end high-fidelity UI/UX in Figma',
      'Embedded natively into Microsoft Teams client',
    ],
  },
  {
    id: 2,
    title: 'Banking Application Modernization',
    subtitle: 'Legacy Oracle UI modernization with React, Angular & RBAC',
    description:
      'Modernized a mission-critical Oracle-based banking application, migrating core UI modules to React and Angular. Built account dashboards, transaction history, and fund transfers with Role-Based Access Control (RBAC). Applied Redux Toolkit, memoization, lazy loading, and code-splitting.',
    tags: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs', 'Oracle'],
    color: '#10b981',
    icon: ShieldCheck,
    gradient: 'from-[#10b981]/20 to-[#06b6d4]/10',
    accentGradient: 'from-[#10b981] to-[#06b6d4]',
    stats: [
      { label: 'Architecture', value: 'RBAC' },
      { label: 'State Flow', value: 'Redux RTK' },
      { label: 'Load Time', value: '-60%' },
    ],
    highlights: [
      'Account dashboards, fund transfers & audit trails',
      'Secured with granular Role-Based Access Control',
      'Significant page load reduction via lazy loading & memoization',
    ],
  },
  {
    id: 3,
    title: 'AI Workflow Automation Platform',
    subtitle: 'BPMN visual workflow design engine in Angular',
    description:
      'Engineered a scalable Angular UI for an AI automation platform featuring BPMN-based drag-and-drop workflow design, allowing non-technical users to build automations without code. Implemented dynamic node configuration panels, dynamic forms, and real-time execution-status views.',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'BPMN', 'REST APIs', 'AI Workflows'],
    color: '#8b5cf6',
    icon: Cpu,
    gradient: 'from-[#8b5cf6]/20 to-[#ec4899]/10',
    accentGradient: 'from-[#8b5cf6] to-[#ec4899]',
    stats: [
      { label: 'Design Type', value: 'No-Code' },
      { label: 'Engine', value: 'BPMN 2.0' },
      { label: 'Config', value: 'Dynamic' },
    ],
    highlights: [
      'Interactive visual canvas with BPMN workflow orchestration',
      'Dynamic form rendering for multi-step AI parameters',
      'Real-time execution status tracking and telemetry',
    ],
  },
  {
    id: 4,
    title: 'Travel Request Management System',
    subtitle: 'Enterprise travel approval with Azure AD / MSAL SSO',
    description:
      'Created a comprehensive React & TypeScript application automating corporate travel requests from initial submission through DHR, portfolio, and cost approval to ticket issuance. Integrated Azure AD/MSAL for Single Sign-On and designed a streamlined multi-tier approval interface.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Azure AD / MSAL', 'Multi-Stage Approval'],
    color: '#06b6d4',
    icon: Plane,
    gradient: 'from-[#06b6d4]/20 to-[#3b82f6]/10',
    accentGradient: 'from-[#06b6d4] to-[#3b82f6]',
    stats: [
      { label: 'Auth', value: 'Azure MSAL' },
      { label: 'Process', value: 'Automated' },
      { label: 'Tiers', value: 'Multi-stage' },
    ],
    highlights: [
      'Replaced slow email approvals with automated tracking',
      'Enterprise single sign-on via Azure AD / MSAL',
      'Status notifications, approval logs, and ticket delivery',
    ],
  },
  {
    id: 5,
    title: 'Automated Testing Orchestration Platform',
    subtitle: 'High-frequency telemetry & VM provisioning dashboard',
    description:
      'Built a responsive Angular dashboard for provisioning virtual machines, executing automated test suites, and tracking call schedules. Engineered reusable charting components for high-frequency telemetry tracking CPU, memory, storage, and network utilization in real time.',
    tags: ['TypeScript', 'Angular', 'Tailwind CSS', 'Charting Libraries', 'REST APIs', 'Telemetry'],
    color: '#f59e0b',
    icon: Gauge,
    gradient: 'from-[#f59e0b]/20 to-[#ef4444]/10',
    accentGradient: 'from-[#f59e0b] to-[#ef4444]',
    stats: [
      { label: 'Telemetry', value: 'Real-Time' },
      { label: 'Metrics', value: 'High-Freq' },
      { label: 'Provisioning', value: 'VM Auto' },
    ],
    highlights: [
      'High-performance charts for dense CPU/memory/network streams',
      'Automated test scenario runner and call scheduler',
      'Live execution log viewers and metric export',
    ],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group rounded-2xl border border-white/[0.08] bg-[#0f0f0f] overflow-hidden cursor-default flex flex-col justify-between"
      style={{
        boxShadow: hovered ? `0 0 50px ${project.color}15` : undefined,
        borderColor: hovered ? `${project.color}35` : undefined,
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accentGradient}`} />

      {/* Subtle background glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${project.color}18`, border: `1px solid ${project.color}30` }}
              >
                <Icon size={18} style={{ color: project.color }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#94a3b8] mt-0.5">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-6">
            {project.highlights.map(h => (
              <div key={h} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                <span style={{ color: project.color }} className="mt-0.5 shrink-0">▹</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6">
            {project.stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-white font-bold text-sm" style={{ color: project.color }}>
                  {stat.value}
                </div>
                <div className="text-[#64748b] text-[10px] uppercase font-mono tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#94a3b8]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive footer */}
          <div
            className="flex items-center gap-2 text-xs font-semibold pt-3 border-t border-white/[0.06] transition-all duration-200"
            style={{ color: project.color }}
          >
            Enterprise Production Delivery
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          number="03 —"
          title="Featured Projects"
          subtitle="Enterprise platforms, real-time dashboards, and automation systems delivered to production."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { Briefcase, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react'

const milestones = [
  {
    type: 'work',
    period: 'Feb 2023 – Present',
    role: 'Programmer (Frontend Developer)',
    organization: 'Kumaran Systems',
    location: 'Chennai, India',
    badge: 'Full-Time',
    color: '#3b82f6',
    description:
      'Lead frontend engineering on high-stakes enterprise projects, building real-time dashboards, banking modernization modules, and AI workflow interfaces across React.js, Angular, and TypeScript.',
    points: [
      'Engineered reusable React.js and Angular UI components adopted across multiple enterprise applications, cutting duplicate frontend code and speeding up feature delivery.',
      'Delivered real-time monitoring dashboards and analytics interfaces powered by WebSockets, giving internal teams live visibility into system performance, resource utilization, and operational metrics.',
      'Automated Teams-embedded workflows by integrating REST APIs and Microsoft Teams SDK, streamlining status tracking and cutting down manual follow-ups for end users.',
      'Boosted frontend performance on a banking application UI by applying Redux Toolkit, memoization, lazy loading, and code-splitting, reducing initial page load time by 60%.',
      'Partnered with designers, backend engineers, and stakeholders across Agile/Scrum sprints to turn Figma designs and business requirements into accessible (WCAG), production-ready interfaces.',
    ],
    tech: [
      'React.js',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'WebSockets',
      'MS Teams SDK',
      'Figma',
      'Agile/Scrum',
    ],
  },
  {
    type: 'education',
    period: '2019 – 2023',
    role: 'B.Tech / B.E. in Computer Science and Engineering',
    organization: 'Nandha Engineering College',
    location: 'Erode, Tamil Nadu, India',
    badge: 'Graduated',
    color: '#8b5cf6',
    description:
      'Rigorous academic foundation in data structures, algorithms, object-oriented programming, database management, and computer networks. Graduated with strong practical foundations in web technologies.',
    points: [
      'Specialized in Web Application Engineering, Database Systems & UI Design.',
      'Completed multiple academic and independent software projects using JavaScript, React, and databases.',
      'Active participant in technical symposiums, hackathons, and software clubs.',
    ],
    tech: ['Data Structures', 'Web Development', 'Algorithms', 'DBMS', 'Software Engineering'],
  },
]

const awards = [
  {
    title: 'Best Team Player Award',
    org: 'Kumaran Systems',
    desc: 'Recognized for consistently meeting delivery timelines ahead of schedule across multi-functional sprint teams.',
    color: '#3b82f6',
  },
  {
    title: 'Extra Go-Mile Award',
    org: 'Kumaran Systems',
    desc: 'Recognized for rapid learning ability, proactive problem solving, and exceptional delivery on complex tasks.',
    color: '#8b5cf6',
  },
  {
    title: 'Commitment, Punctuality & Attendance',
    org: 'Kumaran Systems',
    desc: 'Honored for steadfast reliability, discipline, and sustained contribution to overall team productivity.',
    color: '#10b981',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          number="04 —"
          title="Experience & Education"
          subtitle="My professional journey, enterprise milestones, and continuous growth."
        />

        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent hidden md:block" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-16"
              >
                {/* Timeline node */}
                <div
                  className="hidden md:flex absolute left-[15px] top-6 w-5 h-5 rounded-full border-2 border-[#050505] items-center justify-center"
                  style={{ backgroundColor: item.color, outline: `2px solid ${item.color}40`, outlineOffset: '2px' }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-6 md:p-8 hover:border-white/[0.18] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === 'work' ? (
                          <Briefcase size={16} style={{ color: item.color }} />
                        ) : (
                          <GraduationCap size={16} style={{ color: item.color }} />
                        )}
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      </div>
                      <p className="text-[#94a3b8] font-medium text-sm flex items-center gap-2">
                        <span>{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#64748b]">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.period}
                      </span>
                      <span className="text-xs text-[#64748b]">{item.badge}</span>
                    </div>
                  </div>

                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-6">
                    {item.points.map(pt => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                        <CheckCircle2 size={15} style={{ color: item.color }} className="shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {item.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg border border-white/[0.06] bg-white/[0.02] text-[#94a3b8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kumaran Systems Awards Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-transparent p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-amber-400" size={22} />
            <h4 className="text-lg font-bold text-white">Kumaran Systems Corporate Recognition</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {awards.map(award => (
              <div
                key={award.title}
                className="p-4 rounded-xl border border-white/[0.06] bg-[#050505]/60 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400/90 block mb-1">
                    {award.org}
                  </span>
                  <h5 className="text-white font-semibold text-sm mb-1.5">{award.title}</h5>
                  <p className="text-[#64748b] text-xs leading-relaxed">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

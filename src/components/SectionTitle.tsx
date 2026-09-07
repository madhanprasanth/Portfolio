import { motion } from 'framer-motion'

interface SectionTitleProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <span className="text-sm font-mono text-[#3b82f6] tracking-widest uppercase mb-3 block">
        {number}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#94a3b8] text-lg max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" />
        <div className="h-px w-4 bg-[#1e293b]" />
      </div>
    </motion.div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ExternalLink, Send, ArrowUpRight, MapPin, CheckCircle2, Copy } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'madhanetet@gmail.com',
    href: 'mailto:madhanetet@gmail.com',
    color: '#3b82f6',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8248022176',
    href: 'tel:+918248022176',
    color: '#10b981',
    copyable: true,
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/madhanprasanth-p-566601264',
    href: 'https://linkedin.com/in/madhanprasanth-p-566601264/',
    color: '#0ea5e9',
    copyable: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: 'https://maps.google.com/?q=Chennai,India',
    color: '#f59e0b',
    copyable: false,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Madhanprasanth,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    )
    window.location.href = `mailto:madhanetet@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2500)
  }

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, #3b82f6)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-[#3b82f6] tracking-widest uppercase mb-4 block">
            06 — Contact
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
            Let's build something{' '}
            <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto">
            Whether you are looking to build real-time dashboards, modernize legacy architectures, or design AI interfaces — let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-3.5"
          >
            <h3 className="text-white font-semibold text-lg mb-1">Direct Channels</h3>

            {contactItems.map(item => (
              <div
                key={item.label}
                className="group relative flex items-center justify-between p-4 rounded-2xl border border-white/[0.08] bg-[#0f0f0f] hover:border-white/[0.18] hover:bg-[#121212] transition-all duration-300"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-[#cbd5e1] group-hover:text-white transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>

                {item.copyable ? (
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    title={`Copy ${item.label}`}
                    className="ml-2 p-2 rounded-lg text-[#64748b] hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    {copiedText === item.label ? (
                      <span className="text-xs text-emerald-400 font-mono">Copied!</span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                ) : (
                  <ArrowUpRight
                    size={14}
                    className="ml-2 text-[#64748b] group-hover:text-white transition-all shrink-0"
                  />
                )}
              </div>
            ))}

            {/* Current Status Badge */}
            <div className="mt-2 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Frontend Opportunities
              </div>
              <p className="text-[#94a3b8] text-xs mt-1.5 leading-relaxed">
                Full-Time roles, React/Angular consulting, and scalable frontend architecture.
              </p>
            </div>
          </motion.div>

          {/* Quick Message Form */}
          <motion.form
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-8 flex flex-col gap-5 justify-between"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Send a Message</h3>
              <p className="text-xs text-[#64748b] mb-6">
                Fill this out to draft a message directly to madhanetet@gmail.com
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-[#64748b] mb-1.5 font-mono uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="e.g. Alex Johnson"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-[#3b82f6]/60 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#64748b] mb-1.5 font-mono uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="alex@company.com"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-[#3b82f6]/60 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#64748b] mb-1.5 font-mono uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Hi Madhanprasanth, I'd like to discuss a frontend role or project..."
                    className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-[#3b82f6]/60 transition-all duration-200 resize-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
            >
              {sent ? (
                <span className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} /> Opening your email client...
                </span>
              ) : (
                <>
                  Draft Email to Madhanprasanth
                  <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#64748b] text-xs sm:text-sm"
        >
          <p>© {new Date().getFullYear()} Madhanprasanth Palanisamy. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with React, TypeScript & Tailwind CSS • Chennai, India
          </p>
        </motion.div>
      </div>
    </section>
  )
}

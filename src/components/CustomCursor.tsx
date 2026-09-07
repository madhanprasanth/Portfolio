import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(
        el.closest('a, button, [data-cursor-hover]') !== null
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  // Smooth trail using requestAnimationFrame
  useEffect(() => {
    let animId: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      setTrail(prev => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }))
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [pos])

  return (
    <>
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
          x: trail.x - (hovering ? 28 : 20),
          y: trail.y - (hovering ? 28 : 20),
          background: hovering
            ? 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          border: `1px solid ${hovering ? 'rgba(139,92,246,0.5)' : 'rgba(59,130,246,0.4)'}`,
          transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
        }}
      />
      {/* Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          width: clicking ? 3 : 5,
          height: clicking ? 3 : 5,
          transform: `translate(${pos.x - (clicking ? 1.5 : 2.5)}px, ${pos.y - (clicking ? 1.5 : 2.5)}px)`,
          transition: 'width 0.1s, height 0.1s',
        }}
      />
    </>
  )
}

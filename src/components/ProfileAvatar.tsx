import { useState } from 'react'

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showStatus?: boolean
}

export default function ProfileAvatar({
  size = 'lg',
  className = '',
  showStatus = true,
}: ProfileAvatarProps) {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-32 sm:h-32',
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Glow Halo */}
      <div
        className="absolute -inset-1 rounded-full opacity-60 blur-md pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
        }}
      />

      {/* Rotating / Gradient Border Ring */}
      <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#8b5cf6] to-[#06b6d4] shadow-[0_0_20px_rgba(139,92,246,0.3)]">
        <div
          className={`${sizeClasses[size]} rounded-full overflow-hidden bg-[#0a0a0a] relative flex items-center justify-center`}
        >
          {!imageError ? (
            <img
              src="/avatar.png"
              alt="Madhanprasanth Palanisamy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#12121e] to-[#0a0a14] text-white select-none font-black text-sm tracking-tighter text-gradient">
              MP
            </div>
          )}
        </div>

        {/* Live Status Indicator */}
        {showStatus && (
          <div
            className="absolute bottom-0 right-0 flex items-center justify-center"
            title="Available for work"
          >
            <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#050505]" />
          </div>
        )}
      </div>
    </div>
  )
}

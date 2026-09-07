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
    sm: 'w-14 h-14',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Glow Halo */}
      <div
        className="absolute -inset-1 rounded-full opacity-70 blur-lg pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
        }}
      />

      {/* Rotating / Gradient Border Ring */}
    
    </div>
  )
}


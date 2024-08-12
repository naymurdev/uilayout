import { ArrowBigRight } from 'lucide-react'
import React, { useRef } from 'react'

const GlowButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    button.style.setProperty('--x', `${x}px`)
    button.style.setProperty('--y', `${y}px`)
  }

  return (
    <button
      ref={buttonRef}
      className="relative px-9 py-2 text-black bg-white rounded-full  transition-colors duration-300  group"
      onMouseMove={handleMouseMove}
    >
      <span className="relative z-10">Try it free</span>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"
        style={{
          background:
            'radial-gradient(circle 5rem at var(--x, 50%) var(--y, 50%), rgba(19, 34, 255, 0.8), transparent)',
        }}
      />
    </button>
  )
}

export default GlowButton

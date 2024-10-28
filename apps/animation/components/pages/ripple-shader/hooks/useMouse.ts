import { useState, useEffect } from 'react'

export default function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: number }) {
      // Get the canvas element
      const canvas = document.querySelector('canvas')
      if (!canvas) return

      // Get canvas bounds
      const rect = canvas.getBoundingClientRect()

      // Calculate mouse position relative to canvas
      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mouse
}

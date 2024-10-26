'use client'
import { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import { cn } from '@/lib/utils'

interface ParallaxProps {
  children: string
  baseVelocity: number
  clasname?: string
  scrollDependent?: boolean // Toggle scroll-dependent behavior
  delay?: number // Delay before animation starts
}

export default function ScrollBaseAnimation({
  children,
  baseVelocity = -5,
  clasname,
  scrollDependent = false, // Default to false
  delay = 0, // Default delay is 0 (no delay)
}: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  const hasStarted = useRef(false) // Track animation start status

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true // Start animation after the delay
    }, delay)

    return () => clearTimeout(timer) // Cleanup on unmount
  }, [delay])

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return // Skip if delay hasn't passed

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    // Reverse direction if scrollDependent is true
    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap gap-10 flex-nowrap"
        style={{ x }}
      >
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
      </motion.div>
    </div>
  )
}

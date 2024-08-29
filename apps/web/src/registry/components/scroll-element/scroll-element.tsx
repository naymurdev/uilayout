import { cn } from '@/lib/utils'
import {
  motion,
  HTMLMotionProps,
  SVGMotionProps,
  ForwardRefComponent,
  Variant,
  useAnimation,
} from 'framer-motion'
import React from 'react'
type Direction = 'up' | 'down' | 'left' | 'right'

const generateVariants = (
  direction: Direction
): { hidden: Variant; visible: Variant } => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const value = direction === 'right' || direction === 'down' ? 100 : -100

  return {
    hidden: { filter: 'blur(10px)', opacity: 0, [axis]: value },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
}
const defaultVariants = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    duration: 2,
    transition: {
      delay: 0, // Adjust delay here
    },
  },
}

const defaultViewport = { amount: 0.3, margin: '0px 0px -200px 0px' }
type MotionComponentProps = HTMLMotionProps<any> & SVGMotionProps<any>

interface ScrollElementProps extends Omit<MotionComponentProps, 'children'> {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
  variants?: {
    hidden?: any
    visible?: any
  }
  viewport?: {
    amount?: number
    margin?: string
    once?: boolean
  }
  delay?: number
  direction?: Direction
}

function ScrollElement({
  children,
  as = 'h1',
  className,
  variants,
  viewport = defaultViewport,
  delay = 0, // Default delay is 0
  direction = 'down',
  ...rest
}: ScrollElementProps) {
  const controls = useAnimation()
  const MotionComponent = motion[
    as as keyof typeof motion
  ] as ForwardRefComponent<HTMLElement, MotionComponentProps>

  const baseVariants = variants || generateVariants(direction)
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...baseVariants.visible.transition,
        delay, // Apply custom delay here
      },
    },
  }

  // Handle self-closing tags differently
  if (['img', 'input', 'br', 'hr', 'meta', 'link', 'source'].includes(as)) {
    return (
      <MotionComponent
        whileInView="visible"
        initial="hidden"
        variants={modifiedVariants}
        viewport={viewport}
        className={cn(className)}
        {...rest}
      />
    )
  }

  return (
    <MotionComponent
      whileInView="visible"
      initial="hidden"
      variants={modifiedVariants}
      viewport={viewport}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
export default ScrollElement

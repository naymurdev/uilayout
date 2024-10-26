'use client'

import { cn } from '@/lib/utils'
import { AnimatedBeam, Circle } from '../beam'
import React, { forwardRef, useRef } from 'react'
import { Icons } from '@/components/home/home-animated-beam'

export default function index() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex h-full w-full max-w-[32rem] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div2Ref} className="p-2">
            <Icons.tailwindcss />
          </Circle>
          <Circle ref={div3Ref} className="p-2">
            <Icons.gsap />
          </Circle>
          <Circle ref={div4Ref} className="p-2">
            <Icons.reactjs />
          </Circle>
          <Circle ref={div5Ref} className="p-2">
            <Icons.framer />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Icons.logo />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        dotted
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        dotted
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
        dotted
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        dotted
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
        dotSpacing={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        dotted
        dotSpacing={6}
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        dotted
        dotSpacing={6}
      />
    </div>
  )
}

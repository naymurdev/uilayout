'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef, useRef } from 'react';
import { AnimatedBeam, Circle } from '@/components/core/animated-beam';
import { Icons } from '@/components/core/animated-beam';

export default function index({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl',
        className
      )}
      ref={containerRef}
    >
      <div className='flex h-full w-full flex-row items-stretch justify-between gap-10'>
        <div className='flex flex-col justify-center'>
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle ref={div6Ref} className='h-16 w-16'>
            <Icons.logo />
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <Circle ref={div1Ref}>
            <Icons.typescript />
          </Circle>
          <Circle className='p-2' ref={div2Ref}>
            <Icons.tailwindcss />
          </Circle>
          <Circle className='p-2' ref={div3Ref}>
            <Icons.nextjs />
          </Circle>
          <Circle className='p-2' ref={div4Ref}>
            <Icons.reactjs />
          </Circle>
          <Circle className='p-2' ref={div5Ref}>
            <Icons.framer />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

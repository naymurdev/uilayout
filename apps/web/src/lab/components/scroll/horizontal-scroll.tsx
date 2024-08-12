'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { items } from '@/components/common/constant'

function HorizontalScrollCarousel() {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['start start', 'end end'],
  })

  // Transform for all items
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-100%`])

  return (
    <>
      <div className="">
        <div
          ref={scrollTargetRef}
          className="relative h-[600vh] bg-neutral-900"
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-2">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative h-[70vh] w-[450px] overflow-hidden bg-neutral-200"
                >
                  <motion.img
                    key={item.id}
                    className="w-full flex-shrink-0 h-full object-cover"
                    src={item?.url}
                    alt={item?.title}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    </>
  )
}

export default HorizontalScrollCarousel

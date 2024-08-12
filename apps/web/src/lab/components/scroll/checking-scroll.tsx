// @ts-nocheck
'use client'

import { useTransform, useViewportScroll, motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'

export default function CheckingScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY, scrollYProgress } = useViewportScroll()

  // useTransform(motionValue, from, to);
  const x = useTransform(scrollYProgress, [0, 1], ['10%', `0%`])

  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop

    const offsetStart = rect.top + scrollTop
    const offsetEnd = offsetTop + rect.height

    const elementScrollStart = offsetStart / document.body.clientHeight
    const elementScrollEnd = offsetEnd / document.body.clientHeight

    // to be continued
  })

  // Adding a new div as an "anchor" in case motion.div
  // has other transforms that affect its position on the page
  return (
    <div ref={ref}>
      <motion.div
        style={{
          x,
        }}
      >
        <h1 className=" text-[40rem]">HEllo</h1>
      </motion.div>
    </div>
  )
}

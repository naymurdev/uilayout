import React, { useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronsRight, Github } from 'lucide-react'
import { FaTwitter } from 'react-icons/fa6'

function TimelineAnimation() {
  const aboutRef = useRef(null)
  const heroRef = useRef(null)
  return (
    <>
      <section className="sm:grid grid-cols-2 gap-10 h-screen" ref={heroRef}>
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            src="https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96  object-cover rounded-md "
            alt=""
          />
        </TimelineContent>
        <div className="space-y-2">
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className="text-5xl leading-[110%]">
              Why you need to start it?
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className="text-xl leading-[110%]">
              There's no valid reason, I just need more star in my repo, please
              do it guys 😁
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
              href="https://github.com/naymurdev"
              target="_blank"
            >
              <Github />
              Start it Now
            </a>
          </TimelineContent>
        </div>
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <div className="space-y-2">
          {' '}
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className="text-5xl leading-[110%]">Follow me on X/Twitter?</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-xl leading-[110%]">
              There's no valid reason, I just need more follower, please do it
              guys😍
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={aboutRef}>
            <a
              className="flex gap-2 items-center w-fit bg-gray-800 rounded-md p-2"
              href="https://x.com/naymur_dev"
              target="_blank"
            >
              <FaTwitter /> Follow
            </a>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src="https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96  object-cover rounded-md "
            alt=""
          />
        </TimelineContent>
      </section>
    </>
  )
}

export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
}: {
  children: React.ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLDivElement>
}) => {
  const sequenceVariants = {
    visible: (i: number) => ({
      filter: 'blur(0px)',

      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3, // Delay each item by 0.5s multiplied by its index
        duration: 0.5, // Duration of the blur removal
      },
    }),
    hidden: {
      filter: 'blur(20px)',
      y: 0,
      opacity: 0,
    },
  }
  const isInView = useInView(timelineRef, {
    once: false,
    // margin: '0px 0px 400px 0px',
  })
  return (
    <>
      <>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={animationNum}
          variants={sequenceVariants}
        >
          {children}
        </motion.div>
      </>
    </>
  )
}
export default TimelineAnimation

import { motion, AnimatePresence, useInView } from 'framer-motion'

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

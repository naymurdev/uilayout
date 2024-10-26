'use client'
import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const content: {
  title: string
  description: string
  content?: React.ReactNode | any
}[] = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <Image
        src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/regis-hari-bouchard-ZjViL8qxihM-unsplash_hwrmgb.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <Image
        src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415908/imani-bahati-LxVxPA1LOVM-unsplash_azbuyv.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <Image
        src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415908/usama-akram-s-gYAbQToXk-unsplash_zdsntx.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
]

const StickyCardScroll = () => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ['#363636', '#353535', '#020202']
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]
  return (
    <>
      <main className="bg-black">
        <section className="text-white   w-full bg-slate-950  ">
          <div className="flex justify-between px-16">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Progressive Carousel
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/progressive-carousel"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                What We <br /> Have Now😎
              </h1>
            </div>
          </div>
        </section>
      </main>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="flex relative justify-center  space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div className="wrapper  sticky top-0 h-screen">
          <motion.div
            animate={{
              background: linearGradients[activeCard % linearGradients.length],
            }}
            className={cn('h-60 w-80  rounded-md bg-whit eoverflow-hidden')}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </motion.div>
      <div className="h-screen"></div>
    </>
  )
}
export default StickyCardScroll

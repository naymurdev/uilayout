'use client'
import React, { SetStateAction } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import preview from '@/assets/preview'
import Image from 'next/image'
const items = [
  {
    id: '5',
    url: preview.carousel,
    title: 'Aniamted Carousel',
    description:
      'A carousel that is handy to use in your design and easy for users to interact with.',
  },

  {
    id: '7',
    url: preview.galleryNew,
    title: 'Image Accordion',
    description:
      "You've already interacted with the image accordion, haven't you? Isn't it nice? Did you see the animation?",
  },
  {
    id: '8',
    url: preview.globe,
    title: 'Animated Globe',
    description:
      "Next-Gen Globe for Dark Theme Websites: Don't add a drag feature as it will cause performance issues.",
  },

  {
    id: '6',
    url: preview.grid,
    title: 'Bento Grid',
    description:
      "If you've noticed, you'll see I'm using a bento grid on this home page. How is it? I have more like this.",
  },
]
const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'linear',
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
}

type item = {
  id: string
  url: string
  title: string
  description: string
  tags?: string[]
}
interface GaleryProps {
  items: item[]
  setIndex: React.Dispatch<SetStateAction<number>>
  index: number | undefined
}
function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <div className="w-full mx-auto gap-1 flex justify-center  p-4 ">
      {items.map((item: item, i: number) => {
        return (
          <motion.div
            className={`rounded-xl relative ${
              index === i ? '2xl:w-[70%] w-[70%]' : '2xl:w-[9%] w-[7%]'
            }  lg:h-[360px] md:h-[300px] h-[270px]  flex-shrink-0 border dark:bg-gray-800 bg-[#ffffff]  transition-[width] ease-in-linear duration-500 origin-center  `}
            key={i}
            onClick={() => {
              setIndex(i)
            }}
          >
            <Image
              src={item?.url}
              alt="image-accordion"
              width={600}
              height={600}
              className={`${
                index === i
                  ? 'cursor-default object-contain'
                  : 'cursor-pointer object-cover'
              } w-full rounded-xl  h-full   `}
            />
            <AnimatePresence mode="wait">
              {index === i && (
                <motion.article className="absolute flex rounded-xl  flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-gradient-to-t dark:from-gray-900/60 from-gray-300/60  from-20% to-transparent to-80% ">
                  <motion.div
                    variants={article}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.h1
                      variants={article}
                      className="md:text-xl text-base font-semibold"
                    >
                      {item?.title}
                    </motion.h1>
                    <motion.p
                      variants={article}
                      className="leading-[120%] md:text-sm text-xs font-normal"
                    >
                      {item?.description}
                    </motion.p>
                  </motion.div>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function HomeImageAccordion() {
  const [index, setIndex] = useState(2)

  return (
    <div className="relative w-full">
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  )
}

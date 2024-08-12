'use client'
import React, { SetStateAction } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const items = [
  {
    id: '5',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714402002623-86d68590c545_eyrfna.jpg',
    title: 'Snow-Capped Serenity',
    description:
      'Snow blankets the high mountain peaks, offering a serene and pristine white canvas against the crisp blue sky.',
    tags: ['Snow-Capped', 'Serenity', 'Pristine', 'Blue Sky', 'High Peaks'],
  },

  {
    id: '7',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1712313242836-3ae9c1fd6767_ynpin3.jpg',
    title: 'Verdant Valley Vista',
    description:
      'A lush green valley nestled between mountains, bathed in the warm light of a setting sun, offering a tranquil retreat.',
    tags: ['Verdant', 'Valley', 'Vista', 'Tranquil', 'Sunset'],
  },
  {
    id: '8',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714523479594-13c0bb72fcf3_n85lma.jpg',
    title: 'Rocky Ridges',
    description:
      'The rugged ridges of the mountain form a stark contrast against the soft clouds above, embodying the spirit of adventure.',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },

  {
    id: '6',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1713223289172-e45b0ed96eae_cdizhk.jpg',
    title: 'Floral Highlands',
    description:
      'Amidst the rugged mountainous terrain, bursts of wildflowers add a splash of color, showcasing nature’s resilience.',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },
  {
    id: '9',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
    title: 'Twilight Peaks',
    description:
      'As twilight descends, the peaks of the mountains are silhouetted against a gradient evening sky, creating a peaceful end to the day.',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },
]
const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
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
    <div className="w-fit mx-auto gap-1 flex pb-20 pt-10 ">
      {items.map((item: item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl relative ${
              index === i ? 'w-[450px] ' : 'w-[50px]'
            } h-[400px] flex-shrink-0  transition-[width] ease-in-linear duration-500 origin-center  `}
            key={i}
            onClick={() => {
              setIndex(i)
            }}
          >
            <motion.img
              src={item?.url}
              className={`${
                index === i ? 'cursor-default' : 'cursor-pointer'
              } w-full rounded-xl  h-full object-cover `}
            />
            <AnimatePresence mode="wait">
              {index === i && (
                <motion.article
                  variants={article}
                  initial="hidden"
                  animate="show"
                  className="absolute flex rounded-xl  flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-gradient-to-t dark:from-gray-900/60 from-gray-100/60  from-20% to-transparent to-80% "
                >
                  <motion.h1
                    variants={article}
                    className="text-2xl font-semibold"
                  >
                    {item?.title}
                  </motion.h1>
                  <motion.p variants={article} className="leading-[120%]">
                    {item?.description}
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function index() {
  const [index, setIndex] = useState(2)

  return (
    <div className="relative">
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  )
}

'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/common/header'

const letters = [
  { word: 'S', emoji: '', id: 0 },
  { word: 'T', emoji: '', id: 1 },
  { word: 'I', emoji: '', id: 2 },
  { word: 'L', emoji: '', id: 3 },
  { word: 'L', emoji: '', id: 4 },
  { word: 'C', emoji: '', id: 5 },
  { word: 'O', emoji: '', id: 6 },
  { word: 'O', emoji: '', id: 7 },
  { word: 'K', emoji: '', id: 8 },
  { word: 'I', emoji: '', id: 9 },
  { word: 'N', emoji: '', id: 10 },
  { word: 'G', emoji: '', id: 11 },
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="h-screen relative container mx-auto">
        <div className="flex justify-between gap-2 w-full h-full items-center">
          {letters.map((letter, index) => (
            <motion.article
              key={index}
              animate={{
                height: hoveredIndex === index ? '60vh' : '',
              }}
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
              }}
              className="2xl:h-98 h-97 w-full text-[8.2vw] leading-[100%] text-center"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.h1
                animate={{
                  y:
                    hoveredIndex === index
                      ? [-50, -40, -20, -10, 0]
                      : [0, 0, 0, 0, 0],
                  filter:
                    hoveredIndex === index
                      ? ['blur(10px)', 'blur(5px)', 'blur(0px)']
                      : '',
                }}
                transition={{
                  ease: 'linear',
                  stiffness: 700,
                  damping: 30,
                }}
              >
                {letter.word}
              </motion.h1>
              <div className="h-full w-full dark:bg-gray-900 border bg-gray-200"></div>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  )
}

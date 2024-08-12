// @ts-nocheck
'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

type Item = {
  id: string
  imgSrc?: string
  videoSrc?: string
}

const items: Item[] = [
  {
    id: '1',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg',
  },
  {
    id: '2',

    videoSrc:
      'https://res.cloudinary.com/dzl9yxixg/video/upload/v1715679908/nature_w14mmq.mp4',
  },
]

const modal: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            onClick={() => {
              setOpen(true)
              setIndex(i)
            }}
            key={i}
            layoutId={item.id}
            className="overflow-hidden"
          >
            {item?.imgSrc! && (
              <Image
                width={400}
                height={400}
                src={item?.imgSrc!}
                className="bg-white text-black rounded-md w-full cursor-zoom-in"
                alt="img"
              />
            )}
            {item?.videoSrc! && (
              <video
                autoPlay
                muted
                loop
                className="h-full w-full object-cover cursor-zoom-in rounded-sm"
              >
                <source src={item?.videoSrc!} type="video/mp4" />
              </video>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center dark:bg-black/90 bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => {
              setOpen(false)
              setIndex(null)
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              layoutId={items[index]?.id}
              className=" w-fit h-[80%] mx-auto cursor-default"
            >
              {items[index]?.imgSrc && (
                <Image
                  src={items[index]?.imgSrc}
                  width={800}
                  height={800}
                  alt="single-image"
                  className="rounded-md w-full h-full object-contain"
                />
              )}
              {items[index]?.videoSrc && (
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  className="h-full w-full object-cover  rounded-sm"
                >
                  <source src={items[index]?.videoSrc!} type="video/mp4" />
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default modal

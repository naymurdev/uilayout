// @ts-nocheck
'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useMediaQuery } from '@/hooks/use-media-query'

type Item = {
  id: string
  imgSrc?: string
  videoSrc?: string
}

const items: Item[] = [
  {
    id: '1',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1697985189201-293f0ddfc36d_mam2av.jpg',
  },
]

const HomeModal: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1024px)')
  const [index, setIndex] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])
  return (
    <>
      <div className="w-full h-full">
        {items.map((item, i) => (
          <div
            onClick={() => {
              setOpen(true)
              setIndex(i)
            }}
            key={i}
            className=" w-ful h-full"
          >
            <motion.img
              width={800}
              height={800}
              layoutId={item.id}
              src={item?.imgSrc}
              className=" text-black rounded-md w-full h-full cursor-zoom-in object-cover"
              alt="img"
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center dark:bg-black/90 bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => {
              setOpen(false)
              setIndex(null)
            }}
          >
            <motion.div
              onClick={(e) => isDesktop && e.stopPropagation()}
              className={`w-fit h-[80%] mx-auto  ${
                isDesktop ? ' cursor-default' : ' cursor-zoom-out'
              }`}
            >
              {items[index]?.imgSrc && (
                <motion.img
                  layoutId={items[index]?.id}
                  src={items[index]?.imgSrc}
                  width={800}
                  height={800}
                  alt="single-image"
                  className="rounded-md w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default HomeModal

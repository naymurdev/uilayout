import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { items } from '@/components/common/constant'

export interface Item {
  id: number
  url: string
  title: string
}

export interface ImageItemProps {
  item: Item
  index: number | string
  setSelected: (item: Item) => void
}

const variants = {
  hidden: { translateY: 200, opacity: 0 },
  visible: (i: any) => ({
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.03,
    },
  }),
}

export function ImageItem({ item, index, setSelected }: ImageItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.figure
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      animate={isInView && 'visible'}
      ref={ref}
      className="inline-block group w-full rounded-md  relative dark:bg-black bg-white overflow-hidden before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t dark:before:from-gray-900  before:from-gray-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        variants={variants}
        custom={index}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer"
      />
      <div className="flex flex-wrap mt-2 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold ">
        <h1>{item.title}</h1>
      </div>
    </motion.figure>
  )
}

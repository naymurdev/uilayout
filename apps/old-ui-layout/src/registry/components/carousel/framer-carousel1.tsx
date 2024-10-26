// @ts-nocheck
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Image from 'next/image'
type Item = {
  id: string
  imgSrc: string
  title: string
  description: string
}

const items: Item[] = [
  {
    id: '1',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1697985189201-293f0ddfc36d_mam2av.jpg',
    title: 'Sunrise Splendor',
    description:
      'The first light of day illuminates the rugged peaks, casting a golden glow over the scenic landscape.',
  },
  {
    id: '2',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714566083/maria-fernanda-pissioli-DTZV8WDM1Ho-unsplash_g1appd.jpg',
    title: 'Misty Mountain Pass',
    description:
      'A mysterious, fog-covered path winds through the serene and rugged mountain terrain.',
  },
  {
    id: '3',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558603/one_b9cqx0.jpg',
    title: 'Pathway to Peaks',
    description:
      'A rugged path leads adventurers toward distant mountain peaks, promising breathtaking views and challenging terrain.',
  },
  {
    id: '5',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1713865248397-6a3825850fc7_mh5rxg.jpg',
    title: 'Eagle’s View',
    description:
      'An aerial perspective showcases the breathtaking expanse of the mountain range, revealing nature’s grand design.',
  },
  {
    id: '6',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1713223289172-e45b0ed96eae_cdizhk.jpg',
    title: 'Alpine Twilight',
    description:
      'The last light of the day fades behind the alpine skyline, creating a striking silhouette against the twilight sky.',
  },
  {
    id: '7',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/three_icxa4g.jpg',
    title: 'Winter’s Mantle',
    description:
      'Snow blankets the mountain peaks, transforming the landscape into a pristine winter wonderland.',
  },
]
function FramerCarousel() {
  const [activeItem, setActiveItem] = useState(items[0])
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [carousel])

  return (
    <>
      <motion.div
        layoutId={'activeItems'}
        className="rounded-md w-fit pb-4 gap-2 items-center mx-auto cursor-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <>
          {items.map((tab: any, index) => (
            <>
              <AnimatePresence mode="popLayout" initial={false}>
                {tab.id === activeItem.id && (
                  <motion.figure
                    key={tab?.id}
                    className="dark:bg-gray-900/60 bg-gray-100/60 border  rounded-md p-4 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: 'ease',
                          ease: 'easeInOut',
                          duration: 0.3,
                          delay: 0.2,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          type: 'ease',
                          ease: 'easeInOut',
                          duration: 0.2,
                        },
                      }}
                    >
                      <Image
                        src={activeItem.imgSrc}
                        width={1000}
                        height={1000}
                        alt="preview_img"
                        className=" object-contain h-96  mx-auto rounded-md"
                      />
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            </>
          ))}
        </>
        <motion.div className="w-[550px] mt-4 mx-auto overflow-hidden   dark:bg-gray-900/60 bg-gray-100/60 border rounded-md">
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex  "
          >
            {items?.map((itemData, index) => {
              return (
                <motion.div
                  className={`relative p-2 flex-shrink-0`}
                  onClick={() => setActiveItem(itemData)}
                >
                  <Image
                    src={itemData?.imgSrc}
                    width={400}
                    height={400}
                    alt="img"
                    className="w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none"
                  />
                  {itemData?.id === activeItem?.id && (
                    <motion.div
                      layoutId="slider"
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: 'easeOut',
                        },
                      }}
                      className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md"
                    ></motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default FramerCarousel

// @ts-nocheck
'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
} from 'framer-motion'
import Image from 'next/image'
import preview from '@/assets/preview'
import { Plus, X } from 'lucide-react'
import { createPortal } from 'react-dom'
const transition = {
  type: 'spring',
  duration: 0.5,
}
function Gallery({ items, setIndex, setOpen, index }) {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [carousel])
  return (
    <motion.div
      ref={carousel}
      drag="x"
      dragElastic={0.2}
      dragConstraints={{ right: 0, left: -width }}
      dragTransition={{ bounceDamping: 30 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="flex w-full  gap-4   py-10"
    >
      {items.map((item, i) => {
        return (
          <motion.article
            layoutId={`dialog-${item?.id}`}
            whileTap={{ scale: 0.95 }}
            key={item}
            tabIndex={item.id}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className={`h-[230px] w-[250px] flex-shrink-0 cursor-pointer border overflow-hidden dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-md relative ${
              index === i ? 'z-[50] ' : ''
            }`}
          >
            <motion.img
              layoutId={`dialog-img-${item.id}`}
              className={`rounded-md h-full w-full object-contain`}
              src={item?.url?.src}
            />
            <motion.div layout="position" layoutId={`dialog-title-${item.id}`}>
              <motion.h1 className="absolute bottom-3 left-2">
                {item?.title}
              </motion.h1>
            </motion.div>

            <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
              <Plus className="w-6 h-6" />
            </button>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
export default function HomeAccordionModal() {
  const [index, setIndex] = useState(5)
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
  const items = [
    {
      id: 1,
      url: preview.galleryNew,
      title: 'Accordion',
      description:
        'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
    {
      id: 2,
      url: preview.globe,
      title: 'Globe Section',
      description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
      tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
    },
    {
      id: 3,
      url: preview.mousetrail,
      title: 'Image Mouse Trail',
      description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
      tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
    },
  ]

  return (
    <div className="relative  h-full ">
      <MotionConfig transition={transition}>
        <div className=" overflow-hidden">
          <Gallery
            items={items}
            index={index}
            setIndex={setIndex}
            setOpen={setOpen}
          />
        </div>

        <AnimatePresence initial={false} mode="sync">
          {open && (
            <motion.div
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              initial="closed"
              animate="open"
              exit="closed"
              tabIndex={-1}
              key={`backdrop-${items[index].id}`}
              className="dark:bg-black/95 bg-white/95 backdrop-blur-sm fixed h-screen z-50 top-0 left-0 bottom-0 right-0 w-full  grid place-content-center 2xl:py-20 pt-10
                "
              onClick={() => {
                setOpen(false)
              }}
            >
              <>
                <motion.div
                  key="dialog"
                  layoutId={`dialog-${items[index].id}`}
                  onClick={(e) => e.stopPropagation()}
                  className=" p-5  sm:w-[600px] w-[80%] mx-auto  relative  overflow-x-hidden  rounded-md cursor-default  dark:bg-gray-950 bg-gray-200 border"
                >
                  <button
                    className="absolute top-2 z-10 right-2 p-2 dark:bg-gray-900 bg-gray-300 hover:bg-gray-400 rounded-full dark:hover:bg-gray-800"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <motion.img
                    layoutId={`dialog-img-${items[index].id}`}
                    src={items[index].url.src}
                    width={400}
                    height={400}
                    alt="single-image"
                    className="rounded-md h-fit  w-full object-cover"
                  />
                  <motion.div
                    layout="position"
                    layoutId={`dialog-title-${items[index].id}`}
                  >
                    <motion.h1 className="text-4xl font-semibold">
                      {items[index].title}
                    </motion.h1>
                  </motion.div>
                  <motion.p
                    key={items[index].id} // Add this line
                    initial={{
                      scale: 1,
                      opacity: 0,
                      transformOrigin: 'left',
                    }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="sm:text-sm text-xs  py-2"
                  >
                    {items[index].description}
                  </motion.p>
                </motion.div>
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  )
}

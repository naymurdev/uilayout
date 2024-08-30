'use client'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { Plus, PlusIcon, XIcon } from 'lucide-react'
import React, { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const transition = {
  type: 'spring',
  duration: 0.4,
}
export default function Dialog() {
  const [index, setIndex] = useState(5)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const items = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/gallerynew_x3apwx.svg',
      title: 'Accordion',
      description:
        'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/sparkles_ko7fz4.svg',
      title: 'Globe Section',
      description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
      tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/image_mousetrail_jt45al.svg',
      title: 'Image Mouse Trail',
      description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
      tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
    },
  ]
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef(null)
  useEffect(() => {
    setCarouselWidth(
      // @ts-ignore
      carousel.current.scrollWidth - carousel.current.offsetWidth
    )
  }, [carousel])
  return (
    <div className="relative h-full">
      <MotionConfig transition={transition}>
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 8, ease: 'easeInOut' }}
          className="flex w-full  gap-4   py-10"
        >
          {items.map((item, i) => {
            return (
              <>
                <motion.div
                  //@ts-ignore
                  key={item}
                  className="w-[250px] flex-shrink-0 flex relative  flex-col overflow-hidden border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
                  layoutId={`dialog-${item?.id}`}
                  style={{
                    borderRadius: '12px',
                  }}
                  tabIndex={i}
                  onClick={() => {
                    setIndex(i)
                    setIsOpen(true)
                  }}
                >
                  <motion.div layoutId={`dialog-img-${item.id}`}>
                    <img
                      src={item.url}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className=" w-96 object-cover"
                    />
                  </motion.div>
                  <div className="flex flex-grow flex-row items-end justify-between p-2">
                    <div>
                      <motion.div
                        layoutId={`dialog-title-${item.id}`}
                        className="dark:text-white text-black"
                      >
                        {item.title}
                      </motion.div>
                      {/* <motion.div
                        layoutId={`dialog-des-${item.id}`}
                        layout="position"
                        className="text-zinc-700 dark:text-zinc-400 line-clamp-2 text-sm"
                      >
                        {item.description}
                      </motion.div> */}
                    </div>

                    <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              </>
            )
          })}
        </motion.div>
        {/* {createPortal( */}
        <AnimatePresence initial={false} mode="sync">
          {isOpen && (
            <>
              <motion.div
                key={`backdrop-${items[index].id}`}
                className="fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-sm "
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsOpen(false)
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center z-50"
              >
                <motion.div
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden   dark:bg-gray-950 bg-gray-200 border sm:w-[500px] ]"
                  layoutId={`dialog-${items[index].id}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}
                >
                  <motion.div layoutId={`dialog-img-${items[index].id}`}>
                    <img
                      src={items[index].url}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className="h-full w-full"
                    />
                  </motion.div>
                  <div className="p-6">
                    <motion.div
                      layoutId={`dialog-title-${items[index].id}`}
                      className="text-2xl text-zinc-950 dark:text-zinc-50"
                    >
                      {items[index].title}
                    </motion.div>
                    {/* <motion.div
                      layoutId={`dialog-subtitle-${uniqueId}`}
                      layout="position"
                      className="text-zinc-700 dark:text-zinc-400"
                    >
                      Edouard Wilfrid Buquet
                    </motion.div> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="origin-bottom"
                      layoutId={`dialog-des-${items[index].id}`}
                    >
                      <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                        {items[index].description}
                      </p>
                    </motion.div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-6 top-6 text-zinc-50 cursor-pointer"
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        ,
        {/* document.body
        )} */}
      </MotionConfig>
    </div>
  )
}

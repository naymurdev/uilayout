'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/use-media-query'

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662552/mobilew_dsqfkw.jpg',
  },
  {
    title: 'Important of UI component.',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662556/2149880598_j6lyue.jpg',
  },
  {
    title: 'Is UI and UX Same?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662554/10631468_4491464_n68c8v.jpg',
  },
]
function index() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? index : index)
  }
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <div className=" md:grid grid-cols-12 p-2 items-center justify-center w-full h-full">
        <div className="rounded-sm   col-span-5">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden mb-2  ${
                activeIndex === index
                  ? 'active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
                  : 'bg-transparent border-2 dark:hover:border-[#656fe2]'
              }
            `}
              onClick={() => handleClick(index)}
            >
              <h3
                className={`p-4 cursor-pointer transition-all font-semibold    dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
                  activeIndex === index
                    ? 'active  dark:bg-[#1e2a78] bg-[#F2F2F2] '
                    : 'dark:bg-[#11112b] bg-white'
                }
               `}
              >
                {tab.title}
              </h3>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                      {tab.description}
                    </p>
                    <img
                      src={tab.imageUrl}
                      alt={tab.title}
                      className="mb-2 max-w-full h-full md:hidden block  rounded-md object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <>
          {isDesktop &&
            tabs.map((tab, index) => {
              return (
                <>
                  <AnimatePresence mode="popLayout">
                    {activeIndex === index && (
                      <motion.div className="p-4 h-[400px] overflow-hidden col-span-7">
                        <motion.img
                          src={tab.imageUrl}
                          alt={tab.title}
                          className="mb-2 max-w-full h-full  rounded-md object-cover"
                          width={800}
                          initial={{ opacity: 0, overflow: 'hidden' }}
                          animate={{ opacity: 1, overflow: 'hidden' }}
                          exit={{ opacity: 0, overflow: 'hidden' }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2,
                          }}
                          height={800}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )
            })}
        </>
      </div>
    </>
  )
}

export default index

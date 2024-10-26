'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { Plus } from 'lucide-react'

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop',
  },
]
function HomeAccordion() {
  const [scope, animate] = useAnimate()
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeItem, setActiveItem] = useState<
    | {
        title: string
        description: string
        imageUrl: string
      }
    | undefined
  >(tabs[0])

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
    const newActiveItem = tabs.find((_, i) => i === index)
    setActiveItem(newActiveItem)
  }

  return (
    <>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 relative mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-medium pt-2 pb-4">
          We're here to answer all your questions.
        </h1>
        <div className="h-fit border   rounded-lg p-2 dark:bg-[#03050c] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
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
                    <p
                      className={`dark:text-white text-black p-3 pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeAccordion

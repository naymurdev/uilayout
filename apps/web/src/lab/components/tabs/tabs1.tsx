'use client'
import React, { useState } from 'react'
import { Info, Maximize2, Monitor, Smartphone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Tabsbtn,
  Tabscontent,
  tabContentVariants,
  useTabs,
} from '@/lab/components/tabs/framer-tabs'
import Image from 'next/image'

const initialTabs = [
  {
    name: 'Design',
    label: 'design',
    icon: Info,
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/design_elbeas.png',
  },
  {
    name: 'Collaborate',
    label: 'collaborate ',
    icon: Info,
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/collboration_frpdk8.png',
  },
  {
    name: 'Share',
    label: 'share',
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/share_xxzjjp.png',
    icon: Info,
  },
  {
    name: 'Pubslish',
    label: 'publish',
    icon: Info,
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714807584/publish_eah6oa.png',
  },
]
const effectArr = [
  {
    id: 1,
    name: 'basic',
  },
  {
    id: 2,
    name: 'hover',
  },
  {
    id: 3,
    name: 'wobbly',
  },
]
function Tab() {
  const { tabs, activeTab, setActiveTab, hoverTab, setHoverTab } = useTabs(
    initialTabs,
    initialTabs[0]
  )
  const [checkEffect, setCheckEffect] = useState('wobbly')
  return (
    <>
      <div className="flex bg-black dark:bg-gray-900 w-fit ml-auto mb-4 gap-1 p-1 rounded-md text-white">
        {effectArr?.map((effect, index) => {
          return (
            <>
              <motion.button
                onClick={() => setCheckEffect(effect?.name)}
                className={`py-1 px-3 rounded-md capitalize relative `}
              >
                <span className="z-10 relative">{effect?.name}</span>
                {checkEffect === effect.name && (
                  <motion.div
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                    layoutId={'magnetic'}
                    className="absolute w-full h-full left-0 top-0 bg-[conic-gradient(from_90deg_at_50%_50%,#8494ff_0%,#3749be_50%,#7d8efc_100%)] rounded-md  z-[1] tab-shadow"
                  />
                )}
              </motion.button>
            </>
          )
        })}
      </div>
      <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
        <div className="flex justify-center mb-2">
          <div
            className="flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border"
            onMouseLeave={() => {
              setHoverTab(null)
            }}
          >
            {tabs.map((tab: { name: string; label: string }) => (
              <Tabsbtn
                key={tab.name}
                value={tab}
                isSelected={activeTab.name === tab.name}
                setActiveTab={setActiveTab}
                hoverTab={hoverTab}
                wobbly={checkEffect === 'wobbly' ? true : false}
                hover={checkEffect === 'hover' ? true : false}
                setHoverTab={setHoverTab}
              >
                <span className="relative z-[2] capitalize">{tab.label}</span>
              </Tabsbtn>
            ))}
          </div>
        </div>
        {tabs.map((tab: any) => (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.name || 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Tabscontent
                key={activeTab.name}
                value={tab.name}
                activeTab={activeTab}
              >
                <Image
                  src={activeTab.img}
                  width={1000}
                  height={1000}
                  alt="preview_img"
                  className="w-[850px] object-cover h-full mx-auto rounded-md"
                />
              </Tabscontent>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </>
  )
}

export default Tab

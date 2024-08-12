// @ts-nocheck
'use client'
import { ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const tabContentVariants: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
}

export const useTabs = (initialTabs, activeTabs) => {
  const [tabs, setTabs] = useState(initialTabs)
  const [activeTab, setActiveTab] = useState(activeTabs)
  const [hoverTab, setHoverTab] = useState(activeTabs)

  return { tabs, activeTab, setActiveTab, setHoverTab, hoverTab }
}

export const Tabsbtn = ({
  value,
  children,
  isSelected,
  setActiveTab,
  hoverTab,
  setHoverTab,
  wobbly,
  hover,
}: {
  value: any
  children: any
  isSelected: any
  setActiveTab: any
  hoverTab: any
  setHoverTab: any
  wobbly?: any
  hover?: any
}) => {
  return (
    <>
      <motion.div
        transition={{
          duration: 0.5,
        }}
        onClick={() => {
          setActiveTab(value)
        }}
        onFocus={() => {
          setHoverTab(value)
        }}
        onMouseEnter={() => {
          setHoverTab(value)
        }}
        className={`cursor-pointer  relative p-2 px-4 rounded-md ${
          isSelected
            ? 'dark:text-white text-black'
            : 'dark:text-white text-black'
        } relative`}
      >
        {children}
        {isSelected && (
          <AnimatePresence mode="wait">
            <motion.div
              transition={{
                layout: {
                  duration: 0.2,
                  ease: 'easeInOut',
                },
              }}
              layoutId={'hover'}
              className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md  z-[1]"
            />
          </AnimatePresence>
        )}
        {hover || wobbly ? (
          <>
            {hoverTab?.name === value.name && (
              <AnimatePresence mode="wait">
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: 'easeInOut',
                      delay: 0.04,
                    },
                  }}
                  layoutId={'hover'}
                  className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md  z-[1] tab-shadow"
                />
              </AnimatePresence>
            )}
          </>
        ) : (
          <></>
        )}
        {wobbly ? (
          <>
            {hoverTab?.name === value.name && (
              <AnimatePresence mode="wait">
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: 0.2,
                    },
                  }}
                  layoutId={'hover1'}
                  className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md  z-[1] tab-shadow"
                />
              </AnimatePresence>
            )}
          </>
        ) : (
          <></>
        )}
      </motion.div>
    </>
  )
}

export const Tabscontent = ({
  value,
  children,
  activeTab,
  className,
}: {
  value: string
  children: ReactNode
  activeTab: any
  className?: string
}) => {
  return (
    <div className={cn('w-full order', className)}>
      {activeTab.name === value ? children : null}
    </div>
  )
}

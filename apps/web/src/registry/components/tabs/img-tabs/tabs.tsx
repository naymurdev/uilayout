'use client'
import React, { ReactNode, useState, createContext, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'

interface Tab {
  id: string
  title: string
  description: string
  imageUrl: string
}

interface TabsContextType {
  activeTab: string
  setActiveTab: (id: string) => void
  isDesktop: boolean
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

const useTabs = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a TabsProvider')
  }
  return context
}

export function TabsProvider({
  children,
  defaultValue,
  className,
}: {
  children: ReactNode
  defaultValue: string
  className?: string
}) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn('w-full h-full', className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabList({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('rounded-sm h-fit', className)}>{children}</div>
}

export function TabItem({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) {
  const { activeTab, setActiveTab } = useTabs()

  return (
    <motion.div
      className={`rounded-lg overflow-hidden mb-2 md:text-base text-sm ${
        activeTab === value
          ? 'active border-2 dark:border-[#656fe2] border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
          : 'bg-transparent border-2 dark:hover:border-[#656fe2]'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  )
}

export function TabHeader({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) {
  const { activeTab } = useTabs()
  return (
    <h3
      className={`p-4 md:text-base text-sm cursor-pointer transition-all font-semibold dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
        activeTab === value
          ? 'active dark:bg-[#1e2a78] bg-[#F2F2F2]'
          : 'dark:bg-[#11112b] bg-white'
      }`}
    >
      {children}
    </h3>
  )
}

export function TabDes({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) {
  const { activeTab } = useTabs()
  return (
    <AnimatePresence mode="sync">
      {activeTab === value && (
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
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function TabImageContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('', className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  )
}

export function TabImage({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) {
  const { activeTab, isDesktop } = useTabs()

  if (activeTab !== value || !isDesktop) return null

  return (
    <motion.div
      initial={{ opacity: 0, overflow: 'hidden' }}
      animate={{ opacity: 1, overflow: 'hidden' }}
      exit={{ opacity: 0, overflow: 'hidden' }}
      transition={{
        duration: 0.4,
        delay: 0.2,
      }}
      className="p-4 h-[400px] rounded-md overflow-hidden"
    >
      {children}
    </motion.div>
  )
}

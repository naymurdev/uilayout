//@ts-nocheck

'use client'

import { Icons } from '@/assets/icons'
import preview from '@/assets/preview'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip-doc'

import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'

const Component = React.forwardRef((props, ref) => (
  <Image {...props} ref={ref} alt="App" />
))

const MotionComponent = motion(Component)

const apps = [
  {
    id: 'carousel',
    icon: Icons.doc_icon5,
    name: 'Carousel',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/carousel_ymyqq4.svg',
  },
  {
    id: 'tabs',
    icon: Icons.doc_icon4,
    name: 'Tabs',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/tabs_hgujxo.svg',
  },
  {
    id: 'faqs',
    icon: Icons.doc_star,
    name: 'Faqs',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/faqs_qubbig.svg',
  },
  {
    id: 'grid',
    icon: Icons.doc_icon3,
    name: 'Grid',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/grid_rbis5c.svg',
  },
  {
    id: 'masking',
    icon: Icons.doc_circle,
    name: 'Masking',
    onClick: () =>
      window.open(
        'https://www.ui-layout.com/components/magnified-doc',
        '_blank',
        'noopener,noreferrer'
      ),
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image_masking_kbdo7a.svg',
  },
  {
    id: 'mouseTrail',
    icon: Icons.doc_rectangle,
    name: 'MouseTrail',
    onClick: () =>
      window.open(
        'https://naymur-rahman.com/',
        '_blank',
        'noopener,noreferrer'
      ),
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image_mousetrail_jt45al.svg',
  },
  {
    id: 'sticky',
    icon: Icons.doc_icon2,
    name: 'Sticky',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/sticky_xao8zr.svg',
  },
  {
    id: 'gallery',
    icon: Icons.doc_triangle,
    name: 'Gallery',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/gallerynew_x3apwx.svg',
  },
]

function HomeMagnifiedDocOneFile() {
  const mouseX = useMotionValue(Infinity)
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  const handleClick = (i) => {
    setPrevIndex(index)
    setIndex(i)
  }

  const isForward =
    index > prevIndex || (index === 0 && prevIndex === apps.length - 1)

  return (
    <>
      <div className="relative rounded-md h-full   dark:bg-home-dark bg-white  [box-shadow:inset_1px_-1px_4px_rgba(0_0_0,0.5)] ">
        <>
          {apps.map((app, i) => {
            return (
              <>
                <AnimatePresence mode={'popLayout'}>
                  {index === i && (
                    <motion.div className="w-full h-full">
                      <motion.figure
                        initial={{
                          opacity: 0,
                          y: isForward ? 30 : -30,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: isForward ? -30 : 30,
                        }}
                        transition={{
                          type: 'ease',
                          ease: 'easeInOut',
                          duration: 0.3,
                          delay: 0.4,
                        }}
                      >
                        <Image
                          src={app?.imgSrc}
                          alt="images"
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover  rounded-lg"
                        />
                      </motion.figure>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )
          })}

          <div className="absolute bottom-0 left-0 w-full z-20">
            <div className="w-fit mx-auto">
              <TooltipProvider delayDuration={0}>
                <motion.div
                  onMouseMove={(e) => mouseX.set(e.pageX)}
                  onMouseLeave={() => mouseX.set(Infinity)}
                  className="mx-auto flex h-[57px] w-fit items-end gap-2 rounded-t-lg px-2 pb-2 dark:bg-gray-900 bg-gray-200 backdrop-blur-2xl border-t border-l border-r border-white/20 "
                >
                  {apps.map((app, i) => {
                    return (
                      <Tooltip key={app.id}>
                        <TooltipTrigger onClick={() => handleClick(i)}>
                          <span className="sr-only">{app.name}</span>
                          <AppIcon mouseX={mouseX} src={app.icon} />
                        </TooltipTrigger>
                        <TooltipContent
                          className="py-1 px-3 rounded-sm"
                          sideOffset={8}
                        >
                          <p className="text-xs">{app.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
                </motion.div>
              </TooltipProvider>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

function AppIcon({ mouseX, src }: { mouseX: MotionValue; src: any }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-100, 0, 100], [40, 55, 40])
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <>
      <MotionComponent
        src={src}
        width={60}
        height={60}
        alt=""
        quality={100}
        ref={ref}
        style={{ width }}
        className="aspect-square rounded-lg w-8  object-cover"
      />
    </>
  )
}
export default HomeMagnifiedDocOneFile

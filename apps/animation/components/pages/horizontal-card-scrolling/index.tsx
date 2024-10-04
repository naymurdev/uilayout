'use client'
import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'

import { useEffect, useRef, useState } from 'react'
import { throttle } from '../../../lib/utils'
import Image from 'next/image'

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1519031465998-192aba33f8ad?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1589223050279-18d1f14059cf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1510437097452-74ac66e27feb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1526991757821-1307bf7800f6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?q=80&w=800&auto=format&fit=cropD',
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1506104489822-562ca25152fe?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1575946240168-30dce77b926c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=800&auto=format&fit=crop',
  },
]

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0])

  useEffect(() => {
    if (!ref || !ref.current) return

    const pageHeight = document.body.scrollHeight
    const start = ref.current.offsetTop
    const end = start + ref.current.offsetHeight

    setPosition([start / pageHeight, end / pageHeight])
  }, [])

  return { position }
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: '#008299' },
    partial: { backgroundColor: '#ffffff' },
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: false },
}

export default function index() {
  const mainRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const { position } = useElementViewportPosition(mainRef)
  //   const { ref, start, end } = useRefScrollProgress(mainRef)
  const [carouselEndPosition, setCarouselEndPosition] = useState(0)
  const { scrollYProgress, scrollY } = useScroll()
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition])

  console.log(carouselEndPosition)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest)
  })
  useEffect(() => {
    window.addEventListener('scroll', () => console.log(carouselEndPosition))
  }, [])

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return
    const parent = carouselRef.current.parentElement
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2

        setCarouselEndPosition(-newPosition)
      }
    }

    resetCarouselEndPosition()
    const handleResize = throttle(resetCarouselEndPosition, 10)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <section ref={mainRef} className="bg-gray-950">
        <div className="w-full mx-auto" style={{ height: '300vh' }}>
          <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div ref={carouselRef} className="flex gap-10" style={{ x }}>
              {items.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className="group relative h-[300px] w-[300px] overflow-hidden bg-neutral-200"
                >
                  <motion.img
                    key={item.id}
                    className="w-full flex-shrink-0 h-full object-cover"
                    src={item?.url}
                    alt={'img'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="group bg-gray-950">
        <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
          ui-layout
        </h1>
        <section className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">
          Thanks for Scrolling
        </section>
      </footer>
    </>
  )
}

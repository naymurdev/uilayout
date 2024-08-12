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
export const items = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741160/photo-1714514828598-70dbbc1c13fb_teaqhw.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1522743358649-311c79004e9a_busrji.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1697985189201-293f0ddfc36d_mam2av.jpg',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741158/photo-1714182356074-99c7c843e197_jji1oe.jpg',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714402002623-86d68590c545_eyrfna.jpg',
  },

  {
    id: 7,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1712313242836-3ae9c1fd6767_ynpin3.jpg',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714523479594-13c0bb72fcf3_n85lma.jpg',
  },

  {
    id: 6,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1713223289172-e45b0ed96eae_cdizhk.jpg',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741160/photo-1714362444851-05da5fa55efe_z4qybo.jpg',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1713865248397-6a3825850fc7_mh5rxg.jpg',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1710496633691-d6e95da43cf2_rajsty.jpg',
  },
  {
    id: 13,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1713999212351-78f54ee46d9e_s17ojk.jpg',
  },
  {
    id: 14,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1714144268969-f03879242066_tsmx52.jpg',
  },
  {
    id: 15,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741158/photo-1714547948462-35d76260e4a3_h2kvbp.jpg',
    tags: ['Lake', 'Reflection', 'Serene', 'Symmetry', 'Natural'],
  },
  {
    id: 16,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741158/photo-1714182370392-a32d43080717_ksy9fp.jpg',
  },
]

import Image from 'next/image'

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

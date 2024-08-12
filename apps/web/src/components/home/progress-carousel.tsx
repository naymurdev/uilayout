'use client'
import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import preview from '@/assets/preview'

const items = [
  {
    img: preview?.galleryNew,
    title: 'Accordion',
    desc: 'Beautiful Accordion using framer motion and tailwindcss',
    buttonIcon:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg',
  },
  {
    img: preview?.globe,
    title: 'Globe',
    desc: 'Next-Gen Globe for Dark Theme website',
    buttonIcon:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg',
  },
  {
    img: preview?.mousetrail,

    title: 'Mouse Trail',
    desc: 'An Interactive Image Mouse Trail Effect',
    buttonIcon:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg',
  },
]
export default function HomeProgressSlider() {
  const duration: number = 5000
  const fastDuration: number = 400
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [isFastForward, setIsFastForward] = useState<boolean>(false)
  const targetIndex = useRef<number | null>(null)

  useEffect(() => {
    firstFrameTime.current = performance.now()
    frame.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [active, isFastForward])

  const animate = (now: number) => {
    const currentDuration = isFastForward ? fastDuration : duration
    const elapsedTime = now - firstFrameTime.current
    const timeFraction = elapsedTime / currentDuration

    if (timeFraction <= 1) {
      setProgress(
        isFastForward
          ? progress + (100 - progress) * timeFraction
          : timeFraction * 100
      )
      frame.current = requestAnimationFrame(animate)
    } else {
      if (isFastForward) {
        setIsFastForward(false)
        if (targetIndex.current !== null) {
          setActive(targetIndex.current)
          targetIndex.current = null
        } else {
          setActive((prev) => (prev + 1) % items.length)
        }
      } else {
        setActive((prev) => (prev + 1) % items.length)
      }
      setProgress(0)
    }
  }

  const handleButtonClick = (index: number) => {
    if (index !== active) {
      const elapsedTime = performance.now() - firstFrameTime.current
      const currentProgress = (elapsedTime / duration) * 100
      setProgress(currentProgress)
      targetIndex.current = index
      setIsFastForward(true)
      firstFrameTime.current = performance.now()
    }
  }

  return (
    <div className="w-full mx-auto rounded-md dark:bg-home-dark text-center relative h-full ">
      <div className="transition-all duration-150 delay-300  ease-in-out">
        <div className="relative h-full" ref={itemsRef}>
          {items.map((item, index) => (
            <AnimatePresence mode="popLayout" key={index}>
              {active === index && (
                <motion.figure
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2 h-full"
                >
                  <Image
                    className="rounded-xl h-full object-contain"
                    src={item.img}
                    width={1900}
                    height={1080}
                    alt={item.desc}
                  />
                </motion.figure>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full dark:bg-white/20 bg-black/20 backdrop-blur-md overflow-hidden grid grid-cols-3 rounded-md">
        {items.map((item, index) => (
          <button
            key={index}
            className={`relative px-2 py-2 text-left ${
              active === index
                ? ''
                : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity border-l dark:border-black border-white'
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <>
              <h2 className="relative px-2 text-sm rounded-full w-fit dark:bg-gray-900 bg-gray-50 mb-2">
                {item?.title}
              </h2>
              <p className="text-xs font-medium dark:text-slate-900 text-white line-clamp-2">
                {item.desc}
              </p>
              <div
                className="block absolute top-0 left-0 h-full overflow-auto -z-10 w-full dark:bg-white/20 bg-black/20 backdrop-blur-md"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 dark:bg-white bg-black"
                  style={{ width: active === index ? `${progress}%` : '0%' }}
                ></span>
              </div>
            </>
          </button>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

interface Item {
  img: StaticImageData
  desc: string
  title: string
  buttonIcon: StaticImageData
}

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000
  const fastDuration: number = 500
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [isFastForward, setIsFastForward] = useState<boolean>(false)
  const targetIndex = useRef<number | null>(null)
  const isReversing = useRef<boolean>(false)

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
      if (isReversing.current) {
        setProgress(progress - progress * timeFraction)
      } else {
        setProgress(
          isFastForward
            ? progress + (100 - progress) * timeFraction
            : timeFraction * 100
        )
      }
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
      isReversing.current = index < active
      firstFrameTime.current = performance.now()
    }
  }

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto text-center relative">
      <div className="transition-all duration-150 delay-300 mb-2 ease-in-out">
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
                    className="rounded-xl h-[650px] object-cover"
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
      <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-md">
        {items.map((item, index) => (
          <button
            key={index}
            className={`relative px-2 py-5 text-left ${
              active === index
                ? ''
                : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity border-l'
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <>
              <h2 className="relative px-4 rounded-full w-fit bg-gray-900 mb-2">
                {item?.title}
              </h2>
              <p className="text-sm font-medium text-slate-900 line-clamp-2">
                {item.desc}
              </p>
              <div
                className="block absolute top-0 left-0 h-full overflow-auto -z-10 w-full bg-white/20 backdrop-blur-md"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 bg-white"
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

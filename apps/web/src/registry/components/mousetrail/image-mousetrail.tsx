// https://codesandbox.io/p/sandbox/framer-motion-image-mouse-trail-kf3hy?file=%2Fsrc%2Futils.ts%3A9%2C14-9%2C30
// https://codesandbox.io/p/sandbox/framer-motion-image-mouse-trail-kf3hy?file=%2Fsrc%2Findex.tsx

// @ts-nocheck
'use client'
import React, { useRef, createRef, MouseEvent } from 'react'
import { items } from '@/components/common/constant'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
interface Item {
  url: string
}

export default function ImageMouseTrail() {
  let steps = 0
  let currentIndex = 0
  let nbOfImages = 0
  let maxNumberOfImages = 5

  const containerRef = useRef<HTMLDivElement>(null)

  const refs = useRef<React.RefObject<HTMLImageElement>[]>(
    items.map(() => createRef<HTMLImageElement>())
  )

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY, movementX, movementY } = e
    console.log(clientX, clientY, movementX, movementY)

    steps += Math.abs(movementX) + Math.abs(movementY)

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY)

      if (nbOfImages === maxNumberOfImages) {
        removeImage()
      }
    }

    if (currentIndex === refs.current.length) {
      currentIndex = 0
      steps = -150
    }
  }

  const moveImage = (x: number, y: number) => {
    const currentImage = refs.current[currentIndex]?.current
    const containerRect = containerRef.current?.getBoundingClientRect()

    if (currentImage && containerRect) {
      const relativeX = x - containerRect.left
      const relativeY = y - containerRect.top

      currentImage.style.left = `${relativeX}px`
      currentImage.style.top = `${relativeY}px`
      currentImage.style.display = 'block'

      currentIndex++
      nbOfImages++
      setZIndex()
    }
  }

  const setZIndex = () => {
    const images = getCurrentImages()
    images.forEach((img, i) => {
      img.style.zIndex = i
    })
  }

  const removeImage = () => {
    const images = getCurrentImages()
    if (images.length > 4) {
      // console.log(images)
      images[0].style.display = 'none'

      // setTimeout(async () => {
      //   images[1].style.display = 'none'
      //   images[2].style.display = 'none'
      //   images[3].style.display = 'none'
      //   images[4].style.display = 'none'
      // }, 1000)
      nbOfImages--
    }
  }

  const getCurrentImages = () => {
    let images: HTMLImageElement[] = []
    let indexOfFirst = currentIndex - nbOfImages
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i < 0 ? i + refs.current.length : i
      if (refs.current[targetIndex].current) {
        images.push(refs.current[targetIndex].current)
      }
    }
    return images
  }

  return (
    <section
      onMouseMove={manageMouseMove}
      ref={containerRef}
      className="grid place-content-center h-[70vh] w-full bg-[#d1d1d1] relative overflow-hidden rounded-lg"
    >
      {items.map((item, index) => (
        <img
          key={index}
          className=" w-40 h-48 object-cover absolute hidden -translate-y-[50%] -translate-x-[50%]"
          ref={refs.current[index]}
          src={item.url}
        />
      ))}
      <article className="relative z-20 mix-blend-difference">
        <h1 className="text-4xl text-center font-semibold">
          ✨ Experience Interactive Designs with <br />
          with Dynamic Mouse Trails
        </h1>
      </article>
    </section>
  )
}

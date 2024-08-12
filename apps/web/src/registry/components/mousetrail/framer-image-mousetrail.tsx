// https://codesandbox.io/p/sandbox/framer-motion-image-mouse-trail-kf3hy?file=%2Fsrc%2Futils.ts%3A9%2C14-9%2C30
// https://codesandbox.io/p/sandbox/framer-motion-image-mouse-trail-kf3hy?file=%2Fsrc%2Findex.tsx

// @ts-nocheck
'use client'
import React, { useRef, createRef, MouseEvent, useEffect } from 'react'
import { items } from '@/components/common/constant'
import {
  motion,
  animate,
  AnimateSharedLayout,
  AnimatePresence,
} from 'framer-motion'
interface Item {
  url: string
}
const MathUtils = {
  // Linear interpolation
  lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
  // Distance between two points
  distance: (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1),
}
export default function ImageMouseTrail() {
  let steps = 0
  let currentIndex = 0
  let nbOfImages = 0
  let maxNumberOfImages = 6

  const containerRef = useRef<HTMLDivElement>(null)

  const refs = useRef<React.RefObject<HTMLImageElement>[]>(
    items.map(() => createRef<HTMLImageElement>())
  )

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY, movementX, movementY } = e
    // console.log(clientX, clientY, movementX, movementY)

    steps += Math.abs(movementX) + Math.abs(movementY)

    if (steps >= currentIndex * 150) {
      // console.log(steps, currentIndex)

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
    const lerp = (a, b, n) => (1 - n) * a + n * b
    // distance between two points

    if (currentImage && containerRect) {
      const relativeX = x - containerRect.left
      const relativeY = y - containerRect.top
      console.log(x - containerRect.left, relativeX)

      currentImage.style.left = `${relativeX}px`
      currentImage.style.top = `${relativeY}px`
      // currentImage.style.opacity = '1'
      console.log(currentImage)

      animate(
        currentImage,
        { opacity: 1, scale: 1.2, y: '-50%', x: '-50%' },
        { type: 'spring' }
      )

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
      animate(
        images[0],
        { opacity: 0, scale: 0, y: '-50%', x: '-50%' },
        { type: 'spring' }
      )
      setTimeout(() => {
        animate(
          images[1],
          { opacity: 0, scale: 0, y: '-50%', x: '-50%' },
          { type: 'spring' }
        )
        animate(
          images[2],
          { opacity: 0, scale: 0, delay: 0.1, y: '-50%', x: '-50%' },
          { type: 'spring' }
        )
        animate(
          images[3],
          { opacity: 0, scale: 0, delay: 0.3, y: '-50%', x: '-50%' },
          { type: 'spring' }
        )
        animate(
          images[4],
          { opacity: 0, scale: 0, delay: 0.5, y: '-50%', x: '-50%' },
          { type: 'spring' }
        )
        animate(
          images[5],
          { opacity: 0, scale: 0, delay: 0.7, y: '-50%', x: '-50%' },
          { type: 'spring' }
        )
      }, 1000)

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
      onTouchMove={(e) => manageMouseMove(e.touches[0])}
      ref={containerRef}
      className="grid place-content-center h-[600px]  w-full bg-[#e0dfdf] relative overflow-hidden rounded-lg"
    >
      {items.map((item, index) => (
        <img
          key={index}
          className=" w-40 h-48 object-cover absolute opacity-0 scale-0 -translate-y-[50%] -translate-x-[50%]"
          ref={refs.current[index]}
          src={item.url}
        />
      ))}
      <article className="relative z-20 mix-blend-difference">
        <h1 className="text-4xl text-center font-semibold">
          ✨ Experience Interactive Designs <br />
          with Dynamic Mouse Trails
        </h1>
      </article>
    </section>
  )
}

// @ts-nocheck
'use client'
// https://buildui.com/recipes/spotlight

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { MouseEvent, useRef, useState } from 'react'

export default function index() {
  const boxWrapper = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  })
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 })
  const handleMouemove = ({ currentTarget, clientX, clientY }): MouseEvent => {
    let { left, top } = currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    setOverlayColor({ x, y })
  }
  console.log(overlayColor)

  return (
    <div className="relative bg-black sm:p-8 p-2 rounded-md">
      <div
        onMouseMove={handleMouemove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          'group relative rounded-lg  p-[2px] bg-[#eeeeee15] overflow-hidden w-fit mx-auto'
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
            style={{
              background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.137),
              transparent 80%
            )
          `,
            }}
          />
        )}

        <div
          className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff76 0%,transparent 20%,transparent) fixed `,
          }}
        ></div>

        <div className="relative text-center z-10 sm:px-8 px-4 py-6 rounded-lg w-fit  bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover   bg-black h-full mx-auto">
          <>
            <Image
              src={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/statistic_ac1ivs.png'
              }
              alt="grid"
              width={600}
              className="w-fit mx-auto "
              height={600}
            />
            <h1 className="text-3xl pt-6 font-medium tracking-tight text-white">
              Subscriber Growth
            </h1>
            <p className="pt-2  text-gray-300 capitalize">
              Experience a significant boost in your subscriber <br /> count,
              achieving 3x growth.
            </p>
          </>
        </div>
      </div>
    </div>
  )
}

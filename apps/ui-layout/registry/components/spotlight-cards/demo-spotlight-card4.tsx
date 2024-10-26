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

  return (
    <div className="relative bg-black sm:p-8 px-4 rounded-md">
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
              350px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.103),
              transparent 60%
            )
          `,
            }}
          />
        )}

        <div
          className="absolute inset-0 z-0  bg-fixed rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%,transparent 20%,transparent) fixed`,
          }}
        ></div>

        <div className="relative text-center z-10 sm:px-8 px-4 py-12 pt-6 rounded-lg w-fit  bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/timeline-grid_wixa9t.png')] bg-cover  bg-black h-full mx-auto">
          <>
            <Image
              src={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/star_tb9ivg.png'
              }
              alt="grid"
              width={600}
              className="w-fit mx-auto "
              height={600}
            />
            <h1 className="text-2xl pt-5 font-semibold tracking-tight text-white">
              Seamless Animation For All
            </h1>
            <p className="pt-2 lg:text-base text-sm  text-gray-300 capitalize">
              Effortlessly connect with today's leading technologies
              <br />
              including React, TypeScript, Next.js, Tailwind CSS, Motion, and
              Cypress.
            </p>
          </>
        </div>
      </div>
    </div>
  )
}

// @ts-nocheck
'use client'
import { Spotlight, SpotLightItem } from '@/lab/components/main-spotlight'
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
    <div className="relative bg-black sm:p-8 px-4 rounded-md">
      <Spotlight
        className="sm:w-96 w-full mx-auto"
        ProximitySpotlight={false}
        HoverFocusSpotlight={true}
      >
        <SpotLightItem>
          <>
            <div className="relative text-center z-10 sm:px-8 px-4 py-6 rounded-lg w-full  bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover   bg-black h-full mx-auto">
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
            </div>
          </>
        </SpotLightItem>
      </Spotlight>
    </div>
  )
}

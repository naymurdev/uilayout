// @ts-nocheck
'use client'
import { SpotLightItem, Spotlight } from '@/lab/components/main-spotlight'
// // https://buildui.com/recipes/spotlight

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { MouseEvent, useRef, useState } from 'react'

export default function index() {
  const boxWrapper = useRef(null)
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 })
  const handleMouemove = ({ currentTarget, clientX, clientY }): MouseEvent => {
    let { left, top } = currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    setOverlayColor({ x, y })
  }

  return (
    <>
      <div className={` relative rounded-xl    w-fit mx-auto`}>
        <Spotlight className="sm:w-96 w-full" ProximitySpotlight={false}>
          <SpotLightItem>
            <div className="relative text-center z-10 px-0 py-16 rounded-lg w-fit   bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] bg-cover  bg-black h-full mx-auto">
              <>
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/chat_se21ao.png'
                  }
                  alt="grid"
                  width={600}
                  className="mx-auto w-[85%]"
                  height={600}
                />
                <h1 className="text-xl font-semibold tracking-tight text-white">
                  Create Group Effortlessly
                </h1>
                <p className="pt-2  lg:text-base text-sm  text-gray-300 capitalize">
                  Seamless chats, crystal-clear videos, and <br />
                  premium audio quality
                </p>
              </>
            </div>
          </SpotLightItem>
        </Spotlight>
      </div>
    </>
  )
}

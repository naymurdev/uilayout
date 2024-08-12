// @ts-nocheck
'use client'

import { Spotlight, SpotLightItem } from '@/lab/components/main-spotlight'
// https://buildui.com/recipes/spotlight

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { MouseEvent, useRef, useState } from 'react'

export default function index() {
  return (
    <div className="relative bg-black sm:p-8 px-4 rounded-md">
      <Spotlight
        className="sm:w-[30rem]  w-full mx-auto"
        ProximitySpotlight={true}
      >
        <SpotLightItem>
          <div className="relative text-center z-10 sm:px-8 px-4 py-6 rounded-lg w-fit  bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover   bg-black h-full mx-auto">
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
                Effortlessly connect with today's leading technologies including
                React, TypeScript, Next.js, Tailwind CSS, Motion, and Cypress.
              </p>
            </>
          </div>
        </SpotLightItem>
      </Spotlight>
    </div>
  )
}

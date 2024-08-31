// https://codepen.io/sebastian-piskaty/pen/xxaZYOL
import React, { useRef, useState, MouseEvent } from 'react'

import Image from 'next/image'
import { SpotLightItem, Spotlight } from '@/lab/components/main-spotlight'

export default function index() {
  const boxes = [
    {
      id: '12',
      bgImg:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png',
      chart:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/chart_motl5z.png',
      className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },
    {
      id: '52',
      bgImg:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png',
      chart:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/chart4_s7wsku.png',
      className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },

    {
      id: '42',
      bgImg:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png',
      chart:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/chart3_i9wdgb.png',
      className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },

    {
      id: '22',
      bgImg:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png',
      chart:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/star_tb9ivg.png',
      className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },
    {
      id: '32',
      title: 'Track Goals',
      bgImg:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png',
      chart:
        'https://res.cloudinary.com/dzl9yxixg/image/upload/chart1_rll0mx.png',
      des: 'Keeping track of your goals helps you stay organized, motivated, and focused. Regularly monitoring your progress ensures you stay on course.',
      className:
        'xl:col-span-2 xl:row-span-2 row-start-2 row-end-3  col-start-1 col-end-6',
    },
  ]
  return (
    <>
      <div className="relative bg-black sm:p-8 p-4 rounded-md">
        <Spotlight className="grid gap-2 grid-flow-col grid-cols-4">
          {boxes?.map((box, index) => {
            return (
              <SpotLightItem className={box.className} key={index}>
                <div className="relative z-10 rounded-lg  bg-gradient-to-b from-[#0c0c0c] to-[#252525] w-full h-full mx-auto">
                  <div className="rounded-lg grid place-content-center relative max-h-full h-full 2xl:p-3 p-0  w-full">
                    <div
                      className={`absolute rounded-lg top-0 left-0 h-full w-full -z-10 bg-center bg-cover`}
                      style={{ background: `url(${box?.bgImg})` }}
                    />

                    <Image
                      src={box?.chart}
                      alt="grid"
                      width={600}
                      className="w-fit mx-auto "
                      height={600}
                    />
                    <h1 className="text-center xl:text-2xl lg:text-xl text-2xl font-semibold">
                      {box?.title}
                    </h1>
                    <p className="text-center lg:text-base text-xs">
                      {box?.des}
                    </p>
                  </div>
                </div>
              </SpotLightItem>
            )
          })}
        </Spotlight>
      </div>
    </>
  )
}

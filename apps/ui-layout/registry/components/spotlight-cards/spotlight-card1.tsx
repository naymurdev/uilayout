// https://codepen.io/sebastian-piskaty/pen/xxaZYOL
import React from 'react';

import Image from 'next/image';
import { SpotLightItem, Spotlight } from '@/components/core/main-spotlight';

export default function index() {
  const boxes = [
    {
      id: '12',

      chart: '/chart_motl5z.webp',
      className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },
    {
      id: '52',

      chart: '/chart4_s7wsku.webp',
      className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },

    {
      id: '42',

      chart: '/chart3_i9wdgb.webp',
      className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },

    {
      id: '22',

      chart: '/star_tb9ivg.webp',
      className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },
    {
      id: '32',
      title: 'Track Goals',

      chart: '/chart1_rll0mx.webp',
      des: 'Keeping track of your goals helps you stay organized, motivated, and focused. Regularly monitoring your progress ensures you stay on course.',
      className:
        'xl:col-span-2 xl:row-span-2 row-start-2 row-end-3  col-start-1 col-end-6',
    },
  ];
  return (
    <>
      <div className='relative bg-black sm:p-8 p-4 rounded-md'>
        <Spotlight className='grid gap-2 grid-flow-col grid-cols-4'>
          {boxes?.map((box, index) => {
            return (
              <SpotLightItem className={box.className} key={index}>
                <div className='relative z-10 rounded-lg  bg-gradient-to-b from-[#0c0c0c] to-[#252525] w-full h-full mx-auto'>
                  <div className='rounded-lg grid place-content-center relative max-h-full h-full 2xl:p-3 p-0  w-full'>
                    <div
                      className={`absolute rounded-lg top-0 left-0 h-full w-full -z-10 bg-center bg-cover`}
                    />

                    <Image
                      src={box?.chart}
                      alt='grid'
                      width={600}
                      className='w-fit mx-auto '
                      height={600}
                    />
                    <h1 className='text-center xl:text-2xl lg:text-xl text-2xl font-semibold'>
                      {box?.title}
                    </h1>
                    <p className='text-center lg:text-base text-xs'>
                      {box?.des}
                    </p>
                  </div>
                </div>
              </SpotLightItem>
            );
          })}
        </Spotlight>
      </div>
    </>
  );
}

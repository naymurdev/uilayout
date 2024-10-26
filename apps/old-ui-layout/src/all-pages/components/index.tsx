import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import preview from '@/assets/preview'

import { AspectRatio } from '@/components/ui/aspect-ratio'

function ComponentsIndex() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 py-4">
        <Link href="/components/accordion/example1">
          <div className="p-8 border dark:bg-[#171F2C]  dark:border-[#313842] transition-all rounded-lg">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={preview.heroSec}
                alt="hero-sec"
                width={100}
                height={100}
                className="w-full h-full   rounded-md"
              />
            </AspectRatio>
          </div>
          <div className="py-2">
            <h1 className="2xl:text-2xl text-xl font-medium">Hero Section</h1>
            <p className="leading-[120%] 2xl:text-base text-sm">
              8 re-usable wonderful hero section/layout for your website
            </p>
          </div>
        </Link>
        <Link href="/components/accordion/example2">
          <div className="p-8 border dark:bg-[#171F2C]  dark:border-[#313842] transition-all rounded-lg">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={preview.Timeline}
                alt="hero-sec"
                width={100}
                height={100}
                className="w-full h-full   rounded-md"
              />
            </AspectRatio>
          </div>
          <div className="py-2">
            <h1 className="2xl:text-2xl text-xl font-medium leading-[140%]">
              Timeline
            </h1>
            <p className="leading-[120%] 2xl:text-base text-sm">
              8 re-usable wonderful hero section/layout for your website
            </p>
          </div>
        </Link>
        <Link href="/components/accordion/example3">
          <div className="p-8 border dark:bg-[#171F2C]  dark:border-[#313842] transition-all rounded-lg">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={preview.gallery}
                alt="gallery-sec"
                width={100}
                height={100}
                className="w-full h-full   rounded-md"
              />
            </AspectRatio>
          </div>
          <div className="py-2">
            <h1 className="2xl:text-2xl text-xl font-semibold">
              Gallery Section
            </h1>
            <p className="leading-[120%] 2xl:text-base text-sm">
              8 re-usable wonderful hero section/layout for your website
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ComponentsIndex

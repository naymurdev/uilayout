'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/common/header'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const appsDesign = [
  {
    id: 'carousel',
    name: 'carousel',
    url: '/components/embla-carousel',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/carousel_ymyqq4.svg',
  },
  {
    id: 'tabs',
    url: '/components/tabs',
    name: 'tabs',
    imgSrc: 'https:/res.cloudinary.com/dzl9yxixg/image/upload/tabs_hgujxo.svg',
  },
  {
    id: 'accordion',
    url: '/components/accordion',
    name: 'accordion',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/faqs_qubbig.svg',
  },
  {
    id: 'grid',
    url: '/components/grid',
    name: 'grid',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/grid_rbis5c.svg',
  },
  {
    id: 'masking',
    url: '/components/video-masking',
    name: 'video-masking',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image_masking_kbdo7a.svg',
  },
  {
    id: 'mouseTrail',
    url: '/components/image-mousetrail',
    name: 'image-mousetrail',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image_mousetrail_jt45al.svg',
  },
  {
    id: 'sticky',
    url: '/components/sticky-scroll',
    name: 'sticky-scroll',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/sticky_xao8zr.svg',
  },
  {
    id: 'image-accordion',
    url: '/components/image-accordions',
    name: 'image-accordion',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/gallerynew_x3apwx.svg',
  },
  {
    id: 'globe',
    url: '/components/globe',
    name: 'Globe',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/globe_j7nu5e.svg',
  },
  {
    id: 'sparkles',
    url: '/components/sparkles',
    name: 'Sparkles',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/sparkles_ko7fz4.svg',
  },
  {
    id: 'modal',
    url: '/components/linear-modal',
    name: 'Modal',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/modal_zecs4l.svg',
  },
  {
    id: 'image-reveal',
    url: '/components/image-reveal',
    name: 'Image Reveal',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image-reveal_rsfjbi.svg',
  },
  {
    id: 'drawer',
    url: '/components/drawer',
    name: 'Drawer',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/responsive-drawer_qd1xcx.svg',
  },
  {
    id: 'clip-path',
    url: '/components/clip-path-image',
    name: 'Clip-Path',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/image-masking_m5oigd.svg',
  },
  {
    id: 'hover-card',
    url: '/components/hover-cards',
    name: 'Card',
    imgSrc: 'https://res.cloudinary.com/dzl9yxixg/image/upload/card_q3rete.svg',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20 pb-5">
        <h1
          className={'sm:text-3xl text-2xl font-semibold tracking-tight pb-1'}
        >
          Components
        </h1>

        <p className="md:text-lg text-sm text-muted-foreground lg:w-[80%]">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 py-4">
            {appsDesign.map((component, index) => {
              return (
                <>
                  <Link
                    href={component?.url}
                    className="border p-2    transition-all rounded-lg"
                  >
                    <>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={component.imgSrc}
                          alt="hero-sec"
                          width={100}
                          height={100}
                          className="w-full h-full   rounded-md"
                        />
                      </AspectRatio>
                    </>
                    <div className="sm:py-2 py-1 sm:px-4 px-2">
                      <h1 className="2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize">
                        {component.name}
                      </h1>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
        </>
      </div>
    </>
  )
}

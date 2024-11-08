'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import preview from '@/assets/preview';
const appsDesign = [
  {
    id: 'motionNumber',
    name: 'motion number',
    url: '/components/motion-number',
    imgSrc: preview.motionNumber,
  },
  {
    id: 'dragItems',
    name: 'Drag Items',
    url: '/components/drag-items',
    imgSrc: preview.dragitems,
  },
  {
    id: 'carousel',
    name: 'carousel',
    url: '/components/carousel',
    imgSrc: preview.carousel,
  },
  {
    id: 'tabs',
    url: '/components/tabs',
    name: 'tabs',
    imgSrc: preview.tabs,
  },
  {
    id: 'sparkles',
    url: '/components/sparkles',
    name: 'Sparkles',
    imgSrc: preview.sparkles,
  },
  {
    id: 'accordion',
    url: '/components/accordion',
    name: 'accordion',
    imgSrc: preview.faqs,
  },
  {
    id: 'grid',
    url: '/components/grid',
    name: 'grid',
    imgSrc: preview.grid,
  },
  {
    id: 'buttons',
    url: '/components/buttons',
    name: 'buttons',
    imgSrc: preview.buttons,
  },
  {
    id: 'horizontal-scrolling',
    url: '/components/horizontal-scroll',
    name: 'scrolling',
    imgSrc: preview.horizontascroll,
  },
  {
    id: 'masking',
    url: '/components/video-masking',
    name: 'video-masking',
    imgSrc: preview.image_masking,
  },
  {
    id: 'clip-path',
    url: '/components/clip-path',
    name: 'Clip-Path',
    imgSrc: preview.clippath,
  },
  {
    id: 'mouseTrail',
    url: '/components/image-mousetrail',
    name: 'image-mousetrail',
    imgSrc: preview.mousetrail,
  },
  {
    id: 'sticky',
    url: '/components/sticky-scroll',
    name: 'sticky-scroll',
    imgSrc: preview.sticky,
  },

  {
    id: 'image-accordion',
    url: '/components/image-accordions',
    name: 'image-accordion',
    imgSrc: preview.galleryNew,
  },
  {
    id: 'globe',
    url: '/components/globe',
    name: 'Globe',
    imgSrc: preview.globe,
  },

  {
    id: 'modal',
    url: '/components/linear-card',
    name: 'Modal',
    imgSrc: preview.modal,
  },
  {
    id: 'image-reveal',
    url: '/components/image-reveal',
    name: 'Image Reveal',
    imgSrc: preview.imagereveal,
  },
  {
    id: 'drawer',
    url: '/components/responsive-drawer',
    name: 'Drawer',
    imgSrc: preview.responsive_drawer,
  },

  {
    id: 'hover-card',
    url: '/components/hover-cards',
    name: 'Card',
    imgSrc: preview.card,
  },
  {
    id: 'stacking-card',
    url: '/components/stacking-card',
    name: 'Stacking Card',
    imgSrc: preview.stackingcard,
  },
];

export default function Home() {
  return (
    <>
      <div className='pt-20 pb-5'>
        <h1
          className={'sm:text-3xl text-2xl font-semibold tracking-tight pb-1'}
        >
          Components
        </h1>

        <p className='md:text-lg text-sm text-muted-foreground lg:w-[80%]'>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <>
          <div className='grid md:grid-cols-3 grid-cols-2 gap-6 py-4'>
            {appsDesign.map((component, index) => {
              return (
                <>
                  <Link
                    href={component?.url}
                    className='border p-2    transition-all rounded-lg'
                  >
                    <>
                      <AspectRatio.Root ratio={16 / 9}>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={100}
                          height={100}
                          className='w-full h-full   rounded-md'
                        />
                      </AspectRatio.Root>
                    </>
                    <div className='sm:py-2 py-1 sm:px-4 px-2'>
                      <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize'>
                        {component.name}
                      </h1>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}

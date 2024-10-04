'use client'
import { ChevronRight, ChevronsRight, Github, MoveRight } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SpotLightItem, Spotlight } from '@/lab/components/main-spotlight'
import HomeProgressSlider from './progress-carousel'
import HomeMouseTrail from './home-mousetrail'
import HomeBtn from './home-btn'
import HomeImageAccordion from './home-image-accordion'
import HomeMagnifiedDocOneFile from './home-magnified-doc'
import HomeAnimatedBeam from './home-animated-beam'
import HomeAccordionModal from './home-accordion-modal'
import HomeModal from './home-image-modal'
import HomeProductCard from './home-product-card'
import HomeTab from './home-tab'
import HomeImageMasking from './home-image-masking'

import HomeSlider from './home-carousel'
import { AnimatePresence } from 'framer-motion'
import NewItemsLoading from './new-items-loading'
import HomeClipPath from './home-clippath'
import HomeMotionNumber from './home-motion-number'
const homeComponents = [
  {
    id: 0,
    link: '/components/sparkles',
    iframeSrc: 'home-sparkles-globe',
    className: 'md:col-span-7 col-span-12',
  },
  {
    id: 1,
    link: '/components/sparkles-title',

    iframeSrc: 'home-sparkles',
    className: 'md:col-span-5 sm:col-span-6  col-span-12',
  },
  {
    id: 2,
    link: '/components/progressive-carousel',

    componentSrc: <HomeProgressSlider />,

    className: 'md:col-span-5 sm:col-span-6 col-span-12',
  },
  {
    id: 4,
    link: '/components/image-mousetrail',

    componentSrc: <HomeMouseTrail />,
    className: 'md:col-span-7 sm:col-span-6 col-span-12',
  },
  {
    id: 5,
    link: '/components/tabs',

    componentSrc: <HomeTab />,
    className: 'sm:col-span-6 col-span-12',
  },
  {
    id: 6,
    link: '/components/magnified-doc',

    componentSrc: <HomeMagnifiedDocOneFile />,
    className: 'sm:col-span-6 col-span-12 ',
  },

  {
    id: 7,
    componentSrc: <HomeBtn />,
    link: '/components/buttons',

    className: 'lg:col-span-2 col-span-0',
  },

  {
    id: 8,
    link: '/components/media-modal',
    componentSrc: <HomeModal />,
    className: 'lg:col-span-4 sm:col-span-6 col-span-12',
  },
  {
    id: 9,
    componentSrc: <HomeImageAccordion />,
    className: 'sm:col-span-6 col-span-12',
    link: '/components/image-accordions',
  },
  {
    id: 10,
    link: '/components/animated-beam',

    componentSrc: <HomeAnimatedBeam />,
    className: 'md:col-span-5 sm:col-span-6 col-span-12',
  },
  {
    id: 11,
    link: '/components/video-masking',

    componentSrc: <HomeImageMasking />,
    className: 'md:col-span-7 col-span-12',
  },
  {
    id: 12,
    link: '/components/dialog-card',

    componentSrc: <HomeAccordionModal />,

    className: 'lg:col-span-8  md:col-span-7 sm:col-span-6 col-span-12',
  },
  {
    id: 13,
    link: '/components/products-cards',

    componentSrc: <HomeProductCard />,
    className: 'lg:col-span-4 md:col-span-5 sm:col-span-6 col-span-12',
  },
  {
    id: 14,
    link: '/components/embla-carousel',

    componentSrc: <HomeSlider />,
    className: ' col-span-12',
  },
  {
    id: 15,
    link: '/components/clip-path-image',

    componentSrc: <HomeClipPath />,
    className: ' col-span-8',
  },
  {
    id: 16,
    link: '/components/clip-path-image',

    componentSrc: <HomeMotionNumber />,
    className: ' col-span-4',
  },
]

function HeroSec() {
  const [blocks, setBlocks] = useState([])

  const activeDivs = {
    0: new Set([4, 1]),
    2: new Set([3]),
    4: new Set([2, 5, 8]),
    5: new Set([4]),
    10: new Set([3]),
    12: new Set([7]),
    15: new Set([6]),
    14: new Set([5]),
    13: new Set([4]),
  }

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window
      const blockSize = innerWidth * 0.06 // Using 6vw for the block size
      const amountOfBlocks = Math.ceil(innerHeight / blockSize)

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className="w-[6vw] h-full">
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`h-[6vw] w-full border-[1px] dark:border-[rgba(255,255,255,0.015)] border-gray-50 ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? 'dark:bg-[rgba(255,255,255,0.03)] bg-gray-50'
                  : ''
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ))
      // @ts-ignore
      setBlocks(newBlocks)
    }

    updateBlocks()
    window.addEventListener('resize', updateBlocks)

    return () => window.removeEventListener('resize', updateBlocks)
  }, [])

  return (
    <>
      <section className="min-h-screen py-24 overflow-hidden  relative  ">
        <div className="absolute inset-0 top-0 left-0  h-screen w-full items-center px-5 py-24 dark:[background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#010716_100%)] [background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#ffffff_100%)]"></div>
        <article className="grid gap-4 py-20 relative z-10 sm:px-0 px-4">
          <NewItemsLoading />
          <h1 className="  xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-center font-semibold leading-[110%]">
            Design That Really <br />
            Need In{' '}
            <span className="bg-gradient-to-t sm:w-ful w-4/5 from-[#a2b6fa] to-[#334cec] bg-clip-text text-transparent">
              Your Website
            </span>
          </h1>
          <p className="mx-auto lg:w-[500px] sm:w-[80%] text-center sm:text-lg text-sm">
            30+ Free beautifull interactive react/nextjs component based on
            tailwindcss, framer-motion, gsap etc
          </p>
          <div className="flex gap-2 justify-center items-center">
            <Link
              href="/components"
              className="flex items-center gap-2 w-fit  text-white bg-gradient-to-l from-[#6175f8]  to-[#334cec] border sm:px-4 px-2 rounded-sm py-2 "
            >
              Browse Component
              <MoveRight />
            </Link>
            <Link href="/get-started" className="sm:inline-block hidden">
              <Button className=" rounded-full px-4">
                Get Started
                <ChevronsRight />
              </Button>
            </Link>
          </div>
        </article>

        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 relative mx-auto p-8 rounded-md">
          <Spotlight
            className="grid  gap-2 grid-cols-12"
            CursorFlowGradient={false}
          >
            {homeComponents?.map((component, index) => {
              return (
                <SpotLightItem
                  className={`${component.className} ${
                    component?.id && index === 6 ? ' lg:block hidden ' : ' '
                  } ${
                    component?.id && index === 12 ? ' sm:block hidden ' : ' '
                  }`}
                  key={index}
                >
                  <div
                    className={`relative rounded-lg  dark:bg-home-dark bg-gray-100 dark:border-none border w-full lg:h-[400px] md:h-[350px] h-[300px] mx-auto`}
                  >
                    <a
                      href={component.link}
                      className="absolute h-10 w-10 dark:bg-gray-800 top-2 bg-gray-200 right-2 z-10 rounded-md grid place-content-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="dark:stroke-gray-300 dark:hover:stroke-gray-100 stroke-gray-700 hover:stroke-gray-900"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                    </a>
                    {component?.componentSrc && component.componentSrc}
                    {component?.iframeSrc && (
                      <iframe
                        src={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${component?.iframeSrc}`}
                        className="w-full h-[400px] rounded-lg overflow-hidden "
                        loading="lazy"
                      />
                    )}
                  </div>
                </SpotLightItem>
              )
            })}
          </Spotlight>
        </div>
        <div className="flex h-screen overflow-hidden top-0 left-0  inset-0  -z-10 absolute">
          {blocks}
        </div>
      </section>
    </>
  )
}

export default HeroSec

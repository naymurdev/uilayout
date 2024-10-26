'use client';
import React, { useEffect, useRef, useState } from 'react';
import AnimatedText from '@/components/core/cursor-follow-text';
import Link from 'next/link';

function HomeFooter() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // const bgRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     if (bgRef.current) {
  //       const rect = bgRef.current.getBoundingClientRect()
  //       setMousePosition({
  //         x: event.clientX - rect.left,
  //         y: event.clientY - rect.top,
  //       })
  //     }
  //   }

  //   window.addEventListener('mousemove', handleMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])
  return (
    <>
      <footer
        // style={
        //   {
        //     '--bg-mouse-x': `${mousePosition.x}px`,
        //     '--bg-mouse-y': `${mousePosition.y}px`,
        //   } as React.CSSProperties
        // }
        // ref={bgRef}
        className='footer-bg relative border 2xl:h-[550px] h-fit lg:pb-24 w-[95%] mx-auto mb-8 rounded-lg overflow-hidden radial-gradient-bg
                   [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
                   dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]'
      >
        <div className='gap-10 sm:flex justify-between p-5 2xl:py-10 py-5 dark:bg-[#4c61ff]   bg-blue-500 rounded-sm rounded-b-none text-white'>
          <div className='w-fit flex-col  flex  justify-center'>
            <div className='2xl:w-24 2xl:h-24 w-20 h-20 ml-3 bg-white  rounded-sm before:absolute relative before:w-full before:h-full before:bg-white/50  before:rounded-md before:-top-3 before:-left-3'></div>
            <article className='py-2  2xl:w-80 w-64  space-y-1'>
              <h1 className='newFont text-3xl font-bold'>UI-LAYOUT</h1>
              <p className='text-sm  leading-[120%] '>
                Copy and paste designs that you love to have on your website.
                Don&apos;t forget to share them with your friends. I&apos;ll
                bring more and more components that really make sense for your
                design.
              </p>
            </article>
          </div>
          <div className='lg:flex hidden flex-wrap  gap-8 w-full py-8 2xl:text-base text-sm '>
            <ul>
              <Link
                href='/components/accordion'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Accordion
              </Link>
              {/* <li>Accordion </li> */}
              <Link
                href='/components/animated-beam'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Animated Beam
              </Link>
              <Link
                href='/components/buttons'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Buttons
              </Link>
              <Link
                href='/components/faqs'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Animated FAQs
              </Link>
              <Link
                href='/components/clip-path-image'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Clip Path Image
              </Link>
              <Link
                href='/components/globe'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Globe Animation
              </Link>
            </ul>
            <ul>
              <Link
                href='/components/gradient-border'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Gradient Border
              </Link>
              <Link
                href='/components/grid'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                CSS Grid
              </Link>
              <Link
                href='/components/horizontal-scroll'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Horizontal Scroll
              </Link>
              <Link
                href='/components/hover-cards'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Hover Cards
              </Link>
              <Link
                href='/components/image-accordions'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Image Accordion
              </Link>
              <Link
                href='/components/image-masking'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Image Masking
              </Link>
            </ul>
            <ul>
              <Link
                href='/components/image-mousetrail'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Image Mousetrail
              </Link>
              <Link
                href='/components/infinity-brand'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Infinity Brand
              </Link>
              <Link
                href='/components/magnified-doc'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Magnified Doc
              </Link>
              <Link
                href='/components/marquee'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Marquee
              </Link>
              <Link
                href='/components/modal'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Animated Modal
              </Link>

              <Link
                href='/components/noise'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Noise Effect
              </Link>
            </ul>
            <ul>
              <Link
                href='/components/products-cards'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Products Cards
              </Link>
              <Link
                href='/components/progressive-carousel'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Progressive Carousel
              </Link>
              <Link
                href='/components/drawer'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Responsive Drawer
              </Link>
              <Link
                href='/components/sidebar'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Responsive Sidebar
              </Link>
              <Link
                href='/components/smooth-scroll'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Smooth-Scroll
              </Link>
              <Link
                href='/components/sparkles'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Sparkles
              </Link>
            </ul>
            <ul>
              <Link
                href='/components/sparkles-title'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Sparkles Title
              </Link>
              <Link
                href='/components/spotlight-cards'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Spotlight Cards
              </Link>
              <Link
                href='/components/sticky-scroll'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Sticky Scroll
              </Link>
              <Link
                href='/components/tabs'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
              >
                Animated Tabs
              </Link>
              <Link
                href='/components/embla-carousel'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Carousel
              </Link>
              <Link
                href='/components/video-masking'
                className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
              >
                Video Masking
              </Link>
            </ul>
          </div>
          <div className='sm:block flex sm:mt-0 mt-4  gap-2 sm:w-auto w-full sm:space-y-2 relative z-[1]'>
            <a
              href='https://www.linkedin.com/in/naymur-rahman/'
              target='_blank'
              className='bg-gray-50 sm:w-auto w-full   grid place-content-center 2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='62'
                viewBox='0 0 70 62'
                fill='none'
                className='sm:w-24 w-full  text-blue-500'
              >
                <path
                  d='M55.1291 0H65.8629L42.4127 26.2626L70 62H48.3994L31.481 40.3254L12.1226 62H1.38228L26.4646 33.9092L0 0H22.149L37.4417 19.8114L55.1291 0ZM51.3619 55.7046H57.3096L18.9172 5.96472H12.5347L51.3619 55.7046Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
            <a
              href='https://x.com/naymur_dev'
              target='_blank'
              className='bg-gray-50 sm:w-auto w-full  grid place-content-center  2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 80 78'
                fill='none'
                className='sm:w-24 w-full text-blue-500'
              >
                <path
                  d='M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='lg:block hidden'>
          <AnimatedText text='UI-LAYOUT' />
        </div>
      </footer>
    </>
  );
}

export default HomeFooter;

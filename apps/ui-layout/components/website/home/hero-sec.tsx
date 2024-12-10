'use client';
import { ChevronsRight, MoveRight } from 'lucide-react';
import { Button } from '@/components/website/ui/button';
import React, { useEffect, useMemo, useState } from 'react';
import HomeProgressSlider from './progress-carousel';
import HomeMouseTrail from './home-mousetrail';
import HomeBtn from './home-btn';
import HomeMagnifiedDocOneFile from './home-magnified-doc';
import HomeAccordionModal from './home-accordion-modal';
import HomeModal from './home-image-modal';
import HomeTab from './home-tab';
import HomeSlider from './home-carousel';
import NewItemsLoading from './new-items-loading';
import HomeClipPath from './home-clippath';
import Image from 'next/image';
import HomePasswordInput from './home-password';
import HomePhoneInput from './home-phone-input';
import HomeDateTimePicker from './home-datetime-picker';
import HomeYouutbTags from './home-youtube-tags';
import HomeFileUpload from './home-file-upload';
import HomeTextMarquee from './home-text-marque';
import Home3dBlob from './home-3d-blob';
import HomeStackingCard from './home-stacking-card';
import HomeImageReveal from './home-image-reveal';
import HomeDragItems from './home-drag-items';
import HomeBeam from './home-beam';
import HomeRangeSlider from './home-range-slider';
import HomeBuyMeCoffee from './home-buyme-coffe';
import Link from 'next/link';
const homeComponents = [
  {
    id: 1,
    link: '/components/linear-card',

    componentSrc: <HomeAccordionModal />,

    className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4',
  },
  {
    id: 2,
    link: '/components/image-mousetrail',

    componentSrc: <HomeMouseTrail />,
    className:
      ' lg:col-start-5  sm:inline-block hidden col-span-9  lg:col-end-11  lg:row-start-2  row-start-1 2xl:row-end-7 lg:row-end-6 row-end-9 row-span-4',
  },
  {
    id: 3,
    link: '/components/tabs',

    componentSrc: <HomeTab />,
    className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4 ',
  },

  {
    id: 4,
    link: '/components/clip-path',

    componentSrc: <HomeClipPath />,
    className:
      '2xl:col-span-4 md:col-span-4 sm:col-span-5 col-span-14 lg:col-start-1 lg:col-end-5 lg:row-start-5 2xl:row-end-9 lg:row-end-7 row-span-4',
  },
  {
    id: 5,
    link: '/components/tabs',

    componentSrc: <HomePasswordInput />,
    className:
      ' lg:col-start-5 md:col-span-10 sm:col-span-9 col-span-14   xl:col-end-9 lg:col-end-10  2xl:row-start-7 lg:row-start-6 2xl:row-end-9 lg:row-end-7 lg:row-span-4 row-span-2',
  },
  {
    id: 6,
    link: '/components/password',

    componentSrc: <HomePhoneInput />,
    className:
      ' xl:col-start-9 lg:col-start-10 md:col-span-10 sm:col-span-9 col-span-14  xl:col-end-13 lg:col-end-15 2xl:row-start-7 lg:row-start-6 2xl:row-end-9   lg:row-end-7 lg:row-span-4 row-span-2',
  },
  {
    id: 7,
    link: '/components/media-modal',

    componentSrc: <HomeModal />,
    className:
      'lg:col-start-11 sm:col-span-5 col-span-7  lg:col-end-15 lg:row-start-5 2xl:row-end-7 lg:row-end-6 row-span-4',
  },
  {
    id: 8,
    link: '/components/buttons',

    componentSrc: <HomeBtn />,
    className:
      'xl:col-start-13 lg:col-start-6  lg:col-end-15  2xl:row-start-7 lg:row-start-20 xl:row-start-6 lg:row-span-4 2xl:row-end-11  xl:row-end-10  lg:row-end-21 sm:col-span-9 col-span-7 sm:row-span-2 row-span-4',
  },
  {
    id: 9,
    link: '/components/datetime-picker',

    componentSrc: <HomeDateTimePicker />,
    className:
      'xl:col-span-4 lg:col-span-7 sm:col-span-9 col-span-14 lg:row-auto row-span-2 ',
  },
  {
    id: 10,
    link: '/components/tags-input',

    componentSrc: <HomeYouutbTags />,
    className: 'xl:col-span-4 sm:col-span-7 col-span-14 lg:row-auto row-span-2',
  },
  {
    id: 11,
    link: '/components/file-upload',

    componentSrc: <HomeFileUpload />,
    className:
      'xl:col-start-9 lg:col-start-9  xl:col-end-13 lg:col-end-15 2xl:row-start-9 xl:row-start-7 lg:row-start-8 2xl:row-end-11  xl:row-end-10  lg:row-end-9 row-span-2 sm:col-span-7 col-span-14',
  },
  {
    id: 12,
    link: '/components/text-marquee',

    componentSrc: <HomeTextMarquee />,
    className:
      'lg:col-start-1  lg:col-end-9 sm:col-span-8 col-span-14  lg:row-span-4 2xl:row-start-10 lg:row-start-8 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
  },

  {
    id: 13,
    link: '/components/image-reveal',

    componentSrc: <HomeImageReveal />,
    className:
      'lg:col-span-6 lg:inline-block hidden sm:col-span-6 col-span-14 lg:row-span-4 2xl:row-start-11 xl:row-start-10 lg:row-start-9 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
  },
  {
    id: 14,
    link: '/components/magnified-doc',

    componentSrc: <HomeMagnifiedDocOneFile />,
    className: 'xl:col-span-4 lg:col-span-5 sm:col-span-6  col-span-14',
  },
  {
    id: 15,
    link: '/components/3d-blob',

    componentSrc: <Home3dBlob />,
    className: 'lg:col-span-4  sm:col-span-7 col-span-14',
  },
  {
    id: 16,
    link: '/components/stacking-card',

    componentSrc: <HomeStackingCard />,
    className: 'xl:col-span-6 lg:col-span-5 sm:col-span-7 col-span-14',
  },
  {
    id: 17,
    link: '/components/carousel',

    componentSrc: <HomeSlider />,
    className: 'xl:col-span-10 lg:col-span-9 col-span-14 row-span-4',
  },
  {
    id: 18,
    link: '/components/drag-items',

    componentSrc: <HomeDragItems />,
    className:
      'xl:col-span-4  lg:col-span-5  sm:col-span-7 col-span-14 row-span-4',
  },

  {
    id: 19,
    link: '/components/animated-beam',

    componentSrc: <HomeBeam />,
    className:
      'lg:col-start-1 xl:col-end-5 lg:col-end-6 sm:col-span-7 col-span-14  row-span-2 ',
  },

  {
    id: 20,
    link: '/components/progressive-carousel',

    componentSrc: <HomeProgressSlider />,
    className:
      'xl:col-span-4 lg:col-span-5  sm:col-span-7 col-span-14 lg:row-span-4 row-span-2 ',
  },
  {
    id: 21,
    link: '/components/range-slider',

    componentSrc: <HomeRangeSlider />,
    className:
      'lg:col-start-1 xl:col-end-5 lg:col-end-6 lg:row-span-2 col-span-14 ',
  },
  {
    id: 22,
    link: '/components/buy-me-coffee',

    componentSrc: <HomeBuyMeCoffee />,
    className:
      'xl:col-start-9 lg:col-start-11 sm:col-span-7 col-span-14 xl:col-end-12 lg:col-end-15 2xl:row-start-18 xl:row-start-17 lg:row-start-16   row-span-4 ',
  },
  {
    id: 23,
    link: '/components/sparkles-title',

    imageSrc: '/sparkelss.jpg',
    className:
      'xl:col-start-12 xl:col-end-15 lg:col-span-5  2xl:row-start-18 xl:row-start-17  xl:row-span-4  sm:col-span-7 col-span-14 lg:row-auto row-span-4 ',
  },
];
type Profile = {
  href: string;
  alt: string;
  src: string;
  translateX: string; // Add the translateX values dynamically
};

const profiles: Profile[] = [
  {
    href: 'https://github.com/sitek94',
    alt: 'Maciek',
    src: '/Maciek.jpeg',
    translateX: 'translate-x-0',
  },
  {
    href: 'https://github.com/slydeveloper',
    alt: 'Sokolowski',
    src: '/Sokolowski.jpeg',
    translateX: '-translate-x-4',
  },
  {
    href: 'https://github.com/mmNalaka',
    alt: 'Nalaka',
    src: '/nalaka.png',
    translateX: '-translate-x-8',
  },
  {
    href: 'https://github.com/rafaelzomer',
    alt: 'Rafael',
    src: '/Rafael.jpeg',
    translateX: '-translate-x-12',
  },
  {
    href: 'https://github.com/yeabnoah',
    alt: 'Yeabsra',
    src: '/Yeabsra.jpeg',
    translateX: '-translate-x-16',
  },
];
function HeroSec() {
  const [blocks, setBlocks] = useState([]);

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      10: new Set([3]),
      12: new Set([7]),
      15: new Set([6]),
      14: new Set([5]),
      13: new Set([4]),
    }),
    [] // No dependencies, so `activeDivs` will only be created once
  );

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.06; // Using 6vw for the block size
      const amountOfBlocks = Math.ceil(innerHeight / blockSize);

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className='w-[6vw] h-full'>
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
      ));
      // @ts-ignore
      setBlocks(newBlocks);
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs]);
  return (
    <>
      <section className='min-h-screen sm:py-24 pb-24 pt-16 overflow-hidden  relative  '>
        <div className='absolute inset-0 -z-0 h-screen w-full  dark:bg-[radial-gradient(#1b1b1b_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <div className='absolute inset-0 top-0 left-0  h-screen w-full items-center px-5 py-24  bg-gradient-to-t dark:from-black from-white from-0% to-transparent to-60%'></div>
        <div className='absolute inset-0 top-0 left-0  h-screen w-full items-center px-5 py-24 dark:[background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#000000_100%)] [background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#ffffff_100%)]'></div>
        <div className='lg:container xl:px-0 px-3 mx-auto  gap-2'>
          <article className='grid gap-4 pt-20 relative z-10 xl:pb-0 pb-2 sm:px-0 px-4'>
            <NewItemsLoading />
            <h1 className='  2xl:text-7xl xl:text-6xl md:text-6xl sm:text-5xl text-[1.7rem] sm:leading-normal leading-[100%] text-center font-semibold '>
              <span className=''>The Components Your</span> <br />
              <span className=' bg-background mt-3 relative rounded-md  w-fit inline-block px-1.5 py-0.5 border  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[""] before:opacity-[0.09] before:z-10 before:pointer-events-none before:bg-[url("/noise.gif")]'>
                <span className='bg-gradient-to-t     from-[#a2b6fa] to-[#334cec] bg-clip-text text-transparent  '>
                  Website
                </span>
              </span>{' '}
              Deserve!
            </h1>
            <p className='mx-auto 2xl:w-[500px] lg:w-[450px] 2xl:text-lg  sm:w-[80%] text-center sm:text-base text-sm'>
              50+ Free beautifull interactive react/nextjs component based on
              tailwindcss, framer-motion, gsap, threejs etc
            </p>
            <div className='flex gap-2 justify-center items-center'>
              <a
                href='/components'
                className='flex items-center gap-2 w-fit  text-white bg-gradient-to-l from-[#6175f8]  to-[#334cec] border sm:px-4 px-2 rounded-sm py-2 '
              >
                Browse Component
                <MoveRight />
              </a>
              <a href='/get-started' className='sm:inline-block hidden'>
                <Button className=' rounded-full px-4'>
                  Get Started
                  <ChevronsRight />
                </Button>
              </a>
            </div>
            <div className='flex w-fit mx-auto sm:items-center justify-center mt-2 lg:pb-0 pb-10 sm:translate-x-8'>
              <div className='flex w-fit sm:translate-x-0 translate-x-8'>
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.href}
                    target='_block'
                    className={`bg-background p-1 flex-shrink-0 rounded-full relative z-[1] hover:z-[2] ${profile.translateX}`}
                  >
                    <Image
                      src={profile.src}
                      alt={profile.alt}
                      width={300}
                      height={300}
                      className='2xl:w-12 2xl:h-12 xl:w-10 w-8 h-8 xl:h-10 rounded-full'
                    />
                  </a>
                ))}
              </div>
              <div className='sm:-translate-x-12  sm:pt-0 pt-2'>
                <div className='flex 2xl:gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5 w-5 text-amber-300'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5 w-5 text-amber-300'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5 w-5 text-amber-300'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5 w-5 text-amber-300'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5 w-5 text-amber-300'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
                <div className='sm:text-sm text-xs font-medium'>
                  Trusted by 1000+ users
                </div>
              </div>
            </div>
          </article>

          <div className='relative mx-auto  grid grid-cols-14  gap-4 lg:-mt-10  '>
            {homeComponents?.map((component, index) => {
              return (
                <div className={`${component.className}`} key={index}>
                  <div
                    className={`relative group  h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline`}
                  >
                    <Link
                      href={component.link}
                      className='absolute top-1 transition-all group-hover:opacity-100 opacity-0 text-[0.85rem] px-2 py-0.5 dark:bg-gray-800  bg-gray-200 right-2 z-10 rounded-md grid place-content-center cursor-pointer'
                    >
                      Preview
                    </Link>
                    <>
                      {component?.imageSrc && (
                        <Image
                          src={component.imageSrc}
                          alt='sparkes'
                          width={400}
                          height={400}
                          className='w-full h-full object-cover rounded-xl'
                        />
                      )}
                    </>
                    {/* )} */}

                    <>{component?.componentSrc && component.componentSrc}</>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex h-screen overflow-hidden top-0 left-0  inset-0  -z-10 absolute'>
          {blocks}
        </div>
      </section>
    </>
  );
}

export default HeroSec;

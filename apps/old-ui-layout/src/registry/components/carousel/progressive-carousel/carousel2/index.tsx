'use client'
import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '../progress-carousel'
import { Home } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

const items = [
  {
    icon: <Home />,
    img: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Bridge',
    desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
    sliderName: 'bbridge',
  },
  {
    icon: <Home />,
    img: 'https://images.unsplash.com/photo-1435002770785-eb26830cd829?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Mountains View',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'bmountains',
  },
  {
    icon: <Home />,
    img: 'https://images.unsplash.com/photo-1524435988816-63f50a6d5232?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Autumn',
    desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
    sliderName: 'bautumn',
  },
  {
    icon: <Home />,
    img: 'https://images.unsplash.com/photo-1525225681890-47ba2adb7afa?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Foggy',
    sliderName: 'bfoggy',
    desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
  },
]
export default function index() {
  const isMobile = useMediaQuery('(min-width: 640px)')
  return (
    <>
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider="bbridge"
        className="sm:flex "
      >
        <SliderBtnGroup className="sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[500px] h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden ">
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className="text-left  p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1"
              progressBarClass="left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4  before:h-full before:w-4 before:"
            >
              <h2 className="relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2">
                {item.title}
              </h2>
              <p className="text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2">
                {item.desc}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
        <SliderContent className="w-full">
          {items.map((item, index) => (
            <SliderWrapper
              className="h-full"
              key={index}
              value={item?.sliderName}
            >
              <Image
                className=" h-[500px] object-cover"
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </>
  )
}

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

const items = [
  {
    img: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Bridge',
    desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
    sliderName: 'bridge',
  },
  {
    img: 'https://images.unsplash.com/photo-1435002770785-eb26830cd829?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Mountains View',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'mountains',
  },
  {
    img: 'https://images.unsplash.com/photo-1524435988816-63f50a6d5232?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Autumn',
    desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
    sliderName: 'autumn',
  },
  {
    img: 'https://images.unsplash.com/photo-1525225681890-47ba2adb7afa?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Foggy',
    sliderName: 'foggy',
    desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
  },
]
export default function index() {
  return (
    <>
      <ProgressSlider vertical={false} activeSlider="bridge">
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <Image
                className="rounded-xl 2xl:h-[650px] h-[550px] object-cover"
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className="absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md">
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className="text-left  p-3 border-r"
              progressBarClass="dark:bg-black bg-white h-full"
            >
              <h2 className="relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm font-medium  line-clamp-2">{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </>
  )
}

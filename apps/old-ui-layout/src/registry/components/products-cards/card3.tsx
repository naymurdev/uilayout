'use client'
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import Carousel, {
  Slider,
  SliderContainer,
} from '@/registry/components/carousel/embla/carousel'
import { motion } from 'framer-motion'
import { CheckIcon, Heart } from 'lucide-react'
import { EmblaOptionsType } from 'embla-carousel'
import { CardArr } from '@/components/common/constant'

function index() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }
  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <div className="w-[350px] mx-auto ">
      <div className="dark:bg-white bg-gray-100 rounded-md p-2">
        <div className="w-full h-72  relative">
          <motion.button
            className="absolute top-2 right-2 z-20 text-2xl text-white"
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=" fill-white" />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <Carousel options={OPTIONS} isAutoPlay={true} className="h-full">
            <SliderContainer className="gap-2 h-full">
              {CardArr.map((data, index) => (
                <Slider key={index} className="w-full h-full">
                  <Image
                    src={data?.img}
                    alt="shoes"
                    width={400}
                    height={400}
                    className={`w-full h-full rounded-md  object-cover  `}
                  />
                </Slider>
              ))}
            </SliderContainer>
          </Carousel>
        </div>
        <article className="text-black pt-2 p-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl text-blue-500">
              Nike Air Max
            </h1>
            <span className="font-medium text-xl text-blue-500">$39</span>
          </div>
          <p className="text-xs pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>

          <button className="w-full text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md">
            Add to cart
          </button>
        </article>
      </div>
    </div>
  )
}

export default index

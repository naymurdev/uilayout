import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, SliderProgress } from './carousel'
import Image from 'next/image'

function AlignSlider() {
  const OPTIONS: EmblaOptionsType = {}
  return (
    <>
      <div className="sm:py-10">
        <h1 className="sm:text-2xl text-xl py-4 sm:px-10 px-2">
          Get An Beautiful Carousel for your layout.
        </h1>
        <Carousel className="bg-transparent sm:px-10 px-2" options={OPTIONS}>
          <SliderContainer className="gap-2">
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-3/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-sko8Tvd7O1A-unsplash_rkwtfs.jpg'
                  }
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[40%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160658/taitopia-render-rA13-oNSfh4-unsplash_midanj.jpg'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[30%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160657/cyril-blackbird-35ZdEWfAWsU-unsplash_tzvot7.jpg'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>

            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-4/5 2xl:w-[80%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-ueM-K_zuSlI-unsplash_kkrnky.jpg'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-umiOsSjP8YI-unsplash_e6adl2.jpg'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white 2xl:h-[500px] xl:h-[400px] h-full w-full">
                <Image
                  src={
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160659/ayush-kumar-Z5i77NdR2Fc-unsplash_ab4xth.jpg'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-2">
            <SliderProgress />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default AlignSlider

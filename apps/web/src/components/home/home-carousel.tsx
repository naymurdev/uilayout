import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
} from '@/registry/components/carousel/embla/carousel'
import Image from 'next/image'

function HomeSlider() {
  const OPTIONS: EmblaOptionsType = {}
  return (
    <>
      <>
        <Carousel className="bg-transparent p-4" options={OPTIONS}>
          <SliderContainer className="gap-2">
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-3/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white  lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1706547343914-2b14529049ed?q=80&w=800&auto=format&fit=crop'
                  }
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[40%]">
              <div className="dark:bg-black bg-white  lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1721544799602-708feb19db98?q=80&w=832&auto=format&fit=crop'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[30%]">
              <div className="dark:bg-black bg-white   lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1713019511375-4db954c8c694?q=80&w=800&auto=format&fit=crop'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>

            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-4/5 2xl:w-[80%]">
              <div className="dark:bg-black bg-white   lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1659940316181-d34bf23ae835?q=80&w=8080&auto=format&fit=crop'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white  lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1709633694594-30f42ddbf669?q=80&w=800&auto=format&fit=crop'
                  }
                  width={1200}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]">
              <div className="dark:bg-black bg-white   lg:h-[350px] md:h-[300px] h-[260px] w-full">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=800&auto=format&fit=crop'
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
      </>
    </>
  )
}

export default HomeSlider

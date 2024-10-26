import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, SliderProgress } from './carousel'
import Image from 'next/image'
import { items } from '@/components/common/constant'

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
                    'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop'
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
                    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop'
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
                    'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop'
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
                    'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop'
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
                    'https://images.unsplash.com/photo-1519031465998-192aba33f8ad?q=80&w=800&auto=format&fit=crop'
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
                    'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=800&auto=format&fit=crop'
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

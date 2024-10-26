import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, SliderDotButton } from './carousel'
import Image from 'next/image'

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <div className="py-10">
        <h1 className="text-center text-5xl font-semibold pb-4">Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
            <Slider className="w-full">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default index

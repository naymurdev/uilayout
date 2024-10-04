import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, SliderDotButton } from './carousel'
import Image from 'next/image'

function ClassName() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <div className="xl:py-20 sm:py-10 py-5 dark:bg-black bg-white">
        <Carousel options={OPTIONS} activeSlider>
          <SliderContainer className="gap-2 ">
            <Slider className="embla__slide w-4/5">
              <div className=" h-96 pl-2">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop'
                  }
                  width={800}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </Slider>
            <Slider className="embla__slide  w-4/5">
              <div className="h-96 ">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop'
                  }
                  width={800}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </Slider>
            <Slider className="embla__slide  w-4/5">
              <div className=" h-96 ">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop'
                  }
                  width={800}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </Slider>
            <Slider className="embla__slide w-4/5">
              <div className=" h-96 ">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop'
                  }
                  width={800}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-2">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default ClassName

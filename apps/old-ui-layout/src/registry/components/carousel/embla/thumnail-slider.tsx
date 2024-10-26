import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, ThumsSlider } from './carousel'
import Image from 'next/image'

function ThumnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false }
  return (
    <>
      <div className="md:py-20 sm:py-10 py-5 2xl:w-[70%] dark:bg-base-dark bg-white sm:w-[80%] w-[90%] mx-auto">
        <Carousel
          options={OPTIONS}
          className="pt-10 relative"
          isAutoPlay={true}
        >
          <SliderContainer className="gap-2">
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1519031465998-192aba33f8ad?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1519031465998-192aba33f8ad?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={
                'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop'
              }
            >
              <Image
                src={
                  'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  )
}

export default ThumnailSlider

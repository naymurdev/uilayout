import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderSnapDisplay,
} from './carousel'
import Image from 'next/image'

function NumberSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false }
  return (
    <>
      <div className="py-20">
        <Carousel options={OPTIONS} className="relative">
          <SliderContainer className="gap-2">
            <Slider className="w-[60%]">
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
            <Slider className="w-[50%]">
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
            <Slider className="w-[50%]">
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

            <Slider className="w-[80%]">
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
            <Slider className="w-[50%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
            <Slider className="w-[70%]">
              <div className="dark:bg-black bg-white h-[500px] w-full">
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
          <div className="absolute bottom-3 right-3 text-white  w-20 h-12 grid place-content-center dark:border-white border-2 rounded-sm z-10 dark:bg-black bg-white">
            <SliderSnapDisplay className="mix-blend-difference" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default NumberSlider

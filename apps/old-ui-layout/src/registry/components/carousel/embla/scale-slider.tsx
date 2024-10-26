import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from './carousel'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <>
      <div className="py-20 dark:bg-black bg-white ">
        <Carousel options={OPTIONS} isScale={true}>
          <SliderContainer>
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[500px] sm:h-full h-[300px]">
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
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[500px] sm:h-full h-[300px]">
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
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[500px] sm:h-full h-[300px]">
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
            <Slider className="sm:w-[65%] W-[90%]">
              <div className="2xl:h-[500px] sm:h-full h-[300px]">
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
          <SliderPrevButton className="absolute top-[50%] p-2 border-2 rounded-full left-4 dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronLeft className="w-8 h-8 " />
          </SliderPrevButton>
          <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[50%] dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronRight className="w-8 h-8" />
          </SliderNextButton>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default index

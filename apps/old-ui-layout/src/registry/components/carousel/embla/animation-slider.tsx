import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
  SliderProgress,
} from './carousel'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react'

function AnimationSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false }
  return (
    <>
      <div className="py-20">
        <Carousel options={OPTIONS} className="pt-10 relative">
          <SliderContainer className="gap-2">
            <Slider className="w-full animated_slider">
              <div className="h-[70vh] w-full">
                <div className=" slide-heading absolute top-0 h-full grid place-items-center w-full  text-center py-2">
                  <div className="bg-white/40 p-4 backdrop-blur-sm rounded-md w-[60%] mx-auto text-black">
                    <h1 className="text-4xl font-bold uppercase">
                      Modern Architecture
                    </h1>
                    <p className="font-medium py-2 leading-[100%]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur expedita nostrum molestiae ab neque saepe,
                      voluptate maxime optio ad dolorem.
                    </p>
                  </div>
                </div>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=800&auto=format&fit=crop'
                  }
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full object-cover rounded-lg w-full"
                />
              </div>
            </Slider>
            <Slider className="w-full animated_slider">
              <div className="h-[70vh] w-full">
                <div className="  slide-heading absolute top-0 h-full grid place-items-center w-full  text-center py-2">
                  <div className="bg-white/40 p-4 backdrop-blur-sm rounded-md w-[60%] mx-auto text-black">
                    <h1 className="text-4xl font-bold uppercase">
                      Beautifull Architecture
                    </h1>
                    <p className="font-medium py-2 leading-[100%]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur expedita nostrum molestiae ab neque saepe,
                      voluptate maxime optio ad dolorem.
                    </p>
                  </div>
                </div>
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
            <Slider className="w-full animated_slider">
              <div className="h-[70vh] w-full">
                <div className="  slide-heading absolute top-0 h-full grid place-items-center w-full  text-center py-2">
                  <div className="bg-white/40 p-4 backdrop-blur-sm rounded-md w-[60%] mx-auto text-black">
                    <h1 className="text-4xl font-bold uppercase">
                      Yoyo Architecture
                    </h1>
                    <p className="font-medium py-2 leading-[100%]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur expedita nostrum molestiae ab neque saepe,
                      voluptate maxime optio ad dolorem.
                    </p>
                  </div>
                </div>
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
            <Slider className="w-full animated_slider">
              <div className=" h-[70vh] w-full">
                <div className="  slide-heading absolute top-0 h-full grid place-items-center w-full  text-center py-2">
                  <div className="bg-white/40 p-4 backdrop-blur-sm rounded-md w-[60%] mx-auto text-black">
                    <h1 className="text-4xl font-bold uppercase">
                      Bhai Architecture
                    </h1>
                    <p className="font-medium py-2 leading-[100%]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur expedita nostrum molestiae ab neque saepe,
                      voluptate maxime optio ad dolorem.
                    </p>
                  </div>
                </div>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop'
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
          <SliderPrevButton className="absolute top-[50%] p-2 border-2 rounded-full left-4 dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronLeft className="w-8 h-8 " />
          </SliderPrevButton>
          <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[50%] dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
            <ChevronRight className="w-8 h-8" />
          </SliderNextButton>
        </Carousel>
      </div>
    </>
  )
}

export default AnimationSlider

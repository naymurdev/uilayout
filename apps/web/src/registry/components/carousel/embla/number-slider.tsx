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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-sko8Tvd7O1A-unsplash_rkwtfs.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160658/taitopia-render-rA13-oNSfh4-unsplash_midanj.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160657/cyril-blackbird-35ZdEWfAWsU-unsplash_tzvot7.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-ueM-K_zuSlI-unsplash_kkrnky.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-umiOsSjP8YI-unsplash_e6adl2.jpg'
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
          <div className="absolute bottom-3 right-3 text-white  w-20 h-12 grid place-content-center dark:border-white border-2 rounded-sm z-10 dark:bg-black bg-white">
            <SliderSnapDisplay className="mix-blend-difference" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default NumberSlider

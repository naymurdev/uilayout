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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/daria-averina-8RLGbr2n1g8-unsplash_fdmfgl.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash_bm75b5.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161798/austin-schmid-mz4u0rwzvAU-unsplash_obmca2.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161797/pexels-pixabay-259637_lpt4le.jpg'
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

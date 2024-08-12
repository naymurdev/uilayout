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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/daria-averina-8RLGbr2n1g8-unsplash_fdmfgl.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash_bm75b5.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161798/austin-schmid-mz4u0rwzvAU-unsplash_obmca2.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161797/pexels-pixabay-259637_lpt4le.jpg'
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

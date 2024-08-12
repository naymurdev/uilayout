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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/daria-averina-8RLGbr2n1g8-unsplash_fdmfgl.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash_bm75b5.jpg'
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
                    'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161798/austin-schmid-mz4u0rwzvAU-unsplash_obmca2.jpg'
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

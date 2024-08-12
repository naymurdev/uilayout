import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { Slider, SliderContainer, ThumsSlider } from '.'
import Image from 'next/image'

function ThumnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false }
  return (
    <>
      <div className="py-20 2xl:w-[70%] w-[80%] mx-auto">
        <Carousel options={OPTIONS} className="pt-10 relative">
          <SliderContainer className="gap-2">
            <Slider slideSize="100%" className="h-[400px] w-full" thumnailSrc={"https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160658/milad-fakurian-9xCvw544PWQ-unsplash_scsmit.jpg"}>
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160658/milad-fakurian-9xCvw544PWQ-unsplash_scsmit.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full" thumnailSrc={'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160659/ayush-kumar-Z5i77NdR2Fc-unsplash_ab4xth.jpg'}>
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160659/ayush-kumar-Z5i77NdR2Fc-unsplash_ab4xth.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full"  thumnailSrc={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-GCRJZzsIoug-unsplash_heggb5.jpg'
                }>
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-GCRJZzsIoug-unsplash_heggb5.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full" 
              thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-umiOsSjP8YI-unsplash_e6adl2.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-umiOsSjP8YI-unsplash_e6adl2.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full"
              thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-sko8Tvd7O1A-unsplash_rkwtfs.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715160660/taitopia-render-sko8Tvd7O1A-unsplash_rkwtfs.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full"
               thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/daria-averina-8RLGbr2n1g8-unsplash_fdmfgl.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/daria-averina-8RLGbr2n1g8-unsplash_fdmfgl.jpg'
                }
                width={1400}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full"
               thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash_bm75b5.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161337/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash_bm75b5.jpg'
                }
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className="h-[400px] w-full"
              thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161798/austin-schmid-mz4u0rwzvAU-unsplash_obmca2.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161798/austin-schmid-mz4u0rwzvAU-unsplash_obmca2.jpg'
                }
                width={1200}
                height={800}
                alt="image"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider slideSize="100%" className=" h-[400px] w-full"
               thumnailSrc={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161797/pexels-pixabay-259637_lpt4le.jpg'
              }
            >
              <Image
                src={
                  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161797/pexels-pixabay-259637_lpt4le.jpg'
                }
                width={1200}
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

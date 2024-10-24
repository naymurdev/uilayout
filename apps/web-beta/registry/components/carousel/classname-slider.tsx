import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function ClassName() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <>
        <Carousel options={OPTIONS} activeSlider>
          <SliderContainer className='gap-2 '>
            <Slider className='embla__slide w-4/5'>
              <div className='h-[28em]  pl-2'>
                <Image
                  src={imgPreview.img6}
                  width={800}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg'
                />
              </div>
            </Slider>
            <Slider className='embla__slide  w-4/5'>
              <div className='h-[28em] '>
                <Image
                  src={imgPreview.img5}
                  width={800}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg'
                />
              </div>
            </Slider>
            <Slider className='embla__slide  w-4/5'>
              <div className=' h-[28em]  '>
                <Image
                  src={imgPreview.img1}
                  width={800}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg'
                />
              </div>
            </Slider>
            <Slider className='embla__slide w-4/5'>
              <div className=' h-[28em]  '>
                <Image
                  src={imgPreview.img2}
                  width={800}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg'
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className='flex justify-center py-2'>
            <SliderDotButton />
          </div>
        </Carousel>
      </>
    </>
  );
}

export default ClassName;

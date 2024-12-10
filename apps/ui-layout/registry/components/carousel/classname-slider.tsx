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
          <SliderContainer className='gap-2'>
            <Slider className='embla__slide w-4/5'>
              <div className='h-[28em] pl-2 bg-red-500 rounded-xl'></div>{' '}
              {/* Added red background and rounded corners */}
            </Slider>
            <Slider className='embla__slide w-4/5'>
              <div className='h-[28em] bg-blue-500 rounded-xl'></div>{' '}
              {/* Added blue background and rounded corners */}
            </Slider>
            <Slider className='embla__slide w-4/5'>
              <div className='h-[28em] bg-green-500 rounded-xl'></div>{' '}
              {/* Added green background and rounded corners */}
            </Slider>
            <Slider className='embla__slide w-4/5'>
              <div className='h-[28em] bg-yellow-500 rounded-xl'></div>{' '}
              {/* Added yellow background and rounded corners */}
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

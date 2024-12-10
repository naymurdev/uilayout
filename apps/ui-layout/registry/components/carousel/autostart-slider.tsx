import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <>
        <h1 className='text-center text-4xl font-semibold pb-4'>Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true} className='w-4/5 mx-auto'>
          <SliderContainer className='gap-2'>
            <Slider className='w-full'>
              <div className='bg-red-500 rounded-xl h-[400px] w-full'></div>{' '}
              {/* Red background with rounded corners */}
            </Slider>
            <Slider className='w-full'>
              <div className='bg-blue-500 rounded-xl h-[400px] w-full'></div>{' '}
              {/* Blue background with rounded corners */}
            </Slider>
            <Slider className='w-full'>
              <div className='bg-green-500 rounded-xl h-[400px] w-full'></div>{' '}
              {/* Green background with rounded corners */}
            </Slider>
            <Slider className='w-full'>
              <div className='bg-yellow-500 rounded-xl h-[400px] w-full'></div>{' '}
              {/* Yellow background with rounded corners */}
            </Slider>
          </SliderContainer>
          <div className='flex justify-center py-4'>
            <SliderDotButton />
          </div>
        </Carousel>
      </>
    </>
  );
}

export default index;

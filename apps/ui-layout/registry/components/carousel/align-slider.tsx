import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
} from '@/components/core/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function AlignSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <>
        <h1 className='sm:text-2xl text-xl py-4 sm:px-10 px-2'>
          Get An Beautiful Carousel for your layout.
        </h1>
        <Carousel className='bg-transparent sm:px-10 px-2' options={OPTIONS}>
          <SliderContainer className='gap-2'>
            <Slider className='w-4/5 sm:w-1/2 lg:w-2/5 xl:w-3/5 2xl:w-[50%]'>
              <div className='bg-red-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>
            <Slider className='w-4/5 sm:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[40%]'>
              <div className='bg-blue-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>
            <Slider className='w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[30%]'>
              <div className='bg-green-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>

            <Slider className='w-4/5 sm:w-1/2 lg:w-1/5 xl:w-4/5 2xl:w-[80%]'>
              <div className='bg-yellow-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>
            <Slider className='w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]'>
              <div className='bg-purple-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>
            <Slider className='w-4/5 sm:w-1/2 lg:w-1/5 xl:w-2/5 2xl:w-[50%]'>
              <div className='bg-pink-500 2xl:h-[400px] xl:h-[300px] h-full w-full rounded-xl'></div>{' '}
            </Slider>
          </SliderContainer>
          <div className='flex justify-center py-2'>
            <SliderProgress />
          </div>
        </Carousel>
      </>
    </>
  );
}

export default AlignSlider;

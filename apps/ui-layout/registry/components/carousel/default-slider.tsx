import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from '@/components/core/carousel';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { imgPreview } from '@/components/website/constant';

function DefaultSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <Carousel options={OPTIONS}>
        <SliderContainer>
          <Slider className='w-full'>
            <div className='bg-blue-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
          </Slider>
          <Slider className='w-full'>
            <div className='bg-green-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
          </Slider>
          <Slider className='w-full'>
            <div className='bg-yellow-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
          </Slider>
          <Slider className='w-full'>
            <div className='bg-red-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
          </Slider>
        </SliderContainer>
        <SliderPrevButton className='absolute top-[50%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
          <ChevronLeft className='w-8 h-8' />
        </SliderPrevButton>
        <SliderNextButton className='absolute right-4 p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
          <ChevronRight className='w-8 h-8' />
        </SliderNextButton>
        <div className='flex justify-center py-2'>
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}

export default DefaultSlider;

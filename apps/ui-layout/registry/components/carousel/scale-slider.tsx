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

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <div className='bg-background p-4'>
        <Carousel options={OPTIONS} isScale={true}>
          <SliderContainer>
            <Slider className='sm:w-[55%] w-[90%]'>
              <div className='bg-blue-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg'></div>
            </Slider>
            <Slider className='sm:w-[55%] w-[90%]'>
              <div className='bg-green-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg'></div>
            </Slider>
            <Slider className='sm:w-[55%] w-[90%]'>
              <div className='bg-yellow-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg'></div>
            </Slider>
            <Slider className='sm:w-[55%] w-[90%]'>
              <div className='bg-red-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg'></div>
            </Slider>
          </SliderContainer>
          <SliderPrevButton className='absolute top-[50%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
            <ChevronLeft className='w-8 h-8' />
          </SliderPrevButton>
          <SliderNextButton className='absolute right-4 p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
            <ChevronRight className='w-8 h-8' />
          </SliderNextButton>
          <div className='flex justify-center py-4'>
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default index;

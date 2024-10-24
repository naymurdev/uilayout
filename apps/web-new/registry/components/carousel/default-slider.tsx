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
            <div className='dark:bg-black bg-white md:h-[500px] sm:h-full h-[300px] w-full'>
              <Image
                src={imgPreview.img1}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </div>
          </Slider>
          <Slider className='w-full'>
            <div className='dark:bg-black bg-white md:h-[500px] sm:h-full h-[300px] w-full'>
              <Image
                src={imgPreview.img2}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </div>
          </Slider>
          <Slider className='w-full'>
            <div className='dark:bg-black bg-white md:h-[500px] sm:h-full h-[300px] w-full'>
              <Image
                src={imgPreview.img3}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </div>
          </Slider>
          <Slider className='w-full'>
            <div className='dark:bg-black bg-white md:h-[500px] sm:h-full h-[300px] w-full'>
              <Image
                src={imgPreview.img4}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </div>
          </Slider>
        </SliderContainer>
        <SliderPrevButton className='absolute top-[50%] p-2 border-2 rounded-full left-4 dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20'>
          <ChevronLeft className='w-8 h-8 ' />
        </SliderPrevButton>
        <SliderNextButton className='absolute right-4 p-2 border-2 rounded-full top-[50%] dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20'>
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

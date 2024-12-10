import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
} from '@/components/core/carousel';
import Image from 'next/image';

function HomeSlider() {
  const OPTIONS: EmblaOptionsType = {};
  const colors = [
    'bg-red-500', // Add more TailwindCSS color classes here
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
  ];
  return (
    <>
      <div className='relative h-fit'>
        <Carousel
          isAutoPlay={true}
          className='bg-transparent p-4'
          options={OPTIONS} // Assuming OPTIONS is defined elsewhere
        >
          <SliderContainer className='gap-2'>
            {colors.map((color, index) => (
              <Slider
                key={index}
                className='w-4/5 sm:w-1/2 lg:w-2/5 xl:w-3/5 2xl:w-[40%]'
              >
                <div
                  className={`${color} 2xl:h-[350px] md:h-[300px] sm:h-[260px] h-[230px] w-full rounded-xl`}
                ></div>
              </Slider>
            ))}
          </SliderContainer>
          <div className='flex absolute left-0 bottom-5 w-full justify-center py-2'>
            <SliderProgress />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HomeSlider;

import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderSnapDisplay,
} from '@/components/core/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function NumberSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <>
        <Carousel options={OPTIONS} className='relative'>
          <SliderContainer className='gap-2'>
            <Slider className='w-[60%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img12}
                  width={1400}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img1}
                  width={1200}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img2}
                  width={1200}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>

            <Slider className='w-[80%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img3}
                  width={1200}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img6}
                  width={1200}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>
            <Slider className='w-[70%]'>
              <div className='dark:bg-black bg-white h-[500px] w-full'>
                <Image
                  src={imgPreview.img8}
                  width={1200}
                  height={800}
                  alt='image'
                  className='h-full object-cover rounded-lg w-full'
                />
              </div>
            </Slider>
          </SliderContainer>
          <div className='absolute bottom-3 right-3 text-white rounded-lg  w-20 h-12 grid place-content-center font-semibold border-2 z-10 dark:bg-black bg-white'>
            <SliderSnapDisplay className='mix-blend-difference' />
          </div>
        </Carousel>
      </>
    </>
  );
}

export default NumberSlider;

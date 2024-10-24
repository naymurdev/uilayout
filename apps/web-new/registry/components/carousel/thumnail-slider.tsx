import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from '@/components/core/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function ThumnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <div className=' 2xl:w-[70%] bg-background sm:w-[80%] w-[90%] mx-auto'>
        <Carousel options={OPTIONS} className=' relative' isAutoPlay={true}>
          <SliderContainer className='gap-2'>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img1}
            >
              <Image
                src={imgPreview.img1}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img2}
            >
              <Image
                src={imgPreview.img2}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img3}
            >
              <Image
                src={imgPreview.img3}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img4}
            >
              <Image
                src={imgPreview.img4}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img5}
            >
              <Image
                src={imgPreview.img5}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img6}
            >
              <Image
                src={imgPreview.img6}
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img7}
            >
              <Image
                src={imgPreview.img7}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img8}
            >
              <Image
                src={imgPreview.img8}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className=' xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img9}
            >
              <Image
                src={imgPreview.img9}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className=' xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumnailSrc={imgPreview.img10}
            >
              <Image
                src={imgPreview.img10}
                width={1200}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  );
}

export default ThumnailSlider;

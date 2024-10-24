import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import {
  BlurVignette,
  BlurVignetteArticle,
} from '@/components/core/blur-vignette';

function index() {
  return (
    <>
      <div className='w-fit  mx-auto sm:flex gap-2 justify-center '>
        <BlurVignette
          radius='24px'
          inset='10px'
          transitionLength='80px'
          blur='15px'
        >
          <Image
            src='https://img.freepik.com/free-photo/african-kid-enjoying-life_23-2151447718.jpg'
            alt='grid'
            width={600}
            className='mx-auto w-full relative h-full object-cover'
            height={600}
          />
          <BlurVignetteArticle />
        </BlurVignette>
        <BlurVignette
          radius='24px'
          inset='10px'
          transitionLength='80px'
          blur='15px'
        >
          <Image
            src='https://img.freepik.com/free-photo/portrait-middle-aged-man-taking-photos-with-device-world-photography-day_23-2151672359.jpg'
            alt='grid'
            width={600}
            className='mx-auto w-full relative h-full object-cover'
            height={600}
          />
          <BlurVignetteArticle />
        </BlurVignette>
      </div>
    </>
  );
}

export default index;

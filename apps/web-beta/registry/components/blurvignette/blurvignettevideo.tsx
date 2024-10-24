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
      <BlurVignette
        radius='24px'
        inset='10px'
        transitionLength='100px'
        blur='15px'
        classname='h-96 w-full mt-10'
      >
        <video
          autoPlay={true}
          muted
          loop
          content='true'
          className='w-full  h-full object-cover  transition-all hover:scale-110'
        >
          <source
            src='https://cdn.pixabay.com/video/2023/10/19/185726-876210695_large.mp4'
            type='video/mp4'
          />
        </video>
        <BlurVignetteArticle />
      </BlurVignette>
    </>
  );
}

export default index;

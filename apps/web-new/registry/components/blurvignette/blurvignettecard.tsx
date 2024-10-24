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
          radius='15px'
          inset='100px'
          transitionLength='200px'
          blur='15px'
        >
          <Image
            src='https://img.freepik.com/free-photo/cartoon-superhero-illustration_23-2151732547.jpg'
            alt='grid'
            width={600}
            className='mx-auto w-full relative h-full object-cover'
            height={600}
          />
          <BlurVignetteArticle classname='h-[35%] w-[96%] ml-2 mt-auto mb-1 border border-gray-900/20 rounded-xl text-white '>
            <article className=' py-5 px-3'>
              <h1 className='2xl:text-3xl text-2xl'>UiLayout</h1>
              <p className='2xl:text-sm text-xs'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quaerat ab? Rerum facilis dignissimos voluptatum!
              </p>
            </article>
          </BlurVignetteArticle>
        </BlurVignette>
        <BlurVignette
          radius='15px'
          inset='100px'
          transitionLength='200px'
          blur='15px'
        >
          <Image
            src='https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794328.jpg'
            alt='grid'
            width={600}
            className='mx-auto w-full relative h-full object-cover'
            height={600}
          />
          <BlurVignetteArticle classname='h-[35%] w-[96%] ml-2 mt-auto mb-1 border border-gray-900/20 text-white '>
            <article className=' py-5 px-3'>
              <h1 className='2xl:text-3xl text-2xl'>UiLayout</h1>
              <p className='2xl:text-sm text-xs'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quaerat ab? Rerum facilis dignissimos voluptatum!
              </p>
            </article>
          </BlurVignetteArticle>
        </BlurVignette>
      </div>
    </>
  );
}

export default index;

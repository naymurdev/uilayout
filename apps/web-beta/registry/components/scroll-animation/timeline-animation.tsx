'use client';

import React, { useRef } from 'react';
import { ChevronsRight, Github } from 'lucide-react';
import { TimelineContent } from '@/components/core/framer-timeline';

function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      <section
        className='sm:grid grid-cols-2 gap-10 h-[650px] pt-10 px-4'
        ref={heroRef}
      >
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            src='https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop'
            className='w-full h-96  object-cover rounded-md '
            alt=''
          />
        </TimelineContent>
        <div className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className='text-5xl leading-[110%]'>
              Why you need to start it?
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className='text-xl leading-[110%]'>
              There's no valid reason, I just need more star in my repo, please
              do it guys 😁
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className='flex gap-2 w-fit bg-gray-800 rounded-md p-2'
              href='https://github.com/naymurdev'
              target='_blank'
            >
              <Github />
              Start it Now
            </a>
          </TimelineContent>
        </div>
      </section>
      <section ref={aboutRef} className='sm:grid grid-cols-2 gap-10 pb-10 px-4'>
        <div className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className='text-5xl leading-[110%]'>Follow me on X/Twitter?</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className='text-xl leading-[110%]'>
              There's no valid reason, I just need more follower, please do it
              guys😍
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={aboutRef}>
            <a
              className='flex gap-2 items-center w-fit bg-gray-800 rounded-md p-2'
              href='https://x.com/naymur_dev'
              target='_blank'
            >
              <svg
                width='120'
                height='109'
                viewBox='0 0 120 109'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className=' fill-primary w-6 h-5'
              >
                <path d='M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z' />
              </svg>{' '}
              Follow
            </a>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src='https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop'
            className='w-full h-96  object-cover rounded-md '
            alt=''
          />
        </TimelineContent>
      </section>
    </>
  );
}

export default TimelineAnimation;

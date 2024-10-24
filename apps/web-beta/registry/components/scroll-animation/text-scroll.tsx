'use client';
import React from 'react';
import ScrollElement from '../../../components/core/scroll-element';

function index() {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <h1 className='text-6xl font-semibold text-center py-8'>
          Scroll Down 👇{' '}
        </h1>
      </div>
      <div className='py-2'>
        <div>
          <ScrollElement
            direction='left'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            // @ts-ignore
            className='text-5xl text-left py-44'
          >
            <p>Scroll Left</p>
          </ScrollElement>
          <ScrollElement
            direction='right'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            // @ts-ignore
            className='text-5xl text-right py-44'
          >
            <p>Scroll Right</p>
          </ScrollElement>
          <ScrollElement
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            // @ts-ignore
            className='text-5xl text-center py-44'
          >
            <p>Scroll bottom</p>
          </ScrollElement>
        </div>
      </div>
    </>
  );
}

export default index;

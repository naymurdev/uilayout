import React from 'react';
import { RandomizedTextEffect } from '@/components/core/text-randomized';

function index() {
  return (
    <>
      <div className=' py-10 rounded-md'>
        <h1 className='font-departure text-4xl relative z-10 text-center h-[120px] md:h-auto leading-tight'>
          <RandomizedTextEffect text='Production ready code' />
        </h1>
      </div>
    </>
  );
}

export default index;

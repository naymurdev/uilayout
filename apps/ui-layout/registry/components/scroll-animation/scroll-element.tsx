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
        <div className=' columns-3'>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1695763594594-31505b18b58a?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1724888861686-ad3f706ab067?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>

          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
            // @ts-ignore
          >
            <img
              src='https://images.unsplash.com/photo-1724884564497-f5024b7e2f93?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
          <ScrollElement
            viewport={{ once: true, amount: 0.5, margin: '0px 0px 0px 0px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?q=80&w=600&auto=format&fit=crop'
              alt=''
              className='w-full mb-2'
            />
          </ScrollElement>
        </div>
      </div>
    </>
  );
}

export default index;

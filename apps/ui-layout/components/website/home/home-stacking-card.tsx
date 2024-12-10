import Image from 'next/image';
import React from 'react';

function HomeStackingCard() {
  return (
    <div className='grid place-content-center relative 2xl:w-full w-[80%] 2xl:h-[350px] xl:h-[270px] h-[230px] mx-auto'>
      <h1 className='absolute top-[58%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  text-center z-10 w-full text-primary-foreground font-semibold xl:text-3xl text-2xl '>
        Stacking Card
      </h1>
      <svg
        width='551'
        height='320'
        viewBox='0 0 551 320'
        className='py-4 w-full'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='88' width='367' height='122' rx='6' fill='#6BFFB0' />
        <rect x='54' y='20' width='443' height='145' rx='6' fill='#FFC642' />
        <rect x='23' y='42' width='505' height='166' rx='6' fill='#1861FF' />
        <rect y='70' width='551' height='250' rx='6' className='fill-primary' />
      </svg>
    </div>
  );
}

export default HomeStackingCard;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
function Card2() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className='w-[350px] mx-auto '>
      <div className='dark:bg-white bg-gray-50 border dark:border-none  rounded-2xl'>
        <div className='w-full h-56 relative'>
          <motion.button
            className='absolute top-2 right-3 z-20 text-2xl text-white'
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=' fill-white' />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <Image
            src={
              'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2090&auto=format&fit=crop'
            }
            alt='shoes'
            width={1000}
            height={1000}
            className={`h-56 w-full rounded-2xl object-cover `}
          />
        </div>
        <article className='text-black space-y-2 p-2 pb-3'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-xl text-base-dark'>
              Nike Air Max
            </h1>
            <span className='font-medium text-xl text-base-dark'>$394</span>
          </div>
          <p className='text-xs  text-black'>
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>

          <button className='w-full hover:text-white flex justify-center items-center gap-2 border-black border-2 text-black hover:bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-2  rounded-md'>
            Add to cart
          </button>
        </article>
      </div>
    </div>
  );
}

export default Card2;

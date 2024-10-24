'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardArr } from '@/components/website/constant';

function Card1() {
  const [selectedImage, setSelectedImage] = useState(CardArr[0].img);
  const [selectedColor, setSelectedColor] = useState(CardArr[0].color);
  const handleColorButtonClick = (img: string, color: string) => {
    setSelectedImage(img);
    setSelectedColor(color);
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className='w-[300px] mx-auto'>
      <div className='rounded-md p-2 dark:bg-white bg-gray-100'>
        <Image
          src={selectedImage}
          alt='shoes'
          width={1000}
          height={1000}
          className='h-52 w-full rounded-md object-cover transition-all duration-300'
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
        <div className='text-black pt-2'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-xl'>Nike Air Max</h1>
            <motion.button
              className=' text-2xl text-red-400 pr-2 '
              onClick={handleClick}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
            >
              {isActive ? (
                <>
                  <Heart className=' fill-red-400' />
                </>
              ) : (
                <>
                  <Heart />
                </>
              )}
            </motion.button>
          </div>
          <p className='text-xs'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>
          <div className='flex justify-between py-1'>
            <span className='font-semibold text-xl'>$39</span>
            <div className='flex gap-2 items-center'>
              {CardArr.map((data, index) => (
                <button
                  key={index}
                  onClick={() => handleColorButtonClick(data.img, data.color)}
                  className={` relative w-6 h-6 border  rounded-full grid place-content-center transition-all ${
                    selectedColor === data.color
                      ? ' border-black'
                      : 'border-gray-200'
                  }`}
                >
                  <span
                    className='w-4 h-4 rounded-full inline-block'
                    style={{
                      backgroundColor: data.color,
                    }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          <button className='text-white w-full bg-black py-3 rounded-md'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;

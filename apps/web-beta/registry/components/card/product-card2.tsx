'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Heart,
  ShoppingCart,
} from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CardArr } from '@/components/website/constant';

function Card2() {
  const [selectedImage, setSelectedImage] = useState(CardArr[1].img);
  const [selectedColor, setSelectedColor] = useState(CardArr[1].color);
  const handleColorButtonClick = (img: string, color: string) => {
    setSelectedImage(img);
    setSelectedColor(color);
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className='w-[350px] mx-auto '>
      <div className='dark:bg-white bg-gray-100 rounded-md'>
        <div className='w-full h-52 relative'>
          <motion.button
            className='absolute top-2 right-2 z-20 text-2xl text-white '
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
          {/* <button className="absolute top-2 right-2 z-20">
            <Heart />
          </button> */}
          {CardArr.map((data, index) => (
            <Image
              src={data?.img}
              alt='shoes'
              width={1000}
              height={1000}
              className={`absolute h-52 w-full rounded-t-md  object-cover  ${
                selectedColor === data.color
                  ? 'z-10 transition-all duration-500'
                  : 'transition-all delay-500'
              }`}
              style={{
                clipPath:
                  selectedColor === data.color
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%) '
                    : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%) ',
              }}
            />
          ))}
        </div>
        <article className='text-black pt-2 p-2'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-xl text-blue-500'>
              Nike Air Max
            </h1>
            <span className='font-medium text-xl text-blue-500'>$39</span>
          </div>
          <p className='text-xs'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>
          <div className='py-1'>
            <p className='text-sm'>Select Size:</p>
            <Select.Root>
              <Select.Trigger
                className='inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] dark:bg-white bg-black text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none'
                aria-label='Food'
              >
                <Select.Value placeholder='Select a size' />
                <Select.Icon className='text-black'>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className='overflow-hidden bg-white  text-black rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
                  <Select.ScrollUpButton className='flex items-center justify-center h-[25px] bg-white text-black cursor-default'>
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className='p-[5px]'>
                    <Select.Group>
                      <SelectItem value='l'>L: length:65-68</SelectItem>
                      <SelectItem value='s'> S: length:68-71</SelectItem>
                      <SelectItem value='m'>M: length:71-73</SelectItem>
                      <SelectItem value='xl'>XL: length:76-78</SelectItem>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className='flex justify-between py-2'>
            {/* <span className="font-semibold text-xl">$39</span> */}
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
          <button className='w-full text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md'>
            <ShoppingCart className='w-5 h-5' /> Add to cart
          </button>
        </article>
      </div>
    </div>
  );
}
const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={cn(
          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className='absolute left-0 w-[25px] inline-flex items-center justify-center'>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
export default Card2;

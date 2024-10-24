'use client';
import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { items } from '@/components/website/constant';

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
};

type item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};
interface GaleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}
function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <div className='w-fit mx-auto gap-1 flex pb-20 pt-10 '>
      {items.slice(0, 5).map((item: item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl relative ${
              index === i ? 'w-[450px] ' : 'w-[50px]'
            } h-[400px] flex-shrink-0  transition-[width] ease-in-linear duration-500 origin-center  `}
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            onMouseEnter={() => {
              setIndex(i);
            }}
          >
            <motion.img
              src={item?.url}
              className={`${
                index === i ? 'cursor-default' : 'cursor-pointer'
              } w-full rounded-xl  h-full object-cover `}
            />
            <AnimatePresence mode='wait'>
              {index === i && (
                <motion.article
                  variants={article}
                  initial='hidden'
                  animate='show'
                  className='absolute flex rounded-xl  flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-gradient-to-t dark:from-gray-900/60 from-gray-100/60  from-20% to-transparent to-80% '
                >
                  <motion.h1
                    variants={article}
                    className='text-2xl font-semibold'
                  >
                    {item?.title}
                  </motion.h1>
                  <motion.p variants={article} className='leading-[120%]'>
                    {item?.description}
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function index() {
  const [index, setIndex] = useState(2);

  return (
    <div className='relative'>
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  );
}

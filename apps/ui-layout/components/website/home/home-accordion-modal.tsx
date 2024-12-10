// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
} from 'framer-motion';
import Image from 'next/image';
import preview from '@/assets/preview';
import { Plus, X } from 'lucide-react';
import { createPortal } from 'react-dom';
const transition = {
  type: 'spring',
  duration: 0.5,
};
function Gallery({ items, setIndex, setOpen, index }) {
  return (
    <motion.div
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='w-full h-full '
    >
      {items.map((item, i) => {
        return (
          <motion.article
            layoutId={`dialog-${item?.id}`}
            whileTap={{ scale: 0.95 }}
            key={item}
            tabIndex={item.id}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`w-full h-full flex-shrink-0 rounded-xl cursor-pointer  overflow-hidden   relative ${
              index === i ? 'z-[50] ' : ''
            }`}
          >
            <motion.img
              layoutId={`dialog-img-${item.id}`}
              className={`rounded-xl h-full w-full object-contain`}
              src={item?.url?.src}
            />
            <motion.div layout='position' layoutId={`dialog-title-${item.id}`}>
              <motion.h1 className='absolute bottom-3 left-4 2xl:text-2xl text-xl font-semibold'>
                {item?.title}
              </motion.h1>
            </motion.div>

            <button className='absolute bottom-2 right-2 p-2 text-white dark:bg-black bg-gray-400 hover:bg-gray-500 rounded-xl dark:hover:bg-gray-800'>
              <Plus className='2xl:w-8 w-6 2xl:h-8 h-6' />
            </button>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
export default function HomeAccordionModal() {
  const [index, setIndex] = useState(5);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  const items = [
    {
      id: 1,
      url: preview.galleryNew,
      title: 'Accordion',
      description:
        'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
  ];

  return (
    <div className='relative  h-full flex items-center overflow-auto'>
      <MotionConfig transition={transition}>
        <div className=' overflow-hidden w-full h-full'>
          <Gallery
            items={items}
            index={index}
            setIndex={setIndex}
            setOpen={setOpen}
          />
        </div>

        <AnimatePresence initial={false} mode='sync'>
          {open && (
            <motion.div
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              initial='closed'
              animate='open'
              exit='closed'
              tabIndex={-1}
              key={`backdrop-${items[index].id}`}
              className='dark:bg-black/95 bg-white/95 backdrop-blur-sm fixed h-screen z-50 top-0 left-0 bottom-0 right-0 w-full  grid place-content-center 2xl:py-20 pt-10
                '
              onClick={() => {
                setOpen(false);
              }}
            >
              <>
                <motion.div
                  key='dialog'
                  layoutId={`dialog-${items[index].id}`}
                  onClick={(e) => e.stopPropagation()}
                  className=' p-5  sm:w-[600px] w-[80%] mx-auto  relative  overflow-x-hidden  rounded-md cursor-default  bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]'
                >
                  <button
                    className='absolute top-2 z-10 right-2 p-2 dark:bg-black bg-gray-300 hover:bg-gray-400 rounded-lg dark:hover:bg-gray-800'
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <X className='w-6 h-6' />
                  </button>
                  <motion.img
                    layoutId={`dialog-img-${items[index].id}`}
                    src={items[index].url.src}
                    width={400}
                    height={400}
                    alt='single-image'
                    className='rounded-md h-fit  w-full object-cover'
                  />
                  <motion.div
                    layout='position'
                    layoutId={`dialog-title-${items[index].id}`}
                  >
                    <motion.h1 className='text-4xl font-semibold'>
                      {items[index].title}
                    </motion.h1>
                  </motion.div>
                  <motion.p
                    key={items[index].id} // Add this line
                    initial={{
                      scale: 1,
                      opacity: 0,
                      transformOrigin: 'left',
                    }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='sm:text-sm text-xs  py-2'
                  >
                    {items[index].description}
                  </motion.p>
                </motion.div>
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

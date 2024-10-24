'use client';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const transition = {
  type: 'spring',
  duration: 0.4,
};
export default function Dialog() {
  const [index, setIndex] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  type Item = {
    id: number;
    imgSrc?: string;
    videoSrc?: string;
  };

  const items: Item[] = [
    {
      id: 1,
      imgSrc:
        'https://images.unsplash.com/photo-1726824766931-4bd8b59af37c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      videoSrc:
        'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
    },
  ];
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setCarouselWidth(
      // @ts-ignore
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, [carousel]);
  return (
    <div className='relative h-full'>
      <MotionConfig transition={transition}>
        <motion.div
          ref={carousel}
          drag='x'
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 8, ease: 'easeInOut' }}
          className='flex w-full  gap-4   py-10'
        >
          {items.map((item, i) => {
            return (
              <>
                <motion.div
                  // @ts-ignore
                  key={item}
                  className='w-full flex relative  flex-col overflow-hidden border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950'
                  layoutId={`dialog-${item?.id}`}
                  style={{
                    borderRadius: '12px',
                  }}
                  tabIndex={i}
                  onClick={() => {
                    setIndex(i);
                    setIsOpen(true);
                  }}
                >
                  {item?.imgSrc && (
                    <motion.div
                      layoutId={`dialog-img-${item.id}`}
                      className='w-full h-full'
                    >
                      <img
                        src={item.imgSrc}
                        alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                        className=' w-full object-cover'
                      />
                    </motion.div>
                  )}
                  {item?.videoSrc && (
                    <motion.div
                      layoutId={`dialog-video-${item.id}`}
                      className='w-full h-full'
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        className='h-full w-full object-cover  rounded-sm'
                      >
                        <source src={item.videoSrc!} type='video/mp4' />
                      </video>
                    </motion.div>
                  )}
                </motion.div>
              </>
            );
          })}
        </motion.div>
        <AnimatePresence initial={false} mode='sync'>
          {isOpen && (
            <>
              <motion.div
                key={`backdrop-${items[index].id}`}
                className='fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-sm '
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial='closed'
                animate='open'
                exit='closed'
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <motion.div
                key='dialog'
                className='pointer-events-none fixed inset-0 flex items-center justify-center z-50'
              >
                <motion.div
                  className='pointer-events-auto relative flex flex-col overflow-hidden   dark:bg-gray-950 bg-gray-200 border w-[80%] h-[90%] '
                  layoutId={`dialog-${items[index].id}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}
                >
                  {items[index]?.imgSrc && (
                    <motion.div
                      layoutId={`dialog-img-${items[index].id}`}
                      className='w-full h-full'
                    >
                      <img
                        src={items[index].imgSrc}
                        alt=''
                        className='h-full w-full object-cover'
                      />
                    </motion.div>
                  )}
                  {items[index]?.videoSrc && (
                    <motion.div
                      layoutId={`dialog-video-${items[index].id}`}
                      className='w-full h-full'
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        controls
                        className='h-full w-full object-cover  rounded-sm'
                      >
                        <source src={items[index].videoSrc!} type='video/mp4' />
                      </video>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsOpen(false)}
                    className='absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800'
                    type='button'
                    aria-label='Close dialog'
                  >
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
} from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { items } from '@/components/website/constant';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ImageModalProps = {
  item: any;
  uniqueId: string;
  itemArr: any;
};

const modal: React.FC = () => {
  return (
    <>
      <div className='columns-3 '>
        {items
          .slice(0, 8)
          ?.map((item, index) => (
            <SliderModal item={item} itemArr={items} uniqueId={`id-${index}`} />
          ))}
      </div>
    </>
  );
};

export const SliderModal = ({ item, uniqueId, itemArr }: ImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState(item);
  const [hight, setHight] = useState(0);
  const [constraints, setConstraints] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    const element = carousel.current;
    const viewportHeight = element?.offsetHeight;
    const viewScrollHeight = element?.scrollHeight;
    // console.log(viewportHeight, viewScrollHeight);
    setConstraints(Number(viewportHeight) - Number(viewScrollHeight));
  }, [carousel, isOpen]);
  // console.log(constraints)
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

  return (
    <>
      <motion.div
        onClick={() => {
          setIsOpen(true);
          setNewItem(item);
        }}
        className='overflow-hidden mb-3'
      >
        <motion.div layoutId={uniqueId}>
          <Image
            width={400}
            height={400}
            src={item?.url}
            className='bg-white text-black rounded-md w-full cursor-zoom-in'
            alt='img'
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 top-0 left-0  right-0 bottom-0  flex flex-col items-center w-full h-screen justify-center dark:bg-black/80 bg-gray-300/80 backdrop-blur-lg cursor-zoom-out'
            onClick={() => {
              setNewItem(null);
              setIsOpen(false);
            }}
          >
            <button
              className='absolute top-2 right-2 p-4 border dark:bg-black/80 text-white  bg-gray-400/40 backdrop-blur-lg '
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
            <motion.div
              layoutId={uniqueId}
              className='rounded-md w-fit h-[80%] flex gap-2 items-center mx-auto cursor-auto '
              onClick={(e) => e.stopPropagation()}
            >
              {newItem && (
                <AnimatePresence>
                  {itemArr.map(
                    (tab: any, index: React.Key | null | undefined) => (
                      <>
                        <React.Fragment key={index}>
                          <AnimatePresence mode='popLayout'>
                            {tab.id === newItem.id && (
                              <motion.figure
                                key={tab?.id}
                                className='dark:bg-gray-900/40 bg-gray-100/40 border  rounded-md p-4'
                              >
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    transition: {
                                      type: 'ease',
                                      ease: 'easeInOut',
                                      duration: 0.3,
                                      delay: 0.2,
                                    },
                                  }}
                                  exit={{
                                    opacity: 0,
                                    transition: {
                                      type: 'ease',
                                      ease: 'easeInOut',
                                      duration: 0.2,
                                    },
                                  }}
                                  transition={{ duration: 0.2, delay: 0.2 }}
                                >
                                  <Image
                                    src={newItem.url}
                                    width={1000}
                                    height={1000}
                                    alt='preview_img'
                                    className=' object-contain h-[70vh]  mx-auto rounded-md'
                                  />
                                </motion.div>
                              </motion.figure>
                            )}
                          </AnimatePresence>
                        </React.Fragment>
                      </>
                    )
                  )}
                </AnimatePresence>
              )}
              <motion.div
                className='h-[300px] overflow-hidden dark:bg-gray-900/40 bg-white/40 border rounded-md'
                ref={carousel}
              >
                <motion.div
                  whileDrag={{ scale: 0.95 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceDamping: 30 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className='h-fit '
                  drag='y'
                  dragConstraints={{ top: constraints, bottom: 0 }}
                >
                  {itemArr?.map(
                    (
                      itemData: { url: string | StaticImport; id: any },
                      index: React.Key | null | undefined
                    ) => {
                      return (
                        <motion.div
                          key={index}
                          className={`relative p-2   cursor-grab active:cursor-grabbing`}
                          onClick={() => setNewItem(itemData)}
                        >
                          <Image
                            src={itemData?.url}
                            width={400}
                            height={400}
                            alt='img'
                            className='sm:w-28 w-52 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none'
                          />
                          {itemData?.id === newItem?.id && (
                            <motion.div
                              layoutId='slider'
                              transition={{
                                layout: {
                                  duration: 0.2,
                                  ease: 'easeOut',
                                },
                              }}
                              className='absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md'
                            ></motion.div>
                          )}
                        </motion.div>
                      );
                    }
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default modal;

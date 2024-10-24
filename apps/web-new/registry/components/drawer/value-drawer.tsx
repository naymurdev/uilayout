'use client';
import { Drawer } from 'vaul';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  DrawerContent,
  ResponsiveDrawer,
} from '@/components/core/drawer/vaul-main';
const items = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-K6oxS4dwihg-unsplash_yylgnx.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-XQq_xRecUSw-unsplash_simrjg.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-beIRDp7-Dt0-unsplash_oop0nx.jpg',
  },
];
export default function MyDrawer() {
  // const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <div className='flex justify-between'>
        <motion.button
          onClick={() => setDrawerOpen(true)}
          whileTap={{ scale: 0.9 }}
          className='inline-flex h-12 w-fit mx-auto animate-background-shine items-center justify-center rounded-md  border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
        >
          Open Dialog
        </motion.button>
      </div>
      <ResponsiveDrawer open={drawerOpen} setOpen={setDrawerOpen}>
        <DrawerContent>
          <figure className='flex flex-col space-y-1.5 text-center  h-fit dark:bg-gray-900 md:p-0 p-6'>
            <h1 className='font-medium  text-2xl'>Update Profile Image</h1>
            <p className='text-sm text-muted-foreground'>
              Upload a new profile image or remove the current one.
            </p>
            <div data-vaul-no-drag className='py-4 space-y-4'>
              <span className='relative flex justify-center overflow-hidden rounded-xl w-full '>
                <span className='grid place-content-center h-40  w-40 rounded-xl bg-muted'>
                  JP
                </span>
              </span>
              <div className='mb-3'>
                <input
                  className='w-full border file:p-2 file:bg-black  file:border-none  file:text-white rounded-sm overflow-hidden'
                  type='file'
                  id='formFile'
                />
              </div>
              <button
                type='submit'
                onClick={() => {
                  setDrawerOpen(false);
                }}
                className='w-full rounded-sm dark:bg-white bg-black  p-2 dark:text-black text-white'
              >
                Submit
              </button>
            </div>
          </figure>
        </DrawerContent>
      </ResponsiveDrawer>
    </>
  );
}

'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  TabsBtn,
  TabsContent,
  TabsProvider,
} from '@/registry/components/tabs/tab'
const effectArr = [
  {
    id: 1,
    name: 'basic',
  },
  {
    id: 2,
    name: 'hover',
  },
  {
    id: 3,
    name: 'wobbly',
  },
]
function Tab() {
  const [checkEffect, setCheckEffect] = useState('basic')
  return (
    <>
      <div className="flex bg-black dark:bg-gray-900 w-fit ml-auto mb-4 gap-1 p-1 rounded-md text-white">
        {effectArr?.map((effect, index) => {
          return (
            <>
              <motion.button
                onClick={() => setCheckEffect(effect?.name)}
                className={`py-1 px-3 rounded-md capitalize relative `}
              >
                <span className="z-10 relative">{effect?.name}</span>
                {checkEffect === effect.name && (
                  <motion.div
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                    layoutId={'magnetic'}
                    className="absolute w-full h-full left-0 top-0 bg-[conic-gradient(from_90deg_at_50%_50%,#8494ff_0%,#3749be_50%,#7d8efc_100%)] rounded-md  z-[1] tab-shadow"
                  />
                )}
              </motion.button>
            </>
          )
        })}
      </div>

      <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
        <TabsProvider
          defaultValue={'design'}
          wobbly={checkEffect === 'wobbly' ? true : false}
          hover={checkEffect === 'hover' ? true : false}
        >
          <div className="flex justify-center mt-2">
            <div className="flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
              <TabsBtn value="design">
                <span className="relative z-[2] uppercase sm:text-base text-xs">
                  design
                </span>
              </TabsBtn>
              <TabsBtn value="collaborate">
                <span className="relative z-[2] uppercase sm:text-base text-xs">
                  collaborate
                </span>
              </TabsBtn>
              <TabsBtn value="share">
                <span className="relative z-[2] uppercase sm:text-base text-xs">
                  share
                </span>
              </TabsBtn>
              <TabsBtn value="publish">
                <span className="relative z-[2] uppercase sm:text-base text-xs">
                  publish
                </span>
              </TabsBtn>
            </div>
          </div>
          <TabsContent value="design">
            <div className="w-full">
              <Image
                src={
                  'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=1000&auto=format&fit=crop'
                }
                width={1000}
                height={1000}
                alt="preview_img"
                className="w-[850px] object-cover h-full mx-auto rounded-md"
              />
            </div>
          </TabsContent>
          <TabsContent value="collaborate">
            <div className="w-full">
              <Image
                src={
                  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop'
                }
                width={1000}
                height={1000}
                alt="preview_img"
                className="w-[850px] object-cover h-full mx-auto rounded-md"
              />
            </div>
          </TabsContent>
          <TabsContent value="share">
            <div className="w-full">
              <Image
                src={
                  'https://images.unsplash.com/photo-1665470909901-162912ec16f7?q=80&w=1000&auto=format&fit=crop'
                }
                width={1000}
                height={1000}
                alt="preview_img"
                className="w-[850px] object-cover h-full mx-auto rounded-md"
              />
            </div>
          </TabsContent>
          <TabsContent value="publish">
            <div className="w-full">
              <Image
                src={
                  'https://images.unsplash.com/photo-1694022861804-840f61d1c452?q=80&w=1000&auto=format&fit=crop'
                }
                width={1000}
                height={1000}
                alt="preview_img"
                className="w-[850px] object-cover h-full mx-auto rounded-md"
              />
            </div>
          </TabsContent>
        </TabsProvider>
      </div>
    </>
  )
}

export default Tab

// thanks to maximeheckel
import React, { useState } from 'react';
import { TabsProvider, TabsBtn, TabsContent } from '@/components/core/tab';
import preview from '@/assets/preview';
import Image from 'next/image';
function HomeTab() {
  return (
    <>
      <TabsProvider defaultValue={'accordion'} wobbly={true}>
        <div className='flex justify-center pt-4'>
          <div className='flex items-center capitalize w-fit dark:bg-[#1a1c20] bg-gray-300 p-1 dark:text-white text-black rounded-md border'>
            <TabsBtn value='accordion'>
              <span className='relative z-[2] '>Accordion</span>
            </TabsBtn>
            <TabsBtn value='globe'>
              <span className='relative z-[2] '>Globe</span>
            </TabsBtn>
            <TabsBtn value='mousetrail'>
              <span className='relative z-[2] '>Mouse Trail</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value='accordion' yValue={false}>
          <div className='dark:bg-black bg-white  mx-auto max-w-[450px] lg:h-[300px] md:h-[240px] h-[190px]  dark:text-white text-black p-4 border  shadow-md rounded-md space-y-2'>
            <Image
              className='rounded-xl h-full object-contain'
              src={preview.galleryNew}
              width={600}
              height={680}
              alt={'gallery'}
            />
          </div>
        </TabsContent>
        <TabsContent value='globe' yValue={false}>
          <div className='dark:bg-black bg-white  mx-auto max-w-[450px] lg:h-[300px] md:h-[240px] h-[190px] dark:text-white text-black p-4 border shadow-md rounded-md space-y-2'>
            <Image
              className='rounded-xl h-full object-contain'
              src={preview.globe}
              width={600}
              height={680}
              alt={'globe'}
            />
          </div>
        </TabsContent>
        <TabsContent value='mousetrail' yValue={false}>
          <div className='dark:bg-black bg-white  mx-auto max-w-[450px] lg:h-[300px] md:h-[240px] h-[190px] dark:text-white text-black p-4 border shadow-md rounded-md space-y-2'>
            <Image
              className='rounded-xl h-full object-contain'
              src={preview.mousetrail}
              width={600}
              height={680}
              alt={'mousetrail'}
            />
          </div>
        </TabsContent>
      </TabsProvider>
    </>
  );
}

export default HomeTab;

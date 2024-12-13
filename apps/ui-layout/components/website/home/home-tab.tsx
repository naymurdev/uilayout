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
          <div className='flex items-center capitalize w-fit dark:bg-[#2d76fd] bg-gray-300 p-1 dark:text-white text-black rounded-md border'>
            <TabsBtn value='accordion' className='2xl:text-base text-xs'>
              <span className='relative z-[2] '>Accordion</span>
            </TabsBtn>
            <TabsBtn value='globe' className='2xl:text-base text-xs'>
              <span className='relative z-[2] '>Globe</span>
            </TabsBtn>
            <TabsBtn value='mousetrail' className='2xl:text-base text-xs'>
              <span className='relative z-[2] '>Mouse Trail</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value='accordion' yValue={false}>
          <div className='dark:bg-black bg-white  mx-auto w-full  aspect-video  dark:text-white text-black p-4 border  shadow-md rounded-xl space-y-2'>
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
          <div className='dark:bg-black bg-white  mx-auto w-full aspect-video  dark:text-white text-black p-4 border shadow-md rounded-xl space-y-2'>
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
          <div className='dark:bg-black bg-white  mx-auto w-full aspect-video  dark:text-white text-black p-4 border shadow-md rounded-xl space-y-2'>
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

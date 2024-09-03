// thanks to maximeheckel
import React, { useState } from 'react'

import Image from 'next/image'
import { TabsBtn, TabsContent, TabsProvider } from './tab'

function Tab() {
  return (
    <div className="border bg-white/10 dark:bg-black/40 backdrop-blur-sm rounded-md p-4  relative">
      <TabsProvider defaultValue={'design'}>
        <div className="flex justify-center mt-2">
          <div className="flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn value="design">
              <span className="relative z-[2] uppercase">design</span>
            </TabsBtn>
            <TabsBtn value="collaborate">
              <span className="relative z-[2] uppercase">collaborate</span>
            </TabsBtn>
            <TabsBtn value="share">
              <span className="relative z-[2] uppercase">share</span>
            </TabsBtn>
            <TabsBtn value="publish">
              <span className="relative z-[2] uppercase">publish</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="design">
          <div className="w-full">
            <Image
              src={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/design_elbeas.png'
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
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/collboration_frpdk8.png'
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
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/share_xxzjjp.png'
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
                'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714807584/publish_eah6oa.png'
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
  )
}

export default Tab

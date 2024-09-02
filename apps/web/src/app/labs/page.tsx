import ComopnentSection from '@/components/labs/component-section'
import LabSidebar from '@/components/labs/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

function page() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-full dark:bg-[#000000] bg-gray-100 dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[radial-gradient(#c0c8df_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <main className="w-full max-w-none 2xl:max-w-[1922px] mx-auto h-screen overflow-hidden">
        <div className="grid 2xl:grid-cols-[1fr_400px] grid-cols-[1fr_350px]">
          <div className="col-span-1 border-l relative h-screen w-full">
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-gray-300 bg-[radial-gradient(#b0b8cc_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

            <ScrollArea className="h-screen">
              <div className="h-screen w-full grid place-items-center">
                <ComopnentSection />
              </div>
            </ScrollArea>
          </div>
          <LabSidebar />
        </div>
      </main>
    </>
  )
}

export default page

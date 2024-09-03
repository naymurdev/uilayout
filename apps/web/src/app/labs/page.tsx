import ComopnentSection from '@/components/labs/component-section'
import React from 'react'

function page() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-full dark:bg-[#000000] bg-gray-100 dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[radial-gradient(#c0c8df_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <main className="w-full max-w-none 2xl:max-w-[1922px] mx-auto h-screen overflow-hidden">
        <ComopnentSection />
      </main>
    </>
  )
}

export default page

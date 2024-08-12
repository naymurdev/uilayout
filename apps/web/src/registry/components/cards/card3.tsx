import React, { useState } from 'react'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'
function index() {
  return (
    <>
      <article className={` relative pb-4  overflow-hidden`}>
        <div className="w-full rounded-md h-full overflow-hidden">
          <Image
            src={
              'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715685361/distrokings_vihqpy.jpg'
            }
            alt={'image'}
            height={600}
            width={1200}
            className="h-full w-full object-cover rounded-xl hover:scale-100 scale-105 transition-all duration-300"
          />
        </div>
        <div className="absolute bottom-2 text-black w-full p-4 flex justify-between items-center">
          <h3 className="sm:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
            Distrokings
          </h3>

          <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#080918]   font-medium text-neutral-200 border-2 transition-all duration-300 hover:w-24">
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Visit
            </div>
            <div className="absolute right-3">
              <MoveUpRight />
            </div>
          </button>
        </div>
      </article>
    </>
  )
}

export default index

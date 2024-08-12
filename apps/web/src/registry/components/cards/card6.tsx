import React, { useState } from 'react'
import Image from 'next/image'
import {
  ArrowBigDown,
  ArrowRight,
  ChevronRight,
  ChevronsRight,
  Heart,
} from 'lucide-react'

function index() {
  return (
    <>
      <div className="w-[90%] relative mt-4  group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-62 rounded-md  overflow-hidden">
          <Image
            src={
              'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161797/pexels-pixabay-259637_lpt4le.jpg'
            }
            alt="shoes"
            width={600}
            height={600}
            className="h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <div className="p-4 space-y-1  transition-all duration-300 ">
          <span className="text-sm">9 des 2023</span>
          <h1 className="text-lg font-medium capitalize ">
            Learn why UI/UX Important and How Implement well in your site.
          </h1>
          <a
            href="#"
            className="bg-green-400 w-fit text-base dark:text-white rounded-md text-blue-600 font-normal p-2 flex justify-center "
          >
            Read Story
            <span className="relative">
              <ChevronRight className="group-hover:opacity-0 opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300 " />
              <ChevronsRight className="absolute top-0 group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 " />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default index

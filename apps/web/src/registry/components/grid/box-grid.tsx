import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { items } from '@/components/common/constant'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'
interface ProjectsTypes {
  id: string
  img: string
  title: string
  des: string
}

export default function index() {
  return (
    <>
      <div className="grid grid-rows-10  grid-cols-12 grid-flow-col gap-2  pt-10">
        <div className="row-start-1 col-span-2 row-end-6  dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/card_q3rete.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-6 row-end-11  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/tabs_rkezcb.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-3 row-end-9  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/stacking_card_fcbeow.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-1 col-span-2 row-end-6  dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/tabs_rkezcb.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-6 row-end-11  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/sparkles_ko7fz4.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-3 row-end-9  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/carousel_ymyqq4.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-1 col-span-2 row-end-6 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/faqs_qubbig.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-6 row-end-11  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center  h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/grid_rbis5c.svg"
            className=" object-cover"
            alt=""
          />
        </div>
        <div className="row-start-3 row-end-9  col-span-2 dark:bg-gray-800 bg-gray-100 grid place-content-center h-full lg:rounded-xl rounded-md">
          <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/image_masking_kbdo7a.svg"
            className=" object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

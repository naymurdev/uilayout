'use client'
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
const sizes = ['7', '7.5', '8', '8.5']
function Card() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }

  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const handleSelectSize = (size: string) => {
    setSelectedSize(size === selectedSize ? null : size)
  }

  return (
    <div className="w-[350px] mx-auto ">
      <div className="dark:bg-white bg-gray-100 rounded-md p-2">
        <div className="w-full h-52 relative">
          <motion.button
            className="absolute top-2 right-2 z-20 text-2xl text-white"
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=" fill-white" />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <Image
            src={
              'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg'
            }
            alt="shoes"
            width={1000}
            height={1000}
            className={` h-52 w-full rounded-t-md  object-cover  `}
          />
        </div>
        <article className="text-black pt-2 ">
          <h1 className="font-semibold text-2xl text-black">
            Air Jordan 1 Mid SE
          </h1>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>
          <div className="py-1">
            <p className="text-sm">Select Size:</p>
            <div className="flex gap-2 text-sm">
              {sizes.map((size) => (
                <motion.span
                  key={size}
                  className={`border cursor-pointer hover:bg-gray-800 hover:text-white w-8 grid place-content-center h-8 rounded-md ${
                    selectedSize === size ? 'bg-gray-800 text-white' : ''
                  }`}
                  onClick={() => handleSelectSize(size)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {size}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span className="font-medium text-2xl text-black">$394</span>

            <button className="w-fit px-6 text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md">
              <ShoppingCart className="w-5 h-5" /> Add to cart
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Card

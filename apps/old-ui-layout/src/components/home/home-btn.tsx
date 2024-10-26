import React from 'react'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
function HomeBtn() {
  return (
    <>
      <div className="flex flex-col mx-auto lg:gap-5 gap-2 items-center justify-center lg:py-10 py-2">
        <button className="group relative cursor-pointer h-12 lg:w-36 w-full border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
          <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
            Our Work
          </span>
          <div className="flex gap-2 text-white bg-green-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
            <span>Our Work</span>
          </div>
        </button>
        <button className="group relative inline-flex h-12 lg:w-36 w-full text-sm items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]">
          Contact me
        </button>
        <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md  border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white w-36 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          Click Me
        </button>
        <button className="group relative cursor-pointer h-12 lg:w-36 w-full border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
          <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
            About
          </span>
          <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
            <span>About</span>
            <ArrowRight />
          </div>
          <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-[#263381] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
        </button>
        <button className="relative inline-flex h-12 lg:w-36  w-full overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 text-sm font-medium dark:text-gray-50 text-black backdrop-blur-3xl">
            Click Me
          </span>
        </button>
      </div>
    </>
  )
}

export default HomeBtn

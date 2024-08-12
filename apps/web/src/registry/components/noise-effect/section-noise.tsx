'use client'
import React, { useState, useCallback } from 'react'

const index = () => {
  const [opacity, setOpacity] = useState(0.05)
  const handleOpacityChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOpacity(parseFloat(event.target.value))
    },
    []
  )
  return (
    <>
      <div className="flex justify-end pb-2">
        <label htmlFor="opacity-slider " className="mr-2 inline-block">
          Noise Opacity:
        </label>
        <input
          id="opacity-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={handleOpacityChange}
        />
        <span className="ml-2">{opacity.toFixed(2)}</span>
      </div>
      <main className="relative border rounded-lg">
        <div
          className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
          style={{ opacity: opacity }}
        ></div>
        <section className="  font-semibold 2xl::h-[600px] sm:h-[500px] h-[450px] bg-gradient-to-t dark:to-gray-800 dark:from-gray-950 to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center dark:text-white text-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            An Home Page with Noise Effect
          </h1>
        </section>
      </main>
    </>
  )
}
export default index

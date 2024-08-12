import React from 'react'
import Earth from '@/components/globe'

function index() {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-white   text-white">
        <article className="max-w-[500px] overflow-hidden mx-auto mt-6 p-5 text-center   border rounded-lg relative h-[500px]">
          <div className="absolute top-0 left-0 z-[1] h-full w-full  bg-[radial-gradient(#83838352_1px,#ececec_1px)] bg-[size:20px_20px]"></div>
          <div className="relative z-10 pt-4 h-full">
            <h1 className="sm:text-7xl text-5xl font-semibold bg-gradient-to-b from-[#202020] to-[#9c9c9c] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              DESIGN A MASTERPIECE
            </h1>
            <Earth
              mapBrightness={6}
              dark={0}
              baseColor={[1, 1, 1]}
              glowColor={[1, 1, 1]}
              className="sm:max-w-[800px] max-w-[1000px] absolute sm:bottom-auto -bottom-20 translate-y-4 sm:-right-20 -right-0 sm:h-[450px] h-[550px]"
            />
          </div>
        </article>
      </div>
    </>
  )
}

export default index

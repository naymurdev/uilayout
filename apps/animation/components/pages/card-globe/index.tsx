import React from 'react'
import Earth from '@/components/globe'

function index() {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-black   text-white">
        <article className="max-w-[500px] mx-auto mt-6 p-5 text-center  border-gray-900 border rounded-lg relative">
          <div className="absolute top-0 left-0 z-[1] h-full w-full  bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]"></div>
          <div className="relative z-10">
            <h1 className="sm:text-7xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              DESIGN A MASTERPIECE
            </h1>
            <Earth />
          </div>
        </article>
      </div>
    </>
  )
}

export default index

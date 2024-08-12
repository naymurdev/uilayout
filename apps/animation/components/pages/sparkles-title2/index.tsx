import React from 'react'
import { Sparkles } from '@/components/sparkles'

function index() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden bg-black">
        <div className="mx-auto pt-12 w-screen max-w-2xl relative z-10">
          <div className=" sm:w-14 w-12 sm:h-14 h-12 mx-auto bg-white rounded-lg before:absolute relative before:w-full before:h-full before:bg-white/40 before:rounded-lg before:-top-2 before:-left-2"></div>
          <h1 className="text-center sm:text-5xl text-4xl text-white font-medium pt-3">
            UI-LAYOUT
          </h1>
        </div>
        <div className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-80 after:absolute  after:-left-1/2 after:bottom-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
          <Sparkles
            density={1200}
            direction="bottom"
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <article className="text-white  -mt-32 sm:w-2/3 mx-auto block text-center ">
          It is a modern and minimalist UI component library designed to
          simplify the process of building responsive and visually appealing web
          interfaces.
        </article>

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-3/4 mx-auto pt-8">
          <div className="w-full aspect-square bg-gray-800 border rounded-md"></div>
          <div className="w-full aspect-square bg-white rounded-md"></div>
          <div className="w-full aspect-square bg-white rounded-md"></div>
          <div className="w-full aspect-square bg-white rounded-md"></div>
        </div>
      </div>
    </>
  )
}

export default index

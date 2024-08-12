import React from 'react'
import { Sparkles } from '@/components/sparkles'

function index() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden bg-black">
        <div className="mx-auto pt-32 pb-4 w-screen max-w-2xl relative z-10">
          <div className="relative h-full w-full bg-white">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
          <div className=" w-16 h-16 mx-auto bg-white rounded-lg before:absolute relative before:w-full before:h-full before:bg-white/40 before:rounded-lg before:-top-2 before:-left-2"></div>
          <article className="text-white sm:w-3/4 sm:text-base text-sm w-[90%] mx-auto block text-center pt-4 ">
            It is a modern and minimalist UI component library designed to
            simplify the process of building responsive and visually appealing
            web interfaces.
          </article>
        </div>
        <div className="relative h-64 w-screen overflow-hidden ">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-2/4 mx-auto blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent h-px w-2/4 mx-auto" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent h-px w-1/4 mx-auto" />

          <Sparkles
            density={1200}
            mousemove={true}
            className="absolute inset-x-0 -mt-24 top-0 h-full w-full sm:[mask-image:radial-gradient(50%_50%,white,transparent_55%)] [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  )
}

export default index

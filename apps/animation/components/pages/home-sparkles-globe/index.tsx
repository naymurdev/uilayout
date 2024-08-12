import React from 'react'
import Earth from '../../globe'
import { Sparkles } from '@/components/sparkles'

function index() {
  return (
    <>
      <div className="h-[400px] overflow-hidden bg-black text-white relative rounded-lg">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-xs border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Get Access
          </span>
          <h1 className="text-3xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Design with a Global
            <br />
            Perspective, Innovate with Ease.
          </h1>
          <Earth />
        </article>

        <div className="absolute -bottom-20 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%]  ">
          <Sparkles
            direction="top"
            color="#4992f3"
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
      </div>
    </>
  )
}

export default index

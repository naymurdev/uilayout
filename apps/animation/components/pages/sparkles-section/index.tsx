import React from 'react'
import { Sparkles } from '@/components/sparkles'

function index() {
  return (
    <>
      <main className=" h-screen relative w-full  overflow-hidden bg-black text-white ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#7a7a7a2c_1px,transparent_1px),linear-gradient(to_bottom,#7a7a7a2c_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <section className=" relative h-[90vh] mt-4 w-full overflow-hidden rounded-2xl">
          <article className="grid container mx-auto gap-4 text-center relative z-10 pt-10">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Early Access
            </span>
            <h1 className="2xl:text-6xl  xl:text-5xl sm:text-5xl text-2xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Become an Animation Expert <br /> Easily at Our Academy
            </h1>
            <span className="sm:text-base text-sm">
              Our expert-led courses are perfect for all skill levels. Gain{' '}
              <br className="sm:block hidden" />
              hands-on experience and create stunning animations{' '}
              <br className="sm:block hidden" /> effortlessly. Join us today!
            </span>
            <button className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white">
              Take The Course
            </button>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default index

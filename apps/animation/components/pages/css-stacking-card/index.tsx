'use client'
import { ReactLenis } from 'lenis/react'
export default function index(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              CSS Sticky Properties for <br /> Stacking Cards. Scroll down! 👇
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <>
            <div className="sm:sticky sm:top-0  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[55%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-2  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[60%]  align-bottom object-cover rounded-md [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-4  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[65%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-6  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[70%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-8  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[75%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-12  w-full ">
              <figure className="w-full h-screen flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=1200&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[80%]  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </>
        </section>

        <footer className="group bg-slate-950 ">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            ui-layout
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer>
      </main>
    </ReactLenis>
  )
}

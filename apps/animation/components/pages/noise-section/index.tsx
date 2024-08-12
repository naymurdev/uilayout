'use client'
import React, { useRef } from 'react'
import { ReactLenis } from 'lenis/react'

const index = () => {
  return (
    <ReactLenis root>
      <svg className="clipppy absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-another1" clipPathUnits={'objectBoundingBox'}>
            <path
              d="M0 0.0417599C0 0.0186966 0.0250721 0 0.056 0H0.6105C0.641428 0 0.6665 0.0186965 0.6665 0.0417599V0.148024C0.6665 0.171087 0.691572 0.189784 0.7225 0.189784H0.944C0.974928 0.189784 1 0.20848 1 0.231544V0.95824C1 0.981303 0.974928 1 0.944 1H0.056C0.0250721 1 0 0.981303 0 0.95824V0.0417599Z"
              fill="#D9D9D9"
            />
          </clipPath>
          <clipPath id="clip-another2" clipPathUnits={'objectBoundingBox'}>
            <path
              d="M0.1145 0.139138L0.235656 0.0147291C0.244771 0.0053695 0.257945 0 0.271794 0H0.5H0.96C0.982091 0 1 0.016076 1 0.0359066V0.964093C1 0.983924 0.982091 1 0.96 1H0.04C0.0179086 1 0 0.983924 0 0.964093V0.5V0.265845C0 0.255659 0.00428628 0.24585 0.0120005 0.238381L0.1145 0.139138Z"
              fill="#D9D9D9"
            />
          </clipPath>
          <clipPath id="clip-another3" clipPathUnits={'objectBoundingBox'}>
            <path
              d="M0 0.0351351C0 0.0157306 0.0174609 0 0.039 0H0.5H0.727414C0.741798 0 0.755513 0.00547207 0.765179 0.0150678L0.858 0.107207L0.98622 0.236143C0.995093 0.245066 1 0.256625 1 0.268605V0.5V0.964865C1 0.984269 0.982539 1 0.961 1H0.039C0.0174609 1 0 0.984269 0 0.964865V0.0351351Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>
      <main className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]">
        <section className="  font-semibold  h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            An Home Page with Noise Effect <br /> Scroll Please 👇
          </h1>
        </section>
        <section className="  dark:bg-black bg-white ">
          <h1 className="text-4xl px-8 text-white font-semibold tracking-tight pt-8 ">
            A Team That have no useCase but <br /> still in the frame
          </h1>
          <div className="p-10 grid grid-cols-3 gap-8">
            <figure style={{ clipPath: 'url(#clip-another1)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
              />
            </figure>
            <figure style={{ clipPath: 'url(#clip-another2)' }}>
              <img
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
                src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?w=500&auto=format&fit=crop"
                alt=""
              />
            </figure>
            <figure style={{ clipPath: 'url(#clip-another3)' }}>
              <img
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
                src="https://images.unsplash.com/photo-1573496358322-6d530124361d?w=500&auto=format&fit=crop"
                alt=""
              />
            </figure>
            <figure style={{ clipPath: 'url(#clip-another3)' }}>
              <img
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
                src="https://images.unsplash.com/photo-1573496358322-6d530124361d?w=500&auto=format&fit=crop"
                alt=""
              />
            </figure>
            <figure style={{ clipPath: 'url(#clip-another1)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
              />
            </figure>
            <figure style={{ clipPath: 'url(#clip-another2)' }}>
              <img
                className="transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-105 w-full"
                src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?w=500&auto=format&fit=crop"
                alt=""
              />
            </figure>
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}
export default index

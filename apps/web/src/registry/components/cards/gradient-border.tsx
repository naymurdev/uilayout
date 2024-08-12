// https://cruip-tutorials.vercel.app/cards-hover-effect/
import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <>
      <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
        <div className="relative text-center z-10 px-0 py-16 rounded-2xl  w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] bg-cover bg-black h-full mx-auto">
          <>
            <Image
              src={
                'https://res.cloudinary.com/dzl9yxixg/image/upload/chat_se21ao.png'
              }
              alt="grid"
              width={600}
              className="mx-auto w-[85%]"
              height={600}
            />
            <h1 className="text-xl font-semibold tracking-tight text-white">
              Create Group Effortlessly
            </h1>
            <p className="text-base pt-2  text-gray-300 capitalize">
              Seamless chats, crystal-clear videos, and <br />
              premium audio quality
            </p>
          </>
        </div>
      </div>
    </>
  )
}

export default index

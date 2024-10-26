import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { BlurVignette, BlurVignetteArticle } from './blur-vignette'

function index() {
  return (
    <>
      <div className="w-fit  mx-auto sm:flex gap-2 justify-center ">
        <BlurVignette
          radius="24px"
          inset="100px"
          transitionLength="200px"
          blur="15px"
        >
          <Image
            src="https://img.freepik.com/free-photo/cartoon-superhero-illustration_23-2151732547.jpg"
            alt="grid"
            width={600}
            className="mx-auto w-full relative h-full object-cover"
            height={600}
          />
          <BlurVignetteArticle classname="h-[35%] w-[96%] ml-2 mt-auto mb-1 border border-gray-500/60">
            <article className=" py-5 px-3">
              <h1 className="text-3xl">UiLayout</h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quaerat ab? Rerum facilis dignissimos voluptatum!
              </p>
            </article>
          </BlurVignetteArticle>
        </BlurVignette>
        <BlurVignette
          radius="24px"
          inset="100px"
          transitionLength="200px"
          blur="15px"
        >
          <Image
            src="https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794328.jpg"
            alt="grid"
            width={600}
            className="mx-auto w-full relative h-full object-cover"
            height={600}
          />
          <BlurVignetteArticle classname="h-[35%] w-[96%] ml-2 mt-auto mb-1 border border-gray-900/20">
            <article className=" py-5 px-3">
              <h1 className="text-3xl">UiLayout</h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quaerat ab? Rerum facilis dignissimos voluptatum!
              </p>
            </article>
          </BlurVignetteArticle>
        </BlurVignette>
      </div>
    </>
  )
}

export default index

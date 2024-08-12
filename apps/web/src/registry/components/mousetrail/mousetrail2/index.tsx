'use client'
import React from 'react'

import ImageMouseTrail from '../mousetrail'

const images = [
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741160/photo-1714514828598-70dbbc1c13fb_teaqhw.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1522743358649-311c79004e9a_busrji.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1522743358649-311c79004e9a_busrji.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1697985189201-293f0ddfc36d_mam2av.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741158/photo-1714182356074-99c7c843e197_jji1oe.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714402002623-86d68590c545_eyrfna.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1712313242836-3ae9c1fd6767_ynpin3.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714523479594-13c0bb72fcf3_n85lma.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
  'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg',
]
export default function index() {
  return (
    <section>
      <ImageMouseTrail
        items={images}
        maxNumberOfImages={9}
        distance={35}
        imgClass="w-20 h-24"
        className="bg-white text-black"
      >
        <article className="relative z-50 ">
          <h1 className="xl:text-[7em] sm:text-6xl text-4xl text-center font-semibold ">
            ✨Experience
          </h1>
        </article>
      </ImageMouseTrail>
    </section>
  )
}

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
]
export default function index() {
  return (
    <section>
      <ImageMouseTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36"
      >
        <article className="relative z-50 mix-blend-difference">
          <h1 className="lg:text-4xl md:text-3xl text-xl text-center font-semibold mix-blend-difference">
            ✨ Experience Interactive Designs with <br />
            Dynamic Mouse Trails
          </h1>
        </article>
      </ImageMouseTrail>
    </section>
  )
}

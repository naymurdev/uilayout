import React, { useState } from 'react'
import ImageModal from '@/lab/components/modal/image-modal'
import SliderModal from '@/lab/components/modal/slider-modal'

type Item = {
  id: string
  imgSrc: string
}

const items: Item[] = [
  {
    id: '1',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1697985189201-293f0ddfc36d_mam2av.jpg',
  },
  {
    id: '2',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714566083/maria-fernanda-pissioli-DTZV8WDM1Ho-unsplash_g1appd.jpg',
  },
  {
    id: '3',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558603/one_b9cqx0.jpg',
  },
  {
    id: '5',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741159/photo-1713865248397-6a3825850fc7_mh5rxg.jpg',
  },
  {
    id: '6',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1713223289172-e45b0ed96eae_cdizhk.jpg',
  },
  {
    id: '7',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/three_icxa4g.jpg',
  },
]

const modal: React.FC = () => {
  return (
    <>
      <div className="columns-3 ">
        {items.map((item, index) => (
          <SliderModal item={item} itemArr={items} uniqueId={`id-${index}`} />
        ))}
      </div>
    </>
  )
}

export default modal

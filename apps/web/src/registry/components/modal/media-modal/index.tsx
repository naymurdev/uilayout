// @ts-nocheck
'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FramerModal, MediaModal, ModalContent } from './image-modal'

type Item = {
  id: string
  imgSrc?: string
  videoSrc?: string
}

const items: Item[] = [
  {
    id: '1',
    imgSrc:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg',
  },
  {
    id: '2',

    videoSrc:
      'https://res.cloudinary.com/dzl9yxixg/video/upload/v1715679908/nature_w14mmq.mp4',
  },
]

const modal: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <MediaModal
          imgSrc={
            'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg'
          }
        />
        <MediaModal
          videoSrc={
            'https://res.cloudinary.com/dzl9yxixg/video/upload/v1715679908/nature_w14mmq.mp4'
          }
        />
      </div>
    </>
  )
}

export default modal

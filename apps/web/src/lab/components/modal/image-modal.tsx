import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Image from 'next/image'

type ImageModalProps = {
  imgSrc: string
  uniqueId: string
}

const ImageModal: React.FC<ImageModalProps> = ({ imgSrc, uniqueId }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div onClick={() => setIsOpen(true)} layoutId={uniqueId}>
        <Image
          width={400}
          height={400}
          src={imgSrc}
          className="bg-white text-black rounded-md w-full cursor-zoom-in"
          alt="img"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center dark:bg-black/90 bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              layoutId={uniqueId}
              className="rounded-md w-fit h-[80%] mx-auto"
            >
              <Image
                src={imgSrc}
                width={400}
                height={400}
                alt="img"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageModal

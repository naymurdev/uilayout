import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'

interface IMediaModal {
  imgSrc?: string
  videoSrc?: string
  className?: string
}

export function MediaModal({ imgSrc, videoSrc, className }: IMediaModal) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width:768px)')
  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMediaModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMediaModalOpen])
  return (
    <>
      <AnimatePresence>
        {isMediaModalOpen !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center dark:bg-black/90 bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => {
              setIsMediaModalOpen(false)
            }}
          >
            {imgSrc! && (
              <motion.div
                onClick={(e) => isDesktop && e.stopPropagation()}
                layoutId={`img-${imgSrc}`}
                className={`" w-fit h-[80%] mx-auto  ${
                  isDesktop ? ' cursor-default' : '  cursor-zoom-out'
                }`}
              >
                <img
                  src={imgSrc}
                  width={800}
                  height={800}
                  alt="single-image"
                  className="rounded-md w-full h-full object-contain"
                />
              </motion.div>
            )}
            {videoSrc! && (
              <motion.div
                onClick={(e) => isDesktop && e.stopPropagation()}
                layoutId={`video-${videoSrc}`}
                className={`" w-fit h-[80%] mx-auto  ${
                  isDesktop ? ' cursor-default' : '  cursor-zoom-out'
                }`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  className="h-full w-full object-cover  rounded-sm"
                >
                  <source src={videoSrc!} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {imgSrc! && (
        <motion.div
          onClick={() => {
            setIsMediaModalOpen(true)
          }}
          layoutId={`img-${imgSrc}`}
          className={cn('overflow-hidden  w-full', className)}
        >
          <img
            width={400}
            height={400}
            src={imgSrc}
            className="bg-white text-black rounded-md w-full cursor-zoom-in"
            alt="img"
          />
        </motion.div>
      )}

      {videoSrc! && (
        <motion.div
          onClick={() => {
            setIsMediaModalOpen(true)
          }}
          layoutId={`video-${videoSrc}`}
          className={cn('overflow-hidden  w-full h-full', className)}
        >
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover cursor-zoom-in rounded-sm"
          >
            <source src={videoSrc!} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </>
  )
}

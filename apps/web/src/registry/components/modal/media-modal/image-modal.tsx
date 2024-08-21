import React, { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { XIcon } from 'lucide-react'
import { createPortal } from 'react-dom'

interface IMediaModal {
  imgSrc?: string
  videoSrc?: string
  className?: string
}
const transition = {
  type: 'spring',
  duration: 0.4,
}
export function MediaModal({ imgSrc, videoSrc, className }: IMediaModal) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width:768px)')
  const uniqueId = useId()

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
      <MotionConfig transition={transition}>
        <motion.div className="flex w-full  gap-4   py-10">
          <motion.div
            // @ts-ignore
            className="w-full flex relative  flex-col overflow-hidden border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
            layoutId={`dialog-${uniqueId}`}
            style={{
              borderRadius: '12px',
            }}
            onClick={() => {
              setIsMediaModalOpen(true)
            }}
          >
            {imgSrc && (
              <motion.div
                layoutId={`dialog-img-${uniqueId}`}
                className="w-full h-full"
              >
                <img
                  src={imgSrc}
                  alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                  className=" w-full object-cover"
                />
              </motion.div>
            )}
            {videoSrc && (
              <motion.div
                layoutId={`dialog-video-${uniqueId}`}
                className="w-full h-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover  rounded-sm"
                >
                  <source src={videoSrc!} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {createPortal(
          <AnimatePresence initial={false} mode="sync">
            {isMediaModalOpen && (
              <>
                <motion.div
                  key={`backdrop-${uniqueId}`}
                  className="fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-sm "
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => {
                    setIsMediaModalOpen(false)
                  }}
                />
                <motion.div
                  key="dialog"
                  className="pointer-events-none fixed inset-0 flex items-center justify-center z-50"
                >
                  <motion.div
                    className="pointer-events-auto relative flex flex-col overflow-hidden   dark:bg-gray-950 bg-gray-200 border w-[80%] h-[90%] "
                    layoutId={`dialog-${uniqueId}`}
                    tabIndex={-1}
                    style={{
                      borderRadius: '24px',
                    }}
                  >
                    {imgSrc && (
                      <motion.div
                        layoutId={`dialog-img-${uniqueId}`}
                        className="w-full h-full"
                      >
                        <img
                          src={imgSrc}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    )}
                    {videoSrc && (
                      <motion.div
                        layoutId={`dialog-video-${uniqueId}`}
                        className="w-full h-full"
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

                    <button
                      onClick={() => setIsMediaModalOpen(false)}
                      className="absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"
                      type="button"
                      aria-label="Close dialog"
                    >
                      <XIcon size={24} />
                    </button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
      </MotionConfig>
      {/* <AnimatePresence>
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
      )} */}
    </>
  )
}

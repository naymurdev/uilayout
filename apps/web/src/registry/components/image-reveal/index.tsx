'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { MoveUpRight } from 'lucide-react'

import React, { useState, useRef, useCallback, useEffect } from 'react'

interface ImageData {
  id: number
  src: string
  alt: string
}

const images: ImageData[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',

    alt: 'Image Mousetrail',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',

    alt: 'Spotlight Cards',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',

    alt: 'Sparkles Effects',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',

    alt: 'Horizontal Scroll',
  },
]

const ImageReveal2: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [activeImage, setActiveImage] = useState<ImageData | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(0.5)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  const handleImageHover = useCallback(
    (image: ImageData) => {
      if (activeImage !== image) {
        setActiveImage(image)
        // setOpacity(0);
        // setScale(0.5);
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setOpacity(1)
          setScale(1)
        }, 50)
      } else {
        setOpacity(1)
        setScale(1)
      }
    },
    [activeImage]
  )

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
    setScale(0.5)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null)
    }, 300)
  }, [])
  // console.log(activeImage)

  return (
    <div
      className="relative w-full min-h-fit dark:bg-gradient-to-b from-black from-10% to-gray-950 to-100% bg-gray-100 rounded-md border "
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`p-4 cursor-pointer relative  sm:flex items-center justify-between 
            `}
          onMouseEnter={() => handleImageHover(image)}
        >
          <>
            {!isDesktop && (
              <img
                src={image?.src}
                className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
                alt="mobileImg"
              />
            )}
            <h2
              className={`newFont dark:text-gray-300  uppercase md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative  ${
                activeImage?.id == image?.id
                  ? 'mix-blend-difference z-20 text-gray-300 '
                  : 'text-gray-700'
              }`}
            >
              {image.alt}
            </h2>
          </>

          <button
            className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
              activeImage?.id == image?.id
                ? 'mix-blend-difference z-20 bg-white text-black '
                : ''
            }`}
          >
            <MoveUpRight className="w-8 h-8" />
          </button>
          <div
            className={`h-[2px] dark:bg-white bg-black absolute bottom-0  left-0 transition-all duration-300 ease-linear ${
              activeImage?.id == image?.id ? ' w-full' : ' w-0'
            }`}
          />
        </div>
      ))}

      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 bg-white object-cover  pointer-events-none transition-all duration-300 ease-out z-10 w-[300px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  )
}

export default ImageReveal2

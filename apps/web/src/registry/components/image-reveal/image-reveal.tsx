import React, { useState, useCallback, useEffect } from 'react'

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
const ImageHover2: React.FC = () => {
  const [activeImage, setActiveImage] = useState<ImageData | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isRightSide, setIsRightSide] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
    // Determine if cursor is on the right side of the hovered element
    const hoveredElement = e.target as HTMLElement
    const rect = hoveredElement.getBoundingClientRect()
    setIsRightSide(e.clientX > rect.left + rect.width / 2)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleImageHover = useCallback((image: ImageData) => {
    setActiveImage(image)
    setOpacity(1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
    setTimeout(() => setActiveImage(null), 300)
  }, [])

  return (
    <div className="relative w-full min-h-screen">
      {images.map((image) => (
        <div
          key={image.id}
          className="p-4 cursor-pointer border-b last:border-b-0"
          onMouseEnter={() => handleImageHover(image)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="newFont dark:text-white text-gray-700 uppercase text-6xl font-semibold py-6 leading-[100%] relative z-20 dark:mix-blend-difference">
            {image.alt}
          </h2>
        </div>
      ))}
      {activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="fixed pointer-events-none transition-transform duration-300 ease-out"
          style={{
            width: '450px',
            height: '600px',
            objectFit: 'cover',
            left: `${cursorPosition.x + (isRightSide ? -50 : 50)}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) skew(${
              isRightSide ? '-' : ''
            }5deg)`,
            opacity: opacity,
            zIndex: 10,
          }}
        />
      )}
    </div>
  )
}

export default ImageHover2

'use client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

interface CarouselProps {
  children: React.ReactNode
  options: EmblaOptionsType
  className?: string
  activeSlider?: boolean
}

interface CarouselContextType {
  selectedIndex: any
  emblaThumbsRef: any
  slidesrArr: any
  setSlidesArr: any
  onThumbClick: any
  emblaMainRef: any
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
)

export const useCarouselContext = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider')
  }
  return context
}

const ThumbnailCarousel: React.FC<CarouselProps> = ({
  children,
  options,
  className,
}) => {
  const [slidesrArr, setSlidesArr] = useState<Element[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        selectedIndex,
        emblaThumbsRef,
        slidesrArr,
        setSlidesArr,
        onThumbClick,
        emblaMainRef,
      }}
    >
      <div className={cn(className, 'overflow-hidden  rounded-md ')}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

interface SliderProps {
  children: React.ReactNode
  slideSize?: string
  className?: string
  thumnailSrc: any
}

export const SliderContainer = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  const { emblaMainRef }: any = useCarouselContext()
  return (
    <div ref={emblaMainRef}>
      <div
        className={cn('flex', className)}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        {children}
      </div>
    </div>
  )
}
export const Slider: React.FC<SliderProps> = ({
  children,
  slideSize,
  className,
  thumnailSrc,
}) => {
  const { setSlidesArr } = useCarouselContext()
  const addImgToSlider = useCallback(() => {
    setSlidesArr((prev: any) => [...prev, thumnailSrc])
  }, [])
  useEffect(() => {
    addImgToSlider()
  }, [])
  return (
    <div
      className={cn('min-w-0 thubnail_slider', className)}
      style={{ flex: `0 0 ${slideSize ? slideSize : '100%'}` }}
    >
      <>{children}</>
    </div>
  )
}
export const ThumsSlider: React.FC<any> = () => {
  const { emblaThumbsRef, slidesrArr, selectedIndex, onThumbClick }: any =
    useCarouselContext()
  console.log(slidesrArr)

  return (
    <div className=" overflow-hidden mt-2" ref={emblaThumbsRef}>
      <div className="flex flex-row ">
        {slidesrArr?.map((slide: any, index: any) => (
          <div
            className={`min-w-0 w-full h-24 border-4 rounded-md ${
              index === selectedIndex
                ? 'dark:border-white border-black'
                : 'border-transparent'
            }`}
            style={{ flex: `0 0 15%` }}
            onClick={() => onThumbClick(index)}
          >
            <motion.img
              src={slide}
              className="w-full h-full object-cover rounded-sm"
              width={400}
              height={400}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailCarousel

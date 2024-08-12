// import React, { ReactNode, createContext } from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from './EmblaCarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'
// import './embla.css'
// import { cn } from '@/lib/utils'
// interface CarouselContextType {
//   prevBtnDisabled: boolean;
//   nextBtnDisabled: boolean;
//   onPrevButtonClick: () => void;
//   onNextButtonClick: () => void;
// }

// const carouselContext = createContext()
// interface CarouselProps {
//   children: React.ReactNode
//   options: any
//   className?: string
// }

// const Carousel: React.FC<CarouselProps> = ({
//   children,
//   options,
//   className,
// }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi)

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi)

//   return (
//     <div className={cn('overflow-hidden', className)} ref={emblaRef}>

//           <div className="embla__buttons flex gap-2">
//             <PrevButton
//               onClick={onPrevButtonClick}
//               disabled={prevBtnDisabled}
//             />
//             <NextButton
//               onClick={onNextButtonClick}
//               disabled={nextBtnDisabled}
//             />
//           </div>

//           <div className="embla__dots">
//             {scrollSnaps.map((_, index) => (
//               <DotButton
//                 key={index}
//                 onClick={() => onDotButtonClick(index)}
//                 className={'embla__dot'.concat(
//                   index === selectedIndex ? ' embla__dot--selected' : ''
//                 )}
//               />
//             ))}
//           </div>

//     </div>
//   )
// }

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import './embla.css'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import { cn } from '@/lib/utils'
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
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
  selectedIndex: any
  scrollSnaps: any
  onDotButtonClick: any
  scrollProgress: any
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

const Carousel: React.FC<CarouselProps> = ({
  children,
  options,
  className,
  activeSlider,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    activeSlider ? [ClassNames()] : []
  )

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  const [scrollProgress, setScrollProgress] = useState(0)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])
  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])

  return (
    <CarouselContext.Provider
      value={{
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
        scrollProgress,
      }}
    >
      <div
        className={cn('overflow-hidden relative rounded-md ', className)}
        ref={emblaRef}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

interface SliderProps {
  children: React.ReactNode
  slideSize?: string
  className?: string
}

export const SliderContainer = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn('flex relative', className)}
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      {children}
    </div>
  )
}
export const Slider: React.FC<SliderProps> = ({
  children,
  slideSize,
  className,
}) => {
  return (
    <div
      className={cn('min-w-0 ', className)}
      style={{ flex: `0 0 ${slideSize ? slideSize : '100%'}` }}
    >
      {children}
    </div>
  )
}

export const SliderPrevButton = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  const { onPrevButtonClick, prevBtnDisabled }: any = useCarouselContext()
  return (
    <button
      className={cn('', className)}
      type="button"
      onClick={onPrevButtonClick}
      disabled={prevBtnDisabled}
    >
      {children}
    </button>
  )
}
export const SliderNextButton = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  const { onNextButtonClick, nextBtnDisabled }: any = useCarouselContext()
  return (
    <>
      <button
        className={cn('', className)}
        type="button"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        {children}
      </button>
    </>
  )
}
export const SliderProgress = ({ className }: { className?: string }) => {
  const { scrollProgress }: any = useCarouselContext()
  return (
    <div
      className={cn(
        '  bg-gray-500 relative rounded-md h-2 justify-end items-center w-96 max-w-[90%] overflow-hidden',
        className
      )}
    >
      <div
        className="dark:bg-white bg-black absolute w-full top-0 -left-[100%] bottom-0"
        style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
      />
    </div>
  )
}
export const SliderDotButton = ({ className }: { className?: string }) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick }: any =
    useCarouselContext()
  return (
    <div className={cn('flex', className)}>
      <div className="flex gap-2">
        {scrollSnaps.map((_: any, index: React.Key | null | undefined) => (
          <button
            type="button"
            onClick={() => onDotButtonClick(index)}
            className={` inline-flex cursor-pointer  border-2 p-0 m-0 w-4 h-4 z-[1] rounded-full ${
              index === selectedIndex
                ? ' dark:bg-white bg-black dark:border-white border-black'
                : 'bg-transparent dark:border-white border-black'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

export default Carousel

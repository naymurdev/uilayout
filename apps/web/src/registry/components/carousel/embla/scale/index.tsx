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
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
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
  selectedSnap: any
  snapCount: any
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
)
const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)
export const useCarouselContext = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider')
  }
  return context
}

const CarouselOther: React.FC<CarouselProps> = ({
  children,
  options,
  className,
  activeSlider,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    activeSlider ? [ClassNames()] : []
  )
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
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
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.slider_content') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
  }, [emblaApi, tweenScale])
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
        selectedSnap,
        snapCount,
      }}
    >
      <div
        className={cn(className, 'overflow-hidden  rounded-md ')}
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
      className={cn('flex', className)}
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
      <div className="slider_content">{children}</div>
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

export const SliderSnapDisplay = ({ className }: { className?: string }) => {
  const { selectedSnap, snapCount }: any = useCarouselContext()
  return (
    <div className={cn('mix-blend-difference', className)}>
      {selectedSnap + 1} / {snapCount}
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
            key={index}
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
type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type UseSelectedSnapDisplayType = {
  selectedSnap: number
  snapCount: number
}

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length)
    setSelectedSnap(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateScrollSnapState(emblaApi)
    emblaApi.on('select', updateScrollSnapState)
    emblaApi.on('reInit', updateScrollSnapState)
  }, [emblaApi, updateScrollSnapState])

  return {
    selectedSnap,
    snapCount,
  }
}
export default CarouselOther

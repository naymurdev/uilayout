'use client';
import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
import { useEffect, useRef, useState } from 'react';
import { throttle } from '../../../lib/utils';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },

  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
  },

  {
    id: 91,
    url: 'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
  },
  {
    id: 92,
    url: 'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1726551195764-f98a8e8a57c3?q=80&w=1200&auto=format',
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1726551195795-612ca47c0b7d?q=80&w=1200&auto=format',
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1532423622396-10a3f979251a?q=80&w=1200&auto=format',
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format',
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1200&auto=format',
  },
];

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: '#008299' },
    partial: { backgroundColor: '#ffffff' },
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: false },
};

export default function index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(mainRef);
  //   const { ref, start, end } = useRefScrollProgress(mainRef)
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  console.log(carouselEndPosition);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  useEffect(() => {
    window.addEventListener('scroll', () => console.log(carouselEndPosition));
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section ref={mainRef}>
        <div className='w-full mx-auto' style={{ height: '300vh' }}>
          <div className='sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden'>
            <motion.div ref={carouselRef} className='flex gap-10' style={{ x }}>
              {items.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className='group relative h-[300px] w-[300px] overflow-hidden bg-neutral-200'
                >
                  <motion.img
                    key={item.id}
                    className='w-full flex-shrink-0 h-full object-cover'
                    src={item?.url}
                    alt={'img'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <footer className='group '>
        <h1 className='text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
          ui-layout
        </h1>
        <section className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'>
          Thanks for Scrolling
        </section>
      </footer>
    </>
  );
}

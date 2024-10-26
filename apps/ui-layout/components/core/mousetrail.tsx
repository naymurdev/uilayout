//@ts-nocheck
'use client';
import { items } from '@/components/common/constant';
import { cn } from '@/lib/utils';
import { createRef, useRef } from 'react';
interface ImageMouseTrailProps {
  items: ImageItem[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
}
export default function ImageMouseTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = 'w-40 h-48',
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));
  const currentZIndexRef = useRef(1);

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;
    console.log(refs.current[refs.current?.length - 1]);

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1;
    }
    image.style.zIndex = String(currentZIndexRef.current);
    currentZIndexRef.current++;

    image.dataset.status = 'active';
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = 'inactive';
      }, 1500);
    }
    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };
  const deactivate = (image) => {
    image.dataset.status = 'inactive';
  };

  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / distance) {
      // console.log(e.clientX, e.clientY)

      const lead = refs.current[globalIndex % refs.current.length].current;

      const tail =
        refs.current[(globalIndex - maxNumberOfImages) % refs.current.length]
          ?.current;

      if (lead) activate(lead, e.clientX, e.clientY);
      if (tail) deactivate(tail);
      globalIndex++;
    }
  };

  return (
    <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className={cn(
        'grid place-content-center h-[600px] w-full bg-[#e0dfdf] relative overflow-hidden rounded-lg',
        className
      )}
    >
      {items.map((item, index) => (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={index}
            className={cn(
              "object-cover  scale-0 opacity:0 data-[status='active']:scale-100  data-[status='active']:opacity-100 transition-transform data-[status='active']:duration-500 duration-300 data-[status='active']:ease-out-expo  absolute   -translate-y-[50%] -translate-x-[50%] ",
              imgClass
            )}
            data-index={index}
            data-status='inactive'
            src={item}
            alt={`image-${index}`}
            ref={refs.current[index]}
          />
        </>
      ))}
      {children}
    </section>
  );
}

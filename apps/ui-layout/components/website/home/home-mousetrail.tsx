//@ts-nocheck
'use client';
import preview from '@/assets/preview';
import Image from 'next/image';
import React, { useRef, createRef, useState } from 'react';
export const items = [
  {
    id: 1,
    url: preview.tabs,
  },
  {
    id: 2,
    url: preview.Timeline,
  },
  {
    id: 3,
    url: preview.carousel,
  },
  {
    id: 4,
    url: preview.faqs,
  },
  {
    id: 5,
    url: preview.galleryNew,
  },
  {
    id: 6,
    url: preview.globe,
  },
  {
    id: 7,
    url: preview.grid,
  },
  {
    id: 8,
    url: preview.image_masking,
  },
  {
    id: 9,
    url: preview.image_mousetrail,
  },
  {
    id: 10,
    url: preview.tabs,
  },
  {
    id: 11,
    url: preview.heroSec,
  },
  {
    id: 12,
    url: preview.gallery,
  },
  {
    id: 13,
    url: preview.heroSec,
  },
];
export default function HomeMouseTrail() {
  const containerRef = useRef(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));
  // const [position, setPosition] = useState({ x: 0, y: 0 })
  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    image.style.zIndex = (globalIndex % items.length) + 1;

    image.dataset.status = 'active';
    // setTimeout(() => {
    //   image.dataset.status = 'inactive'
    // }, 1000)
    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };
  const deactivate = (image) => {
    image.dataset.status = 'inactive';
  };
  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
      const lead = refs.current[globalIndex % refs.current.length].current;

      const tail =
        refs.current[(globalIndex - 5) % refs.current.length]?.current;

      if (lead) activate(lead, e.clientX, e.clientY);
      if (tail) deactivate(tail);

      globalIndex++;
    }
    // const rect = containerRef.current.getBoundingClientRect()
    // const x = e.clientX - rect.left
    // const y = e.clientY - rect.top
    // const smoothing = 0.1

    // setPosition((prev) => ({
    //   x: prev.x + (x - prev.x) * smoothing,
    //   y: prev.y + (y - prev.y) * smoothing,
    // }))
  };

  return (
    <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className=' h-full  w-full  relative   rounded-xl overflow-hidden grid place-content-center'
    >
      {items.map((item, index) => (
        <figure key={index}>
          <Image
            className="object-contain border dark:bg-black bg-gray-50 z-10 w-32 h-32 scale-0 opacity:0 data-[status='active']:scale-100  data-[status='active']:opacity-100 transition-transform duration-500 data-[status='active']:ease-out-expo  absolute  -translate-y-[50%] -translate-x-[50%]"
            data-index={index}
            data-status='inactive'
            src={item.url}
            alt={`image-${index}`}
            width={500}
            height={500}
            ref={refs.current[index]}
          />
        </figure>
      ))}
      <article className='relative z-20 dark:mix-blend-difference '>
        <h1 className='text-3xl text-center font-semibold'>
          ✨Experience Mouse Trails
        </h1>
      </article>
    </section>
  );
}

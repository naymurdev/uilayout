//@ts-nocheck
'use client';
import { items } from '@/components/website/constant';
import React, { useRef, createRef } from 'react';

export default function ImageMouseTrail3() {
  const containerRef = useRef(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));

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
    setTimeout(() => {
      image.dataset.status = 'inactive';
    }, 1000);
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
  };

  return (
    <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className='grid place-content-center h-[600px] w-full bg-[#e0dfdf] relative overflow-hidden rounded-lg'
    >
      {items.map((item, index) => (
        <img
          key={index}
          className="object-cover z-10   w-40 h-48 scale-0 opacity:0 data-[status='active']:scale-100  data-[status='active']:opacity-100 transition-transform duration-500 data-[status='active']:ease-out-expo  absolute  -translate-y-[50%] -translate-x-[50%]"
          data-index={index}
          data-status='inactive'
          src={item.url}
          alt={`image-${index}`}
          ref={refs.current[index]}
        />
      ))}
      <article className='relative z-20 mix-blend-difference'>
        <h1 className='md:text-4xl text-2xl text-center font-semibold'>
          ✨ Experience Interactive Designs <br />
          with Dynamic Mouse Trails <br />
          built with Tailwind CSS
        </h1>
      </article>
    </section>
  );
}

'use client';

import { motion, useSpring } from 'framer-motion';
import React, { useState, MouseEvent, useRef } from 'react';

interface ImageItem {
  img: string;
  label: string;
  divClass?: string;
}

function HomeImageReveal() {
  const [img, setImg] = useState<{
    alt: string;
    opacity: number;
    divClass: string;
  }>({
    divClass: '',
    alt: '',
    opacity: 0,
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
      img: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
      label: 'Images',

      divClass: 'bg-[#3d5af1]',
    },
    {
      img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
      label: 'Reveal',
      divClass: 'bg-[#17b978]',
    },
    {
      img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
      label: 'Porter',
      divClass: 'bg-[#ffd615]',
    },
    {
      img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
      label: 'LifeStyle',
      divClass: 'bg-[#ff1f5a]',
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    // @ts-ignore
    setImg({ divClass: item.divClass, alt: item.label, opacity });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className='  relative  px-4 w-[95%] mx-auto h-[90%] flex flex-col justify-center '
    >
      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className='w-full py-4 cursor-pointer text-center flex justify-between items-center text-primary  border-b  last:border-none'
        >
          {/* <item.svgSrc /> */}
          <p className='xl:text-4xl text-3xl font-semibold'>{item.label}</p>
          <span>Portfolio*</span>
        </div>
      ))}

      <motion.div
        ref={imageRef}
        className={`w-[300px] h-[220px] rounded-lg object-cover  absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none ${img.divClass}`}
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
}

export default HomeImageReveal;

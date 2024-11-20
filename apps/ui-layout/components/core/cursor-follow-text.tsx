'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={cn(
        `animated-text  text-[15vw] text-center tracking-[-0.06em] w-full font-bold left-0 -bottom-4 absolute leading-[80%]
                 [--gradient-text-center:#3a7eee] [--gradient-text-edge:#f3f4f6]
                 dark:[--gradient-text-center:rgb(226,226,226)] dark:[--gradient-text-edge:rgba(0,9,12,0.1)]`,
        className
      )}
      style={
        {
          '--text-mouse-x': `${mousePosition.x}px`,
          '--text-mouse-y': `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );
};

export default AnimatedText;

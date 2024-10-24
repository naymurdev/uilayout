'use client';
import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
interface BlurVignetteContextProps {
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

const BlurVignetteContext = createContext<BlurVignetteContextProps>({
  radius: '24px',
  inset: '20px',
  transitionLength: '44px',
  blur: '6px',
});

export const useBlurVignetteContext = () => useContext(BlurVignetteContext);

interface BlurVignetteProps {
  classname?: string;
  children: React.ReactNode;
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
  blurclassname?: string;
}

export const BlurVignette: React.FC<BlurVignetteProps> = ({
  classname,
  children,
  radius = '24px',
  inset = '20px',
  transitionLength = '44px',
  blur = '6px',
}) => {
  return (
    <BlurVignetteContext.Provider
      value={{ radius, inset, transitionLength, blur }}
    >
      <div
        className={cn('relative aspect-square overflow-hidden', classname)}
        style={{ borderRadius: radius }}
      >
        {children}
      </div>
    </BlurVignetteContext.Provider>
  );
};
interface BlurVignetteArticleProps {
  children?: React.ReactNode;
  classname?: string;
}

export const BlurVignetteArticle: React.FC<BlurVignetteArticleProps> = ({
  children,
  classname,
}) => {
  const { radius, inset, transitionLength, blur } = useBlurVignetteContext();

  return (
    <div
      className={cn(
        'blur-vignette bottom-0 left-0 w-full h-full z-[1]',
        classname
      )}
      style={
        {
          '--radius': radius,
          '--inset': inset,
          '--transition-length': transitionLength,
          '--blur': blur,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

'use client';

import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  ExternalLink,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from 'lucide-react';
import React, { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import { TCurrComponentProps } from './component-code-preview';
import dynamic from 'next/dynamic';

type ComponentPreviewProps = {
  component?: TCurrComponentProps;
  hasReTrigger?: boolean;
  className?: string;
  code: string;
  responsive?: boolean;
  isFitheight?: boolean;
  isNotCopy?: boolean;
  iframeComponent?: string;
};

export default function ComponentPreview({
  component,
  hasReTrigger = false,
  className,
  code,
  responsive,
  isFitheight,
  isNotCopy,
  iframeComponent,
}: ComponentPreviewProps) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(0);
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const [width, setWidth] = useState('100%');
  const [mode, setMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleReTrigger = () => {
    if (hasReTrigger) {
      setReTriggerKey((prevKey) => prevKey + 1);
    }
  };

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };
  // console.log(component);

  // Memoize the ComponentPreview to prevent re-rendering
  const MemoizedComponentPreview = useMemo(() => {
    return component?.filesrc
      ? dynamic(() => import(`../../../registry/${component.filesrc}`), {
          loading: () => (
            <div className='h-[400px] grid place-content-center'>
              Loading preview...
            </div>
          ),
        })
      : null;
  }, [component?.filesrc]);
  // console.log(iframeComponent);

  return (
    <>
      <div className='absolute right-1 top-0 z-[10] flex h-12 items-center gap-2'>
        {responsive && (
          <div className='flex items-center gap-2 rounded-lg border bg-background p-1'>
            <button
              className={`rounded-md p-1 ${mode === 'desktop' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => {
                setMode('desktop');
                setWidth('100%');
              }}
            >
              <Monitor className='h-5 w-5' />
            </button>
            <button
              onClick={() => {
                setMode('tablet');

                setWidth('50%');
              }}
              className={`rounded-md p-1 ${mode === 'tablet' ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Tablet className='h-5 w-5' />
            </button>
            <button
              onClick={() => {
                setMode('mobile');

                setWidth('32%');
              }}
              className={`rounded-md p-1 ${mode === 'mobile' ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Smartphone className='h-4 w-4' />
            </button>
          </div>
        )}
        {!isNotCopy && (
          <button
            className='relative grid cursor-pointer place-content-center rounded-lg border bg-background p-2 px-2.5'
            onClick={onCopy}
          >
            <div
              className={`transform transition-all duration-300 ${hasCheckIcon ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
            >
              <Copy className='h-5 w-5' />
            </div>
            <div
              className={`absolute inset-0 left-0 top-0 grid h-full w-full transform place-content-center transition-all duration-300 ${
                hasCheckIcon ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              <Check className='h-5 w-5' />
            </div>
          </button>
        )}
        {hasReTrigger && (
          <button
            className='relative grid group cursor-pointer place-content-center rounded-lg border bg-background p-2 px-2'
            onClick={handleReTrigger}
          >
            <RotateCw className='h-5 w-5 group-hover:rotate-180 transition-transform' />
          </button>
        )}
      </div>

      {responsive ? (
        <>
          {iframeComponent ? (
            <>
              <div
                className={cn(
                  `${isFitheight ? 'h-[600px] ' : 'h-[600px] '}  w-full rounded-lg   dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]   overflow-hidden     pt-16  p-0`,
                  className
                )}
              >
                <div
                  className='h-full  not-prose mx-auto  '
                  style={{ width: width }}
                >
                  <iframe
                    src={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${iframeComponent}`}
                    className='h-full w-full'
                    style={{ maxWidth: '100%' }}
                    loading='lazy'
                    key={reTriggerKey}
                  />
                </div>
              </div>
            </>
          ) : (
            <div
              className={cn(
                `${isFitheight ? 'h-fit py-4' : 'h-[600px] '}  w-full rounded-lg   dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]   overflow-hidden     pt-16  p-0`,
                className
              )}
            >
              <div
                className='h-full  not-prose mx-auto  '
                style={{ width: width }}
              >
                <>
                  <iframe
                    src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${component?.iframeSrc}`}
                    className='h-full w-full'
                    style={{ maxWidth: '100%' }}
                    loading='lazy'
                    key={reTriggerKey}
                  />
                </>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className={`${isFitheight ? 'h-fit' : 'xl:h-[600px] h-fit overflow-auto'} w-full rounded-lg dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden pt-8 p-8`}
          >
            <div
              className='h-full  mx-auto p-5 not-prose'
              style={{ width: responsive ? width : '100%' }}
            >
              {MemoizedComponentPreview ? (
                <MemoizedComponentPreview key={reTriggerKey} />
              ) : (
                <div>Component not found</div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

function Blocks({
  activeDivs,
  divClass,
  classname,
  activeDivsClass,
  containerRef,
}: {
  activeDivsClass?: string;
  activeDivs?: any;
  divClass?: string;
  classname?: string;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updateBlocks = () => {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const blockSize = containerWidth * 0.06; // Using 6% of section width for the block size

        const columns = Math.floor(containerWidth / blockSize);
        const rows = Math.floor(containerHeight / blockSize);

        const newBlocks = Array.from({ length: columns }, (_, columnIndex) => (
          <div key={columnIndex} className='w-[6vw] h-full'>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  `h-[6vh] w-full border-[1px] border-[#5dcece09] ${
                    // @ts-ignore
                    activeDivs[columnIndex]?.has(rowIndex)
                      ? `${activeDivsClass}`
                      : ''
                  }`,
                  divClass
                )}
                style={{ height: `${blockSize}px` }}
              ></div>
            ))}
          </div>
        ));

        setBlocks(newBlocks);
      }
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs, activeDivsClass, divClass, containerRef]);

  return (
    <div
      className={cn(
        'flex h-full overflow-hidden top-0 -inset-0 left-0 absolute',
        classname
      )}
    >
      {blocks}
    </div>
  );
}

export default Blocks;

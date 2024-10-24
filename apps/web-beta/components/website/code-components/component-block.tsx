'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

type CodeBlockProps = {
  componentfile: string;
  classname?: string;
};

export default function ComponentBlocks({
  componentfile,
  classname,
}: CodeBlockProps) {
  // console.log('filecontentscodeblocks', fileContent);
  const MemoizedComponentPreview = useMemo(() => {
    return componentfile
      ? dynamic(() => import(`../../../registry/${componentfile}`), {
          loading: () => (
            <div className='h-full grid place-content-center text-sm'>
              Loading...
            </div>
          ),
        })
      : null;
  }, [componentfile]);
  return (
    <>
      {MemoizedComponentPreview ? (
        <MemoizedComponentPreview />
      ) : (
        <div>Component not found</div>
      )}
    </>
  );
}

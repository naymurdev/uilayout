'use client';

import { cn } from '@/lib/utils';
import { Copy, Check, CheckCheck } from 'lucide-react';
import { useState } from 'react';

export function CopyButton({
  code,
  classname,
}: {
  code: string;
  classname?: string;
}) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <>
      <div
        className={cn(
          'absolute right-2 top-2 cursor-pointer dark:hover:shadow-[0px_1px_10px_5px_#3f7ef3] hover:shadow-[0px_1px_10px_5px_#9abaf7] dark:hover:border-blue-500 hover:border-blue-300  dark:bg-gray-950 backdrop-blur-2xl bg-white rounded-md border-2',
          classname
        )}
        onClick={onCopy}
      >
        <div
          className={` inset-0 transform transition-all duration-300  w-9 h-8 grid place-content-center  ${
            hasCheckIcon ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <Copy className='h-4 w-4 text-foreground/80' />
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300 w-8 h-8 grid place-content-center  ${
            hasCheckIcon ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <CheckCheck className='h-4 w-4 text-foreground/80' />
        </div>
      </div>
    </>
  );
}

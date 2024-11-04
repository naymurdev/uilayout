'use client';

import { cn } from '@/lib/utils';
import { Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/website/ui/dropdown';

type CopyNpmCommandButtonProps = {
  code: string;
  classname?: string;
};

export function CopyNpmCommandButton({
  code,
  classname,
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyCommand = (commandname: string) => {
    // console.log(commandname);

    const updatedCode =
      commandname === 'npm'
        ? code
        : code.replace('npm install', `${commandname} add`);
    // console.log(updatedCode);

    navigator.clipboard.writeText(updatedCode);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  };
  // console.log(packageManager);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            'absolute right-2 top-2  cursor-pointer     dark:hover:shadow-[0px_1px_10px_5px_#3f7ef3] hover:shadow-[0px_1px_10px_5px_#9abaf7] dark:hover:border-blue-500 hover:border-blue-300  dark:bg-gray-950 backdrop-blur-2xl bg-white rounded-md border-2',
            classname
          )}
        >
          <div
            className={`inset-0 transform transition-all duration-300 w-9 h-8 grid place-content-center ${
              hasCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <Copy className='h-4 w-4 text-foreground/80' />
          </div>
          <div
            className={`absolute inset-0 transform transition-all duration-300 w-8 h-8 grid place-content-center ${
              hasCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <CheckCheck className='h-4 w-4 text-foreground/80' />
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-background' align='end'>
        <DropdownMenuItem onClick={() => copyCommand('npm')}>
          npm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyCommand('yarn')}>
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyCommand('pnpm')}>
          pnpm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyCommand('bun')}>
          bun
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

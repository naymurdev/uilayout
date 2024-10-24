// @ts-nocheck
import React, { useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

// Dynamically import MotionNumber with SSR disabled
const MotionNumber = dynamic(() => import('motion-number'), { ssr: false });
interface NumberFormat extends Intl.NumberFormatOptions {}
interface MotionNumberProps {
  value: number;
  format?: NumberFormat;
  className?: string;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
}

interface OptionProps extends MotionNumberProps {
  content?: ReactNode;
}

interface NumberShuffleProps {
  currentValue: number;
  format?: NumberFormat;
  before?: OptionProps;
  first?: OptionProps;
  last?: OptionProps;
  after?: OptionProps;
  clasname?: string;
}

const NumberShuffle: React.FC<NumberShuffleProps> = ({
  currentValue,
  format = {},
  before,
  first,
  last,
  after,
  clasname,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className='w-fit grid place-content-center mx-auto space-y-4 py-10'>
        <div className='text-6xl dark:text-white text-black'>
          {new Intl.NumberFormat('en-US', format).format(currentValue)}
        </div>
      </div>
    );
  }

  const renderOption = (option, defaultContent = null) => {
    if (option && typeof option === 'object') {
      return (
        <MotionNumber
          value={option.value}
          format={option.format || {}}
          className={option.className || ''}
          animate={option.animate || {}}
          transition={option.transition || {}}
        >
          {option.content}
        </MotionNumber>
      );
    }
    return defaultContent;
  };

  return (
    <div className='w-fit grid place-content-center mx-auto space-y-4 py-10'>
      <div>
        <MotionNumber
          value={currentValue}
          format={format}
          className={cn('text-6xl dark:text-white text-black', clasname)}
          before={() => renderOption(before)}
          first={() => renderOption(first)}
          last={() => renderOption(last)}
          after={() => renderOption(after)}
        />
      </div>
    </div>
  );
};

export default NumberShuffle;

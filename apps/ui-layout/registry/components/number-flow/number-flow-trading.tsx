'use client';
import React, { CSSProperties, useState } from 'react';
import { motion } from 'framer-motion';
import NumberFlow, { useCanAnimate } from '@number-flow/react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const MotionNumberFlow = motion.create(NumberFlow);
const MotionArrowUp = motion.create(ArrowUp);

export function PriceWithDiff({
  value,
  diff,
}: {
  value: number;
  diff: number;
}) {
  const canAnimate = useCanAnimate();

  return (
    <>
      <span className='flex items-center justify-center gap-2'>
        <NumberFlow
          value={value}
          className='text-5xl font-semibold'
          format={{ style: 'currency', currency: 'USD' }}
        />
        <motion.span
          className={cn(
            diff > 0 ? 'bg-emerald-400' : 'bg-red-500',
            'inline-flex items-center px-[0.3em] text-white transition-colors duration-300'
          )}
          style={{ borderRadius: 999 }}
          layout={canAnimate}
          transition={{ layout: { duration: 0.9, bounce: 0, type: 'spring' } }}
        >
          {' '}
          <MotionArrowUp
            className='mr-0.5 size-[0.75em]'
            absoluteStrokeWidth
            strokeWidth={3}
            transition={{
              rotate: { type: 'spring', duration: 0.5, bounce: 0 },
            }}
            animate={{ rotate: diff > 0 ? 0 : -180 }}
            initial={false}
          />{' '}
          <MotionNumberFlow
            value={diff}
            className='font-semibold'
            format={{ style: 'percent', maximumFractionDigits: 2 }}
            layout={canAnimate}
            layoutRoot={canAnimate}
          />{' '}
        </motion.span>
      </span>
    </>
  );
}

export default function index() {
  const numbers = [124.23, 41.75, 2125.95];
  const diffs = [0.0564, -0.114, 0.0029];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCustomClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  return (
    <>
      <PriceWithDiff value={numbers[currentIndex]} diff={diffs[currentIndex]} />
      <button
        onClick={handleCustomClick}
        className='flex h-11 mt-4 w-fit mx-auto items-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 transition duration-[.16s] ease-[cubic-bezier(.4,0,.2,1)] hover:brightness-125 active:scale-[98%] active:brightness-[98%] active:duration-[25ms]'
      >
        <svg className='size-4' strokeLinejoin='round' viewBox='0 0 16 16'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.72876 6.42462C3.40596 4.15488 5.51032 2.5 8.00002 2.5C10.0902 2.5 11.9092 3.66566 12.8405 5.38592L13.1975 6.04548L14.5166 5.33138L14.1596 4.67183C12.9767 2.48677 10.6625 1 8.00002 1C5.05453 1 2.53485 2.81872 1.50122 5.39447V3.75V3H0.0012207V3.75V7.17462C0.0012207 7.58883 0.337007 7.92462 0.751221 7.92462H4.17584H4.92584V6.42462H4.17584H2.72876ZM13.2713 9.57538H11.8243H11.0743V8.07538H11.8243H15.2489C15.6631 8.07538 15.9989 8.41117 15.9989 8.82538V12.25V13H14.4989V12.25V10.6053C13.4653 13.1812 10.9456 15 8.00002 15C5.35065 15 3.04619 13.5279 1.85809 11.3605L1.49757 10.7029L2.8129 9.98181L3.17342 10.6395C4.10882 12.3458 5.92017 13.5 8.00002 13.5C10.4897 13.5 12.5941 11.8451 13.2713 9.57538Z'
            fill='currentColor'
          ></path>
        </svg>
        Shuffle
      </button>
    </>
  );
}

'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  HTMLMotionProps,
  SVGMotionProps,
  TargetAndTransition,
} from 'framer-motion';
import React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

const generateVariants = (direction: Direction) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? 100 : -100;

  const hidden: TargetAndTransition = {
    opacity: 0,
    filter: 'blur(10px)',
  };
  hidden[axis] = value;

  const visible: TargetAndTransition = {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  };
  visible[axis] = 0;

  return {
    hidden,
    visible,
  };
};

const defaultViewport = { amount: 0.3, margin: '0px 0px -200px 0px' };
type MotionComponentProps = HTMLMotionProps<any> & SVGMotionProps<any>;

interface ScrollElementProps extends Omit<MotionComponentProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden: TargetAndTransition;
    visible: TargetAndTransition;
  };
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
}

function ScrollElement({
  children,
  className,
  variants,
  viewport = defaultViewport,
  delay = 0,
  direction = 'down',
  ...rest
}: ScrollElementProps) {
  const baseVariants = variants || generateVariants(direction);

  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(baseVariants.visible?.transition || {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      whileInView='visible'
      initial='hidden'
      variants={modifiedVariants}
      viewport={viewport}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default ScrollElement;

'use client';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

const UpvoteDownvote: React.FC = () => {
  const [votes, setVotes] = useState(14); // Initial votes
  const [activeVote, setActiveVote] = useState<'up' | 'down' | null>(null); // Track active arrow

  const handleVote = (state: 'up' | 'down') => {
    if (state === 'up') {
      setVotes(votes + 1);
      setActiveVote(state);
    } else {
      setVotes(votes - 1);
      setActiveVote(state);
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-2 p-4   border rounded-xl shadow-lg w-fit mx-auto ${
        activeVote === 'up'
          ? 'dark:bg-green-950 bg-green-300 border-green-600 text-white'
          : activeVote === 'down'
            ? 'dark:bg-red-950 bg-red-300 border-red-600 text-white'
            : ' bg-primary-foreground text-primary'
      }`}
    >
      <div className='  text-lg font-medium'>
        <NumberFlow value={votes} format={{ notation: 'compact' }} /> Upvotes
      </div>

      <div className='flex items-center gap-4'>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleVote('up')}
          className={`p-2 rounded-full text-white ${
            activeVote === 'up' ? 'bg-green-500 ' : ' bg-black '
          } transition-colors`}
        >
          <ArrowUp size={24} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleVote('down')}
          className={`p-2 rounded-full text-white ${
            activeVote === 'down' ? 'bg-red-500 ' : ' bg-black '
          } transition-colors`}
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default UpvoteDownvote;

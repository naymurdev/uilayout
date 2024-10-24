'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='mb-4 text-2xl font-bold'>Something went wrong!</h2>
      <button
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

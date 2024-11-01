'use client';

import { TagsInput } from '@/components/core/tags-input';
import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-md mx-auto mt-10'>
      <TagsInput tags={tags} setTags={setTags} editTag={false} />
      <div className='mt-4'>
        <p>Current Tags:</p>
        <div className='flex gap-2 mt-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

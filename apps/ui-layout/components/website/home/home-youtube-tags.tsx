'use client';

import { TagsInput } from '@/components/core/tags-input';
import React, { useState, useRef, useEffect } from 'react';

export default function HomeYouutbTags() {
  const [tags, setTags] = useState<string[]>(['ui-layouts']);

  return (
    <div className='w-[90%] flex flex-col justify-center h-full mx-auto sm:py-0 py-6 '>
      <TagsInput tags={tags} setTags={setTags} editTag={false} />
      {/* <div className='mt-1.5'>
        <p className='text-sm'>Current Tags:</p>
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
      </div> */}
    </div>
  );
}

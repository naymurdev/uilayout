'use client';
// Import necessary hooks and icons
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='w-96 mx-auto'>
      <label htmlFor='pass' className='text-sm font-normal'>
        Password
      </label>
      <div className='relative mt-1'>
        <input
          type={isVisible ? 'text' : 'password'}
          id='pass'
          placeholder='Password'
          className='bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2  border-2 '
        />
        <div
          className='absolute top-3 right-4 text-2xl text-gray-500 cursor-pointer'
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <Eye size={22} /> : <EyeOff size={22} />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;

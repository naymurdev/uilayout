import Image from 'next/image';
import React from 'react';

function Home3dBlob() {
  return (
    <div className='relative h-full'>
      <Image
        src='/blob.png'
        alt='blob'
        width={600}
        height={600}
        className='w-full h-full object-cover'
      />
      <h1 className=' absolute font-medium bottom-4 left-4 text-2xl'>
        3D Blob
      </h1>
    </div>
  );
}

export default Home3dBlob;

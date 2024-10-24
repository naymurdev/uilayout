import React from 'react';

function index() {
  return (
    <>
      <section className='gap-2 dark:bg-black bg-white border rounded-lg p-5'>
        <figure className=' relative w-full h-full bg-black'>
          <svg
            viewBox='0 0 285 80'
            preserveAspectRatio='xMidYMid slice'
            className='w-full absolute top-0 left-0 h-full '
          >
            <defs>
              <mask id='mask' x='0' y='0' width={'100%'} height={'100%'}>
                <rect
                  x='0'
                  y='0'
                  width={'100%'}
                  height={'100'}
                  style={{ fill: 'white', mask: 'url(#mask)' }}
                />
                <text
                  x='50%'
                  y='50%'
                  fill='red'
                  textAnchor='middle'
                  className=' italic underline font-bold'
                >
                  UI-LAYOUT
                </text>
              </mask>
            </defs>
            <rect
              x='0'
              y='0'
              width={'100%'}
              height={'100'}
              style={{ fill: '#000105', mask: 'url(#mask)' }}
            />
          </svg>
          <video autoPlay muted loop className='w-[80%] h-full '>
            <source
              src='https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
              type='video/mp4'
            />
          </video>
        </figure>
      </section>
    </>
  );
}

export default index;

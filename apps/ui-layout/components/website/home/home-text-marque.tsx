import React from 'react';
import ScrollBaseAnimation from '@/components/core/scroll-text-marque';

function HomeTextMarquee() {
  return (
    <>
      <div className='2xl:h-[500px] lg:h-[400px] py-20 grid place-content-center'>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Star the repo if you like it
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Share it if you like it
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default HomeTextMarquee;

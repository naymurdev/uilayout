import React from 'react';
import ScrollBaseAnimation from '../../../../components/core/scroll-text-marque';

function index() {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <ScrollBaseAnimation
          // delay={500}
          baseVelocity={3}
          scrollDependent={true}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Best Component library For Developer
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default index;

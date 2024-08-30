import React from 'react'
import ScrollBaseAnimation from './scroll-based-marque'

function index() {
  return (
    <>
      <div className="h-[500px] grid place-content-center">
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          Creative Web Developer
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          Creative Web Developer
        </ScrollBaseAnimation>
      </div>
    </>
  )
}

export default index

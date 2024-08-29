import React, { useRef } from 'react'
import Blocks from './blocks'

function BlockOne() {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className="h-[550px] overflow-hidden w-full dark:bg-[radial-gradient(89.48%_89.48%_at_51.74%_10.52%,#171718_0%,#0e0d0d_100%)] bg-[radial-gradient(89.48%_89.48%_at_51.74%_10.52%,#E3E2E7_0%,#9BA1A1_100%)]  relative"
      ref={containerRef}
    >
      <Blocks
        activeDivsClass="dark:bg-[#0e0d0db9]/50  bg-[#9ba1a131]  "
        divClass="dark:border-[#0e0d0d88]/50 border-[#9ba1a131] "
        classname="w-full"
        containerRef={containerRef}
        activeDivs={{
          0: new Set([2, 4, 6]),
          1: new Set([0, 8]),
          2: new Set([1, 3, 5]),
          4: new Set([0, 5, 8]),
          5: new Set([2, 4]),
          7: new Set([2, 6, 9]),
          8: new Set([0, 4]),
          9: new Set([5]),
          10: new Set([3, 6]),
          11: new Set([1, 5]),
          12: new Set([7]),
          13: new Set([2, 4]),
          14: new Set([5]),
          15: new Set([1, 6]),
        }}
      />
    </div>
  )
}

export default BlockOne

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
type ExpandedCodeProps = {
  children: React.ReactElement
  noExpand: boolean
  className?: string
}
const CodeWrapper = ({ className, children, noExpand }: ExpandedCodeProps) => {
  const [expanded, setExpanded] = useState(false)
  // const handleExpandedCode = () => {}
  return (
    <>
      {noExpand ? (
        <>
          <div
            className={cn(
              `w-full border-2 border-t-0 rounded-lg h-fit py-2 pt-14 overflow-hidden relative`,
              className
            )}
          >
            <div className="px-4">{children}</div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`w-full pt-14   border-2 border-t-0 rounded-lg  ${
              expanded ? 'h-fit pb-8' : ' h-[600px] pb-1'
            } overflow-hidden relative`}
          >
            <div className="px-4">{children}</div>
            <div
              className={`absolute bottom-0 grid place-content-center w-full py-4 before-gradient ${
                expanded ? '' : 'h-24'
              }`}
            >
              <button
                className="px-4 py-1 rounded-full   dark:bg-gray-300 bg-gray-700 dark:text-black text-white border text-sm dark:hover:bg-gray-100 dark:hover:text-black hover:bg-gray-900 "
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Collapse Code' : 'Expand Code'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CodeWrapper

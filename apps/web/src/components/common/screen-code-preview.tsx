import React from 'react'

export default function ScreenCodePreview({
  children,
}: {
  children: React.ReactNode
}) {
  const Codes = React.Children.toArray(children) as React.ReactElement[]

  return (
    <>
      <div className="relative   rounded-b-lg ">
        <div className="w-full [&_pre]:my-0 [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces">
          {Codes[0].props.children}
        </div>
      </div>
    </>
  )
}

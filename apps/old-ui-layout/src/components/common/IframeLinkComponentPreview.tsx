import React from 'react'
import { COMPONENTS } from '@/assets/data/components'

interface IComponentPreviewProps {
  name: string
  children: React.ReactNode
  category: string
  cssStyle?: string
  installation?: string
  weblink?: string
}

export default function IframeLinkPreviewComponent({
  weblink,
}: IComponentPreviewProps) {
  console.log('checkingweblink', process.env.NEXT_PUBLIC_ANIMATION_URL)

  return (
    <div className="w-full border-2 rounded-lg overflow-hidden pt-10 pb-0  dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] h-full">
      <iframe
        src={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${weblink}`}
        className="w-full h-[600px]"
        loading="lazy"
      />
    </div>
  )
}

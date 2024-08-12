import React from 'react'
import { COMPONENTS } from '@/assets/data/components'

interface IComponentPreviewProps {
  name: string
  children: React.ReactNode
  category: string
  cssStyle?: string
  installation?: string
  libFile?: string
}
type ComponentFile = {
  componentName: string
  componentSrc?: React.LazyExoticComponent<React.FC<{}>>
  link?: string
}
export default function IframePreviewComponent({
  name,
}: IComponentPreviewProps) {
  const currentComponentData: ComponentFile | null =
    COMPONENTS.reduce<ComponentFile | null>((acc, component) => {
      const file = component?.componentArray?.find(
        (file: ComponentFile) => file.link === name
      )

      if (file) {
        acc = file
      }
      return acc
    }, null)

  return (
    <div className="w-full border-2 rounded-lg overflow-hidden pt-10 pb-0  dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] h-full">
      {!currentComponentData ? (
        <div className="p-5 text-centter">Component not found</div>
      ) : (
        <>
          <iframe
            src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/full-page-view/${currentComponentData?.link}`}
            className="w-full h-[60vh]"
            loading="lazy"
          />
        </>
      )}
    </div>
  )
}

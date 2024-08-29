//@ts-nocheck
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
  componentSrc: React.LazyExoticComponent<React.FC<{}>>
  heightFixed: boolean
  basicPadding: boolean
}
export default function ComponentPreview({
  name,
  children,
  heightFixed = false,
  basicPadding = false,
}: IComponentPreviewProps) {
  const currentComponentData: ComponentFile | null =
    COMPONENTS.reduce<ComponentFile | null>((acc, component) => {
      const file = component?.componentArray?.find(
        (file) => file.componentName === name
      )

      if (file) {
        acc = file
      }
      return acc
    }, null)

  if (!currentComponentData) {
    return <div>Component not found</div>
  }

  return (
    <div
      className={`w-full border-2 rounded-lg   dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]  ${
        heightFixed
          ? ' h-[600px] overflow-x-hidden overflow-y-scroll '
          : ' h-full overflow-hidden '
      }  ${
        basicPadding
          ? ' pt-16 pb-5 px-2 '
          : ' 2xl:p-20 xl:px-16 pt-16 lg:px-10 p-4  '
      }`}
    >
      {children}
      <currentComponentData.componentSrc />
    </div>
  )
}

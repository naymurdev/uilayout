import React, { ReactElement, ReactNode } from 'react'
import { COMPONENTS } from '@/assets/data/components'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { Maximize2, X } from 'lucide-react'

export interface Ingredient {
  icon: string
  label: string
}

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
}
export default function ScreenComponentPreview({
  name,
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
    <div className="w-full border-2 relative rounded-lg overflow-hidden px-8 min-h-[700px] bg-gray-50 pt-16 dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] ">
      <currentComponentData.componentSrc />

      <Drawer>
        <DrawerTrigger asChild>
          <button className="dark:text-white absolute top-3 z-20 right-5 text-black">
            <Maximize2 />
          </button>
        </DrawerTrigger>
        <DrawerContent className="w-[90%] mx-auto">
          <div className="p-4   h-[96vh] overflow-scroll overflow-x-hidden space-y-2 ">
            <div className="w-full border-2 relative rounded-lg min-h-[90vh]  px-8  bg-gray-200 py-8 overflow-auto dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] ">
              <currentComponentData.componentSrc />
            </div>

            <div className="fixed bottom-4 right-6 w-fit  flex gap-2 p-2 ">
              <DrawerClose>
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  border-2 border-red-400  bg-red-500 font-medium">
                  <div className="inline-flex h-12 translate-y-0 items-center justify-center   px-6 transition group-hover:-translate-y-[150%]">
                    <X />
                  </div>
                  <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center   px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
                    <X />
                  </div>
                </button>
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

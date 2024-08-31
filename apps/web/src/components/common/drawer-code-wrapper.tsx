import { COMPONENTS } from '@/assets/data/components'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Maximize2 } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { CopyButton } from './copy-button'
import { ScrollArea } from '../ui/scroll-area'
export default function DrawerCodeWrapper({
  children,
  isCard,
}: {
  children: React.ReactNode
  isCard: boolean
}) {
  const FigureChildren =
    Array.isArray(children) &&
    children?.filter((child) => child.type === 'figure')
  const mainChildren = Array.isArray(children)
    ? children?.find((child) => child.type !== 'figure')
    : children
  const currentComponentData: any = COMPONENTS.reduce((acc, component) => {
    const file = component?.componentArray?.find(
      (file) => file.componentName === mainChildren?.props?.name
    )
    if (file) {
      acc = file
    }
    return acc
  }, {})

  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (isDesktop) {
    return (
      <>
        <div
          className={`${
            isCard ? 'p-10' : '2xl:p-20 py-16 px-2 '
          } my-2 w-full border-2 rounded-lg overflow-hidden  dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] h-full relative grid place-content-center`}
        >
          <div className="block w-full [&_pre]:my-0 [&_pre]:max-h-[450px] [&_pre]:overflow-auto sm:[&_pre]:whitespace-break-spaces">
            <currentComponentData.componentSrc />
          </div>
          <div className="absolute top-2 right-2 p-2 flex justify-center items-center gap-4 dark:bg-white bg-base-dark rounded-lg border">
            {mainChildren?.props.children?.props?.children?.props
              ?.__rawString__ && (
              <CopyButton
                value={
                  mainChildren?.props.children?.props?.children?.props
                    ?.__rawString__
                }
              />
            )}
            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <Maximize2 className="dark:text-black text-white" />
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[900px] h-[80vh] ">
                <ScrollArea>
                  {mainChildren?.props?.children}
                  {Array.isArray(FigureChildren) &&
                    FigureChildren?.map((child: any, index: any) => {
                      return <div key={index}>{child.props.children}</div>
                    })}
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="my-2 w-full border-2 rounded-lg overflow-hidden 2xl:p-20 py-16 px-2 dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] h-full relative">
        <div className="flex justify-center ">
          <currentComponentData.componentSrc />
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <button className="absolute top-4 right-4">
              <Maximize2 />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left w-full overflow-scroll">
              {mainChildren?.props?.children}
              {Array.isArray(FigureChildren) &&
                FigureChildren?.map((child: any, index: any) => {
                  return (
                    <div key={index} className=" w-full">
                      {child.props.children}
                    </div>
                  )
                })}
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <button>Cancel</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

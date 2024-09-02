'use client'
import { COMPONENTS } from '@/assets/data/components'
import {
  ISelectedComponent,
  useSelectedComponentStore,
} from '@/hooks/use-zust-store'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { FaHouse } from 'react-icons/fa6'
import { Icons } from '@/assets/icons'
import {
  Component,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
type ComponentFile = {
  componentName: string
  componentSrc: React.LazyExoticComponent<React.FC<{}>>
  heightFixed: boolean
  basicPadding: boolean
}

function ComopnentSection() {
  const { theme, setTheme } = useTheme()
  console.log(theme)

  const recentComponents = useSelectedComponentStore(
    (state) => state.recentComponents
  )
  //   console.log(recentComponents)
  const currentComopnents = recentComponents[0]

  const currentComponentData: ComponentFile | null =
    COMPONENTS.reduce<ComponentFile | null>((acc, component) => {
      const file = component?.componentArray?.find(
        (file) => file.componentName === currentComopnents?.componentName
      )

      if (file) {
        // @ts-ignore
        acc = file
      }
      return acc
    }, null)
  console.log(currentComopnents)

  return (
    <>
      {currentComponentData && (
        <div className="w-[800px] mx-auto flex justify-between">
          <div className="w-full">
            <currentComponentData.componentSrc />
          </div>
        </div>
      )}
      <div className="absolute bottom-10 h-14 left-0 w-full ">
        <div className="w-fit border flex justify-between gap-2  p-2 mx-auto  dark:bg-black bg-white rounded-md">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] "
                onClick={() =>
                  // (window.location.href = currentComopnents?.pagelink)
                  window.open(
                    `${process.env.NEXT_PUBLIC_CLIENT_URL}/components`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                <Component />
              </TooltipTrigger>
              <TooltipContent className="dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1">
                <p className="capitalize">Components</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] "
                onClick={() =>
                  // (window.location.href = currentComopnents?.pagelink)
                  window.open(
                    `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" w-7 h-7"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </TooltipTrigger>
              <TooltipContent className="dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1">
                <p className="capitalize">Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-4 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] ">
                <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden block" />
                <MoonIcon className="h-[1.2rem] w-[1.2rem]   transition-all  dark:block hidden" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <MonitorSmartphone className="mr-2 h-4 w-4" /> System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] "
                onClick={() =>
                  // (window.location.href = currentComopnents?.pagelink)
                  window.open(
                    `${process.env.NEXT_PUBLIC_CLIENT_URL}//${currentComopnents?.pagelink}`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                View Component
              </TooltipTrigger>
              <TooltipContent className="dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1">
                <p className="capitalize">{currentComopnents?.componentName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  )
}

export default ComopnentSection

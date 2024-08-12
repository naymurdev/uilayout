import { DrawerContent } from '@/lab/components/drawer/vaul-main'
import { SidebarDrawer } from '@/lab/components/drawer/vaul-sidebar'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { basePath, components, specialComponents } from './docs-sidebar'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Link from 'next/link'

function MobileHeader() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <button
        className="lg:hidden block text-3xl"
        onClick={() => setSidebarOpen(true)}
      >
        <HiOutlineMenuAlt2 />
      </button>
      <SidebarDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'left'}
        outsideClose={true}
        className="sm:w-[60%] w-[70%] p-4 h-screen"
      >
        <DrawerContent>
          <figure className="flex justify-between  w-full items-center">
            <Link
              href="/"
              className="flex gap-2 items-center text-2xl font-semibold border-b  py-2"
            >
              <div className="w-6 h-6 mx-auto dark:bg-white bg-black rounded-sm before:absolute relative before:w-full before:h-full dark:before:bg-white/50 before:bg-black/50 before:rounded-sm before:-top-1.5 before:-left-1.5"></div>
              UI-LAYOUT
            </Link>

            <button
              className="md:hidden flex"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>
          </figure>

          <ScrollArea className="h-[95%] py-4">
            <ul className="pb-3">
              {basePath?.map((link, index) => {
                return (
                  <>
                    <li key={`id-${index}`}>
                      <Link
                        href={link.id}
                        className={`flex gap-2 group font-medium items-center py-1  transition-all ${
                          link.id === pathname
                            ? 'active-nav'
                            : 'text-slate-600 hover:text-slate-900  dark:text-slate-400 dark:hover:text-white'
                        }`}
                      >
                        {React.cloneElement(link?.icon, {
                          className: `${
                            link.id === pathname
                              ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                              : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white  dark:group-hover:bg-white dark:group-hover:text-base-dark'
                          } h-7 w-7 border transition-all  rounded-sm p-1.5`,
                        })}

                        {link.name}
                      </Link>
                    </li>
                  </>
                )
              })}
            </ul>
            <h1 className="text-sm font-semibold pb-1">Components</h1>
            <ul>
              {[...components, ...specialComponents]?.map((link) => {
                return (
                  <>
                    <li
                      className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                        link.id === pathname
                          ? 'dark:border-white border-black text-black dark:text-white font-medium'
                          : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                      }`}
                      // data-active={link.id === pathname}
                      key={link.id}
                    >
                      <Link href={link.id}>{link.name}</Link>
                    </li>
                  </>
                )
              })}
            </ul>
            {/* <h1 className="text-sm font-semibold pb-1 pt-2">Layouts</h1>
                <ul>
                  {layouts?.map((link) => {
                    return (
                      <>
                        <li
                          className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                            link.id === pathname
                              ? 'dark:border-white border-black text-black dark:text-white font-medium'
                              : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                          }`}
                          // data-active={link.id === pathname}
                          key={link.id}
                        >
                          <Link href={link.id}>{link.name}</Link>
                        </li>
                      </>
                    )
                  })}
                </ul> */}
          </ScrollArea>
        </DrawerContent>
      </SidebarDrawer>
    </>
  )
}

export default MobileHeader

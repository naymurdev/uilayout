'use client'
import { useState } from 'react'
import {  MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
  DrawerContent,
  HeaderDrawer,
} from '@/lab/components/drawer/vaul-header'
const items = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-K6oxS4dwihg-unsplash_yylgnx.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-XQq_xRecUSw-unsplash_simrjg.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715161336/eugene-golovesov-beIRDp7-Dt0-unsplash_oop0nx.jpg',
  },
]
export default function index() {
  const [headerOpen, setHeaderOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      
      <header className="flex justify-between border items-center p-3 rounded-md dark:bg-black/45 backdrop-blur-md">
        <h1>Logo</h1>
        <HeaderDrawer open={headerOpen} setOpen={setHeaderOpen} drawerBtn={()=> { return <button><MenuIcon/></button>}}>
        <DrawerContent>
          {!isDesktop && (
            <div className="flex justify-center w-full absolute bottom-1 left-0 ">
              <div className=" w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
            </div>
          )}
          <div className="container mx-auto  gap-4">
            <div className="flex justify-between items-center border-b">
              {isDesktop && (
                <button
                  className="flex justify-start p-2 mb-2 rounded-md dark:bg-white dark:text-black bg-black text-white"
                  onClick={() => setHeaderOpen(false)}
                >
                  <X />
                </button>
              )}
              <h1 className="mx-auto text-2xl">UI-LAYOUT</h1>
            </div>
            <div className="flex justify-between py-2">
              <nav className="flex gap-8">
                <ul className="xl:text-2xl text-lg space-y-2 xl:space-y-4 font-semibold uppercase  pr-8">
                  <li>
                    <Link
                      href="/"
                      className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/components"
                      className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/layouts"
                      className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      Layouts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/templates"
                      className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-source"
                      className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                      Open Source
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="grid grid-cols-3 gap-4 py-4 pr-20">
                <>
                  {items.map((item, index) => (
                    <figure className="inline-block group w-full xl:h-52 h-full relative ">
                      <img
                        src={item.url}
                        className="w-full bg-base-100 object-cover shadow-xl rounded-sm h-full cursor-pointer"
                      />
                    </figure>
                  ))}
                </>
              </div>
            </div>
          </div>
        </DrawerContent>

      </HeaderDrawer>
        {/* <motion.button
          onClick={() => setHeaderOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <MenuIcon />
        </motion.button> */}
      </header>
    </>
  )
}

'use client'
import { Drawer } from 'vaul'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Edit, X } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'
import {
  DrawerContent,
  SidebarDrawer,
} from '@/lab/components/drawer/vaul-sidebar'

export default function index() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <SidebarDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'right'}
        outsideClose={true}
      >
        <DrawerContent>
          <figure className=" w-full h-full  flex flex-col">
            <div className="p-5  rounded-t-[10px] flex-grow  h-full w-full">
              <h1 className="font-medium  text-2xl">Update Profile Image</h1>
              <p className="text-sm text-muted-foreground">
                Upload a new profile image or remove the current one.
              </p>
              <div className="p-6 space-y-4 ">
                <span className="relative flex justify-center overflow-hidden rounded-xl w-full ">
                  <span className="grid place-content-center h-40  w-40 rounded-xl bg-muted">
                    JP
                  </span>
                </span>
                <div className="mb-3">
                  <input
                    className="w-full border file:p-2 file:bg-black  file:border-none  file:text-white rounded-sm overflow-hidden"
                    type="file"
                    id="formFile"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm dark:bg-white bg-black  p-2 dark:text-black text-white"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://github.com/naymurdev"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://twitter.com/naymur_dev"
                  target="_blank"
                >
                  Twitter
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </figure>
        </DrawerContent>
      </SidebarDrawer>
      <div className="flex justify-center">
        <figure className="h-96 w-96 relative">
          <Image
            src={'/myself2.webp'}
            width={600}
            height={600}
            className="h-full w-full object-cover rounded-lg"
            alt="profile_image"
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setSidebarOpen(true)}
            className="absolute right-2 bottom-2 p-4 dark:bg-black bg-white rounded-lg shadow-black"
          >
            <Edit />
          </motion.button>
        </figure>
      </div>
    </>
  )
}

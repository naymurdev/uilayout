'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FramerModal, ModalContent } from './dialog'

const index: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="text-center">
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Open Dialog
      </button>

      <FramerModal open={modalOpen} setOpen={setModalOpen}>
        <ModalContent>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              Edit profile
            </h2>
            <p className="text-sm text-muted-foreground">
              Make changes to your profile here. Click save when you're done.
            </p>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium leading-none text-right">
                Name
              </label>
              <input
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                id="name"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium leading-none text-right">
                Username
              </label>
              <input
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                id="username"
                defaultValue="@peduarte"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setModalOpen(false)}
              className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
              type="button"
            >
              Got it, thanks!
            </button>
          </div>
        </ModalContent>
      </FramerModal>
    </div>
  )
}

export default index

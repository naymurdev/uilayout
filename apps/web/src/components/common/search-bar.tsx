'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { DialogProps } from '@radix-ui/react-dialog'
import { docsConfig } from '@/configs/docs'
import { FaXTwitter } from 'react-icons/fa6'
import {
  CircleIcon,
  LaptopIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from 'lucide-react'
import { Command } from 'cmdk'

import { techIcons } from '@/assets/icons'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ScrollArea } from '../ui/scroll-area'
const getIconComponent = (iconKey: string) => {
  switch (iconKey) {
    case 'blocks':
      return techIcons.blocks
    case 'components':
      return techIcons.components
    case 'animation':
      return techIcons.animation
    case 'apps':
      return techIcons.apps
    default:
      return null
  }
}
export function SearchDialog({ ...props }: DialogProps) {
  const router = useRouter()
  const { setTheme } = useTheme()

  const [searchOpen, setSearchOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setSearchOpen((searchOpen) => !searchOpen)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setSearchOpen(false)
    command()
  }, [])
  return (
    <>
      <button
        className="bg-white dark:bg-black inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:border-accent-foreground  hover:text-accent-foreground px-4 py-2 relative   justify-start rounded-[0.5rem]  text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-52 lg:w-64  w-52 gap-2"
        onClick={() => setSearchOpen(true)}
      >
        <SearchIcon />
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-7 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="p-0 border xl:w-[800px] lg:w-[500px] w-[90%] rounded-md">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5  ">
            <Command.Input
              placeholder="Type a command or search..."
              className="w-full outline-none px-4 dark:bg-[#010309] rounded-tr-lg rounded-tl-lg border-b "
            />

            <Command.List className="border-none">
              <ScrollArea className="h-[300px] ">
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group className="py-2">
                  <span className="p-2 text-xs block font-semibold">
                    Follow for more updates
                  </span>
                  <a
                    href="https://x.com/naymur_dev"
                    target="_blank"
                    className="p-3 flex gap-2 items-center  bg-blue-500/20 w-full rounded-md"
                  >
                    <FaXTwitter /> @naymur_dev
                  </a>
                  <span className="p-2 text-xs block font-semibold">
                    Getting Started
                  </span>

                  {docsConfig.mainNav
                    .filter((navitem) => !navitem.external)
                    .map((navItem) => {
                      const IconComponent = navItem.icon
                        ? getIconComponent(navItem.icon)
                        : null
                      return (
                        <Command.Item
                          className="relative flex cursor-pointer select-none items-center  px-2 py-1 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground dark:font-normal font-semibold rounded-md data-[disabled]:opacity-75 gap-2"
                          key={navItem.href}
                          value={navItem.title}
                          onSelect={() => {
                            runCommand(() =>
                              router.push(navItem.href as string)
                            )
                          }}
                        >
                          {IconComponent && <IconComponent />}
                          {navItem.title}
                        </Command.Item>
                      )
                    })}
                </Command.Group>
                {docsConfig.sidebarNav.map((group) => (
                  <Command.Group key={group.title} heading={group.title}>
                    {group.items.map((navItem) => (
                      <Command.Item
                        key={navItem.href}
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground  data-[disabled]:opacity-75"
                        value={navItem.title}
                        onSelect={() => {
                          runCommand(() => router.push(navItem.href as string))
                        }}
                      >
                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                          <CircleIcon className="h-3 w-3" />
                        </div>
                        {navItem.title}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
                <Command.Separator />
                <Command.Group className="dark:bg-[#010309] py-2 rounded-xl">
                  <span className="block p-1 py-2">Theme</span>
                  <Command.Item
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground  data-[disabled]:opacity-75"
                    onSelect={() => runCommand(() => setTheme('light'))}
                  >
                    <SunIcon className="mr-2 h-4 w-4" />
                    Light
                  </Command.Item>
                  <Command.Item
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground  data-[disabled]:opacity-75"
                    onSelect={() => runCommand(() => setTheme('dark'))}
                  >
                    <MoonIcon className="mr-2 h-4 w-4" />
                    Dark
                  </Command.Item>
                  <Command.Item
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground  data-[disabled]:opacity-75"
                    onSelect={() => runCommand(() => setTheme('system'))}
                  >
                    <LaptopIcon className="mr-2 h-4 w-4" />
                    System
                  </Command.Item>
                </Command.Group>
              </ScrollArea>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

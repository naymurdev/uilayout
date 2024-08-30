'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Github,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
  X,
} from 'lucide-react'
import { Button } from '../ui/button'
import { SearchDialog } from './search-bar'
import MobileHeader from './moibile-header'
import GitHubButton from '@/registry/components/github-repo-btn/github-repo-btn'

function Header() {
  const { setTheme } = useTheme()

  return (
    <>
      <header className=" dark:bg-base-dark/20 bg-white/40 w-full fixed z-50 top-0 left-0 border-b-[1px] border-border py-2 backdrop-blur-lg">
        <div className="sm:container px-2 mx-auto flex gap-2 justify-between items-center">
          <Link href="/" className="lg:block hidden">
            <div className="w-8 h-8 mx-auto dark:bg-white bg-black rounded-sm before:absolute relative before:w-full before:h-full dark:before:bg-white/50 before:bg-black/50 before:rounded-sm before:-top-1.5 before:-left-1.5"></div>
          </Link>

          <MobileHeader />
          <div className="flex gap-2 ">
            <SearchDialog />

            <a
              target="_blank"
              href="https://github.com/naymurdev/uilayout"
              className="border w-10  place-content-center rounded-md sm:hidden grid bg-primary text-primary-foreground"
            >
              <Github />
            </a>
            <GitHubButton
              username="naymurdev"
              repo="uilayout"
              classname="sm:flex hidden"
            />
            <a
              target="_blank"
              href="https://x.com/naymur_dev"
              className="border bg-primary  text-primary-foreground text-2xl w-10   sm:grid hidden place-content-center    rounded-md"
            >
              <FaXTwitter />
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="border w-10 bg-primary-foreground grid place-content-center rounded-md relative">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden block" />
                  <MoonIcon className="h-[1.2rem] w-[1.2rem]   transition-all  dark:block hidden" />
                  <span className="sr-only">Toggle theme</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

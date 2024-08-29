'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowBigDown,
  Baby,
  BookOpen,
  ChevronDown,
  ChevronsDown,
  ChevronsRight,
  Component,
  Grid2X2,
  Layout,
  LayoutIcon,
  LayoutTemplate,
  Rocket,
  SquareCode,
} from 'lucide-react'
import { Icons } from '@/assets/icons'
export const basePath = [
  {
    id: '/get-started',
    name: 'Get-Started',
    icon: <Rocket />,
  },
  {
    id: '/components',
    name: 'Components',
    icon: <Component />,
  },
  {
    id: '/layouts',
    name: 'Layouts',
    icon: <Layout />,
  },
  {
    id: '/templates',
    name: 'Templates',
    icon: <LayoutTemplate />,
  },
  // {
  //   id: '/open-source',
  //   name: 'Open Source',
  //   icon: <SquareCode />,
  // },
]
export const specialComponents = [
  { id: '/components/magnified-doc', name: 'Magnified-Doc' },
  {
    id: '/components/gradient-border',
    name: 'gradient-border',
  },
  { id: '/components/buttons', name: 'Buttons' },

  { id: '/components/noise', name: 'Noise' },
  {
    id: '/components/globe',
    name: 'Globe',
    // new: true
  },
  { id: '/components/footers', name: 'Footers' },
  { id: '/components/responsive-header', name: 'Responsive-Header' },
]
export const components = [
  {
    id: '/components/image-mousetrail',
    name: 'Image Mousetrail',
    component: 'creative-effect',
    new: true,
  },
  {
    id: '/components/spotlight-cards',
    name: 'Spotlight cards',
    component: 'creative-effect',
  },
  {
    id: '/components/image-reveal',
    name: 'Image Reveal',
    new: true,
    component: 'creative-effect',
  },
  {
    id: '/components/progressive-carousel',
    name: 'Progressive Carousel',
    new: true,
    component: 'creative-effect',
  },
  {
    id: '/components/blocks',
    name: 'Blocks',
    component: 'creative-effect',
    // new: true
  },
  {
    id: '/components/animated-beam',
    name: 'Animated Beam',
    component: 'creative-effect',
  },
  { id: '/components/dialog', name: 'Dialog', component: 'modal/drawer' },
  {
    id: '/components/media-modal',
    name: 'Media Modal',
    component: 'modal/drawer',
  },
  {
    id: '/components/dialog-card',
    name: 'Dialog Card',
    component: 'modal/drawer',
  },
  {
    id: '/components/gallery-model',
    name: 'Gallery Model',
    component: 'modal/drawer',
  },
  {
    id: '/components/drawer',
    name: 'Responsive Drawer',
    component: 'modal/drawer',
  },
  {
    id: '/components/sidebar',
    name: 'Responsive Sidebar',
    component: 'modal/drawer',
  },
  {
    id: '/components/scroll-element',
    name: 'Scroll Element',
    component: 'scroll',
    // new: true,
  },
  {
    id: '/components/horizontal-scroll',
    name: 'Horizontal Scroll',
    component: 'scroll',
    // new: true,
  },
  {
    id: '/components/smooth-scroll',
    name: 'Smooth-Scroll',
    component: 'scroll',
    // new: true,
  },
  { id: '/components/tabs', name: 'Tabs', component: 'tabs' },
  {
    id: '/components/image-tabs',
    name: 'Image Tabs',
    component: 'tabs',
  },
  {
    id: '/components/sparkles',
    name: 'Sparkles',
    component: 'sparkles',
  },
  {
    id: '/components/sparkles-title',
    name: 'Sparkles Title',
    component: 'sparkles',
  },

  {
    id: '/components/clip-path-image',
    name: 'Clip-Path Image',
    new: true,
    component: 'clip-path',
  },

  { id: '/components/marquee', name: 'Marquee', component: 'marquee' },
  {
    id: '/components/image-masking',
    name: 'Image Masking',
    new: true,
    component: 'clip-path',
  },
  {
    id: '/components/video-masking',
    name: 'Video Masking',
    new: true,
    component: 'clip-path',
  },

  {
    id: '/components/embla-carousel',
    name: 'Carousel',
    new: true,
    component: 'carousel',
  },

  {
    id: '/components/framer-carousel',
    name: 'Framer Carousel',
    component: 'carousel',
  },
  { id: '/components/accordion', name: 'Accordion', component: 'accordion' },

  { id: '/components/faqs', name: 'FAQs', component: 'accordion' },
  { id: '/components/grid', name: 'Grid', component: 'grid' },
  { id: '/components/masonary-grid', name: 'Masonary', component: 'grid' },
  { id: '/components/hover-cards', name: 'Hover cards', component: 'card' },
  {
    id: '/components/products-cards',
    name: 'Products-Cards',
    component: 'card',
  },

  {
    id: '/components/stacking-card',
    name: 'Stacking Card',
    component: 'sticky-scroll',
  },

  {
    id: '/components/sticky-scroll',
    name: 'Sticky Scroll',
    component: 'sticky-scroll',
    new: true,
  },

  {
    id: '/components/image-accordions',
    name: 'Image Accordion',
    component: 'accordion',
  },

  {
    id: '/components/infinity-brand',
    name: 'Infinity Brand',
    component: 'marquee',
  },
]
export const layouts = [
  { id: '/layouts/gallery', name: 'Gallery' },
  { id: '/components/smooth-scroll', name: 'Smooth-Scroll' },
]

function DocsSidebar() {
  const pathname = usePathname()
  const groupedComponents = components.reduce((acc, component) => {
    const group = component.component || null
    //@ts-ignore
    if (!acc[group]) {
      //@ts-ignore
      acc[group] = []
    }
    //@ts-ignore
    acc[group].push(component)
    return acc
  }, {})
  // console.log(groupedComponents)

  return (
    <div className="h-full border-r ">
      <div className="sticky top-0 h-screen rounded-md   pt-14 ">
        <ScrollArea className="h-full py-4">
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
          <h1 className="text-lg font-semibold pb-1">Components</h1>
          <ul>
            {specialComponents?.map((link: any) => {
              return (
                <>
                  <li
                    className={`font-normal text-sm  flex items-center gap-1 dark:hover:text-white  py-1 pl-2  border-l transition-all  ${
                      link.id === pathname
                        ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                        : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                    }`}
                    // data-active={link.id === pathname}
                    key={link.id}
                  >
                    <Link href={link.id}>{link.name}</Link>
                    {link?.new && (
                      <span className="bg-blue-400 text-white  rounded-full px-2 h-4 text-xs items-center flex">
                        new
                      </span>
                    )}
                  </li>
                </>
              )
            })}
          </ul>
          {Object.entries(groupedComponents).map(([group, items]) => (
            <ItemsWithName group={group} items={items} pathname={pathname} />
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

export const ItemsWithName = ({ group, items, pathname }: any) => {
  const [expandedItems, setExpandedItems] = useState<boolean>(false)
  const showExpandButton = items.length > 3
  const itemsToShow =
    expandedItems || !showExpandButton ? items : items.slice(0, 3)

  const groupRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const activeItemIndex = items.findIndex((item: any) => item.id === pathname)
    if (activeItemIndex !== -1) {
      itemRefs.current[activeItemIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }

    const groupElement = groupRef.current

    if (!groupElement) return

    const match = items.some((item: any) => item.id === pathname)

    const handleMouseEnter = () => setExpandedItems(true)
    const handleMouseLeave = () => setExpandedItems(false)

    if (match) {
      setExpandedItems(true)
      groupElement.removeEventListener('mouseenter', handleMouseEnter)
      groupElement.removeEventListener('mouseleave', handleMouseLeave)
    } else {
      setExpandedItems(false)
      groupElement.addEventListener('mouseenter', handleMouseEnter)
      groupElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      groupElement.removeEventListener('mouseenter', handleMouseEnter)
      groupElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [items, pathname])

  return (
    <div ref={groupRef} key={group}>
      <button className="text-[1rem] relative flex w-full items-center justify-between pr-4 cursor-pointer dark:font-normal dark:text-gray-100 font-normal capitalize my-1">
        {group}
        <div className="h-7 w-7 rounded-md dark:bg-gray-900 bg-gray-100 grid place-content-center absolute top-0 right-3">
          <ChevronsDown
            className={`h-5 w-5 transition-all ${
              expandedItems ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>
      <ul className="relative ">
        {!expandedItems && showExpandButton && (
          <div className="absolute w-full bottom-0 left-0 h-7 bg-gradient-to-t dark:from-base-dark from-white from-20%" />
        )}
        {itemsToShow.map((link: any, index: number) => (
          <li
            key={link.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`font-normal text-sm flex items-center gap-1 dark:hover:text-white py-1 pl-2 border-l transition-all ${
              link.id === pathname
                ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
            }`}
          >
            <Link href={link.id}>{link.name}</Link>
            {link?.new && (
              <span className="bg-blue-400 text-white rounded-full px-2 h-4 text-xs items-center flex">
                new
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DocsSidebar

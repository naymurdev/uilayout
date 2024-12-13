'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/website/ui/navigation-menu';
import Image from 'next/image';
import { useRecentPagesStore } from '@/hooks/useZustStore';

const components: { title: string; href: string; description: string }[] = [
  {
    title: '3D Blob ',
    href: 'components/3d-blob',
    description:
      'When you scroll down to that specific section, all the animations will slowly play one after another.',
  },
  {
    title: 'Image Ripple Effect',
    href: '/components/image-ripple-effect',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Tags Input',
    href: '/components/tags-input',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Mesh Gradient',
    href: '/components/bg-mesh-gradient',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Timeline Animation',
    href: 'components/timeline-animation',
    description:
      'When you scroll down to that specific section, all the animations will slowly play one after another.',
  },
  {
    title: 'Motion Number',
    href: '/components/motion-number',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Dialog',
    href: 'components/dialog',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Text Scroll Animation ',
    href: 'components/scroll-text',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: 'components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Image Mousetrail',
    href: '/components/image-mousetrail',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];
export function NavigationMenuDemo() {
  const { addVisitedPage, getRecentPages } = useRecentPagesStore();

  const recentPages = getRecentPages();
  const updates = components.slice(0, 4); // First 4 components
  const others = components.slice(4); // Remaining components
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components </NavigationMenuTrigger>
          <NavigationMenuContent className='dark:bg-black bg-white p-6 '>
            <a
              className=' flex gap-2 mb-2  rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 px-4 no-underline outline-none focus:shadow-md'
              href='/'
            >
              <div className='mb-2 mt-4 text-lg font-medium'>
                <Image
                  src='/apple-touch-icon.png'
                  alt='apple-touch-icon'
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p>✨Updates</p>
                <ul className='grid grid-cols-2 gap-1'>
                  {updates.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className='border'
                    >
                      {component.title}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </a>
            <ul className='grid gap-3  md:w-[400px] lg:w-[500px]  lg:grid-cols-[.75fr_1fr]'>
              {others.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recent Visit</NavigationMenuTrigger>
          <NavigationMenuContent className='dark:bg-black bg-white '>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] '>
              {recentPages.map((component) => (
                <ListItem
                  key={component.id}
                  title={component.name}
                  href={component.id}
                >
                  {component.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

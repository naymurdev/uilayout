// @ts-nocheck
'use client'

import * as React from 'react'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/lib/utils'

import ComponentsIndex from '@/all-pages/components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ComponentPreview from '@/components/common/ComponentPreview'
import CodePreview from '@/components/common/CodePreview'
import {
  CopyButton,
  CopyNpmCommandButton,
} from '@/components/common/copy-button'
import CodeWrapper from '@/components/common/code-wrapper'
import DrawerCodePreview from '@/components/common/drawer-code-preview'
import DrawerCodeWrapper from '@/components/common/drawer-code-wrapper'
import ScreenComponentPreview from '@/components/common/screen-component--preview'
import ScreenCodePreview from '@/components/common/screen-code-preview'
import ProductsCardComponent from '@/components/common/ProductsCardComponent'
import IframeLinkPreviewComponent from '@/components/common/IframeLinkComponentPreview'
const components = {
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        'justify-start border-2  h-12 border-b dark:bg-[#111827]/40 backdrop-blur-lg bg-[#f7f7f7]/0 p-0 rounded-t-lg rounded-b-none absolute top-0 left-0 w-full z-10',
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        'disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-foreground  data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-black data-[state=active]:font-semibold dark:data-[state=active]:border-b-white  py-0   h-full data-[state=active]:shadow-none',
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn('mt-2 ring-offset-background ', className)}
      {...props}
    />
  ),
  IframeLinkPreviewComponent,
  ProductsCardComponent,
  ComponentPreview,
  CodePreview,
  ScreenComponentPreview,
  ScreenCodePreview,
  DrawerCodePreview,
  ComponentsIndex,
  DrawerCodeWrapper,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-bold',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-4  border-b  scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-3',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6 mb-2', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn('my-4 md:my-8', className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 text-sm', className)} {...props} />
  ),
  thead: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <>
      <thead className={cn('bg-muted', className)} {...props}></thead>
    </>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    __event__,
    __style__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __style__?: Style['name']
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
    __event__?: Event['name']
  } & NpmCommands) => {
    return (
      <div className="relative">
        <pre
          className={cn(
            'mb-4 mt-0 max-h-[450px] overflow-x-auto  rounded-lg border bg-zinc-200 py-4 dark:bg-zinc-200 sm:whitespace-break-spaces',
            className
          )}
          {...props}
        />
        {__rawString__ && !__npmCommand__ && (
          <CopyButton
            value={__rawString__}
            className={cn('absolute right-6 top-4 ')}
          />
        )}
        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              commands={{
                __npmCommand__,
                __yarnCommand__,
                __pnpmCommand__,
                __bunCommand__,
              }}
              className={cn('absolute right-4 top-4')}
            />
          )}
      </div>
    )
  },
  CodeWrapper,
  Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className
      )}
      {...props}
    />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  // console.log(code)

  const Component = useMDXComponent(code, {
    style: 'default',
  })

  return (
    <div className="mdx w-full ">
      <Component components={components} />
    </div>
  )
}

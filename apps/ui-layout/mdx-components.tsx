import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { cn } from './lib/utils';
import { PreCode } from '@/components/website/code-components/pre-code';
import ComponentCodePreview from '@/components/website/code-components/component-code-preview';
import DrawerCodePreview from '@/components/website/code-components/drawer-code-preview';
import TabCodePreview from '@/components/website/code-components/tab-codepreview';
import IframeComponentPrieview from '@/components/website/code-components/iframe-component-preview';
import CodeBlock from '@/components/website/code-components/code-block';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import IframeTabCodePreview from './components/website/code-components/iframe-tab-codepreview';
import { HoverContainer, Link } from './components/website/constant';
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn('', className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList className={cn('', className)} {...props} />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger className={cn('', className)} {...props} />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent className={cn('', className)} {...props} />
    ),
    HoverContainer: HoverContainer,
    IframeTabCodePreview: IframeTabCodePreview,
    TabCodePreview: TabCodePreview,
    DrawerCodePreview: DrawerCodePreview,
    ComponentCodePreview: ComponentCodePreview,
    IframeComponentPrieview: IframeComponentPrieview,
    CodeBlock: CodeBlock,
    img: (props) => (
      <Image
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    PreCode: PreCode,

    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className={cn('leading-7 pt-3 pb-2 m-0', className)} {...props} />
    ),
    div: ({
      className,
      children,
      ...props
    }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={cn('', className)} {...props}>
        {children}
      </div>
    ),
    a: Link,
    code: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <code
        className={cn(
          'not-prose italic border  bg-primary-foreground px-1 py-0.5',
          className
        )}
        {...props}
      />
    ),
    blockquote: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => (
      <blockquote
        className={cn('mt-4 border-l-2 border-border pl-3  italic', className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className={cn('my-4 md:my-8', className)} {...props} />
    ),
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className='m-0 w-full overflow-auto not-prose  '>
        <table className={cn('w-full mb-2', className)} {...props} />
      </div>
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn(
          'm-0  w-ful overflow-auto border-t p-0 text-sm [&>td:last-child]:w-full',
          className
        )}
        {...props}
      />
    ),
    thead: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className={cn('bg-muted w-full', className)} {...props} />
    ),
    th: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={cn(
          'border  px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    td: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right whitespace-nowrap ',
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className={cn(
          'font-heading mt-12 scroll-m-16 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-3',
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h5
        className={cn(
          'font-heading mt-4 scroll-m-16 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-3',

          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h6
        className={cn(
          'mt-4 mb-1 scroll-m-20 text-2xl font-semibold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}

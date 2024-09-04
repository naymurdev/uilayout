import React, { FC } from 'react'
import { allComponents } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/all-pages/components/Mdx'
import { absoluteUrl, cn, siteConfig } from '@/lib/utils'
import '@/styles/mdx.css'
import { ChevronRightIcon, Component } from 'lucide-react'
import { Metadata } from 'next'
import { getTableOfContents } from '@/lib/toc'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TableOfContents } from '@/components/toc'
import { ComponentPagination } from '@/components/common/pagination'
import { useMediaQuery } from '@/hooks/use-media-query'

interface PageProps {
  params: {
    slug: string[]
  }
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })
  console.log(doc?.title)

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: '@naymur_dev',
    },
  }
}

async function getDocFromParams({ params }: PageProps) {
  // console.log(params)

  const slug = (params?.slug as unknown as string) || ''
  const doc = allComponents.find((doc) => doc.slugAsParams === slug)
  if (!doc) {
    return null
  }

  return doc
}

const page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }
  const toc = await getTableOfContents(doc.body.raw)
  // console.log('checking', toc, typeof toc, Object.keys(toc).length === 0)
  const isTocValid = Object.keys(toc).length !== 0

  return (
    <>
      <div
        className={`${
          isTocValid
            ? ' lg:gap-5 lg:pt-8 xl:grid xl:grid-cols-[1fr_180px] w-full'
            : ' w-full'
        }`}
      >
        <div
          className={` ${
            isTocValid
              ? 'pt-14 pb-10 overflow-hidden'
              : ' pt-20 pb-10 overflow-hidden'
          } `}
        >
          {/* {doc.title !== 'Components' && (
            <>
              <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground ">
                <div className="truncate">components</div>
                <ChevronRightIcon className="size-4" />
                <div className="font-medium text-foreground">{doc.title}</div>
              </div>
            </>
          )} */}
          <div className="space-y-2  rounded-md">
            <h1
              className={cn(
                'scroll-m-20 flex gap-2 items-center text-3xl font-medium tracking-tight'
              )}
            >
              <Component /> {doc.title}
            </h1>
            <p className="text-sm">{doc.description}</p>
          </div>
          <Mdx code={doc.body.code} />
          <ComponentPagination doc={doc} />
        </div>
        {isTocValid && (
          <div className="xl:bg-primary-foreground   xl:border-x xl:relative fixed bottom-0 left-0 w-full z-10 ">
            <div className="xl:sticky xl:top-4 text-[0.8em] px-3 text-white bg-black/50 xl:border-none border-t border-x xl:w-full w-fit mx-auto xl:rounded-none  rounded-t-md rounded-l-md rounded-r-md  xl:backdrop-blur-none backdrop-blur-xl">
              <div className="space-y-4 xl:sticky xl:top-0 xl:h-[calc(100vh-3.5rem)] h-fit  xl:py-12 py-2">
                <TableOfContents toc={toc} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default page

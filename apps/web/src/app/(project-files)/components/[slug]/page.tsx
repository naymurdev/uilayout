import React, { FC } from 'react'
import { allComponents } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/all-pages/components/Mdx'
import { absoluteUrl, cn, siteConfig } from '@/lib/utils'
import '@/styles/mdx.css'
import { ChevronRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import { getTableOfContents } from '@/lib/toc'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TableOfContents } from '@/components/toc'
import { ComponentPagination } from '@/components/common/pagination'

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

  // const slug = params.slug?.join('/') || ''
  // const doc = allComponents.find((doc) => doc.slugAsParams === slug)
  // if (!doc) {
  //   return null
  // }

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
          {doc.title !== 'Components' && (
            <>
              <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="truncate">components</div>
                <ChevronRightIcon className="size-4" />
                <div className="font-medium text-foreground">{doc.title}</div>
              </div>
            </>
          )}
          <div className="space-y-2">
            <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
              {doc.title}
            </h1>
          </div>
          <Mdx code={doc.body.code} />
          <ComponentPagination doc={doc} />
        </div>
        {isTocValid && (
          <div className="relative  border-x xl:block hidden">
            <div className="sticky top-20 text-[0.8em] px-3 text-white">
              <ScrollArea className="pb-10">
                <div className="space-y-4 sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                  <TableOfContents toc={toc} />
                  {/* <Contribute doc={doc} /> */}
                </div>
              </ScrollArea>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default page

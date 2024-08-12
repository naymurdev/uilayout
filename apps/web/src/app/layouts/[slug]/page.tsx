import React, { FC } from 'react'
import { allLayouts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { LayoutMdx } from '@/all-pages/layouts/layout-mdx'
import { cn } from '@/lib/utils'
import '@/styles/mdx.css'
import Header from '@/components/common/header'
interface PageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: PageProps) {
  // console.log(params)

  const slug = (params?.slug as unknown as string) || ''
  const doc = allLayouts.find((doc) => doc.slugAsParams === slug)
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
  return (
    <>
      <Header />
      <div className="container mx-auto pt-20  relative">
        <div className="py-2">
          <LayoutMdx code={doc.body.code} />

          {/* <h1
            className={cn(
              'scroll-m-20 text-4xl font-semibold tracking-tight pb-1'
            )}
          >
            {doc?.title}
          </h1>
          {doc?.description && (
            <p className="text-lg text-muted-foreground w-[80%]">
              {doc?.description}
            </p>
          )} */}
        </div>
      </div>
    </>
  )
}

export default page

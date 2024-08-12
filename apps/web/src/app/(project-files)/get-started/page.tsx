import React, { FC } from 'react'
import { allGetStarteds } from 'contentlayer/generated'
import '@/styles/mdx.css'
import { cn, siteConfig } from '@/lib/utils'
import { OthersMdx } from '@/all-pages/others/others-mdx'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get Started',
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
}

const page = () => {
  const doc = allGetStarteds.find((doc) => doc)

  return (
    <div className="py-20">
      <h1
        className={cn('scroll-m-20 text-4xl font-semibold tracking-tight pb-1')}
      >
        {doc?.title}
      </h1>

      {doc?.description && (
        <p className="text-lg text-muted-foreground w-[80%]">
          {doc?.description}
        </p>
      )}
      <OthersMdx code={doc?.body.code!} />
    </div>
  )
}

export default page

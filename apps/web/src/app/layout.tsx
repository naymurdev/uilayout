import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/provider/theme-provider'
import Header from '@/components/common/home-header'
import Progressbar from '@/lib/progressbar'
import Script from 'next/script'

import { siteConfig } from '@/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'framer-motion',
    'gsap',
    'lenis react',
    'reactscroll animation',
    'web animation',
    'design engineer',
    'image mousetrail',
    'spotlight',
    'tabs',
    'image reveal',
    'sparkles',
  ],
  authors: [
    {
      name: 'naymur rahman',
      url: 'https://naymur-rahman.com/',
    },
  ],
  creator: 'naymur',
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
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@naymur_dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}
const isDev = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {!isDev ? (
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f6725988-1a81-4c0d-ba04-aa02d4bc5640"
        ></script>
      ) : null}
      <body className={poppins.className}>
        <div vaul-drawer-wrapper="">
          <Progressbar>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </Progressbar>
        </div>
      </body>
    </html>
  )
}

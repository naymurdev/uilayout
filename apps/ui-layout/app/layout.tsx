import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import Progressbar from '@/lib/progressbar';
import { siteConfig } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

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
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-BH0GZ3L39R'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BH0GZ3L39R');
        `}
        </Script>

        <body className={poppins.className}>
          <Progressbar>
            <ThemeProvider attribute='class'>
              <div className='isolate min-h-screen' vaul-drawer-wrapper=''>
                {children}
              </div>
            </ThemeProvider>
          </Progressbar>
        </body>
      </html>
    </>
  );
}

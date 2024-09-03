import DocsSidebar from '@/components/common/docs-sidebar'
import Header from '@/components/common/header'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function LayoutsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="2xl:container mx-auto px-2 lg:grid  lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-4">
        <aside className=" lg:block hidden  h-full ">
          <DocsSidebar />
        </aside>
        <main className=" w-full px-2 dark:bg-base-dark  relative h-full  ">
          {children}
        </main>
      </div>
      <footer className=" border-t py-6">
        <div className="container mx-auto">
          <p className="text-balance  text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://x.com/naymur_dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              naymur
            </a>{' '}
            . The source code is available on{' '}
            <a
              href="https://github.com/naymurdev/uilayout"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  )
}

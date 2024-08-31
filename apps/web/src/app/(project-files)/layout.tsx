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
    </>
  )
}

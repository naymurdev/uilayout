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
      <div className="sm:container px-2 lg:grid  lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-4">
        <aside className=" lg:block hidden  h-full ">
          <DocsSidebar />
        </aside>
        <main className=" w-full px-2 dark:bg-base-dark  relative h-full  ">
          {/* <div className="  lg:gap-5 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]"> */}
          {children}
          {/* <div className="relative">
              <article className="sticky top-20 text-sm text-white">
                <h1>hello</h1>
              </article>
            </div> */}
          {/* </div> */}
        </main>
      </div>
    </>
  )
}

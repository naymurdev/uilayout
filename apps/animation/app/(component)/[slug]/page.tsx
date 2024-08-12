import { COMPONENTS } from '@/assets/data'
import Link from 'next/link'
type ComponentFile = {
  componentName: string
  componentSrc: React.LazyExoticComponent<React.FC<{}>>
  componentUrl?: string
}
export default function Page({ params }: { params: { slug: string } }) {
  const currentComponentData = COMPONENTS?.find(
    (file: ComponentFile) => file.componentUrl === params?.slug
  )
  console.log(currentComponentData)

  return (
    <>
      {!currentComponentData ? (
        <>
          <div className="h-screen text-center w-full grid place-content-center ">
            <h1 className="text-3xl mb-4">Component not found!</h1>
            <Link
              href={'/components'}
              className="group relative inline-flex h-12 w-fit mx-auto items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px]   [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px]"
            >
              Go Back to Component
            </Link>
          </div>
        </>
      ) : (
        <>
          <currentComponentData.componentSrc />
        </>
      )}
    </>
  )
}

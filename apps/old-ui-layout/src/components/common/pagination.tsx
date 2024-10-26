'use client'
import Link from 'next/link'
import { MainComponents, SpecialComponents } from './docs-sidebar'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

export function ComponentPagination({ doc }: any) {
  const allComponents = [...SpecialComponents, ...MainComponents]

  const pager = findPrevNextComp(allComponents, doc.slug)

  return (
    <div className="flex flex-row items-center justify-between mt-5 mb-2">
      {pager?.previous?.id && (
        <Link
          href={pager.previous.id}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:-5px_5px_rgb(229_231_235)]"
        >
          <ChevronsLeft className="mr-1 h-4 w-4" />
          {pager.previous.name}
        </Link>
      )}
      {pager?.next?.id && (
        <Link
          href={pager.next.id}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] "
        >
          {pager.next.name}
          <ChevronsRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
export const findPrevNextComp = (components: any, slug: any) => {
  const index = components.findIndex(
    (component: { id: any }) => component.id === slug
  )
  console.log(index)
  if (index === -1) {
    return { previous: null, next: null }
  }

  const previous = index > 0 ? components[index - 1] : null
  const next = index < components.length - 1 ? components[index + 1] : null
  return { previous, next }
}

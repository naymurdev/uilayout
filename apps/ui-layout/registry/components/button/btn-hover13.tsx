import { ChevronsRight } from 'lucide-react'

const buttonHover12 = () => {
  return (
    <>
      <a
        className="flex  gap-2 cursor-pointer px-4 py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold"
        href="#"
      >
        Know More
        <ChevronsRight />
      </a>
    </>
  )
}

export default buttonHover12

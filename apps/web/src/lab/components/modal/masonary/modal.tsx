import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'
interface ItemType {
  id: number
  url: string
  title: string
  tags: any[]
  description: string
}

interface ModalProps {
  selected: ItemType | null
  setSelected: React.Dispatch<React.SetStateAction<ItemType | null>>
}
export default function Modal({ selected, setSelected }: ModalProps) {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer overflow-y-scroll"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-${selected.id}`}
            className="w-full max-w-[1000px] mx-auto my-8 cursor-default dark:bg-[#202020] bg-[#ebebeb] rounded-md"
          >
            <motion.div className=" p-4 h-[70vh]">
              <Image
                width={400}
                height={400}
                alt="img"
                src={selected.url}
                className="w-full h-full object-contain rounded-md dark:bg-black bg-white"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white dark:bg-black dark:text-white text-black p-4  rounded-md  px-8"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-2"
              >
                {selected.title}
              </motion.h3>
              <motion.div variants={itemVariants} className="flex gap-2">
                {selected.tags.map((tag) => {
                  return (
                    <div
                      className="bg-base-300 border  dark:bg-gray-100 bg-gray-50 text-zinc-600 px-2 py-1 rounded-md"
                      key={tag}
                    >
                      {tag}
                    </div>
                  )
                })}
              </motion.div>
              <motion.p variants={itemVariants} className="my-4">
                {selected.description}
              </motion.p>
              <motion.a
                variants={itemVariants}
                className="flex  w-fit gap-2 cursor-pointer px-4 py-2 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-colors border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold"
                href="#"
              >
                Download
                <Download />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

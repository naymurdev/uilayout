import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { items } from '@/components/common/constant'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'
interface ProjectsTypes {
  id: string
  img: string
  title: string
  des: string
}
const projects: ProjectsTypes[] = [
  {
    id: '01',
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715685361/distrokings_vihqpy.jpg',
    title: 'Distrokings',
    des: 'We make your logo communicate with your customers more than words ever could',
  },
  {
    id: '02',
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715685361/profitables_ofi7nl.jpg',
    title: 'Profitables',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '03',
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715685361/topserve_kn64o1.jpg',
    title: 'Topserve-copiers',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '04',
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715685361/labramart_c5xwpd.jpg',
    title: 'Labramart.',
    des: 'We specialize in crafting marketing solutions that propel your brand to new heights',
  },
]

export default function index() {
  return (
    <>
      <div className="lg:columns-2 columns-1 overflow-hidden  px-5 pb-5">
        {projects.map((project, index) => {
          return (
            <>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeOut' }}
                viewport={{ once: false }}
                className={` relative pb-4 `}
              >
                <div className="w-auto h-full">
                  <Image
                    src={project?.img}
                    alt={'image'}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute bottom-2 text-black w-full p-4 flex justify-between items-center">
                  <h3 className="sm:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 text-white grid place-content-center rounded-full bg-black">
                    <MoveUpRight />
                  </div>
                </div>
              </motion.article>
            </>
          )
        })}
      </div>
    </>
  )
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
}
const projects: ProjectsTypes[] = [
  {
    id: '01',
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    title: 'Distrokings',
    des: 'We make your logo communicate with your customers more than words ever could',
  },
  {
    id: '02',
    img: 'https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1200&auto=format&fit=crop',
    title: 'Profitables',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '03',
    img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop',
    title: 'Topserve-copiers',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '04',
    img: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=800&auto=format&fit=crop',
    title: 'Labramart.',
    des: 'We specialize in crafting marketing solutions that propel your brand to new heights',
  },
];

export default function index() {
  return (
    <>
      <div className='grid grid-cols-12  gap-4 overflow-hidden px-5 lg:pb-5 pb-2'>
        {projects.map((project, index) => {
          let colSpanClass = 'sm:col-span-6 col-span-12 ';
          if (index === 0) {
            colSpanClass = ' sm:col-span-5 col-span-12 ';
          } else if (index === 1) {
            colSpanClass = 'sm:col-span-7 col-span-12 ';
          } else if (index === projects.length - 2) {
            colSpanClass = 'sm:col-span-7 col-span-12 ';
          } else if (index === projects.length - 1) {
            colSpanClass = 'sm:col-span-5 col-span-12 ';
          }
          return (
            <>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeOut' }}
                viewport={{ once: false }}
                className={` relative  ${colSpanClass} `}
              >
                <div className='w-auto h-full'>
                  <Image
                    src={project?.img}
                    alt={'image'}
                    height={600}
                    width={1200}
                    className='h-full w-full object-cover rounded-xl'
                  />
                </div>
                <div className='absolute lg:bottom-2 bottom-0 text-black w-full p-4 flex justify-between items-center'>
                  <h3 className='lg:text-xl text-sm bg-black text-white rounded-xl p-2 px-4'>
                    {project.title}
                  </h3>
                  <div className='lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black'>
                    <MoveUpRight />
                  </div>
                </div>
              </motion.article>
            </>
          );
        })}
      </div>
    </>
  );
}

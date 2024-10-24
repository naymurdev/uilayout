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
    img: 'https://images.unsplash.com/photo-1615451210353-cbcf249f392a?q=80&w=1200&auto=format&fit=crop',
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
      <div className='lg:columns-2 columns-1 overflow-hidden  px-5 pb-5'>
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
                <div className='w-auto h-full'>
                  <Image
                    src={project?.img}
                    alt={'image'}
                    height={600}
                    width={1200}
                    className='h-full w-full object-cover rounded-xl'
                  />
                </div>
                <div className='absolute bottom-2 text-black w-full p-4 flex justify-between items-center'>
                  <h3 className='sm:text-xl text-sm bg-black text-white rounded-xl p-2 px-4'>
                    {project.title}
                  </h3>
                  <div className='w-12 h-12 text-white grid place-content-center rounded-full bg-black'>
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

'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from './tabs'

const tabs = [
  {
    title: 'How do UI components improve UX?',
    id: 'improve',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662552/mobilew_dsqfkw.jpg',
  },
  {
    title: 'Important of UI component.',
    id: 'important',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662556/2149880598_j6lyue.jpg',
  },
  {
    title: 'Is UI and UX Same?',
    id: 'same',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1715662554/10631468_4491464_n68c8v.jpg',
  },
]
function index() {
  return (
    <>
      <div className=" w-full  h-full">
        <TabsProvider
          defaultValue="improve"
          className="md:grid md:grid-cols-12 items-center justify-center"
        >
          <TabList className="md:col-span-5">
            {tabs.map((tab, index) => (
              <TabItem key={index} value={tab.id}>
                <TabHeader value={tab.id}>{tab.title}</TabHeader>
                <TabDes value={tab.id}>
                  {' '}
                  <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                    {tab.description}
                  </p>
                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    className="md:hidden block rounded-md"
                  />
                </TabDes>
              </TabItem>
            ))}
          </TabList>
          <TabImageContainer className="md:col-span-7">
            {tabs.map((tab, index) => (
              <TabImage key={index} value={tab.id}>
                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </TabImage>
            ))}
          </TabImageContainer>
        </TabsProvider>
      </div>
    </>
  )
}

export default index

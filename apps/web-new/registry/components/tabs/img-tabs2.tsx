'use client';
import React, { useState } from 'react';
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from '@/components/core/image-tabs';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    id: 'improve',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Important of UI component.',
    id: 'important',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Is UI and UX Same?',
    id: 'same',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];
function index() {
  return (
    <>
      <div className=' w-full  h-full'>
        <TabsProvider
          defaultValue='improve'
          className='md:grid md:grid-cols-12 items-center justify-center'
        >
          <TabImageContainer className='md:col-span-7'>
            {tabs.map((tab, index) => (
              <TabImage key={index} value={tab.id}>
                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className='w-full h-full rounded-md'
                />
              </TabImage>
            ))}
          </TabImageContainer>
          <TabList className='md:col-span-5 '>
            {tabs.map((tab, index) => (
              <TabItem key={index} value={tab.id}>
                <TabHeader value={tab.id}>{tab.title}</TabHeader>
                <TabDes value={tab.id}>
                  <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                    {tab.description}
                  </p>

                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    className='md:hidden block rounded-md'
                  />
                </TabDes>
              </TabItem>
            ))}
          </TabList>
        </TabsProvider>
      </div>
    </>
  );
}

export default index;

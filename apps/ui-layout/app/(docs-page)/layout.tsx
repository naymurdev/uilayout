import React from 'react';
import Header from '@/components/website/header';
import DocsSidebar from '@/components/website/sidebar';
import Footer from '@/components/website/footer';

export default async function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='dark:bg-zinc-950 bg-zinc-50 '>
        <div className='mx-auto   2xl:container xl:w-[96%] lg:w-[98%] w-full lg:grid 2xl:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[170px_minmax(0,1fr)] grid-cols-1 lg:gap-3'>
          <DocsSidebar />
          <div className=' min-w-0 max-w-full'>{children}</div>
        </div>
      </main>
    </>
  );
}

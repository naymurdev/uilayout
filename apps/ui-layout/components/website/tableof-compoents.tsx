'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-media-query';
import BuyMeCoffee from '@/registry/components/buy-me-acoffee';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ScrollArea } from './ui/scroll-area';

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: Promise<{ items: TocItem[] }>;
}
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
    };
  },
};

const matchPath = [
  '/docs/get-started',
  '/docs/components',
  '/docs/templates',
  '/docs/introduction',
  // '/docs/components/buttons',
];
export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  const { scrollYProgress } = useScroll();

  // Use a spring for smooth animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 10,
  });

  // Transform progress for circle stroke-dashoffset animation
  const circumference = 2 * Math.PI * 36; // radius of 36px for the circle
  const strokeDashoffset = useTransform(progress, [0, 1], [circumference, 0]);
  // Resolving the TOC promise and setting the toc items
  useEffect(() => {
    // console.log(toc);

    toc.then((resolvedToc) => {
      setTocItems(resolvedToc.items);
    });
  }, [toc]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    const headers = document.querySelectorAll('h2, h3');
    headers.forEach((header) => observer.observe(header));

    return () => {
      headers.forEach((header) => observer.unobserve(header));
    };
  }, []);
  const checkpath = matchPath.find((path) => path === pathname);
  if (checkpath) {
    return;
  }
  // console.log('tocitems', tocItems);

  return (
    <>
      {isDesktop ? (
        <>
          {tocItems?.length !== 0 && (
            <aside className='hidden lg:block w-[170px] shrink-0 '>
              <div className='sticky top-0 h-screen   pt-[5.2em]'>
                <ScrollArea className='h-[98%] px-3 py-3 dark:bg-black/40  bg-zinc-100  backdrop-blur-md rounded-md border'>
                  <div>
                    <span className='text-sm px-1 text-primary font-semibold pb-1 inline-block'>
                      On This Page
                    </span>
                    <hr />
                    <ul className=' list-none m-0 ml-0  text-[0.8em] space-y-0.5 pt-2 pl-0'>
                      {tocItems?.map((item) => {
                        // console.log(item);

                        return (
                          <>
                            <li key={item.url}>
                              <a
                                href={item.url}
                                className={`${
                                  activeId === item.url.slice(1)
                                    ? ' font-semibold  text-primary py-1'
                                    : ''
                                } no-underline rounded-sm px-1 hover:text-primary text-muted-foreground `}
                              >
                                {item.title}
                              </a>
                              {item.items && item.items.length > 0 && (
                                <ul className='list-none  pl-4 space-y-0.5 pt-0.5'>
                                  {item.items.map((subItem) => (
                                    <li key={subItem.url}>
                                      <a
                                        href={subItem.url}
                                        className={`${
                                          activeId === subItem.url.slice(1)
                                            ? ' font-semibold text-primary'
                                            : ' '
                                        } no-underline  hover:text-primary text-muted-foreground`}
                                      >
                                        {subItem.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <BuyMeCoffee classname='mt-10 w-full' />
                </ScrollArea>
              </div>
            </aside>
          )}
        </>
      ) : (
        <>
          {tocItems?.length !== 0 && (
            <div
              className='left-0 fixed border bottom-0  dark:shadow-[0px_0px_20px_10px_#141414] shadow-[0px_0px_20px_10px_#dadada] z-10 bg-primary-foreground/50 backdrop-blur-xl rounded-t-lg  p-2 w-full shrink-0 border-x overflow-hidden
            '
            >
              {/* <svg width='40' height='40' className='rotate-[-90deg]'>
                <circle
                  cx='20'
                  cy='20'
                  r='16'
                  strokeWidth='4'
                  fill='transparent'
                  className=' stroke-border'
                />
                <motion.circle
                  cx='20'
                  cy='20'
                  r='16'
                  strokeWidth='4'
                  fill='transparent'
                  className=' stroke-red-500'
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg> */}
              {/* <motion.div
                className='progress-bar w-4 rounded-full  h-4  bg-red-500 origin-left '
                style={{ scaleX }}
              /> */}

              <>
                <span className='text-sm px-1 text-primary font-semibold pb-1 inline-block'>
                  On This Page
                </span>
                <hr />
                <ul className=' flex flex-wrap list-none m-0 ml-0  text-[0.8em] space-y-0.5 pt-2 pl-0'>
                  {tocItems?.map((item) => {
                    // console.log(item);

                    return (
                      <>
                        <li key={item.url}>
                          <a
                            href={item.url}
                            className={`${
                              activeId === item.url.slice(1)
                                ? ' font-semibold  text-primary py-1'
                                : ''
                            } no-underline rounded-sm px-1 hover:text-primary text-muted-foreground `}
                          >
                            {item.title}
                          </a>
                          {item.items && item.items.length > 0 && (
                            <ul className=' flex flex-wrap gap-2 list-none  pl-4 space-y-0.5 pt-0.5'>
                              {item.items.map((subItem) => (
                                <li key={subItem.url}>
                                  <a
                                    href={subItem.url}
                                    className={`${
                                      activeId === subItem.url.slice(1)
                                        ? ' font-semibold text-primary'
                                        : ' '
                                    } no-underline  hover:text-primary text-muted-foreground`}
                                  >
                                    {subItem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </>
            </div>
          )}
        </>
      )}
    </>
  );
}

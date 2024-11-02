'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-media-query';
import BuyMeCoffee from '@/registry/components/buy-me-acoffee';

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: Promise<{ items: TocItem[] }>;
}
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
            <aside className='hidden lg:block bg-primary-foreground w-[170px] shrink-0 border-x'>
              <div className='sticky top-16 p-2'>
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

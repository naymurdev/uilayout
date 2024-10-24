import { X } from 'lucide-react';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SidebarDrawer, DrawerContent } from '../core/drawer/vaul-sidebar';
import { basePath } from './sidebar';
import { MainComponents, SpecialComponents } from '@/configs/docs';
import { cn } from '@/lib/utils';

function MobileHeader({ classname }: { classname?: string }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <button
        className={cn(classname, 'text-3xl')}
        onClick={() => setSidebarOpen(true)}
      >
        {/* <HiOutlineMenuAlt2 /> */}
        <svg
          width='642'
          height='421'
          viewBox='0 0 642 421'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' stroke-primary w-9 h-9'
        >
          <path
            d='M52.333 359H252.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 212H452.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 65H585.666'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <SidebarDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'left'}
        outsideClose={true}
        className='sm:w-[60%] w-[70%] p-4 h-screen'
      >
        <DrawerContent>
          <figure className='flex justify-between  w-full items-center'>
            <Link
              href='/'
              className='flex gap-2 items-center text-2xl font-semibold border-b  py-2'
            >
              <div className='w-6 h-6 mx-auto dark:bg-white bg-black rounded-sm before:absolute relative before:w-full before:h-full dark:before:bg-white/50 before:bg-black/50 before:rounded-sm before:-top-1.5 before:-left-1.5'></div>
              <svg
                width='3385'
                height='783'
                viewBox='0 0 3385 783'
                className='w-36 h-full'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M286.038 0H427.423V532.636C427.423 543.545 423.337 553.091 415.164 561.273C407.536 568.909 398.274 572.727 387.377 572.727H190.42C177.344 572.727 166.175 568.091 156.912 558.818C147.65 549.545 143.019 538.636 143.019 526.091V485.182C143.019 473.727 140.295 463.091 134.847 453.273C129.398 443.455 121.771 435.818 111.964 430.364C102.701 424.364 92.3495 421.091 80.9079 420.546H46.5834C34.0522 420.546 23.1555 416.182 13.8933 407.455C4.63109 398.182 0 387 0 373.909V0H143.836V405.818C143.836 409.636 144.926 412.909 147.105 415.636C149.83 418.364 153.099 419.727 156.912 419.727H272.145C275.959 419.727 279.228 418.364 281.952 415.636C284.676 412.909 286.038 409.636 286.038 405.818V0Z'
                  fill='white'
                />
                <path
                  d='M629.175 153H487.791V0H629.175V153ZM487.791 572.727V211.091H629.175V572.727H487.791Z'
                  fill='white'
                />
                <path
                  d='M837.709 419.727H1051.83V572.727H853.237C847.788 572.727 843.157 570.818 839.343 567C835.529 563.182 833.622 558.546 833.622 553.091V468C833.622 454.909 828.991 443.727 819.729 434.455C810.467 425.182 799.57 420.546 787.039 420.546H726.562C714.031 420.546 703.135 416.182 693.872 407.455C684.61 398.182 679.979 387 679.979 373.909V0H823.815V405.818C823.815 408 824.36 410.182 825.45 412.364C826.54 414.546 828.174 416.455 830.354 418.091C832.533 419.182 834.985 419.727 837.709 419.727Z'
                  fill='white'
                />
                <path
                  d='M1446.89 211.091C1455.6 211.091 1463.5 213.273 1470.59 217.636C1477.67 221.455 1483.39 227.182 1487.75 234.818C1492.11 241.909 1494.29 249.545 1494.29 257.727V572.727H1113.45C1100.92 572.727 1090.02 568.091 1080.76 558.818C1071.5 549.545 1066.86 538.636 1066.86 526.091V409.909C1066.86 396.818 1071.5 385.909 1080.76 377.182C1090.02 367.909 1100.92 363.273 1113.45 363.273H1163.3C1176.38 363.273 1187.55 358.636 1196.81 349.364C1206.07 340.091 1210.7 328.909 1210.7 315.818V257.727C1210.7 245.182 1215.06 234.273 1223.78 225C1233.04 215.727 1244.21 211.091 1257.28 211.091H1446.89ZM1352.9 420.546V363.273H1213.97C1210.16 363.273 1206.89 364.636 1204.16 367.364C1201.44 370.091 1200.08 373.364 1200.08 377.182V406.636C1200.08 410.455 1201.44 413.727 1204.16 416.455C1206.89 419.182 1210.16 420.546 1213.97 420.546H1352.9Z'
                  fill='white'
                />
                <path
                  d='M1822.18 210.273H1963.57V584.182C1963.57 597.273 1958.94 608.455 1949.68 617.727C1940.41 627 1929.24 631.636 1916.17 631.636H1867.95C1854.87 631.636 1843.43 636.273 1833.63 645.545C1824.36 654.818 1819.73 666 1819.73 679.091V736.364C1819.73 749.455 1815.1 760.364 1805.84 769.091C1797.12 778.364 1786.23 783 1773.15 783H1536.15V630H1808.29C1812.11 630 1815.37 628.636 1818.1 625.909C1820.82 623.182 1822.18 619.909 1822.18 616.091V572.727H1726.57C1713.49 572.727 1702.32 568.091 1693.06 558.818C1683.8 549.545 1679.17 538.636 1679.17 526.091V485.182C1679.17 473.727 1676.44 463.091 1670.99 453.273C1665.54 443.455 1657.92 435.818 1648.11 430.364C1638.85 424.364 1628.5 421.091 1617.05 420.546H1582.73C1570.2 420.546 1559.3 416.182 1550.04 407.455C1540.78 398.182 1536.15 387 1536.15 373.909V210.273H1679.98V405.818C1679.98 409.636 1681.07 412.909 1683.25 415.636C1685.98 418.364 1689.24 419.727 1693.06 419.727H1808.29C1812.11 419.727 1815.37 418.364 1818.1 415.636C1820.82 412.909 1822.18 409.636 1822.18 405.818V210.273Z'
                  fill='white'
                />
                <path
                  d='M2399.32 211.091C2412.4 211.091 2423.57 215.727 2432.83 225C2442.09 234.273 2446.72 245.182 2446.72 257.727V526.091C2446.72 538.636 2442.09 549.545 2432.83 558.818C2423.57 568.091 2412.4 572.727 2399.32 572.727H2065.89C2053.35 572.727 2042.46 568.091 2033.2 558.818C2023.93 549.545 2019.3 538.636 2019.3 526.091V257.727C2019.3 245.182 2023.93 234.273 2033.2 225C2042.46 215.727 2053.35 211.091 2065.89 211.091H2399.32ZM2305.34 406.636V377.182C2305.34 373.364 2303.98 370.091 2301.25 367.364C2298.53 364.636 2295.26 363.273 2291.45 363.273H2166.41C2162.59 363.273 2159.32 364.636 2156.6 367.364C2153.88 370.091 2152.51 373.364 2152.51 377.182V406.636C2152.51 410.455 2153.88 413.727 2156.6 416.455C2159.32 419.182 2162.59 420.546 2166.41 420.546H2291.45C2295.26 420.546 2298.53 419.182 2301.25 416.455C2303.98 413.727 2305.34 410.455 2305.34 406.636Z'
                  fill='white'
                />
                <path
                  d='M2773.52 210.273H2914.9V532.636C2914.9 543.545 2910.82 553.091 2902.64 561.273C2895.02 568.909 2885.75 572.727 2874.86 572.727H2677.9C2664.82 572.727 2653.65 568.091 2644.39 558.818C2635.13 549.545 2630.5 538.636 2630.5 526.091V485.182C2630.5 473.727 2627.77 463.091 2622.33 453.273C2616.88 443.455 2609.25 435.818 2599.44 430.364C2590.18 424.364 2579.83 421.091 2568.39 420.546H2534.06C2521.53 420.546 2510.63 416.182 2501.37 407.455C2492.11 398.182 2487.48 387 2487.48 373.909V210.273H2631.31V405.818C2631.31 409.636 2632.4 412.909 2634.58 415.636C2637.31 418.364 2640.58 419.727 2644.39 419.727H2759.62C2763.44 419.727 2766.71 418.364 2769.43 415.636C2772.15 412.909 2773.52 409.636 2773.52 405.818V210.273Z'
                  fill='white'
                />
                <path
                  d='M3243.62 391.909H3385V526.091C3385 538.636 3380.37 549.545 3371.11 558.818C3361.84 568.091 3350.68 572.727 3337.6 572.727H3148C3134.92 572.727 3123.75 568.091 3114.49 558.818C3105.23 549.545 3100.6 538.636 3100.6 526.091V468.818C3100.6 455.727 3095.97 444.546 3086.7 435.273C3077.44 425.455 3066.27 420.546 3053.2 420.546H3004.16C2991.63 420.546 2980.73 416.182 2971.47 407.455C2962.21 398.182 2957.58 387 2957.58 373.909V0H3098.96V210.273H3217.46C3221.28 210.273 3224.55 211.636 3227.27 214.364C3229.99 217.091 3231.36 220.364 3231.36 224.182V348.545C3231.36 352.364 3229.99 355.636 3227.27 358.364C3224.55 361.091 3221.28 362.455 3217.46 362.455H3098.96V405.818C3098.96 409.636 3100.32 412.909 3103.05 415.636C3105.77 418.364 3109.04 419.727 3112.86 419.727H3229.72C3233.54 419.727 3236.81 418.364 3239.53 415.636C3242.25 412.909 3243.62 409.636 3243.62 405.818V391.909Z'
                  fill='white'
                />
              </svg>
            </Link>

            <button
              className='md:hidden flex'
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>
          </figure>
          {/* <GitHubButton /> */}

          <ScrollArea className='h-[95%] py-4 pb-12'>
            <ul className='pb-3'>
              {basePath?.map((link, index) => {
                return (
                  <>
                    <li key={`id-${index}`}>
                      <Link
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex gap-2 group font-medium items-center py-1  transition-all ${
                          link.href === pathname
                            ? 'active-nav'
                            : 'text-slate-600 hover:text-slate-900  dark:text-slate-400 dark:hover:text-white'
                        }`}
                      >
                        {React.cloneElement(link?.icon, {
                          className: `${
                            link.href === pathname
                              ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                              : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white  dark:group-hover:bg-white dark:group-hover:text-base-dark'
                          } h-7 w-7 border transition-all  rounded-sm p-1.5`,
                        })}

                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
            <h1 className='text-sm font-semibold pb-1'>Components</h1>
            <ul>
              {[...MainComponents, ...SpecialComponents]?.map((link) => {
                return (
                  <>
                    <li>
                      <Link
                        href={link.href}
                        className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                          link.href === pathname
                            ? 'dark:border-white border-black text-black dark:text-white font-medium'
                            : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                        }`}
                        // data-active={link.id === pathname}
                        key={link.href}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </ScrollArea>
        </DrawerContent>
      </SidebarDrawer>
    </>
  );
}

export default MobileHeader;

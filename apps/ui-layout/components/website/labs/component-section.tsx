'use client';

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Suspense,
} from 'react';
import {
  useSelectedComponentStore,
  useStateChange,
} from '@/hooks/useZustStore';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import {
  Component,
  GalleryHorizontalEnd,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Settings2,
  Sun,
  SunIcon,
  X,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/website/ui/dropdown';
import Slider from '@/components/website/ui/slider';
import LabSidebar from './labs-sidebar';
import { AllComponents } from '@/configs/docs';
import { ScrollArea } from '../ui/scroll-area';

const ComponentSection = () => {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar, isSidebarOpen } = useStateChange();
  const recentComponents = useSelectedComponentStore(
    (state) => state.recentComponents
  );
  const currentComponent = recentComponents[0];
  const currentComponentData = useMemo(
    () =>
      AllComponents.find(
        (component) =>
          component.componentName === currentComponent?.componentName
      ),
    [currentComponent]
  );
  const [isOpenStyle, setIsOpenStyle] = useState(false);
  const [heightPercentage, setHeightPercentage] = useState(65);
  const [widthPercentage, setWidthPercentage] = useState(70);
  const [scalePercentage, seScalePercentage] = useState(1);
  const [comWidthPercentage, setComWidthPercentage] = useState(95);
  const [fontSizePercentage, setFontSizePercentage] = useState(100);
  const [compPadding, setCompPadding] = useState(4);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpenStyle) {
        setIsOpenStyle(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpenStyle]);
  const handleTriggerClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpenStyle((prev) => !prev);
  }, []);

  return (
    <div
      className={`${
        !isSidebarOpen
          ? 'grid 2xl:grid-cols-[minmax(0,1fr)_400px] grid-cols-[minmax(0,1fr)_320px]'
          : 'w-full'
      }`}
    >
      <>
        <ScrollArea className='relative h-screen w-full'>
          {currentComponentData && (
            <div className={`h-screen w-full grid place-items-center `}>
              <div
                className={`mx-auto border relative rounded-lg bg-background  ${
                  currentComponentData?.iframe
                    ? '   '
                    : 'flex justify-center items-center  p-10 '
                }`}
                style={{
                  width: `${widthPercentage}%`,
                  height: `${heightPercentage}%`,
                  fontSize: `${fontSizePercentage}%`,
                }}
              >
                {currentComponentData?.iframe ? (
                  <>
                    <iframe
                      src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${currentComponentData?.iframeSrc}`}
                      className='h-full w-full mx-auto'
                      style={{
                        width: `${comWidthPercentage}%`,
                        scale: scalePercentage,
                        padding: `${compPadding}px`,
                      }}
                      loading='lazy'
                    />
                  </>
                ) : (
                  <>
                    {currentComponentData?.componentSrc ? (
                      <>
                        <div
                          className={`${
                            currentComponentData?.center ? 'w-fit' : ' w-full '
                          }`}
                        >
                          <div
                            style={{
                              width: `${
                                currentComponentData?.center
                                  ? 100
                                  : comWidthPercentage
                              }%`,
                              padding: `${compPadding}px`,
                              scale: scalePercentage,
                            }}
                            className='mx-auto'
                          >
                            {currentComponentData ? (
                              <>
                                <Suspense
                                  fallback={
                                    <div className='flex justify-center'>
                                      Loading...
                                    </div>
                                  }
                                >
                                  <currentComponentData.componentSrc />
                                </Suspense>
                              </>
                            ) : (
                              <>Component Not Found!</>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {
                          <iframe
                            src={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${currentComponentData?.iframelink}`}
                            className='h-full w-full mx-auto'
                            style={{
                              width: `${comWidthPercentage}%`,
                              padding: `${compPadding}px`,
                              scale: scalePercentage,
                            }}
                            loading='lazy'
                          />
                        }
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          {/* Controls section */}
          <div className='absolute bottom-10 h-14 left-0 w-full '>
            <div className='w-fit border relative flex justify-between gap-2  p-2 mx-auto  dark:bg-black bg-white rounded-md'>
              {isOpenStyle && (
                <div
                  className={` grid gap-3 grid-cols-3 absolute bottom-0  left-0 w-full p-2 dark:bg-black bg-white border rounded-md ${
                    isOpenStyle ? ' h-fit pb-20 opacity-1 ' : ' h-0 opacity-0'
                  }`}
                  onClick={(event) => event.stopPropagation()} // Stop propagation when clicking inside stylediv
                >
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-sm'>Width</h1>
                    <Slider
                      value={[widthPercentage]}
                      onValueChange={([widthPercentage]) =>
                        widthPercentage != null &&
                        setWidthPercentage(widthPercentage)
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-sm'>Height</h1>
                    <Slider
                      max={100}
                      step={1}
                      tooltip={false}
                      numclass='-right-[10%] text-sm'
                      value={[heightPercentage]}
                      onValueChange={([heightPercentage]) =>
                        heightPercentage != null &&
                        setHeightPercentage(heightPercentage)
                      }
                    />
                  </div>
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-sm'>Font Size</h1>
                    <Slider
                      value={[fontSizePercentage]}
                      onValueChange={([fontSizePercentage]) =>
                        fontSizePercentage != null &&
                        setFontSizePercentage(fontSizePercentage)
                      }
                      max={150}
                      tooltip={false}
                      numclass='-right-[10%] text-sm'
                      step={1}
                    />
                  </div>

                  {/* Width Input */}
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-[0.8em] '>Comp. Width</h1>
                    <Slider
                      value={[comWidthPercentage]}
                      onValueChange={([comWidthPercentage]) =>
                        comWidthPercentage != null &&
                        setComWidthPercentage(comWidthPercentage)
                      }
                      tooltip={false}
                      numclass='-right-[10%] text-sm'
                      max={150}
                      step={1}
                    />
                  </div>
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-sm'>Pading</h1>
                    <Slider
                      value={[compPadding]}
                      onValueChange={([compPadding]) =>
                        compPadding != null && setCompPadding(compPadding)
                      }
                      tooltip={false}
                      numclass='-right-[10%] text-sm'
                      max={150}
                      step={1}
                    />
                  </div>
                  <div className='border p-2 bg-primary-foreground rounded-md'>
                    <h1 className='pb-1 text-sm'>Scale </h1>
                    <Slider
                      value={[scalePercentage]}
                      onValueChange={([scalePercentage]) =>
                        scalePercentage != null &&
                        seScalePercentage(scalePercentage)
                      }
                      tooltip={false}
                      numclass='-right-[10%] text-sm'
                      max={3}
                      step={0.1}
                    />
                  </div>
                </div>
              )}

              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '
                    onClick={() => {
                      // (window.location.href = currentComopnents?.pagelink)
                      window.open(
                        `${process.env.NEXT_PUBLIC_CLIENT_URL}/components`,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    <Component />
                  </TooltipTrigger>
                  <TooltipContent className='dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1'>
                    <p className='capitalize'>Components</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '
                    onClick={() => {
                      // (window.location.href = currentComopnents?.pagelink)
                      window.open(
                        `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className=' w-7 h-7'
                    >
                      <path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' />
                      <path d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent className='dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1'>
                    <p className='capitalize'>Home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-4 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '>
                    <SunIcon className='h-[1.2rem] w-[1.2rem] transition-all dark:hidden block' />
                    <MoonIcon className='h-[1.2rem] w-[1.2rem]   transition-all  dark:block hidden' />
                    <span className='sr-only'>Toggle theme</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='center' className='bg-background'>
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className='mr-2 h-4 w-4' /> Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className='mr-2 h-4 w-4' /> Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    <MonitorSmartphone className='mr-2 h-4 w-4' /> System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '
                    onClick={() =>
                      window.open(
                        `${process.env.NEXT_PUBLIC_CLIENT_URL}/components/${currentComponentData?.parentlink}`,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    View Component
                  </TooltipTrigger>
                  <TooltipContent className='dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1'>
                    <p className='capitalize'>
                      {currentComponentData?.componentName}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100 border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)]'
                    onClick={handleTriggerClick}
                  >
                    <Settings2 />
                  </TooltipTrigger>
                  <TooltipContent className='dark:bg-base-dark bg-gray-50 text-primary border p-2 rounded-md -translate-y-1'>
                    <p className='capitalized'>Style Component</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger
                    onClick={toggleSidebar}
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md dark:bg-primary-foreground bg-gray-100 border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '
                  >
                    {isSidebarOpen ? (
                      <GalleryHorizontalEnd />
                    ) : (
                      <>
                        <X />
                      </>
                    )}
                  </TooltipTrigger>
                  <TooltipContent className='dark:bg-base-dark bg-gray-50 text-primary  border p-2 rounded-md -translate-y-1'>
                    <p className='capitalized'>
                      {isSidebarOpen ? <>Get Sidebar</> : <>Close Sidebar</>}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </ScrollArea>
      </>
      <LabSidebar />
    </div>
  );
};

export default ComponentSection;

'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/website/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/website/ui/popover';
import {
  BadgeInfo,
  Check,
  CheckCheck,
  ChevronsUpDown,
  Search,
} from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import {
  useSelectedComponentStore,
  useStateChange,
} from '@/hooks/useZustStore';
import Link from 'next/link';
import { AllComponents } from '@/configs/docs';

function LabSidebar() {
  const [open, setOpen] = React.useState(false);
  const { isSidebarOpen } = useStateChange();
  const [searchTerm, setSearchTerm] = useState('');
  const recentComponents = useSelectedComponentStore(
    (state) => state.recentComponents
  );
  const currentComopnents = recentComponents[0];

  const [value, setValue] = React.useState(
    (currentComopnents && currentComopnents.componentName) || ''
  );
  const { addSelectedComponent, getRecentComponents } =
    useSelectedComponentStore();
  // console.log(COMPONENT_DETAILS)

  const filteredComponents = AllComponents.filter((component) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatches = component.componentName
      .toLowerCase()
      .includes(searchLower);

    const tagMatches =
      component.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ??
      false; // Ensure `false` if `tags` is undefined

    return nameMatches || tagMatches;
  });
  // console.log(flattenedComponents, searchTerm)
  const handleSelectComponent = (component: any) => {
    setValue(component.componentName);
    // setOpen(false)
    addSelectedComponent(component);
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {!isSidebarOpen && (
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              opacity: { duration: 0.4 },
            }}
            className='relative h-[98vh] mt-1.5 mr-3 rounded-md dark:bg-gray-900 bg-gray-300 border-l border-2 p-4 py-5'
          >
            <Link href='/' className='flex gap-2 items-center w-fit px-2 pb-3'>
              <div className='relative lg:flex hidden gap-2 '>
                <div className='2xl:w-7 2xl:h-7 w-6 h-6 mx-auto dark:bg-white bg-black rounded-sm before:absolute relative before:w-full before:h-full dark:before:bg-white/50 before:bg-black/50 before:rounded-sm 2xl:before:-top-1.5 before:-top-1 2xl:before:-left-1.5 before:-left-1'></div>
                <h1 className='2xl:text-2xl text-2xl font-semibold'>
                  UI-LAYOUT
                </h1>
                <span className='dark:bg-gray-100 bg-gray-300 dark:text-black text-black font-medium  px-2 rounded-[0.15em] text-xs absolute -top-2 -right-12'>
                  beta
                </span>
              </div>
            </Link>
            <hr />
            <div className=' text-sm text-primary pt-2'>
              <h1 className='text-lg font-medium pb-1 '>Select Components</h1>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    aria-expanded={open}
                    className='w-full border border-input bg-background hover:bg-accent   text-primary  inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  capitalize h-10 px-4 py-2'
                  >
                    {value
                      ? AllComponents.find(
                          (component) => component.componentName === value
                        )?.componentName
                      : 'Select component...'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                  </button>
                </PopoverTrigger>
                <PopoverContent className='2xl:w-[370px] w-[300px] p-0'>
                  <Command>
                    <div className='flex items-center border-b px-3'>
                      <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
                      <input
                        onChange={(e) => {
                          console.log(
                            'CommandInput value changed:',
                            e.target.value
                          );
                          setSearchTerm(e.target.value);
                        }}
                        placeholder='Search a role...'
                        className='flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-defaultText font-medium disabled:cursor-not-allowed disabled:opacity-50'
                      />
                    </div>

                    <CommandList>
                      <CommandEmpty>No component found.</CommandEmpty>
                      <CommandGroup>
                        {filteredComponents.map((component, index) => (
                          <CommandItem
                            key={`${component.parentlink}-${index}`}
                            value={component.componentName}
                            onSelect={(currentValue) =>
                              handleSelectComponent(component)
                            }
                            className={cn(
                              'capitalize flex gap-2  items-center',
                              value === component.componentName ? '' : ''
                            )}
                          >
                            {component.componentName}{' '}
                            <AnimatePresence mode='wait'>
                              {value === component.componentName && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                    opacity: { duration: 0.4 },
                                  }}
                                >
                                  <CheckCheck className={cn('mr-2 h-4 w-4')} />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className='py-4'>
              <h1 className='py-1'>Your Recent Components</h1>
              <hr />
              <div className='h-[67vh] '>
                <div className='flex 2xl:gap-2 gap-1 flex-wrap mt-2  '>
                  <AnimatePresence>
                    {recentComponents.length !== 0 ? (
                      recentComponents.map((component, index) => (
                        <motion.div
                          layout
                          key={`${component.type}-${component.componentName}`}
                          onClick={() => handleSelectComponent(component)}
                          className={`border w-fit p-1 2xl:text-sm text-xs px-2 cursor-pointer rounded-md flex 2xl:gap-1 items-center capitalize ${
                            value === component.componentName
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background text-foreground'
                          } hover:bg-primary hover:text-primary-foreground transition-colors duration-200`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                            opacity: { duration: 0.4 },
                          }}
                        >
                          {component.componentName}
                          {/* <AnimatePresence> */}
                          {value === component.componentName && (
                            <motion.div>
                              <CheckCheck className='w-4 h-4' />
                            </motion.div>
                          )}
                          {/* </AnimatePresence> */}
                        </motion.div>
                      ))
                    ) : (
                      <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='bg-destructive text-destructive-foreground p-1 text-sm my-2 rounded-md flex gap-1 items-center'
                      >
                        <BadgeInfo className='w-5 h-5' /> You don&apos;t have
                        any memories
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default LabSidebar;

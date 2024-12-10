'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  isValidElement,
  useMemo,
  useCallback,
} from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

// Improved TypeScript interfaces with more specific types
interface TabContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  wobbly: boolean;
  hover: boolean;
  defaultValue: string;
  prevIndex: number;
  setPrevIndex: (value: number) => void;
  tabsOrder: string[];
}

const TabContext = createContext<TabContextType | undefined>(undefined);

// Custom hook with memoization
export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

// Props interfaces with more specific types
interface TabsProviderProps {
  children: ReactNode;
  defaultValue: string;
  wobbly?: boolean;
  hover?: boolean;
}

interface TabsBtnProps {
  children: ReactNode;
  className?: string;
  value: string;
}

interface TabsContentProps {
  children: ReactNode;
  className?: string;
  value: string;
  yValue?: boolean;
}

export const TabsProvider: React.FC<TabsProviderProps> = React.memo(
  ({ children, defaultValue, wobbly = true, hover = false }) => {
    // Use useCallback to memoize state setters
    const [activeTab, setActiveTab] = useState(defaultValue);
    const [prevIndex, setPrevIndex] = useState(0);

    // Memoize tabs order to prevent unnecessary recalculations
    const tabsOrder = useMemo(() => {
      return React.Children.toArray(children)
        .filter((child) => isValidElement(child) && child.type === TabsContent)
        .map((child) => (child as React.ReactElement).props.value);
    }, [children]);

    // Memoize context value to prevent unnecessary re-renders
    const contextValue = useMemo(
      () => ({
        activeTab,
        setActiveTab,
        wobbly,
        hover,
        defaultValue,
        setPrevIndex,
        prevIndex,
        tabsOrder,
      }),
      [
        activeTab,
        setActiveTab,
        wobbly,
        hover,
        defaultValue,
        prevIndex,
        tabsOrder,
      ]
    );

    return (
      <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
    );
  }
);

// Memoized TabsBtn component
export const TabsBtn: React.FC<TabsBtnProps> = React.memo(
  ({ children, className, value }) => {
    const {
      activeTab,
      setPrevIndex,
      setActiveTab,
      defaultValue,
      hover,
      wobbly,
      tabsOrder,
    } = useTabs();

    // Use useCallback to memoize the click handler
    const handleClick = useCallback(() => {
      setPrevIndex(tabsOrder.indexOf(activeTab));
      setActiveTab(value);
    }, [setPrevIndex, tabsOrder, activeTab, setActiveTab, value]);

    return (
      <motion.div
        className={cn(
          `cursor-pointer 2xl:p-2 p-2 2xl:px-4 px-2 rounded-md relative`,
          className
        )}
        onFocus={() => hover && handleClick()}
        onMouseEnter={() => hover && handleClick()}
        onClick={handleClick}
      >
        {children}

        <AnimatePresence mode='wait'>
          {activeTab === value && (
            <>
              <motion.div
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.2,
                  },
                }}
                layoutId={defaultValue}
                className='absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md z-[1]'
              />

              {wobbly && (
                <>
                  <motion.div
                    transition={{
                      layout: {
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.04,
                      },
                    }}
                    layoutId={defaultValue}
                    className='absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md z-[1] tab-shadow'
                  />
                  <motion.div
                    transition={{
                      layout: {
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: 0.2,
                      },
                    }}
                    layoutId={`${defaultValue}b`}
                    className='absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md z-[1] tab-shadow'
                  />
                </>
              )}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

// Memoized TabsContent component
export const TabsContent: React.FC<TabsContentProps> = React.memo(
  ({ children, className, value, yValue }) => {
    const { activeTab, tabsOrder, prevIndex } = useTabs();

    // Memoize direction calculation
    const isForward = useMemo(
      () => tabsOrder.indexOf(activeTab) > prevIndex,
      [tabsOrder, activeTab, prevIndex]
    );

    return (
      <AnimatePresence mode='popLayout'>
        {activeTab === value && (
          <motion.div
            initial={{ opacity: 0, y: yValue ? (isForward ? 10 : -10) : 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: yValue ? (isForward ? -50 : 50) : 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className={cn('p-2 px-4 rounded-md relative', className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

// Add display names for better debugging
TabsProvider.displayName = 'TabsProvider';
TabsBtn.displayName = 'TabsBtn';
TabsContent.displayName = 'TabsContent';

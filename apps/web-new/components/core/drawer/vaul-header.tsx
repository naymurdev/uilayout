'use client';

import { MenuIcon } from 'lucide-react';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Drawer as VaulHeader } from 'vaul';

interface DrawerContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

const useSidebarDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

interface DrawerSidebarProps {
  children: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  drawerBtn?: any | null;
}

export function HeaderDrawer({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  drawerBtn,
}: DrawerSidebarProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen =
    controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  console.log(drawerBtn);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <>
        <VaulHeader.Root
          open={open}
          direction='top'
          onOpenChange={setOpen}
          dismissible={isDesktop ? false : true}
        >
          {drawerBtn && (
            <VaulHeader.Trigger asChild>{drawerBtn()}</VaulHeader.Trigger>
          )}
          <VaulHeader.Portal>
            <VaulHeader.Overlay
              className='fixed inset-0 dark:bg-black/40 bg-white/50 backdrop-blur-sm z-50  '
              onClick={() => setOpen(false)}
            />
            <VaulHeader.Content className='dark:bg-gray-900 bg-white  border-b z-50 w-full h-fit py-3 fixed top-0 left-0'>
              {children}
            </VaulHeader.Content>
          </VaulHeader.Portal>
        </VaulHeader.Root>
      </>
    </DrawerContext.Provider>
  );
}

export function DrawerContent({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Drawer as VaulDrawer } from 'vaul'

interface DrawerContextProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined)

const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return context
}

interface ResponsiveDrawerProps {
  children: ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

export function ResponsiveDrawer({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
}: ResponsiveDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen =
    controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    setIsDesktop(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <>
        {isDesktop ? (
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-zoom-out"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md p-6 border dark:bg-gray-900 bg-white rounded-lg cursor-default"
                >
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => setOpen(false)}
                  >
                    <X />
                  </button>
                  {children}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <VaulDrawer.Root
            shouldScaleBackground
            open={open}
            onOpenChange={setOpen}
          >
            <VaulDrawer.Portal>
              <VaulDrawer.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
              <VaulDrawer.Content className="fixed bottom-0 left-0 z-50 w-full max-h-[96%] bg-white dark:bg-gray-900">
                <div className="mx-auto w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
                <div className=" w-full mx-auto max-h-[96vh]  overflow-auto ">
                  {children}
                </div>
              </VaulDrawer.Content>
            </VaulDrawer.Portal>
          </VaulDrawer.Root>
        )}
      </>
    </DrawerContext.Provider>
  )
}

export function DrawerContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}

// @ts-nocheck
import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
const AccordionContext = React.createContext({})
const useAccordion = () => React.useContext(AccordionContext)
function AccordionWrapper({ children }) {
  return <div>{children}</div>
}

function Accordion({
  children,
  multiple,
  defaultValue,
}: {
  children: ReactNode
  multiple: boolean
  defaultValue: [] | string | undefined
}) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? (defaultValue ? [defaultValue] : []) : [defaultValue]
  )
  console.log(defaultValue, activeIndex)

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value
      }

      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value)
      }

      return [...currentActiveIndex, value]
    })
  }

  return React.Children.map(children, (child) => {
    const value = child.props.value
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : Array.isArray(activeIndex)
        ? activeIndex[0].includes(value)
        : activeIndex === value

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        <>{child}</>
      </AccordionContext.Provider>
    )
  })
}

function AccordionItem({ children, value }) {
  const { isActive } = useAccordion()

  return (
    <div
      className={`rounded-lg overflow-hidden mb-2  ${
        isActive
          ? 'active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
          : 'bg-transparent border-2 dark:hover:border-[#656fe2]'
      }
    `}
      value={value}
    >
      {children}
    </div>
  )
}

function AccordionHeader({ children }) {
  const { isActive, value, onChangeIndex } = useAccordion()

  return (
    <motion.div
      className={`p-4 cursor-pointer transition-all   dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
        isActive
          ? 'active  dark:bg-[#1e2a78] bg-[#F2F2F2] font-semibold text-lg'
          : 'dark:bg-[#11112b] bg-white'
      }
      `}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      <ChevronDown
        className={`${
          isActive ? 'rotate-180 ' : 'rotate-0 '
        } transition-transform`}
      />
    </motion.div>
  )
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion()

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          className={`dark:bg-white bg-[#F2F2F2] 
          `}
        >
          <motion.article
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
            transition={{
              type: 'spring',
              duration: 0.4,
              bounce: 0,
              delay: 0.1,
            }}
            className={`p-3 bg-transparent text-black `}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default function FramerAccordion() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section>
      <h1 className="text-center font-semibold text-2xl pb-4">
        Framer Motion Accordion
      </h1>

      <h2 className="py-2 mt-4">multilayout accordion </h2>
      <div className="grid grid-cols-2 gap-1">
        <AccordionWrapper>
          <Accordion defaultValue={['item-1']}>
            <AccordionItem value="item-1">
              <AccordionHeader>What is a UI component?</AccordionHeader>
              <AccordionPanel>
                A UI (User Interface) component is a modular, reusable element
                that serves a specific function within a graphical user
                interface. Examples include buttons, input fields, dropdown
                menus, sliders, and checkboxes.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader>
                Why are UI components important?
              </AccordionHeader>
              <AccordionPanel>
                UI components promote consistency, efficiency, and scalability
                in software development. They allow developers to reuse code,
                maintain a consistent look and feel across an application, and
                easily make updates or modifications without affecting the
                entire system.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionHeader>
                Key characteristics of UI components?
              </AccordionHeader>
              <AccordionPanel>
                Well-designed UI components should be modular, customizable, and
                accessible. They should have clear and intuitive functionality,
                be easily styled to match the overall design language of the
                application.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionWrapper>
        <AccordionWrapper>
          <Accordion defaultValue={'item-5'}>
            <AccordionItem value="item-4">
              <AccordionHeader>
                How do UI components improve UX?
              </AccordionHeader>
              <AccordionPanel>
                UI components can improve UX by providing familiar, consistent
                interactions that make it easy for users to navigate and
                interact with an application. By using recognizable patterns and
                layouts, UI components reduce cognitive load.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionHeader>
                Common UI component design challenges?
              </AccordionHeader>
              <AccordionPanel>
                Some common challenges include maintaining consistency across
                different devices and screen sizes, ensuring compatibility with
                various browsers and assistive technologies, and balancing
                flexibility with ease of use.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionHeader>
                Ensuring UI component responsiveness?
              </AccordionHeader>
              <AccordionPanel>
                Developers can ensure the responsiveness of UI components by
                using techniques such as fluid layouts, flexible grids, and
                media queries to adapt the components to different screen sizes
                and orientations.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionWrapper>
      </div>
      <h2 className="py-2 mt-4">Single Accordion</h2>
      <Accordion defaultValue={'multiple-5'} multiple>
        <AccordionItem value="multiple-1">
          <AccordionHeader>Is It Editable</AccordionHeader>
          <AccordionPanel>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
            explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
            aspernatur quisquam illo! Officiis explicabo laborum incidunt
            corrupti provident esse eligendi.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="multiple-5">
          <AccordionHeader>Is It Editable</AccordionHeader>
          <AccordionPanel>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
            explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
            aspernatur quisquam illo! Officiis explicabo laborum incidunt
            corrupti provident esse eligendi.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="multiple-6">
          <AccordionHeader>Is It Editable</AccordionHeader>
          <AccordionPanel>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
            explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
            aspernatur quisquam illo! Officiis explicabo laborum incidunt
            corrupti provident esse eligendi.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

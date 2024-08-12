import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'
import { ChevronDown, Minus, Plus } from 'lucide-react'

const RadixAccordion = () => {
  return (
    <>
      <h2 className="py-2 mt-4 font-semibold">Single accordion </h2>
      <Accordion.Root
        className="bg-transparent  w-full  rounded-md shadow-[0_2px_10px] shadow-black/5 space-y-2"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <h2 className="py-2 mt-4 font-semibold">Multilayout accordion </h2>
      <Accordion.Root
        className="bg-transparent grid md:grid-cols-2 gap-2  w-full  rounded-md shadow-[0_2px_10px] shadow-black/5 "
        type="single"
        defaultValue="double-1"
        collapsible
      >
        <AccordionWrapper>
          <AccordionItem value="double-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="double-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="double-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </AccordionWrapper>
        <AccordionWrapper>
          <AccordionItem value="double-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="double-5">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="double-6">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </AccordionWrapper>
      </Accordion.Root>
    </>
  )
}

const AccordionWrapper = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <div
      className={cn('grid gap-2 h-fit', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
)
const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={cn('mb-0  first:mt-0 ', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
)
// const AccordionContainer =
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          'dark:bg-blue-600 dark:text-white bg-black text-white  group flex  flex-1 cursor-default items-center justify-between  px-4 text-lg leading-none outline-none h-14 rounded-md data-[state=open]:rounded-b-none',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Plus
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-45"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
)

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={cn(
        'bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] bg-white text-black rounded-b-md',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
)
export default RadixAccordion

import React from 'react'
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from './accordion'

function index() {
  return (
    <AccordionContainer className="md:grid-cols-2 grid-cols-1">
      <AccordionWrapper>
        <Accordion defaultValue={'item-1'}>
          <AccordionItem value="item-1">
            <AccordionHeader className="2xl:text-base text-sm">
              What is a UI component?
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              A UI (User Interface) component is a modular, reusable element
              that serves a specific function within a graphical user interface.
              Examples include buttons, input fields, dropdown menus, sliders.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader className="2xl:text-base text-sm">
              Why are components important?
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              UI components promote consistency, efficiency, and scalability in
              software development. They allow developers to reuse code,
              maintain a consistent look and feel across an application.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionHeader className="2xl:text-base text-sm">
              UI Component Traits
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              Well-designed UI components should be modular, customizable, and
              accessible. They should have clear and intuitive functionality, be
              easily styled to match the overall design language.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion defaultValue={'item-5'}>
          <AccordionItem value="item-4">
            <AccordionHeader className="2xl:text-base text-sm">
              Does Component Improve UX?
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              UI components can improve UX by providing familiar, consistent
              interactions that make it easy for users to navigate and interact
              with an application byy using recognizable patterns.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionHeader className="2xl:text-base text-sm">
              component design challenges?
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              Some common challenges include maintaining consistency across
              different devices and screen sizes, ensuring compatibility with
              various browsers and assistive technologies with ease of use.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionHeader className="2xl:text-base text-sm">
              Ensure Responsiveness
            </AccordionHeader>
            <AccordionPanel className="2xl:text-base text-sm">
              Developers can ensure the responsiveness of UI components by using
              techniques such as fluid layouts, flexible grids, and media
              queries to adapt the components to different screen sizes.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
    </AccordionContainer>
  )
}

export default index

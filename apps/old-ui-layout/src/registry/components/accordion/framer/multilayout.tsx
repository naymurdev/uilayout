import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from './accordion'

function index() {
  return (
    <>
      <Accordion defaultValue={'item-2'} multiple>
        <AccordionItem value="item-1">
          <AccordionHeader>What is a UI component?</AccordionHeader>
          <AccordionPanel>
            A UI (User Interface) component is a modular, reusable element that
            serves a specific function within a graphical user interface.
            Examples include buttons, input fields, dropdown menus, sliders, and
            checkboxes.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Why are UI components important?</AccordionHeader>
          <AccordionPanel>
            UI components promote consistency, efficiency, and scalability in
            software development. They allow developers to reuse code, maintain
            a consistent look and feel across an application, and easily make
            updates or modifications without affecting the entire system.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>
            Key characteristics of UI components?
          </AccordionHeader>
          <AccordionPanel>
            Well-designed UI components should be modular, customizable, and
            accessible. They should have clear and intuitive functionality, be
            easily styled to match the overall design language of the
            application.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default index

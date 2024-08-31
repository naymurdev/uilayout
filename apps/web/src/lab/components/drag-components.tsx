// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  Reorder,
  useDragControls,
  useMotionValue,
  motion,
  useTransform,
} from 'framer-motion'
import { GripVertical } from 'lucide-react'

export const DragProvider = ({
  children,
  dragContainer = false,
}: {
  children: React.ReactNode
  dragContainer?: boolean
}) => {
  //   const [items, setItems] = useState<string[]>([])
  const [items, setItems] = useState(
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        console.log(child)

        return child.props.children
      }
      return null
    })
  )
  //   useEffect(() => {
  //     const initialItems = React.Children.toArray(children)
  //       .filter((child): child is React.ReactElement =>
  //         React.isValidElement(child)
  //       )
  //       .map((child) => child.props.children)
  //       .filter((item): item is string => typeof item === 'string')

  //     setItems(initialItems)
  //   }, [children])

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="space-y-2 w-full max-w-md mx-auto"
    >
      {items.map((item) => (
        <DragItem key={item} dragContainer>
          {item}
        </DragItem>
      ))}
    </Reorder.Group>
  )
}

export const DragItem = ({
  children,
  dragContainer,
}: {
  children: string
  dragContainer?: boolean
}) => {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      value={children}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
      className="flex justify-between items-center w-full p-3 text-primary-foreground bg-primary border rounded-md"
    >
      {children}
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  )
}

const ReorderIcon = ({ dragControls }: { dragControls: any }) => (
  <GripVertical
    className="cursor-grab active:cursor-grabbing"
    onPointerDown={(event) => dragControls.start(event)}
  />
)

const useRaisedShadow = (value: any) => {
  return useTransform(
    value,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0.1)', '0px 10px 20px rgba(0,0,0,0.2)']
  )
}

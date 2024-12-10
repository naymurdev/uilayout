'use client';
import React, { useEffect, useState } from 'react';
import {
  useMotionValue,
  Reorder,
  useDragControls,
  motion,
  MotionValue,
  animate,
  DragControls,
} from 'framer-motion';

export default function HomeDragItems() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Button Component',
      subtitle: 'Drag and reorder buttons to organize your layout.',
      date: '03.12.2024',
      src: 'https://via.placeholder.com/150',
      link: 'https://example.com/button-component',
    },
    {
      id: 2,
      title: 'Card Component',
      subtitle: 'A draggable card for showcasing content.',
      date: '03.12.2024',
      src: 'https://via.placeholder.com/150',
      link: 'https://example.com/card-component',
    },
    {
      id: 3,
      title: 'Scrolling Effect',
      subtitle: 'Scroll Based Animation to your website.',
      date: '03.12.2024',
      src: 'https://via.placeholder.com/150',
      link: 'https://example.com/avatar-component',
    },
  ]);

  return (
    <Reorder.Group
      axis='y'
      values={items}
      onReorder={setItems}
      className='space-y-2 w-[90%] sm:py-0 py-4 mx-auto flex flex-col justify-center h-full'
    >
      {items.map((item) => (
        <Item key={item.id} item={item}>
          <h1 className='2xl:text-xl font-semibold'>{item.title}</h1>
          <p className='2xl:text-sm text-xs w-4/5'>{item.subtitle}</p>
        </Item>
      ))}
    </Reorder.Group>
  );
}

const Item = ({ children, item }: { children: React.ReactNode; item: any }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
      className='flex justify-between items-center w-full p-3 text-primary dark:bg-black bg-zinc-100 border rounded-md'
    >
      <div>{children}</div>
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
interface Props {
  dragControls: DragControls;
}
export function ReorderIcon({ dragControls }: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      onPointerDown={(e) => {
        e.preventDefault();
        dragControls.start(e);
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 39 39'
        width='39'
        height='39'
        className=' w-8 h-8 fill-primary cursor-grab active:cursor-grabbing'
      >
        <path d='M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z'></path>
        <path d='M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z'></path>
        <path d='M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z'></path>
        <path d='M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z'></path>
        <path d='M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z'></path>
        <path d='M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z'></path>
        <path d='M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z'></path>
        <path d='M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z'></path>
        <path d='M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z'></path>
      </svg>
    </motion.div>
  );
}

const inactiveShadow = '0px 0px 0px rgba(0,0,0,0.8)';

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, '5px 5px 10px rgba(0,0,0,0.3)');
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

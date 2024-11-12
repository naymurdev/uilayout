import { useState } from 'react';

export default function AddTask({ onAddTask }: { onAddTask: any }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder='Add task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='bg-black p-4'
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}

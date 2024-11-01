'use client';
import React, { useState, useRef, useEffect } from 'react';

interface TagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  editTag?: boolean;
}

export const TagsInput: React.FC<TagsInputProps> = ({
  tags,
  setTags,
  editTag = true,
}) => {
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedInput = input.trim();

    if ((e.key === 'Enter' || e.key === ',') && trimmedInput) {
      e.preventDefault();
      if (editingIndex !== null) {
        const updatedTags = [...tags];
        updatedTags[editingIndex] = trimmedInput;
        setTags(updatedTags);
        setEditingIndex(null);
      } else if (!tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput]);
      }
      setInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
    if (editingIndex !== null) {
      setEditingIndex(null);
    }
  };

  const handleEditTag = (index: number) => {
    if (editTag) {
      setInput(tags[index]);
      setEditingIndex(index);
      setTimeout(() => editInputRef.current?.focus(), 0); // Focus on edit input
    }
  };

  const handleBlur = () => {
    if (editingIndex !== null) {
      const updatedTags = [...tags];
      const trimmedInput = input.trim();
      if (trimmedInput) {
        updatedTags[editingIndex] = trimmedInput;
      } else {
        updatedTags.splice(editingIndex, 1);
      }
      setTags(updatedTags);
      setEditingIndex(null);
    }
    setInput('');
  };

  useEffect(() => {
    // Resize the input width based on text content
    if (editInputRef.current) {
      editInputRef.current.style.width = `${input.length + 1}ch`;
    }
  }, [input]);

  return (
    <div className='flex flex-wrap items-center gap-2 p-2 border-2 rounded-md focus-within:border-blue-500 bg-background'>
      {tags.map((tag, index) => (
        <div key={tag} className='relative'>
          {editTag && editingIndex === index ? (
            <input
              ref={editInputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleAddTag}
              onBlur={handleBlur}
              className='px-2 py-1 text-sm border   rounded outline-none'
              placeholder='Edit tag...'
              style={{ width: `${input.length + 1 * 1.2}px` }}
              autoFocus
            />
          ) : (
            <span
              onClick={() => handleEditTag(index)}
              className='flex items-center gap-2 px-1 pl-2 py-1 text-sm font-medium text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600'
            >
              {tag}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTag(tag);
                }}
                className='text-white hover:text-gray-300 px-1 focus:outline-none bg-background rounded'
              >
                &times;
              </button>
            </span>
          )}
        </div>
      ))}
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTag}
        className={`flex-grow px-2 py-1 text-sm border-none outline-none bg-background rounded-md ${
          editingIndex !== null ? 'opacity-0' : 'opacity-100'
        }`}
        placeholder='Add a tag...'
      />
    </div>
  );
};

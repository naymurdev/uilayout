'use client';

import { useState } from 'react';
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from '@/components/core/file-upload';
import { Paperclip } from 'lucide-react';

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className='w-8 h-8 mb-3 text-primary'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 20 16'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
        />
      </svg>
      <p className='mb-1 text-sm  text-primary'>
        <span className='font-semibold'>Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className='text-xs  text-primary'>SVG, PNG, JPG or GIF</p>
    </>
  );
};

const FileUploaderTest = () => {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className='relative  rounded-lg p-2 w-96 mx-auto'
    >
      <FileInput className='outline-dashed outline-2 bg-background outline-primary/40'>
        <div className='flex items-center justify-center flex-col pt-3 pb-4 w-full '>
          <FileSvgDraw />
        </div>
      </FileInput>
      <FileUploaderContent>
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploaderItem key={i} index={i} className='bg-background'>
              <Paperclip className='h-4 w-4 flex-shrink-0 stroke-current' />
              <p className='text-ellipsis inline-block  overflow-hidden text-xs w-full'>
                {file.name}
              </p>
            </FileUploaderItem>
          ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploaderTest;

'use client';

import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/core/file-upload';
import { Paperclip, Upload } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { DropzoneOptions } from 'react-dropzone';

const FileUploadDropzone = () => {
  const [files, setFiles] = useState<File[] | null>([]);
  const [message, setMessage] = useState('');

  const dropzone = {
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
    multiple: true,
    maxFiles: 4,
    maxSize: 1 * 1024 * 1024,
  } satisfies DropzoneOptions;

  return (
    <div
      className={`${
        files?.length == 0 && 'flex gap-0'
      } relative border bg-background rounded-md   p-2 w-96 mx-auto`}
    >
      <FileUploader
        value={files}
        orientation='vertical'
        onValueChange={setFiles}
        className='w-fit pr-2'
        dropzoneOptions={dropzone}
      >
        {files?.length === 0 ? (
          // Layout when no files are present
          <div className='flex items-center gap-2'>
            <FileInput
              className='bg-primary  text-background rounded-md w-fit'
              parentclass='w-fit'
            >
              <Paperclip className='size-8 p-1.5' />
              <span className='sr-only'>Select your files</span>
            </FileInput>
          </div>
        ) : (
          // Layout when files are present
          <div className='flex flex-col gap-2 mb-2'>
            <div className='flex items-center gap-2 '>
              <FileInput
                className='bg-primary-foreground border-primary/20 border   text-primary rounded-md w-fit'
                parentclass='w-fit'
              >
                <Paperclip className='size-12 p-3' />
                <span className='sr-only'>Select your files</span>
              </FileInput>
              <FileUploaderContent className='flex items-start flex-row gap-1'>
                {files?.map((file, i) => (
                  <FileUploaderItem
                    key={i}
                    index={i}
                    className='size-12 w-fit p-0 rounded-md overflow-hidden border'
                    aria-roledescription={`file ${i + 1} containing ${
                      file.name
                    }`}
                  >
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      height={80}
                      width={80}
                      className='size-12 rounded-md object-cover bg-primary'
                    />
                  </FileUploaderItem>
                ))}
              </FileUploaderContent>
            </div>
          </div>
        )}
      </FileUploader>
      <input
        type='text'
        className='outline-none bg-background w-full'
        placeholder='Your message here...'
      />
    </div>
  );
};

export default FileUploadDropzone;

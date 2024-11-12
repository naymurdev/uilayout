'use client';
import { Edit, ChevronsRight, ArrowRight, GripVertical } from 'lucide-react';
import * as lucideReact from 'lucide-react';
import React, { useState, useRef } from 'react'; // Import useState from React
import { importCode, Runner, Scope } from 'react-runner';
import Image from 'next/image';
import { CodeMirror } from 'react-runner-codemirror';
import {
  DrawerContent,
  ResponsiveDrawer,
} from '@/components/core/drawer/vaul-main';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

// import { CardArr } from '@/components/website/constant';

// @ts-ignore
// import CardArr from '!!raw-loader!../constant.tsx';
import * as FramerMotion from 'framer-motion';
import { CopyButton } from './copy-button';
import { useTheme } from 'next-themes';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

const baseScope = {
  import: {
    react: React,
    'lucide-react': lucideReact,
    'next/image': Image,
    'framer-motion': FramerMotion,
  },
};
function EditComponents({
  baseCode,
  componentCenter,
}: {
  baseCode: string;
  componentCenter: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [importsError, setImportsError] = useState<string | null>(null);
  const [renderError, setRenderError] = useState<string | null>(null);
  const [codes, setCodes] = useState<string>(baseCode);

  return (
    <>
      <ResponsiveDrawer
        classname={cn(
          ` p-2 xl:mx-0 mx-8 `,
          componentCenter
            ? ' 2xl:max-w-screen-[1400px] max-w-screen-xl'
            : ' max-w-full dark:bg-[#020203] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] relative'
        )}
        closeBtnClass='top-4 right-4 h-9 w-10 p-0 grid place-items-center'
        triggerContent={
          <button className=' flex gap-1 bg-foreground rounded-lg h-8 px-2 text-black text-sm font-semibold  items-center  '>
            <Edit className='dark:text-black text-white h-5 w-5 font-semibold' />
          </button>
        }
      >
        <DrawerContent
          classname={`${
            componentCenter ? ' 2xl:h-[62vh] h-[80vh]' : ' h-[97vh] w-full'
          } overflow-auto`}
        >
          <CopyButton
            code={codes}
            classname='md:right-16 right-5 md:top-4 top-2 z-40 dark:bg-gray-800'
          />
          {/* <MultiFilesExample /> */}
          <PanelGroup
            direction={isDesktop ? 'horizontal' : 'vertical'}
            className='h-full'
          >
            <Panel
              defaultSize={50}
              minSize={20}
              className={` h-full overflow-auto ${
                componentCenter
                  ? 'grid place-content-center'
                  : 'p-4 flex items-center justify-center'
              }`}
            >
              <div className='h-fit'>
                {importsError ? (
                  <div className='absolute top-0 left-0 w-full bg-red-100 p-2 text-red-600 whitespace-pre-wrap'>
                    {importsError}
                  </div>
                ) : (
                  <Runner
                    code={codes}
                    scope={baseScope}
                    onRendered={(error) => {
                      if (error) {
                        setRenderError(error.toString());
                      } else if (renderError) {
                        setRenderError(null);
                      }
                    }}
                  />
                )}
                {renderError && (
                  <div className='absolute top-0 left-0 w-full bg-red-100 p-2 text-red-600 whitespace-pre-wrap'>
                    {renderError}
                  </div>
                )}
              </div>
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={50} minSize={20}>
              <div className=' overflow-auto h-full bg-transparent border rounded-md dark:shadow-[0px_0px_5px_5px_#111114]  shadow-[0px_0px_5px_5px_#eeeef0] '>
                <CodeMirror
                  showLineNumbers
                  wrapLine
                  padding={'10px'}
                  // @ts-ignore
                  theme={theme}
                  defaultValue={codes}
                  onChange={(newCode) => {
                    setCodes(newCode);
                  }}
                  className={`font-mono text-sm whitespace-pre h-full bg-transparent cursor-auto rounded-md overflow-hidden text-[14px] box-border ${
                    theme === 'dark' ? 'bg-transparent' : ''
                  }`}
                />
              </div>
            </Panel>
          </PanelGroup>
        </DrawerContent>
      </ResponsiveDrawer>
    </>
  );
}

export default EditComponents;

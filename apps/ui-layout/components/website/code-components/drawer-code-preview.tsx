// import { TabsProvider, TabsBtn, TabsContent } from './tabs';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import docs from '@/configs/docs.json';

import { Pre, RawCode, highlight } from 'codehike/code';

import {
  DrawerContent,
  ResponsiveDrawer,
} from '@/components/core/drawer/vaul-main';

import React from 'react';
import { Code, Eye, Maximize2 } from 'lucide-react';
import prettier from 'prettier';

import { CopyButton } from './copy-button';
import { ScrollArea } from '../ui/scroll-area';
import ComponentBlocks from './component-block';
import { callout, wordWrap } from '../constant';
import { cn } from '@/lib/utils';
import ts from 'typescript';
import { AllComponents } from '@/configs/docs';

type ComponentCodePreview = {
  component: React.ReactElement;
  hasReTrigger?: boolean;
  name: string;
  children: React.ReactNode; //
  responsive?: boolean;
  isCard?: string;
};
export type TCurrComponentProps = {
  componentName: string;
  iframeSrc?: string;
  componentSrc?: React.LazyExoticComponent<React.FC<{}>>;
  filesrc?: string;
  compIframeSrc?: string;
  filesArray?: any;
};

export default async function DrawerCodePreview({
  hasReTrigger,
  name,
  children,
  isCard,
  responsive,
}: ComponentCodePreview) {
  // console.log(children);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const parsedCodeblock = Codes[0]?.props;
  // console.log(parsedCodeblock);

  const currComponent: TCurrComponentProps | null =
    docs.dataArray.reduce<TCurrComponentProps | null>((acc, component) => {
      const file = component?.componentArray?.find(
        (file) => file.componentName === name
      );

      if (file) {
        acc = file;
      }
      return acc;
    }, null);

  if (!currComponent) {
    return <div>Component not found</div>;
  }

  const getcode = JSON.parse(Codes[0]?.props.codeblock);
  const result = ts.transpileModule(getcode, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      jsx: ts.JsxEmit.Preserve,
      removeComments: true,
    },
  });

  let jsCode = result.outputText.replace(/"use strict";\s*/, '');

  // Format JavaScript code using Prettier
  const formattedJsCode = await prettier.format(jsCode, {
    parser: 'babel',
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    printWidth: 80,
    jsxBracketSameLine: true, // Keep JSX tags in one line
  });

  const tsCode = {
    value: getcode,
    lang: 'tsx',
    meta: '',
  };

  const jsCodeblock = {
    value: formattedJsCode,
    lang: 'js',
    meta: '',
  };

  // Highlight the code
  const tshighlighted = await highlight(tsCode, 'github-from-css');
  const jshighlighted = await highlight(jsCodeblock, 'github-from-css');

  return (
    <>
      <div
        className={`${
          isCard ? 'p-10 h-[550px]' : '2xl:p-20 py-16 px-2 h-fit'
        } my-2 w-full border-2  rounded-lg overflow-hidden  dark:bg-[#020203] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] relative grid place-content-center`}
      >
        <div className='not-prose'>
          <ComponentBlocks componentfile={parsedCodeblock.filesrc} />
        </div>

        <div className='absolute top-2 right-2 flex justify-center items-center gap-2  '>
          <CopyButton
            code={parsedCodeblock.codeblock}
            classname=' relative top-0 left-0 dark:bg-muted bg-white'
          />
          <ResponsiveDrawer
            classname=' max-w-screen-lg p-2 '
            triggerContent={
              <button className=' flex gap-1 bg-foreground rounded-lg h-8 px-2 text-black text-sm font-semibold  items-center  '>
                Code
                <Code className='dark:text-black text-white h-5 w-5 font-semibold' />
              </button>
            }
          >
            <DrawerContent classname='2xl:max-h-[62vh] max-h-[80vh] overflow-auto '>
              <Tabs
                className='relative'
                defaultValue={`${parsedCodeblock.comName}-typescript`}
              >
                <TabsList
                  className={cn(
                    'absolute  right-[5.5rem] top-6 z-[1] h-9 p-0.5 border dark:border-background '
                  )}
                >
                  <TabsTrigger
                    value={`${parsedCodeblock.comName}-typescript`}
                    className='h-8 d'
                  >
                    Ts
                  </TabsTrigger>
                  <TabsTrigger
                    value={`${parsedCodeblock.comName}-javascript`}
                    className=' h-8 '
                  >
                    Js{' '}
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className='mt-0 p-4'
                  value={`${parsedCodeblock.comName}-typescript`}
                >
                  <CopyButton
                    code={tshighlighted.code}
                    classname={cn('top-6 right-10  ')}
                  />
                  <Pre
                    code={tshighlighted}
                    handlers={[callout, wordWrap]}
                    className={cn(' m-0  bg-codebg max-h-[450px] border ')}
                  />
                  {parsedCodeblock.children}
                </TabsContent>
                <TabsContent value={`${parsedCodeblock.comName}-javascript`}>
                  <CopyButton
                    code={jshighlighted.code}
                    classname={cn('top-6 right-10  ')}
                  />
                  <Pre
                    code={jshighlighted}
                    handlers={[callout, wordWrap]}
                    className={cn(' m-0  bg-codebg max-h-[450px] border')}
                  />
                  {parsedCodeblock.children}
                </TabsContent>
              </Tabs>
            </DrawerContent>
          </ResponsiveDrawer>
        </div>
      </div>
    </>
  );
}

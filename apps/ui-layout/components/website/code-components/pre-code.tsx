import { Pre, RawCode, highlight } from 'codehike/code';
import prettier from 'prettier';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import { CopyButton } from './copy-button';
import { cn } from '@/lib/utils';
import ts from 'typescript';
import { ScrollArea } from '../ui/scroll-area';
import { callout, wordWrap, mark, lineNumbers, hover } from '../constant';
import { CopyNpmCommandButton } from './copy-npm-button';

export async function PreCode({
  codeblock,
  classname,
  cssclass,
  metahide,
}: {
  codeblock: {
    value: string;
    lang: string;
    meta: string;
  };
  classname?: string;
  cssclass?: string;
  metahide?: boolean;
}) {
  // console.log(codeblock);

  const checkNpm = codeblock.value?.startsWith('npm');
  const showCompilerTab = codeblock.lang !== 'tsx';
  // console.log(codeblock);

  const tsCode = {
    ...codeblock,
  };
  const tshighlighted = await highlight(tsCode, 'github-from-css');

  if (showCompilerTab) {
    return (
      <div className={cn('relative z-[2]', cssclass)}>
        {tshighlighted.meta && (
          <div className='text-left text-sm px-2 py-1 mt-3 border-dotted rounded-md bg-primary-foreground w-fit'>
            {tshighlighted.meta}
          </div>
        )}
        <div className='relative'>
          {checkNpm ? (
            <>
              <CopyNpmCommandButton
                code={tshighlighted.code}
                classname='top-3.5'
              />
            </>
          ) : (
            <>
              <CopyButton code={tshighlighted.code} classname='top-3.5' />
            </>
          )}
          <div className='not-prose p-4 px-2 max-h-[550px] overflow-x-hidden   rounded-md text-sm  bg-codebg   border'>
            <Pre
              code={tshighlighted}
              handlers={[callout, wordWrap, mark, hover]}
              className={cn('m-0', classname)}
            />
          </div>
        </div>
      </div>
    );
  }
  const result = ts.transpileModule(codeblock.value, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      jsx: ts.JsxEmit.Preserve,
      removeComments: true,
    },
  });

  // Remove 'use strict' and preserve original structure
  // Format the transpiled JavaScript using Prettier
  // Remove 'use strict'
  let jsCode = result.outputText.replace(/"use strict";\s*/, '');

  // Format JavaScript code using Prettier
  const formattedJsCode = await prettier.format(jsCode, {
    parser: 'babel',
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    printWidth: 80,
  });

  const jsCodeblock = {
    ...codeblock,
    value: formattedJsCode,
    lang: 'js',
  };

  // Highlight the code
  const jshighlighted = await highlight(jsCodeblock, 'github-from-css');
  // console.log(tshighlighted.meta);

  return (
    <div className='relative z-[2]'>
      {!metahide && tshighlighted.meta && (
        <div className='text-left text-sm px-2 py-1 mt-3 border-dotted rounded-md bg-primary-foreground w-fit'>
          {tshighlighted.meta}
        </div>
      )}

      <>
        <Tabs defaultValue={'typescript'} className='relative'>
          <TabsList className='absolute  right-14 top-2 z-[1] h-9 p-0.5 border dark:border-background '>
            <TabsTrigger value={'typescript'} className='h-8'>
              Ts
            </TabsTrigger>
            <TabsTrigger value={'javascript'} className=' h-8'>
              Js{' '}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'typescript'} className=''>
            <div className='relative'>
              <CopyButton code={tshighlighted.code} classname='right-2' />
              <div className='not-prose py-2 max-h-[550px]  overflow-x-hidden  rounded-md text-sm   bg-codebg border'>
                <Pre
                  code={tshighlighted}
                  handlers={[callout, wordWrap, mark, lineNumbers, hover]}
                  className={cn(' m-0', classname)}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value={'javascript'} className=''>
            <div className='relative'>
              <CopyButton code={jshighlighted.code} classname='right-2' />
              <div className='not-prose py-2 max-h-[550px] overflow-x-hidden  rounded-md text-sm  bg-codebg border'>
                <Pre
                  code={jshighlighted}
                  handlers={[callout, wordWrap, mark, lineNumbers, hover]}
                  className={cn('m-0', classname)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </>
    </div>
  );
}

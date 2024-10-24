// import { TabsProvider, TabsBtn, TabsContent } from './tabs';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import docs from '@/configs/docs.json';

import ComponentPreview from './component-preview';
import { extractCodeFromFilePath } from '@/lib/code';
import React from 'react';
import { Code, Eye } from 'lucide-react';
import { PreCoded } from './pre-coded';

type ComponentCodePreview = {
  component: React.ReactElement;
  hasReTrigger?: boolean;
  name: string;
  children: React.ReactNode; //
  responsive?: boolean;
  isTab?: boolean;
  isFitheight?: boolean;
  isNotCopy?: boolean;
};
export type TCurrComponentProps = {
  componentName: string;
  iframeSrc?: string;
  componentSrc?: React.LazyExoticComponent<React.FC<{}>>;
  filesrc?: string;
  examplePreview?: string;
  compIframeSrc?: string;
  filesArray?: any;
};

export default async function ComponentCodePreview({
  hasReTrigger,
  name,
  children,
  responsive,
  isTab = false,
  isNotCopy = false,
  isFitheight = false,
}: ComponentCodePreview) {
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
  // console.log(currComponent);

  if (!currComponent) {
    return <div>Component not found</div>;
  }

  const fileContent = extractCodeFromFilePath(
    `registry/${currComponent?.filesrc}`
  );
  // console.log('childer', children);

  // console.log(fileContent);

  return (
    <div className='not-prose relative z-0 flex items-center justify-between pb-3'>
      <Tabs
        defaultValue={`${name}preview`}
        className='relative mt-1 w-full border-2 rounded-lg'
      >
        <TabsList className='absolute left-0 pl-1 top-0 z-10 flex h-12 w-full justify-start rounded-b-none rounded-t-lg border-b-2 border-t-0 border-x-0  bg-border/40 backdrop-blur-lg dark:bg-gray-900'>
          <TabsTrigger
            value={`${name}preview`}
            className='flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:border-b-2 '
          >
            <Eye className='w-5 h-5' /> Preview
          </TabsTrigger>
          <TabsTrigger
            value={`${name}code`}
            className='flex gap-2 items-center data-[state=active]:bg-white data-[state=active]:border-b-2'
          >
            <Code className='w-5 h-5' /> Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className='mt-0  px-0 pb-0 pt-12 ring-offset-background '
          value={`${name}preview`}
        >
          <ComponentPreview
            hasReTrigger={hasReTrigger}
            component={currComponent}
            code={fileContent}
            responsive={responsive}
            isNotCopy={isNotCopy}
            isFitheight={isFitheight}
          />
        </TabsContent>
        <TabsContent className='mt-11  ' value={`${name}code`}>
          {!isTab && <PreCoded codeblock={fileContent} />}
          {children !== undefined && <div className='p-4 pt-2'>{children}</div>}
        </TabsContent>
      </Tabs>
    </div>
  );
}

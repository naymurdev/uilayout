import React from 'react';
import { PreCoded } from './pre-coded';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import { PreCode } from './pre-code';

interface CodePreviewProps {
  children: React.ReactNode;
}

export default function TabCodePreview({ children }: CodePreviewProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement[];

  const parsedCodes = Codes.map((code: React.ReactElement) => {
    const props = code.props;

    // Check if the codeblock exists and parse the value if necessary
    return {
      ...code,
      props: {
        ...props,
        codeblock: JSON.parse(props.codeblock),
        // Apply JSON.parse here
      },
    };
  });
  // console.log('parseCodes', parsedCodes[0].props);

  // Helper function to format parseCodes.children into the correct format
  const formatParseCodes = (children: any, compname: string) => {
    if (!children) return [];

    // Check if it's an array or a single object
    const parsedArray = Array.isArray(children) ? children : [children];

    return parsedArray.map((child: any) => ({
      $$typeof: child.$$typeof,
      type: child.type,
      key: child.key,
      ref: child.ref,
      props: {
        codeblock: child.props.codeblock.value, // Get value from parseCodes
        filename: child.props.codeblock.meta, // Use meta as filename
        componentname: compname,
        lang: child.props.codeblock.lang,
      },
      _owner: child._owner,
      _store: child._store,
    }));
  };

  // Add the parseCodes.children into the Codes array
  const formattedCodes = formatParseCodes(
    parsedCodes[0]?.props.children,
    Codes[0]?.props.componentname
  );
  const updatedCodes = [...parsedCodes, ...formattedCodes];
  // console.log('parseCodes', updatedCodes[0].props);
  // const parsedArray = updatedCodes.map((codeItem) => {
  //   return {
  //     ...codeItem,
  //     props: {
  //       ...codeItem.props,
  //       codeblock: codeItem.props.codeblock, // Replace with parsed codeblock
  //     },
  //   };
  // });

  // console.log('parsedArray', parsedArray);
  // console.log('updatecodes', updatedCodes);

  // Group the updated Codes by componentname
  // const groupedCodes = updatedCodes.reduce(
  //   (acc, code) => {
  //     const componentName = code.props.componentname;
  //     if (!acc[componentName]) {
  //       acc[componentName] = [];
  //     }
  //     acc[componentName].push(code);
  //     return acc;
  //   },
  //   {} as Record<string, React.ReactElement[]>
  // );

  // console.log('groupedCodes', Codes, updatedCodes);

  return (
    <>
      <Tabs
        defaultValue={`${updatedCodes[0].props.componentname}-${updatedCodes[0].props.filename}`}
        className='w-full relative mt-1 mb-4'
      >
        <TabsList className='mb-0  bg-muted px-0.5'>
          {updatedCodes.map((componentName) => (
            <TabsTrigger
              key={`${componentName.props.componentname}-${componentName.props.filename}`}
              value={`${componentName.props.componentname}-${componentName.props.filename}`}
              className='flex gap-2 items-center data-[state=active]:bg-white m-0 not-prose'
            >
              {componentName.props.filename}
            </TabsTrigger>
          ))}
        </TabsList>
        {updatedCodes.map((componentName) => (
          <TabsContent
            key={`${componentName.props.componentname}-${componentName.props.filename}`}
            value={`${componentName.props.componentname}-${componentName.props.filename}`}
            className='m-0'
          >
            <PreCode
              classname='p-0 '
              codeblock={{
                value: componentName?.props.codeblock,
                lang: componentName?.props.lang || 'tsx',
                meta: '',
              }}
              cssclass='mt-2'
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}

import { Block, CodeBlock, parseProps } from 'codehike/blocks';
import { Pre, RawCode, highlight } from 'codehike/code';
import { z } from 'zod';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import { PreCode } from './pre-code';

const Schema = Block.extend({
  tabs: z.array(CodeBlock), // Assuming CodeBlock is a Zod schema
});
export default async function IframeTabCodePreview(props: unknown) {
  const { tabs } = parseProps(props, Schema);

  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, 'github-dark'))
  );
  return (
    <>
      {tabs.length > 1 ? (
        <>
          <Tabs defaultValue={tabs[0]?.meta}>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.meta} value={tab.meta} className=' h-8'>
                  {tab.meta}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab, i) => (
              <TabsContent key={tab.meta} value={tab.meta} className='mt-0'>
                <PreCode
                  codeblock={highlighted[i]}
                  classname={'border-none'}
                  metahide
                />
              </TabsContent>
            ))}
          </Tabs>
        </>
      ) : (
        <>
          {tabs.map((tab, i) => (
            <PreCode
              key={tab.meta}
              codeblock={highlighted[i]}
              classname={'border-none'}
              metahide
            />
          ))}
        </>
      )}
    </>
  );
}

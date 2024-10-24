import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';

export async function generateStaticParams() {
  const docs = await getAllDocs();
  console.log(docs);

  return docs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  if (!doc) {
    return {};
  }
  return {
    title: `${doc.content.metadata.title}`,
    description: doc.content.metadata.description,
  };
}

export default async function DocPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  // console.log(doc);

  if (!doc) {
    notFound();
  }

  const { default: Content } = doc.content;

  // console.log(doc.toc);

  return (
    <>
      <div className='lg:container lg:px-0 px-2 mx-auto mt-14'>
        <div className='flex w-full lg:gap-3'>
          <section className='xl:mr-0 mr-3 prose w-full prose-zinc min-w-0 max-w-full pb-14  pt-4 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:my-4  prose-h2:py-1  prose-h2:border-b prose-h3:py-1  prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-4'>
            <article className='mb-4 mt-0 rounded-lg bg-primary-foreground dark:border-none border p-6'>
              <div className='space-y-2 rounded-md dark:text-white text-black'>
                <h1
                  className={cn(
                    'mb-0 flex scroll-m-20  not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight'
                  )}
                >
                  <div className='lg:w-10  w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
                    <Component />
                  </div>
                  {doc.content.metadata.title}
                </h1>
                <p className='sm:text-sm text-xs'>
                  {doc.content.metadata.description}
                </p>
              </div>
            </article>
            <Content />
            <ComponentPagination doc={doc} />
          </section>
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </>
  );
}

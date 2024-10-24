import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import docs from '@/configs/docs.json';
import dynamic from 'next/dynamic';
export async function generateStaticParams() {
  const paths = docs.dataArray.flatMap((category) =>
    category.componentArray.map((component) => ({
      componentName: component.componentName,
    }))
  );
  return paths;
}

export default function SectionPage({
  params,
}: {
  params: { componentName: string };
}) {
  const { componentName } = params;
  console.log(componentName);

  // Find the component data based on componentName
  const component = docs.dataArray.reduce((found, category) => {
    if (found) return found;
    // console.log(category);

    return category.componentArray.find(
      (comp) => comp.componentName === componentName
    );
  }, null as any);
  // console.log(component);

  console.log(componentName);

  if (!component) {
    notFound();
  }
  const isFramerScrolling = componentName === 'framerhorizontalscroll';

  const ComponentPreview = component?.filesrc
    ? dynamic(() => import(`../../../registry/${component.filesrc}`), {
        loading: () => <div>Loading preview...</div>,
      })
    : null;

  return (
    <section
      className={`${isFramerScrolling ? '' : 'flex justify-center items-center '} min-h-screen rounded-md  dark:bg-[#000000] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]`}
    >
      <div className='px-4 w-full'>
        {ComponentPreview ? (
          <Suspense fallback={<div>Loading preview...</div>}>
            <ComponentPreview />
          </Suspense>
        ) : (
          <div>Component not found</div>
        )}
      </div>
    </section>
  );
}

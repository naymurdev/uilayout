import { Element } from 'hast';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';
import { Root } from 'mdast';
import { unified } from 'unified';

export interface TableOfContents {
  items: Array<{
    title: string;
    url: string;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
}

export async function getTableOfContents(
  mdxContent: string
): Promise<TableOfContents> {
  const tableOfContents: TableOfContents = { items: [] };
  const headings: Array<Element> = [];

  const { default: remarkParse } = await import('remark-parse');
  const processor = unified().use(remarkParse);
  const tree = processor.parse(mdxContent) as Root;

  visit(tree, 'heading', (node: any) => {
    if (node.depth <= 3) {
      headings.push(node as Element);
    }
  });

  let currentH2: {
    title: string;
    url: string;
    items: Array<{ title: string; url: string }>;
  } | null = null;

  headings.forEach((heading: any) => {
    const title = toString(heading);
    const url = `#${title.toLowerCase().replace(/\s+/g, '-')}`;

    if (heading.depth === 2) {
      currentH2 = { title, url, items: [] };
      tableOfContents.items.push(currentH2);
    } else if (heading.depth === 3 && currentH2) {
      currentH2.items.push({ title, url });
    }
  });

  return tableOfContents;
}

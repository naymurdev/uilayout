import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { getTableOfContents, TableOfContents } from './toc';

// Update this line to reflect the new directory structure
const docsDirectory = path.join(process.cwd(), 'content/components');

export async function getDocBySlug(slug: string) {
  const realSlug = slug === 'index' ? '' : slug;
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Update this line to use the correct import path
  const mdxContent = await import(`../content/components/${realSlug}.mdx`);
  const toc = getTableOfContents(content);

  return {
    slug: realSlug,
    frontmatter: data,
    content: mdxContent,
    toc,
  };
}

export async function getAllDocs() {
  const slugs = getAllDocSlugs();
  const docs = await Promise.all(slugs.map((slug) => getDocBySlug(slug)));
  return docs.filter((doc): doc is NonNullable<typeof doc> => doc !== null);
}

function getAllDocSlugs() {
  const files = getAllFiles(docsDirectory);
  return files.map((file) => file.replace(/\.mdx$/, ''));
}

function getAllFiles(dir: string): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let filePaths: string[] = [];

  for (const file of files) {
    if (file.isDirectory()) {
      filePaths = [...filePaths, ...getAllFiles(path.join(dir, file.name))];
    } else if (file.name.endsWith('.mdx')) {
      filePaths.push(
        path.join(dir, file.name).replace(docsDirectory + '/', '')
      );
    }
  }

  return filePaths;
}

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'
import { rehypeComponent } from './src/lib/rehype-components'
import { rehypeNpmCommand } from './src/lib/rehype-npm-command'
import { getHighlighter, loadTheme } from '@shikijs/compat'
import path from 'path'
/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `components/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))
export const Layouts = defineDocumentType(() => ({
  name: 'Layouts',
  filePathPattern: `layouts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))
export const GetStarted = defineDocumentType(() => ({
  name: 'GetStarted',
  filePathPattern: `get-started/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))
export const Templates = defineDocumentType(() => ({
  name: 'Templates',
  filePathPattern: `templates/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))
export const OpenSource = defineDocumentType(() => ({
  name: 'OpenSource',
  filePathPattern: `open-source/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))
export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Component, Layouts, GetStarted, Templates, OpenSource],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            // console.log("hello I'm node", node)
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }
            // console.log("hello I'm codeEl", node)

            // if (codeEl.data?.meta) {
            //   // Extract event from meta and pass it down the tree.
            //   const regex = /event="([^"]*)"/
            //   const match = codeEl.data?.meta.match(regex)
            //   if (match) {
            //     node.__event__ = match ? match[1] : null
            //     codeEl.data.meta = codeEl.data.meta.replace(regex, '')
            //   }
            // }

            node.__rawString__ = codeEl.children?.[0].value
            // console.log(node)
            // node.__src__ = node.properties?.__src__
            // node.__style__ = node.properties?.__style__
          }
        })
      },
      [
        rehypePrettyCode,
        {
          theme: 'night-owl',
          // theme: 'github-dark-dimmed',
          // getHighlighter: async () => {
          //   const theme = await loadTheme(
          //     path.join(process.cwd(), './src/lib/themes/dark.json')
          //   )
          //   return await getHighlighter({ theme })
          // },
          onVisitLine(node) {
            // console.log('visiting line node', node.children)
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            const nodeClass = node.properties.className
            // console.log('Highlighted Line', { node })
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push('line--highlighted')
            } else {
              node.properties.className = ['line--highlighted']
            }
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return
            }
            // console.log('visiting  node', node.__rawString__)

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }
            // console.log('visiting  element', preElement)

            preElement.properties['__withMeta__'] =
              node.children.at(0).tagName === 'div'
            preElement.properties['__rawString__'] = node.__rawString__

            if (node.__src__) {
              preElement.properties['__src__'] = node.__src__
            }

            if (node.__event__) {
              preElement.properties['__event__'] = node.__event__
            }

            if (node.__style__) {
              preElement.properties['__style__'] = node.__style__
            }
          }
        })
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})

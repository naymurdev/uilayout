import fs from 'fs'
import path from 'path'
import { UnistNode, UnistTree } from '@/types/unist'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

import { Index } from './register'
import { styles } from './styles'
import { COMPONENTS } from '../assets/data/components'

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'CodePreview') {
        const name = getNodeAttributeByName(node, 'name')?.value as string

        if (!name) {
          return null
        }

        try {
          const currentComponentData: any = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file) => file.fileName === name
              )
              if (file) {
                acc = file
              }
              return acc
            },
            {}
          )

          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc!
          )
          let source = fs.readFileSync(filePath, 'utf8')

          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc,
              },
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }
      if (node.name === 'DrawerCodePreview') {
        const name = getNodeAttributeByName(node, 'name')?.value as string

        if (!name) {
          return null
        }

        try {
          const currentComponentData: any = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file) => file.fileName === name
              )
              if (file) {
                acc = file
              }
              return acc
            },
            {}
          )
          // const currentComponentData: any = COMPONENTS.map(
          //   (component) =>
          //     component?.filesArray?.find((file) => file.fileName === name)
          // )
          // console.log('source', currentComponentData)

          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc!
          )
          let source = fs.readFileSync(filePath, 'utf8')
          // console.log('source', source)

          // Replace imports.
          // TODO: Use @swc/core and a visitor to replace this.
          // For now a simple regex should do.
          // source = source.replaceAll(
          //   `@/registry/components/${currentComponentData?.slug}`,
          //   '@/components/'
          // )
          // source = source.replaceAll('export default', 'export')

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc,
              },
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === 'ScreenCodePreview') {
        const name = getNodeAttributeByName(node, 'name')?.value as string

        if (!name) {
          return null
        }

        try {
          const currentComponentData: any = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file) => file.fileName === name
              )
              if (file) {
                acc = file
              }
              return acc
            },
            {}
          )
          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc!
          )
          let source = fs.readFileSync(filePath, 'utf8')
          // console.log('source', source)

          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc,
              },
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}

function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, 'src')?.value as string

  if (!src) {
    return null
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), src)
  const source = fs.readFileSync(filePath, 'utf8')

  return source
}

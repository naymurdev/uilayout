// @ts-nocheck
import type { Highlighter, Lang, Theme } from 'shiki'
import { renderToHtml, getHighlighter } from 'shiki'

let highlighter: Highlighter
export async function highlight(code: string, theme: Theme, lang: Lang) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      theme: theme,
    })
  }

  const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
    includeExplanation: false,
  })
  const html = renderToHtml(tokens, { bg: 'transparent' })

  return html
}

import * as monaco from 'monaco-editor-core'
import { createHighlighterCoreSync } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine-javascript.mjs'
import { shikiToMonaco } from '@shikijs/monaco'

import langHtml from 'shiki/langs/html.mjs'
import langVue from 'shiki/langs/vue.mjs'
import langTsx from 'shiki/langs/tsx.mjs'
import langJsx from 'shiki/langs/jsx.mjs'
import themeDark from 'shiki/themes/dark-plus.mjs'
import themeLight from 'shiki/themes/light-plus.mjs'

let registered = false
export function registerHighlighter() {
  if (!registered) {
    const highlighter = createHighlighterCoreSync({
      themes: [themeDark, themeLight],
      langs: [langVue, langTsx, langJsx, langHtml],
      engine: createJavaScriptRegexEngine(),
    })
    monaco.languages.register({ id: 'vue' })
    monaco.languages.register({ id: 'html' })
    shikiToMonaco(highlighter, monaco)
    registered = true
  }

  return {
    light: themeLight.name!,
    dark: themeDark.name!,
  }
}

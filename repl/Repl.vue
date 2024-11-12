<script setup lang="ts">
import SplitPane from './SplitPane.vue'
// import Output from './output/Output.vue'
import { type Store, useStore } from './store'
import { computed, provide, toRefs, useTemplateRef, onMounted } from 'vue'
import {
  type EditorComponentType,
  // injectKeyPreviewRef,
  injectKeyProps,
} from './types'
import EditorContainer from './editor/EditorContainer.vue'
import MonacoEditor from './editor/MonacoEditor.vue'
import type * as monaco from 'monaco-editor-core'

export interface Props {
  theme?: 'dark' | 'light'
  previewTheme?: boolean
  editor: EditorComponentType
  store?: Store
  autoResize?: boolean
  showCompileOutput?: boolean
  showImportMap?: boolean
  showTsConfig?: boolean
  clearConsole?: boolean
  layout?: 'horizontal' | 'vertical'
  layoutReverse?: boolean
  ssr?: boolean
  previewOptions?: {
    headHTML?: string
    bodyHTML?: string
    placeholderHTML?: string
    customCode?: {
      importCode?: string
      useCode?: string
    }
    showRuntimeError?: boolean
    showRuntimeWarning?: boolean
  }
  editorOptions?: {
    showErrorText?: string | false
    autoSaveText?: string | false
    monacoOptions?: monaco.editor.IStandaloneEditorConstructionOptions
  }
  splitPaneOptions?: {
    codeTogglerText?: string
    outputTogglerText?: string
  }
}

const autoSave = defineModel<boolean>({ default: false })
const props = withDefaults(defineProps<Props>(), {
  theme: 'dark',
  editor: MonacoEditor,
  previewTheme: false,
  store: () => useStore(),
  autoResize: true,
  showCompileOutput: true,
  showImportMap: true,
  showTsConfig: true,
  clearConsole: true,
  layoutReverse: false,
  ssr: false,
  layout: 'horizontal',
  previewOptions: () => ({}),
  editorOptions: () => ({}),
  splitPaneOptions: () => ({}),
})

if (!props.editor) {
  throw new Error('The "editor" prop is now required.')
}

// const outputRef = useTemplateRef('output');
const sandboxRef = useTemplateRef('sandbox');

props.store.init()

const editorSlotName = computed(() => (props.layoutReverse ? 'right' : 'left'))
const outputSlotName = computed(() => (props.layoutReverse ? 'left' : 'right'))

provide(injectKeyProps, { ...toRefs(props), autoSave })
// provide(
//   injectKeyPreviewRef,
//   computed(() => outputRef.value?.previewRef?.container ?? null),
// )

onMounted(() => {
  if (!sandboxRef.value) return;
  sandboxRef.value.srcdoc = props.store.activeFile.code;
});

function onCodeChange(code: string) {
  if (!sandboxRef.value) return;
  sandboxRef.value.srcdoc = code;
}

/**
 * Reload the preview iframe
 */
// function reload() {
//   outputRef.value?.reload()
// }

const sandboxAllows = 'allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation';

// defineExpose({ reload })
defineExpose({ onCodeChange });
</script>

<template>
  <div class="cme-repl">
    <SplitPane :layout="layout">
      <template #[editorSlotName]>
        <EditorContainer :editor-component="editor" @change="onCodeChange" />
      </template>
      <!-- <template #[outputSlotName]>
        <Output ref="output" :editor-component="editor" :show-compile-output="props.showCompileOutput"
          :ssr="!!props.ssr" />
      </template> -->
      <template #[outputSlotName]>
        <iframe ref="sandbox" :sandbox="sandboxAllows" frameborder="0"></iframe>
      </template>
    </SplitPane>
  </div>
</template>

<style>
.cme-repl {
  --bg: #fff;
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --text-light: #888;
  --font-code: Menlo, Monaco, Consolas, 'Courier New', monospace;
  --color-branding: #42b883;
  --color-branding-dark: #416f9c;
  --header-height: 38px;

  height: 100%;
  margin: 0;
  overflow: hidden;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-soft);
}

.dark .cme-repl {
  --bg: #1a1a1a;
  --bg-soft: #242424;
  --border: #383838;
  --text-light: #aaa;
  --color-branding: #42d392;
  --color-branding-dark: #89ddff;
}

.cme-repl button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}

iframe {
  height: 100%;
  width: 100%;
}
</style>

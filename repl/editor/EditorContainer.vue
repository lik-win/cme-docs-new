<script setup lang="ts">
import FileSelector from './FileSelector.vue'
import Message from '../Message.vue'
import { debounce, throttle } from '../utils'
import { inject, ref, watch } from 'vue'
// import ToggleButton from './ToggleButton.vue'
import { type EditorComponentType, injectKeyProps } from '../types'

const SHOW_ERROR_KEY = 'repl_show_error'

const props = defineProps<{
  editorComponent: EditorComponentType
}>()

// const { store, autoSave, editorOptions } = inject(injectKeyProps)!
const { store } = inject(injectKeyProps)!
const showMessage = ref(getItem())
const emitter = defineEmits(['change']);

const onChange = debounce((code: string) => {
  store.value.activeFile.code = code;
  emitter('change', code);
}, 250);

const resetCode = throttle(() => {
  store.value.activeFile.code = store.value.activeFile.rawCode;
  emitter('change', store.value.activeFile.rawCode);
}, 1000);

function toRun() {
  console.log(props.editorComponent);
}

function setItem() {
  localStorage.setItem(SHOW_ERROR_KEY, showMessage.value ? 'true' : 'false')
}

function getItem() {
  const item = localStorage.getItem(SHOW_ERROR_KEY)
  return !(item === 'false')
}

watch(showMessage, () => setItem())
</script>

<template>
  <FileSelector @run="toRun" @reset="resetCode" />
  <div class="editor-container">
    <props.editorComponent :value="store.activeFile.code" :filename="store.activeFile.filename" @change="onChange" />
    <Message v-show="showMessage" :err="store.errors[0]" />
  </div>
</template>

<style scoped>
.editor-container {
  height: calc(100% - var(--header-height));
  overflow: hidden;
  position: relative;
}

.editor-floating {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  background-color: var(--bg);
  color: var(--text-light);
  padding: 8px;
}
</style>

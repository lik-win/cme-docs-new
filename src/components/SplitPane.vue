<template>
  <div ref="container" class="split-pane" :class="{
    dragging: state.dragging,
    'show-output': state.showOutput,
    vertical: isVertical,
  }" @mousemove="dragMove" @mouseup="dragEnd" @mouseleave="dragEnd">
    <div class="left" :style="{ [isVertical ? 'height' : 'width']: `${boundSplit}%` }">
      <div class="file-list">Init2dMap.vue</div>
      <div ref="editerRef" class="editer-box"></div>
      <div class="dragger" :class="{ banned: state.showOutput }" @mousedown.prevent="dragStart"></div>
    </div>
    <div class="right" :style="{ [isVertical ? 'height' : 'width']: `${100 - boundSplit}%` }">
      <button class="toggler" @click="state.showOutput = !state.showOutput">
        {{ state.showOutput ? '>>' : '<<' }} </button>
          <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  reactive,
  ref,
  useTemplateRef,
  toRef
} from 'vue'
import * as monaco from 'monaco-editor-core';
import { registerHighlighter } from './../../repl/monaco/highlight.ts';

const props = defineProps({
  code: { type: String },
  dataCode: { type: String }
});

const editerRef = ref(null);
let editor = null;
const code = toRef(props, 'code');
watch(code, val => {
  if (!editor) return;
  editor.setValue(val);
}, { immediate: true });


const editorOptions = {
  value: props.code || '',
  language: 'vue',
  fontSize: 14,
  tabSize: 2,
  theme: 'vs-dark',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  readOnly: true
};

onMounted(() => {
  const theme = registerHighlighter();
  editor = monaco.editor.create(editerRef.value, {
    ...editorOptions,
    theme: theme.dark
  });
});
onBeforeUnmount(() => editor?.dispose());


const isVertical = ref(false)
const containerRef = useTemplateRef('container')

const state = reactive({
  dragging: false,
  split: 40,
  viewHeight: 0,
  viewWidth: 0,
  showOutput: true
})

const boundSplit = computed(() => {
  return state.showOutput ? 0 : Math.min(70, Math.max(state.split, 30));
})

let startPosition = 0
let startSplit = 0

function dragStart(e) {
  if (state.showOutput) return;
  state.dragging = true
  startPosition = isVertical.value ? e.pageY : e.pageX
  startSplit = boundSplit.value
}

function dragMove(e) {
  if (containerRef.value && state.dragging) {
    const position = isVertical.value ? e.pageY : e.pageX
    const totalSize = isVertical.value
      ? containerRef.value.offsetHeight
      : containerRef.value.offsetWidth
    const dp = position - startPosition
    state.split = startSplit + +((dp / totalSize) * 100).toFixed(2)
  }
}

function dragEnd() {
  state.dragging = false
}
</script>

<style scoped>
.split-pane {
  --bg: #1a1a1a;
  --bg-soft: #242424;
  --border: #383838;
  --text-light: #aaa;
  --color-branding: #42d392;
  --color-branding-dark: #89ddff;
  --font-code: Menlo, Monaco, Consolas, 'Courier New', monospace;
  --header-height: 38px;

  display: flex;
  height: 100%;
  position: relative;
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-soft);
}

.split-pane.dragging {
  cursor: ew-resize;
}

.dragging .left,
.dragging .right {
  pointer-events: none;
}

.left,
.right {
  position: relative;
  height: 100%;
  transition: 0.2s;
}

.view-size {
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 12px;
  color: var(--text-light);
  z-index: 100;
}

.left {
  border-right: 1px solid var(--border);
}

.editer-box {
  width: 100%;
  height: 100%;
}

.dragger {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: -5px;
  width: 10px;
  cursor: ew-resize;

  &.banned {
    cursor: default;
    pointer-events: none;
  }
}

.toggler {
  z-index: 3;
  font-family: Consolas, 'Courier New', monospace;
  color: var(--text-light);
  position: absolute;
  left: 0;
  top: 9px;
  line-height: 18px;
  background-color: var(--bg);
  padding: 0 8px;
  border-radius: 0 2px 2px 0;
  transform: scaleY(2);
  cursor: pointer;

  &:hover {
    color: var(--color-branding);
  }
}

/* vertical */
@media (min-width: 721px) {
  .split-pane.vertical {
    display: block;
  }

  .split-pane.vertical.dragging {
    cursor: ns-resize;
  }

  .vertical .dragger {
    top: auto;
    height: 10px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -5px;
    cursor: ns-resize;
  }

  .vertical .left,
  .vertical .right {
    width: 100%;
  }

  .vertical .left {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

/* mobile */
@media (max-width: 720px) {

  .left,
  .right {
    position: absolute;
    inset: 0;
    width: auto !important;
    height: auto !important;
  }

  .dragger {
    display: none;
  }

  .split-pane .toggler {
    display: block;
  }

  .split-pane .right {
    z-index: -1;
    pointer-events: none;
  }

  .split-pane .left {
    z-index: 0;
    pointer-events: all;
  }

  .split-pane.show-output .right {
    z-index: 0;
    pointer-events: all;
  }

  .split-pane.show-output .left {
    z-index: -1;
    pointer-events: none;
  }
}
</style>

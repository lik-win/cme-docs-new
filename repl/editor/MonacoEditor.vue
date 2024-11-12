<script setup lang="ts">
import Monaco from '../monaco/Monaco.vue'
import type { EditorEmits, EditorProps } from '../types'
import { useTemplateRef } from 'vue';

defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

defineOptions({ editorType: 'monaco' })

const onChange = (code: string) => emit('change', code)

const editorRef = useTemplateRef('editorRef');
function toRun() {
  console.log(editorRef.value);
}

defineExpose({ toRun })
</script>

<template>
  <Monaco ref="editorRef" :filename="filename" :value="value" :readonly="readonly" :mode="mode" @change="onChange" />
</template>

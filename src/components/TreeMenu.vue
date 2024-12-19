<template>
  <div class="cme-tree-menu">
    <el-tree ref="treeRef" :data="props.menus" :defaultExpandedKeys="expandKeys" v-bind="configs"
      @node-click="onNodeClick">
      <template #default="{ data }">
        <span v-if="isLeaf(data)">{{ data.name }}</span>
        <a v-else :class="`label${data.level}`">{{ data.name }}</a>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import { watch, ref, useTemplateRef } from 'vue';
import { useGlobal } from '../store';
const store = useGlobal();

const props = defineProps({
  menus: { type: [Object, Array], default: [] },
  anchor: { type: Boolean, default: true }
});

const treeEl = useTemplateRef('treeRef');

const expandKeys = ref([]);
watch(() => props.menus, list => {
  if (!list.length) return [];
  expandKeys.value = [list[0].id];
}, { immediate: true });

watch(() => store.expandKey, val => {
  expandKeys.value = [val];
  if (!treeEl.value) return;
  treeEl.value.setCurrentKey(val);
});

function isLeaf(data) {
  return data.level === 3;
}

const configs = {
  props: { label: 'title' },
  defaultExpandAll: false,
  expandOnClickNode: true,
  accordion: true,
  highlightCurrent: true,
  nodeKey: 'id',
  indent: 0,
  props: {
    class: data => `node-level${data.level}`,
  },
  icon: () => ''
};

const emitter = defineEmits(['nodeClick']);
function onNodeClick(node) {
  emitter('nodeClick', node);
  const targetId = node.path;
  if (!targetId) return;
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.cme-tree-menu {
  @include position(relative);

  :deep(.node-level1 .label1) {
    color: #424349;
    font-weight: 600;
  }

  :deep(.node-level2 .label2) {
    color: #424349;
  }
}
</style>
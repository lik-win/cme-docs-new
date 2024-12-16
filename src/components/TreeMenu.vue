<template>
  <div class="cme-tree-menu">
    <el-tree ref="treeRef" :data="props.menus" :defaultExpandedKeys="defaultExpand" @node-click="nodeCliked"
      v-bind="configs">
      <template #default="{ data }">
        <a v-if="isAnchor(data)" :href="`#${data.path}`">{{ data.name }}</a>
        <span v-else @click="() => onNodeClick(data)">{{ data.name }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import { computed, useTemplateRef } from 'vue';

const props = defineProps({
  menus: { type: [Object, Array], default: [] },
  anchor: { type: Boolean, default: true }
});

const defaultExpand = computed(() => {
  if (!props.menus.length) return [];
  return [props.menus[0].label];
});

const treeNode = useTemplateRef('treeRef');

function nodeCliked(node) {
  console.log('node ==>', treeNode.value, node);
}

function isAnchor(data) {
  return props.anchor && data.level <= 2;
}

const configs = {
  props: { label: 'title' },
  defaultExpandAll: false,
  expandOnClickNode: false,
  accordion: true,
  indent: 0,
  icon: () => ''
};

// const router = useRouter();
// const paths = router.currentRoute.value.path.split('/');
// const defaultPath = ref(paths.pop());

const emitter = defineEmits(['nodeClick'])
function onNodeClick(nodeData) {
  emitter('nodeClick', nodeData);
}

</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.cme-tree-menu {
  @include position(relative);
}
</style>
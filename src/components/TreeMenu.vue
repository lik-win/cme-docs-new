<template>
  <div class="cme-tree-menu">
    <el-tree :data="props.menus" :defaultExpandedKeys="expandKeys" v-bind="configs">
      <template #default="{ data }">
        <a v-if="isAnchor(data)">{{ data.name }}</a>
        <span v-else>{{ data.name }}</span>
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

const expandKeys = computed(() => {
  if (!props.menus.length) return [];
  return [props.menus[0].id];
});

function nodeCliked(node) {
  console.log('node ==>', node);
}

function isAnchor(data) {
  return props.anchor && data.level <= 2;
}

const configs = {
  props: { label: 'title' },
  defaultExpandAll: false,
  expandOnClickNode: false,
  accordion: true,
  nodeKey: 'id',
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
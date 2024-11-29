<template>
  <div class="cme-tree-menu">
    <el-tree :data="props.menus" v-bind="configs">
      <template #default="{ data }">
        <a v-if="isAnchor(data)" :href="`#${data.path}`">{{ data.name }}</a>
        <span v-else @click="() => onNodeClick(data)">{{ data.name }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
const props = defineProps({
  menus: { type: [Object, Array], default: [] },
  anchor: { type: Boolean, default: true }
});

function isAnchor(data) {
  return props.anchor && data.level <= 2;
}

const configs = {
  props: { label: 'title' },
  defaultExpandAll: true,
  expandOnClickNode: false,
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
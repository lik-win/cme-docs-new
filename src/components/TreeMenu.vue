<template>
  <div class="cme-tree-menu">
    <el-tree :data="menus" v-bind="configs">
      <template #default="{ data }">
        <a v-if="isAnchor(data)" :href="`#${data.listId}`">{{ data.title }}</a>
        <span v-else>{{ data.title }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import { menus } from './../router/index.js';
// import { useRouter } from 'vue-router';

const props = defineProps({
  enableAnchor: { type: Boolean, default: true }
});

function isAnchor(data) {
  return props.enableAnchor && data.listId;
}

const configs = {
  props: { label: 'title' },
  defaultExpandAll: true,
  expandOnClickNode: !props.enableAnchor,
  indent: 0,
  icon: () => ''
};

// const router = useRouter();
// const paths = router.currentRoute.value.path.split('/');
// const defaultPath = ref(paths.pop());

function onNodeClick(node) {
  if (!node.listId) return;
  window.location.hash = node.listId;
}

</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.cme-tree-menu {
  @include position(relative);


}
</style>
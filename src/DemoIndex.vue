<template>
  <el-aside width="180px">
    <el-menu :default-active="defaultPath" router>
      <template v-for="item in menus">
        <el-sub-menu v-if="item.children && item.children.length" :index="item.path">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <template v-for="sub in item.children">
            <el-menu-item :index="`/example/${item.path}/${sub.path}`">
              <template #title>{{ sub.title }}</template>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="`/example/${item.path}`">
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
  <el-main>
    <SplitPane :code="code">
      <router-view />
    </SplitPane>
  </el-main>
</template>
<script setup>
import SplitPane from './components/SplitPane.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { menus } from './router/index.js';

import codes from './codes.js';
const route = useRoute();

const code = ref(codes[route.meta.vueName]);
const defaultPath = ref(route.path);

watch(() => route.meta, meta => {
  if (!meta) return;
  code.value = codes[meta.vueName] || '';
});
</script>

<style lang="scss" scoped>
.dark-theme {
  background-color: #333333;
  color: #ffffff;
}

.el-aside,
.el-menu,
.el-sub-menu,
.el-menu-item {
  --el-border-color: #252525;
  background-color: #252525;
  color: #ffffffa6;
}

.el-menu {
  border-right: none;
}

.el-menu-item {
  height: 40px;
}

:deep(.el-sub-menu__title) {
  padding-left: 12px;
  height: 44px;
  color: #ffffffa6;

  &:hover {
    background-color: #333333;
  }
}

.el-menu-item:hover {
  background-color: #333333;
}

.el-menu-item.is-active {
  color: var(--el-color-primary);
}

.el-main {
  padding: 0;

}

.split-pane {
  display: flex;
  height: 100%;
  width: 100%;

  .right {
    flex: 1;
  }
}
</style>
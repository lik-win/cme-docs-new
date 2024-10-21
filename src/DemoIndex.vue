<template>
  <el-aside width="180px">
    <el-menu :default-active="defaultPath">
      <template v-for="item in menus">
        <el-sub-menu v-if="item.children && item.children.length" index="1">
          <template #title>
            <span>{{ item.menu }}</span>
          </template>
          <template v-for="sub in item.children">
            <el-menu-item :index="sub.path">
              <template #title>{{ sub.menu }}</template>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <template #title>{{ item.menu }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
  <el-main>
    <Repl v-bind="replOptions"></Repl>
  </el-main>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { Repl, useStore, File } from './../repl/index.ts';
import { menus } from './router/index.js';
import radarSFC from './views/cogtif/radar.vue?raw';

const store = useStore();

const defaultPath = ref((menus[0].children ? menus[0].children[0] : menus[0]).path);

// store.deleteFile('src/App.vue');
// store.mainFile = 'Radar.vue';
store.addFile(new File('Radar.vue', radarSFC));


const replOptions = reactive({
  store: store,
  showTsConfig: true,
  showCompileOutput: false,
  showImportMap: true,
  previewOptions: { headHTML: '' },
  clearConsole: false
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


.el-container {
  flex: 1;
}

.el-main {
  padding: 0;
}
</style>
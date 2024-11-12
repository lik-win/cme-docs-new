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
    <Repl ref="repl" v-bind="replOptions"></Repl>
  </el-main>
</template>
<script setup>
import { reactive, ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Repl, useStore, File } from '../repl/index.ts';
import { menus } from './router/index.js';
import codes from './codes.js';

const replRef = useTemplateRef('repl');

const url = 'http://10.40.88.119:18000/Init2dMapStatic.txt';
function getCode() {
  return fetch(url, { method: 'GET' }).then(res => res.text());
}

const router = useRouter();
const editStore = useStore();
editStore.deleteAllFiles();
watch(router.currentRoute, route => {
  const { vueName } = route.meta;
  if (!vueName) return router.replace('/');
  editStore.deleteAllFiles();
  editStore.mainFile = `${vueName}.html`;
  editStore.addFile(new File(`${vueName}.html`, ''));
  getCode().then(code => {
    editStore.activeFile.setRaw(code);
    replRef.value.onCodeChange(code);
  });
}, { immediate: true });

const paths = router.currentRoute.value.path.split('/');
const defaultPath = ref(paths.pop());

const replOptions = reactive({
  store: editStore,
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
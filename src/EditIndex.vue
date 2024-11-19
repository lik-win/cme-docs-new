<template>
  <el-aside>
    <TreeMenu :enableAnchor="false"></TreeMenu>
  </el-aside>
  <el-main class="page-view">
    <div class="head-info">
      <h3 class="title">功能模块名称1</h3>
      <p class="src-path">src/ui/map.js</p>
    </div>
    <div class="center-box">
      <p class="desc">Mapbox GL JS是一个客户端 JavaScript 库，用于使用 Mapbox 的现代地图技术构建 Web 地图和 Web 应用程序。您可以使用 Mapbox GL JS 在 Web
        浏览器或客户端中显示 Mapbox 地图、添加用户交互性以及自定义应用程序中的地图体验。</p>
      <Repl ref="repl" v-bind="replOptions"></Repl>
      <div class="info-block">
        <h4 class="title">使用</h4>
        <p class="line">用例包括：</p>
        <ul class="list">
          <li class="item">地理数据可视化和动画</li>
          <li class="item">查询和过滤地图上的要素</li>
          <li class="item">将数据放置在图层之间</li>
          <li class="item">在地图上动态显示数据并设置样式</li>
          <li class="item">3D数据可视化和动画</li>
          <li class="item">已编程方式向地图添加标记和弹出窗口</li>
        </ul>
      </div>
      <div class="info-block">
        <h4 class="title">特征</h4>
        <p class="line">主要特征：</p>
        <ul class="list">
          <li class="item">支持多种格式的数据加载，可视化形式多样</li>
          <li class="item">投影格式多样，适配多种地图场景需求</li>
          <li class="item">支持二三位切换，以及二三位一体化展示</li>
          <li class="item">基于JavaScript实现，支持跨平台</li>
          <li class="item">具备完善的用户示例二次开发接口</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <p class="p-title">本页内容</p>
      <a class="a-link">用例</a>
      <a class="a-link">特征</a>
    </div>
  </el-main>
</template>
<script setup>
import { reactive, ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Repl, useStore, File } from '../repl/index.ts';
import TreeMenu from './components/TreeMenu.vue';
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
@import "./assets/mixins.scss";

$border: 1px solid #FFFFFF19;

.el-aside {
  width: 360px;
  border-right: $border;
}

.el-main {
  padding: 40px;
  display: grid;
  grid-template-columns: auto 300px;
  grid-template-rows: 120px auto;
  grid-row-gap: 30px;
  background-color: var(--background-color4);

  .head-info {
    grid-column-start: span 2;
    border-bottom: $border;
  }

  .title {
    margin-bottom: 24px;
    @include setFont(36px, 50px);
  }

  .src-path {
    grid-column-start: span 2;
    @include setFont(16px, 22px);
    color: #B8C2C2;
  }

  .center-box {
    flex: 1;
    padding-right: 60px;

    .desc {
      color: var(--text-color4);
      margin-bottom: 20px;
    }

    .info-block {
      margin-top: 30px;
      margin-bottom: 40px;
      border-top: $border;

      .title {
        @include setFont(30px, 42px);
        margin: 20px 0;
      }

      .line {
        @include setFont(16px, 24px);
        color: var(--text-color4);
      }

      ul {
        padding-left: 20px;
        margin-top: 8px;
        list-style-type: disc;
        color: var(--text-color5);
      }

      li {
        line-height: 24px
      }
    }
  }

  .right {
    padding-left: 16px;
    width: 300px;
    border-left: $border;

    .p-title,
    .a-link {
      display: block;
      color: var(--text-color5);
      line-height: 24px;
    }
  }
}
</style>
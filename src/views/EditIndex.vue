<template>
  <!-- <el-aside>
    <TreeMenu :menus="store.menus3" :anchor="false" @nodeClick="nodeClick" />
  </el-aside> -->
  <el-main class="page-view">
    <div class="head-info">
      <h3 class="title">{{ docInfo.title }}</h3>
      <!-- <p class="src-path">
        <img src="./../assets/images/icons/icon-srcpath.webp">
        {{ docInfo.sourcePath || '--' }}
      </p> -->
    </div>
    <div class="center-box">
      <p class="desc">{{ docInfo.describe || '暂无描述' }}</p>
      <Repl ref="repl" v-bind="replOptions"></Repl>
      <div class="info-block" v-html="docInfo.useIntroduce"></div>
      <!-- <div class="info-block">
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
      </div> -->
    </div>
    <!-- <div class="right">
      <p class="p-title">版本列表</p>
      <select class="v-list" @change="changeVersion">
        <template v-for="v in versionList">
          <option :value="v">{{ v }}</option>
        </template>
</select>
</div> -->
  </el-main>
</template>
<script setup>
import { reactive, ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Repl, useStore, File } from './../../repl/index.ts';
import TreeMenu from './../components/TreeMenu.vue';
import { getSampleInfo } from './../apis/index.js';
import { useGlobal } from './../store/index.js';

const store = useGlobal();
store.updateMenus('components');
const replRef = useTemplateRef('repl');
const router = useRouter();
const editStore = useStore();
editStore.deleteAllFiles();
editStore.mainFile = 'demo.html';
editStore.addFile(new File('demo.html', ''));

const loading = ref(false);
const docInfo = ref({
  title: null,
  describe: null,
  sourcePath: '',
  latestVersion: ''
});

const versionList = ref([]);
const latestDoc = ref(null);
const historyList = ref([]);

function showCode(fileList) {
  if (!fileList.length) return;
  const { fileName, url } = fileList[0];
  editStore.deleteAllFiles();
  editStore.mainFile = fileName;
  editStore.addFile(new File(fileName, ''));
  fetch(url).then(res => res.text()).then(code => {
    editStore.activeFile.setRaw(code);
    replRef.value.onCodeChange(code);
  });
}

function changeVersion(event) {
  const version = event.target.value;
  if (!version || version === docInfo.value.version) return;
  const doc = historyList.value.find(d => d.version === version);
  docInfo.value = doc || latestDoc.value;
  showCode(docInfo.value.fileList);
}

function parseDocInfo(data) {
  const { title, describe, sourcePath, version, latestVersion, useIntroduce, fileList } = data;
  return {
    title: title || docInfo.value.title,
    describe: describe || docInfo.value.describe,
    sourcePath,
    version: version || latestVersion,
    useIntroduce,
    fileList
  };
}


watch(router.currentRoute, route => {
  const { id } = route.params;
  if (!id) router.go(-1);
  getSampleInfo(id).then(data => {
    console.log('detail =>', data);
    docInfo.value = parseDocInfo(data);
    latestDoc.value = docInfo.value;
    versionList.value.splice(0);
    versionList.value.push(docInfo.value.version);
    showCode(data.fileList);
    historyList.value = data.exampleHistoryList.map(item => parseDocInfo(item));
    versionList.value.push(...historyList.value.map(d => d.version));
  });
}, { immediate: true });


function nodeClick(data) {
  if (data.level !== 3) return;
  router.push(`/components/${data.id}`);
}

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
@import "./../assets/mixins.scss";

$border: 1px solid #FFFFFF19;

// .el-aside {
//   @include position(fixed, $top: 60px);
//   width: 360px;
//   height: calc(100% - 120px);
// }

.el-main {
  padding: 40px;
  // margin-left: 360px;
  display: grid;
  // grid-template-rows: 120px auto;
  grid-template-rows: 60px auto;
  grid-row-gap: 30px;
  border-left: $border;
  background-color: var(--background-color4);

  .head-info {
    border-bottom: $border;
  }

  .title {
    margin-bottom: 24px;
    @include setFont(36px, 50px);
  }

  .src-path {
    @include setFont(16px, 22px);
    color: #B8C2C2;
    text-decoration: underline;

    img {
      @include setBox(16px, 16px);
      margin-right: 8px;
      vertical-align: middle;
    }
  }

  .center-box {
    flex: 1;

    .desc {
      color: var(--text-color4);
      margin-bottom: 20px;
    }

    .cme-repl {
      height: 600px;
      border: 1px solid #B8C2C2;
    }

    .info-block {
      margin-top: 30px;
      margin-bottom: 40px;
      padding-top: 20px;
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
      margin-bottom: 8px;
      color: var(--text-color5);
      line-height: 24px;
    }

    select {
      display: block;
      @include setBox(120px, 28px);
      border-radius: 3px;
      outline: none;
    }
  }
}
</style>
<template>
  <el-main class="page-view">
    <div class="header">
      <span class="back">
        <img src="./../assets/images/icons/icon-back.webp">
        <a @click="router.go(-1)">返回上一页</a>
      </span>
      <span class="page-title">{{ docInfo.title }}</span>
    </div>
    <div class="head-info">
      <div class="desc-box">
        <p class="desc-title">服务描述</p>
        <p class="desc-text">{{ docInfo.describe || '暂无描述' }}</p>
      </div>
      <p class="src-path">
        <label>版本列表：</label>
        <el-select v-model="version" placeholder="版本" @change="changeVersion">
          <template v-for="v in versionList">
            <el-option :value="v">{{ v }}</el-option>
          </template>
        </el-select>
      </p>
    </div>
    <div class="sample-box">
      <p class="title">运行效果</p>
      <Repl ref="repl" v-bind="replOptions"></Repl>
      <!-- <div class="info-block" v-html="docInfo.useIntroduce"></div> -->
    </div>
    <!-- <div class="sample-box">
      <p class="title">接口参数</p>
      <p class="line">入参列表</p>
      <p>暂无</p>
      <p class="line">出参列表</p>
      <p>暂无</p>
    </div> -->
  </el-main>
</template>
<script setup>
import { reactive, ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Repl, useStore, File } from './../../repl/index.ts';
import { getSampleInfo } from './../apis/index.js';
import { useGlobal } from './../store/index.js';
import { routeBase } from './../router/index.js';

const store = useGlobal();
store.updateMenus('components');
const replRef = useTemplateRef('repl');
const router = useRouter();
const editStore = useStore();
editStore.deleteAllFiles();
editStore.mainFile = 'demo.html';
editStore.addFile(new File('demo.html', ''));

const base = routeBase.replace(/\//g, '');

const docInfo = ref({
  title: null,
  describe: null,
  sourcePath: '',
  latestVersion: ''
});

const version = ref(null);
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
    const reg = new RegExp(`href="\\/\(?!${base}\)`, 'ig');
    let _code = code.replace(reg, `href="/${base}/`);
    _code = _code.replace(/(['"])\/(?:public\/)?(libs|data|font|images|tiffs)\//ig, `$1/${base}/$2/`);
    _code = _code.replace(/\bolmap\b/ig, 'CMEMap');
    editStore.activeFile.setRaw(_code);
    replRef.value.onCodeChange(_code);
  });
}

function changeVersion() {
  if (version.value === docInfo.value.version) return;
  const doc = historyList.value.find(d => d.version === version.value);
  docInfo.value = doc || latestDoc.value;
  showCode(docInfo.value.fileList);
}

function parseDocInfo(data) {
  const { title, describe, sourcePath, latestVersion, useIntroduce, fileList } = data;
  return {
    title: title || docInfo.value.title,
    describe: describe || docInfo.value.describe,
    sourcePath,
    version: data.version || latestVersion,
    useIntroduce,
    fileList
  };
}


watch(router.currentRoute, route => {
  const { id } = route.params;
  if (!id) router.go(-1);
  getSampleInfo(id).then(data => {
    docInfo.value = parseDocInfo(data);
    latestDoc.value = docInfo.value;
    versionList.value.splice(0);
    versionList.value.push(docInfo.value.version);
    version.value = versionList.value[0];
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

.page-view {
  position: relative;
  padding: 0 80px 40px;
  background-color: #F6F8FC;
  height: 100vh;
  overflow-y: auto;

  .header {
    @include position(absolute, $left: 0, $top: 20px);
    width: 100%;
  }

  .back {
    @include position(absolute, $left: 0);
    @include flex(center, center);
    @include setBox(168px, 48px);
    background-color: #2A2C2F19;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #2A2C2F33;
    }

    img {
      @include setBox(16px, 16px);
      margin-right: 8px;
    }
  }

  .head-info {
    padding-top: 80px;
  }

  .page-title {
    @include position(absolute, $left: 200px, $top: 10px);
    @include setFont(20px, 28px, 500);
    color: #323439;
  }

  .desc-box {
    @include setBox(1760px, $padding: 16px 24px, $margin: 20px 0);
    border-radius: 8px;
    background: url("./../assets/images/desc-bg.webp") no-repeat center;
    background-size: 100% 100%;

    .desc-title {
      @include setFont(20px, 28px, 600);
      margin-bottom: 8px;
      color: #1C1D1F;
    }

    .desc-text {
      @include setFont(18px, 25px);
      color: #2F3035;
    }
  }

  .src-path {
    @include flex();
    @include setBox(240px);
    @include setFont(16px, 22px);
    color: var(--text-color);

    label {
      @include setBox(80px);
    }

    .el-select {
      flex: 1
    }
  }
}

.el-main {
  background-color: var(--background-color4);

  .head-info {
    border-bottom: $border;
  }

  .title {
    margin-bottom: 24px;
    @include setFont(36px, 50px);
  }



  .sample-box {
    margin-top: 40px;

    .title {
      @include setBox(220px, 38px);
      background: linear-gradient(270deg, #ffffff2b 0%, #7bfff791 23%, #8ac1ff26 86%, #ffffff12 100%);
      @include setFont(24px, 34px, 500);
      color: #323439;
    }

    .cme-repl {
      margin-top: 20px;
      height: 600px;
      padding: 10px;
      background: linear-gradient(315deg, #EBF8FF 0%, #E6ECFF 100%);
      border: 1px solid #B8C2C2;
      border-radius: 8px;
    }

    .info-block {
      margin-top: 30px;
      margin-bottom: 40px;
      padding-top: 20px;
      border-top: $border;
    }
  }

  p.line {
    @include setFont(16px, 32px);
  }

  code {
    display: block;
    padding: 10px 24px;
    border-radius: 8px;
    background-color: #333438;
    color: #d1cfcf;
    @include setFont(16px, 24px, 400);
    font-family: Consolas, serif;
  }
}
</style>
<template>
  <el-main class="page-view">
    <span class="back">
      <img src="./../assets/images/icons/icon-back.webp">
      <a @click="router.go(-1)">返回上一页</a>
    </span>
    <div class="head-info">
      <h3 class="page-title">服务详情</h3>
      <h3 class="sub-title">{{ docInfo.title }}</h3>
      <div class="desc-box">
        <p class="desc-title">服务描述</p>
        <p class="desc-text">这是一段服务描述</p>
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
    <h4>版本</h4>
    <p>CME1.0目前还处于快速开发迭代中。</p>
    <p>此外，在dev 分支上的每个提交和 PR 都将被发布到 pkg.pr.new，如果您想要使用一些未发布的内容，您可以参考 这里。</p>
    <pre>
  从 npm 获取
  npm install echarts

  从 CDN 获取
  &lt;script src="/libs/cme2d.js"&gt;&lt;/script&gt;
</pre>
    <div class="tip custom-block">
      <p class="custom-block-title">TIP</p>
      <p>我们建议使用 CDN 引入 CME1.0 的用户在链接地址上锁定版本，以免将来 Element Plus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 <a href="https://unpkg.com"
          class="vp-link" target="_blank" rel="noreferrer">unpkg.com<svg viewBox="0 0 24 24" width="1.2em"
            height="1.2em" class="link-icon">
            <path fill="currentColor"
              d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z">
            </path>
          </svg></a>。</p>
      <p>由于原生的 HTML 解析行为的限制，单个闭合标签可能会导致一些例外情况，所以请使用双封闭标签， <a
          href="https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats"
          class="vp-link" target="_blank" rel="noreferrer">参考<svg viewBox="0 0 24 24" width="1.2em" height="1.2em"
            class="link-icon">
            <path fill="currentColor"
              d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z">
            </path>
          </svg></a></p>
      <div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span
          class="lang">html</span>
        <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span
            style="--shiki-light: #6A737D; --shiki-dark: #6A737D;">&lt;!-- examples --&gt;</span></span>
        <span class="line"><span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&lt;</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;</span></span>
        <span class="line"><span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;"> &lt;</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table-column</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;&lt;/</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table-column</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;</span></span>
        <span class="line"><span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;"> &lt;</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table-column</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;&lt;/</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table-column</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;</span></span>
        <span class="line"><span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&lt;/</span><span
            style="--shiki-light: #22863A; --shiki-dark: #85E89D;">el-table</span><span
            style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">&gt;</span></span></code></pre>
      </div>
    </div>

  </el-main>
</template>
<script setup>
import { reactive, ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Repl, useStore, File } from './../../repl/index.ts';
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
    editStore.activeFile.setRaw(code);
    replRef.value.onCodeChange(code);
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

  .back {
    @include position(absolute, $left: 0, $top: 20px);
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
    padding-top: 100px;
  }

  .page-title {
    @include setFont(56px, 66px);
  }

  .sub-title {
    margin-top: 40px;
    @include setFont(40px, 56px, 500);
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

// .el-aside {
//   @include position(fixed, $top: 60px);
//   width: 360px;
//   height: calc(100% - 120px);
// }

.el-main {
  // margin-left: 360px;
  // display: grid;
  // grid-template-rows: 120px auto;
  // grid-template-rows: 120px auto;
  // grid-row-gap: 30px;
  border-left: $border;
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
}
</style>
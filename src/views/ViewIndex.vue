<template>
  <el-aside>
    <TreeMenu :menus="store.menus3" :anchor="false" @nodeClick="nodeClick" />
  </el-aside>
  <el-main class="page-view">
    <div class="head-info">
      <h3 class="title">{{ docInfo.title }}</h3>
      <p class="src-path">
        <img src="./../assets/images/icons/icon-srcpath.webp">
        {{ docInfo.sourcePath || '--' }}
      </p>
    </div>
    <div class="center-box">
      <p class="desc">{{ docInfo.describe || '暂无描述' }}</p>
      <iframe ref="frame" frameborder="0"></iframe>
      <div class="info-block" v-html="docInfo.useIntroduce"></div>
    </div>
    <div class="right">
      <p class="p-title">版本列表</p>
      <select class="v-list" @change="changeVersion">
        <template v-for="v in versionList">
          <option :value="v">{{ v }}</option>
        </template>
      </select>
      <!-- <p class="p-title">本页内容</p>
      <a class="a-link">用例</a>
      <a class="a-link">特征</a> -->
    </div>
  </el-main>
</template>
<script setup>
import { ref, useTemplateRef, watch } from 'vue';
import { useRouter } from 'vue-router'
import TreeMenu from './../components/TreeMenu.vue';
import { getSampleInfo } from './../apis/index.js';
import { useGlobal } from './../store/index.js';

const store = useGlobal();
const router = useRouter();
const { meta } = router.currentRoute.value;
if (!meta.cate) {
  router.back();
}
store.updateMenus(meta.cate || 'components');

const loading = ref(false);
const docInfo = ref({
  title: null,
  describe: null,
  sourcePath: '',
  latestVersion: '',
  demoUrl: null
});

const versionList = ref([]);
const latestDoc = ref(null);
const historyList = ref([]);
const frameRef = useTemplateRef('frame');

function changeVersion(event) {
  const version = event.target.value;
  if (!version || version === docInfo.value.version) return;
  const doc = historyList.value.find(d => d.version === version);
  docInfo.value = doc || latestDoc.value;
  showCode(docInfo.value.demoUrl);
}

function parseDocInfo(data) {
  const { title, describe, sourcePath, version, latestVersion, useIntroduce, fileList } = data;
  return {
    title: title || docInfo.value.title,
    describe: describe || docInfo.value.describe,
    sourcePath,
    version: version || latestVersion,
    useIntroduce,
    demoUrl: fileList[0]?.url,
    fileList
  };
}

function showCode(url) {
  if (!url) return;
  fetch(url).then(res => res.text()).then(code => {
    frameRef.value.srcdoc = code;
  });
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
    historyList.value = data.exampleHistoryList.map(item => parseDocInfo(item));
    versionList.value.push(...historyList.value.map(d => d.version));
    console.log('docInfo ===>', docInfo.value.demoUrl);
    showCode(docInfo.value.demoUrl);
  });
}, { immediate: true });


function nodeClick(data) {
  if (data.level !== 3) return;
  router.push(`/${meta.cate}/${data.id}`);
}

</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

$border: 1px solid #FFFFFF19;

.el-aside {
  @include position(fixed, $top: 60px);
  width: 360px;
  height: calc(100% - 120px);
}

.el-main {
  padding: 40px;
  margin-left: 360px;
  display: grid;
  grid-template-columns: auto 300px;
  grid-template-rows: 120px auto;
  grid-row-gap: 30px;
  border-left: $border;
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
    text-decoration: underline;

    img {
      @include setBox(16px, 16px);
      margin-right: 8px;
      vertical-align: middle;
    }
  }

  .center-box {
    flex: 1;
    padding-right: 60px;

    .desc {
      color: var(--text-color4);
      margin-bottom: 20px;
    }

    iframe {
      height: 540px;
      border-radius: 8px;
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
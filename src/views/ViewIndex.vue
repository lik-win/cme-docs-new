<template>
  <el-main class="page-view">
    <div class="header">
      <span class="back">
        <img src="./../assets/images/icons/icon-back.webp">
        <a @click="router.go(-1)">返回上一页</a>
      </span>
      <h3 class="page-title">{{ docInfo.title }}</h3>
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
      <p class="box-title">运行效果</p>
      <Repl ref="repl" v-bind="replOptions"></Repl>
    </div>
    <hr class="s-line" v-if="apiUrl">
    <div class="args-box" v-if="apiUrl">
      <p class="box-title">参数列表</p>
      <button class="btn-run" @click="toRun">运行</button>
      <div class="table-box">
        <p class="api-url"><label>接口地址：</label>{{ apiUrl }}</p>
        <el-table :data="apiArgs" border class="args-table">
          <el-table-column type="index" label="序号" align="center" :min-width="50" />
          <el-table-column label="参数名" prop="name" :min-width="80" />
          <el-table-column label="描述" prop="desc" :min-width="100" />
          <el-table-column label="数据类型" prop="type" :min-width="80" />
          <el-table-column label="参数值" :min-width="120">
            <template #default="{ row }">
              <el-input type="text" v-model="row.value" />
            </template>
          </el-table-column>
          <el-table-column label="是否必传" prop="required" :min-width="60" />
          <el-table-column label="备注" prop="remark" :min-width="180" />
        </el-table>
      </div>
    </div>
    <hr class="s-line" v-if="result">
    <div class="result-box" v-if="result">
      <p class="box-title">接口数据</p>
      <div class="res-box">
        <pre>{{ result }}</pre>
      </div>
    </div>
  </el-main>
</template>
<script setup>
import { onBeforeUnmount, reactive, ref, useTemplateRef, watch } from 'vue';
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

const apiUrl = ref(null);
const apiArgs = ref([]);
const version = ref(null);
const versionList = ref([]);
const latestDoc = ref(null);
const historyList = ref([]);
const result = ref(null);

function showCode(fileList) {
  if (!fileList.length) return;
  const { fileName, url } = fileList[0];
  editStore.deleteAllFiles();
  editStore.mainFile = fileName;
  editStore.addFile(new File(fileName, ''));
  fetch(url).then(res => res.text()).then(code => {
    const reg = new RegExp(`href="\\/\(?!${base}\)`, 'ig');
    let _code = code.replace(reg, `href="/${base}/`);
    _code = _code.replace(/(['"])\/(?:public\/)?(libs|data|font|images|icon|tiffs)/ig, `$1/${base}/$2`);
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

function parseArgs(data) {
  const { url, args } = data;
  if (url) {
    apiUrl.value = data.url;
  }
  if (args) {
    const list = [];
    Object.keys(args).forEach(key => {
      list.push({ ...args[key], name: key });
    });
    apiArgs.value = list;
  }
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


const replOptions = reactive({
  store: editStore,
  showTsConfig: true,
  showCompileOutput: false,
  showImportMap: true,
  previewOptions: { headHTML: '' },
  clearConsole: false
});

// 处理postMessage信息
function onMessage(evt) {
  if (typeof evt.data !== 'string') return;
  const data = JSON.parse(evt.data);
  if (data.msgType === 'apiInfo') {
    parseArgs(data.data);
  } else if (data.msgType === 'paramError') {
    alert(data.data);
  } else if (data.msgType === 'response') {
    parseResult(data.data);
  }
}

function parseResult(data) {
  result.value = JSON.stringify(data, null, 2);
}

function toRun() {
  const params = apiArgs.value;
  if (!window.frames[0]) return;
  const data = JSON.stringify({ msgType: 'toRun', params });
  window.frames[0].postMessage(data, location.origin);
}

onBeforeUnmount(() => {
  window.removeEventListener('message', onMessage);
});

window.addEventListener('message', onMessage);
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

$border: 1px solid #FFFFFF19;

.page-view {
  position: relative;
  padding: 0 80px 40px;
  background-color: #F6F8FC;
  height: calc(100vh - 60px);
  overflow-y: auto;

  .header {
    @include position(absolute, $left: 0, $top: 20px);
    width: 100%;
  }

  .back {
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

  .page-title {
    @include position(absolute, $left: 200px, $top: 10px);
    @include setFont(20px, 28px, 500);
    color: #323439;
  }

  .head-info {
    padding-top: 80px;
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

.box-title {
  @include setBox(220px, 38px);
  background: linear-gradient(270deg, #ffffff2b 0%, #7bfff791 23%, #8ac1ff26 86%, #ffffff12 100%);
  @include setFont(24px, 34px, 500);
  color: #323439;
}

.sample-box {
  margin-top: 40px;

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

.s-line {
  margin-top: 60px;
  border-top: 1px solid #DCDDDF;
}

.args-box {
  margin-top: 20px;

  .btn-run {
    @include setBox(80px, 36px, $margin: 20px 0);
    @include setFont(20px, 32px);
    border-radius: 20px;
    color: #ffffff;
    outline: none;
    border: 1px solid #0071E3;
    background-color: #0071E3;

    &:hover {
      cursor: pointer;
      background-color: #1183f6;
    }
  }

  .table-box {
    width: 1040px;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #B8C2C2;
    backdrop-filter: blur(10px);

    .api-url {
      @include setBox(100%, 40px);
    }

    .args-table {
      width: 1020px;
    }
  }
}

.result-box {
  margin-top: 20px;

  .res-box {
    padding: 24px;
    margin-top: 20px;
    background: #F1F1F1;
    border-radius: 8px;
    border: 1px solid #B8C2C2;
    backdrop-filter: blur(10px);

    pre {
      margin: 0;
      @include setFont(16px, 20px, 300);
      font-family: codicon, Consolas, serif;
    }
  }
}
</style>
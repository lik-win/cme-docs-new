<template>
  <SampleLayout type="components">
    <template #page-head>
      <h3 class="page-title">
        组件服务
        <span class="bubble">140种</span>
        <!-- <img class="new-icon" src="./../assets/images/icons/icon-new.webp"> -->
      </h3>
      <p class="page-desc">
        按照组件仓库要求封装平台底层地图渲染引擎，集成数据展示、数据交互、交互编辑、剖面分析、图表制作等组件，支撑二三维一体化的业务需求，解决算法集约、应用规范、服务统一等问题。
      </p>
      <div class="info-list">
        <template v-for="(item, idx) in dataInfo">
          <a v-clickLink :data-href="item.href" class="info-item">
            <label class="lbl1">{{ item.cate }}</label>
            <label class="lbl2">{{ item.label }}</label>
            <p class="desc">{{ item.desc }}</p>
          </a>
          <span v-if="idx < dataInfo.length - 1" class="splitor"></span>
        </template>
      </div>
    </template>
    <!-- <template #module>
      <div id="quickStart" class="module-box">
        <h3 class="box-title">快速上手</h3>
        <p id="npm" class="sub-title">npm 安装</p>
        <p class="line">推荐使用 npm 方式安装，它能更好地与 webpack、vite等打包工具配合使用。</p>
        <code>
          npm install --save cme2d cme-core;
        </code>
        <p id="cdn" class="sub-title">CDN</p>
        <p class="line">目前可以从cme静态资源服务器获取最新的cme2d和cme-core库文件，在页面上引入js即可开始使用。</p>
        <code>
          &lt;!-- 引入 cme2d.js 地图引擎库 --&gt;<br/>
          &lt;script type="text/javascript" src="/libs/cme2d.js"&gt;&lt;/script&gt;<br/><br/>
          &lt;!-- 引入 cme-core.js 核心库 --&gt;<br/>
          &lt;script type="text/javascript" src="/libs/cme-core.js"&gt;&lt;/script&gt;
        </code>
        <div class="tip-box">
          <p class="line">我们建议使用 CDN 和 NPM 方式的引入都锁定版本，以免将来 cme2d 和 cme-core 在升级时产生兼容问题，并对您的项目造成未知的影响。</p>
        </div>
      </div>
    </template> -->
  </SampleLayout>
</template>

<script setup>
import SampleLayout from '../components/SampleLayout.vue';
import { vClickLink } from './../directives/vClickLink';

const dataInfo = [{
  cate: '4类',
  label: '50种基础功能组件',
  desc: '提供地图加载和基础交互及事件等功能',
  href: '#baseFns'
}, {
  cate: '4类',
  label: '20种数据显示组件',
  desc: '提供实况、预报、卫星和雷达等数据上图功能',
  href: '#meteoLayer'
}, {
  cate: '4类',
  label: '20种数据分析组件',
  desc: '提供多种要素廓线和时序图表等功能',
  href: '#observationData'
}, {
  cate: '11类',
  label: '50种业务组件',
  desc: '提供格点编辑、MICAPS工具箱等功能',
  href: '#businessComponent'
}];
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.labelStyle {
  background: #3291FD33;
  color: #0071E3;
}

.oneline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.page-title {
  @include flex(flex-start, center);
  @include setFont(56px, 66px);

  .bubble {
    display: inline-block;
    @include setBox(96px, 54px);
    margin-left: 10px;
    margin-top: 10px;
    @include setFont(26px, 52px, 600);
    text-align: center;
    @extend .labelStyle;
    border-radius: 0px 27px 27px 27px;
  }

  .new-icon {
    position: relative;
    top: 4px;
    @include setBox(76px, 32px);
  }
}

.page-desc {
  margin-top: 20px;
  @include setFont(28px, 40px);
}

.info-list {
  display: flex;
  width: 100%;
  height: 206px;
  margin-top: 40px;
  padding: 32px 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 10px -10px 20px 0px #ffffff4d, -10px 10px 20px 0px #d9d9d980;

  .info-item {
    flex: 1;
    padding: 14px;
    border-radius: 8px;
    background: #F8FCFF;
    box-shadow: inset -2px 2px 3px 0px #ffffff80;

    .lbl1 {
      display: inline-block;
      @include setBox($height: 34px, $padding: 0 12px);
      @extend .labelStyle;
      @include setFont(18px, 32px, 600);
      border-radius: 20px;
    }

    .lbl2 {
      display: block;
      margin-top: 16px;
      color: #566b8e;
      @include setFont(26px, 36px, 600);
      text-align: right;
    }

    .desc {
      @include setFont(16px, 22px);
      color: #566b8e;
      text-align: right;
      @extend .oneline;
    }

    &:hover {
      cursor: pointer;
      color: #ffffff;
      background: linear-gradient(47deg, #83D9FF 0%, #3291FD 100%);
      box-shadow: 0px 10px 38px 0px #0090ff52, inset -2px 2px 3px 0px #ffffff80, inset 2px -2px 3px 0px #2b98e985;
      border-radius: 8px;

      .desc,
      label {
        cursor: pointer;
        color: #ffffff;
      }

      .lbl2 {
        text-decoration: underline;
      }

    }
  }

  .splitor {
    max-width: 0;
    height: 100%;
    margin: 0 26px;
    border: 1px dashed #d3e6e7;
  }
}

.module-box {
  padding: 60px 60px 30px;

  .box-title {
    @include setFont(40px, 56px, 500);
  }

  .sub-title {
    margin: 30px 0 10px;
    @include setFont(24px, 32px);
  }

  .line {
    @include setFont(16px, 28px);
    color: #566b8e;
  }

  code {
    display: block;
    padding: 20px 24px;
    margin: 10px 0;
    background-color: #fafafa;
    color: #566b8e;
    font-family: Consolas, serif, sans-serif;
    border-radius: 8px;
    border: 1px solid #edf0fb;
  }

  .tip-box {
    padding: 24px;
    margin-top: 20px;
    background-color: #ecf8ff;
    border-left: 5px solid #50bfff;
    border-radius: 4px;
  }
}
</style>
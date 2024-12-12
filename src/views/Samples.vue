<template>
  <SampleLayout type="components">
    <template #page-head>
      <h3 class="page-title">组件服务 <span class="bubble">116种</span></h3>
      <p class="page-desc">
        按照组件仓库要求封装平台底层地图渲染引擎，集成数据展示、数据交互、交互编辑、剖面分析、图表制作等组件，支撑二三维一体化的业务需求，解决算法集约、应用规范、服务统一等问题。
      </p>
      <div class="info-list">
        <a href="#baseFns" class="info-item">
          <label class="lbl1">4+大类</label>
          <label class="lbl2">50+基础功能组件</label>
          <p class="desc">提供地图加载和基础交互及事件等功能</p>
        </a>
        <span class="splitor"></span>
        <a href="#meteoLayer" class="info-item">
          <label class="lbl1">4+大类</label>
          <label class="lbl2">20+气象图层组件</label>
          <p class="desc">提供实况、预报、卫星和雷达等数据上图功能</p>
        </a>
        <!-- <a href="#meteoLayer" class="info-item">20+<label>气象图层组件</label></a> -->
        <span class="splitor"></span>
        <a href="#observationData" class="info-item">
          <label class="lbl1">2+大类</label>
          <label class="lbl2">20+新型观测资料组件</label>
          <p class="desc">提供多种要素廓线和时序图表等功能</p>
        </a>
        <!-- <a href="#observationData" class="info-item">8+<label>新型观测资料组件</label></a> -->
        <span class="splitor"></span>
        <!-- <a href="#businessComponent" class="info-item">8+<label>业务组件</label></a> -->
        <a href="#businessComponent" class="info-item">
          <label class="lbl1">2+大类</label>
          <label class="lbl2">8+业务组件</label>
          <p class="desc">提供格点编辑等功能</p>
        </a>
      </div>
    </template>
  </SampleLayout>
</template>

<script setup>
import SampleLayout from '../components/SampleLayout.vue';
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
</style>
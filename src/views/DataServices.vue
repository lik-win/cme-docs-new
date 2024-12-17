<template>
  <SampleLayout type="dataServices">
    <template #page-head>
      <h3 class="page-title">数据服务 <span class="bubble">930种</span></h3>
      <p class="page-desc">
        针对业务应用特点，对各类数据进行结构和存储的差异化设计，提供模式资料、雷达资料、卫星资料等基础数据访问，实现各类数据的汇集、加工和管理，推出COGTIF瓦片服务以及基于IOTDB的查询服务。解决数据规范、存储集约、应用效率等问题。
      </p>
      <div class="info-list">
        <a data-href="#modeData" class="info-item">
          <label class="lbl1">18类</label>
          <label class="lbl2">815种模式资料</label>
          <p class="desc">MESO_1KM、EC、NCEP等模式</p>
        </a>
        <span class="splitor"></span>
        <a data-href="#radar" class="info-item">
          <label class="lbl1">5类</label>
          <label class="lbl2">20种雷达资料</label>
          <p class="desc">组合反射率、X波段雷达等资料</p>
        </a>
        <span class="splitor"></span>
        <a data-href="#satellite" class="info-item">
          <label class="lbl1">7类</label>
          <label class="lbl2">30种卫星资料</label>
          <p class="desc">FY4B、FY3G、HIMAWARI-9等资料</p>
        </a>
        <span class="splitor"></span>
        <a data-href="#largeModel" class="info-item">
          <label class="lbl1">6类</label>
          <label class="lbl2">54种大模型资料</label>
          <p class="desc">风清、风乌、风雷、盘古等大模型</p>
        </a>
        <span class="splitor"></span>
        <a data-href="#businessComponent" class="info-item">
          <label class="lbl1">6类</label>
          <label class="lbl2">11种高空资料</label>
          <p class="desc">风廓线、微波辐射计等资料</p>
        </a>
        <!-- <span class="splitor"></span>
        <a data-href="#businessComponent" class="info-item">
          <label class="lbl1">6类</label>
          <label class="lbl2">11种地面资料</label>
          <p class="desc">风廓线、微波辐射计等资料</p>
        </a> -->
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
  padding: 32px 20px;
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

      &.nodata {
        pointer-events: none;
        background-color: transparent !important;
        visibility: hidden;
      }
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
    margin: 0 16px;
    border: 1px dashed #d3e6e7;
  }
}
</style>
<template>
  <SampleLayout type="components">
    <template #page-head>
      <h3 class="page-title">组件服务</h3>
      <p class="page-desc">
        按照组件仓库要求封装平台底层地图渲染引擎，集成数据展示、数据交互、交互编辑、剖面分析、图表制作等组件，支撑二三维一体化的业务需求，解决算法集约、应用规范、服务统一等问题。
      </p>
      <div class="info-list">
        <a href="#baseFns" class="info-item">50+<label>基础功能组件</label></a>
        <span class="splitor"></span>
        <a href="#meteoLayer" class="info-item">20+<label>气象图层组件</label></a>
        <span class="splitor"></span>
        <a href="#observationData" class="info-item">8+<label>新型观测资料组件</label></a>
        <span class="splitor"></span>
        <a href="#businessComponent" class="info-item">8+<label>业务组件</label></a>
      </div>
    </template>
  </SampleLayout>
</template>

<script setup>
import SampleLayout from '../components/SampleLayout.vue';
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.page-title {
  margin-top: 30px;
  @include setFont(54px, 60px, 600);
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
  padding: 32px 70px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 10px -10px 20px 0px rgba(255, 255, 255, 0.3),
    -10px 10px 20px 0px rgba(217, 217, 217, 0.5);

  .info-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 32px;
    border-radius: 8px;
    @include setFont(32px, 40px, 600);
    color: var(--text-color);

    label {
      margin-top: 16px;
      color: #566b8e;
      @include setFont(28px, 40px, 500);
    }

    &:hover {
      cursor: pointer;
      color: #ffffff;
      background: linear-gradient(47deg, #83D9FF 0%, #3291FD 100%);
      box-shadow: 0px 10px 38px 0px #0090ff52, inset -2px 2px 3px 0px #ffffff80, inset 2px -2px 3px 0px #2b98e985;

      label {
        cursor: pointer;
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }

  .splitor {
    max-width: 0;
    height: 100%;
    margin: 0 60px;
    border: 1px dashed #d3e6e7;
  }
}
</style>
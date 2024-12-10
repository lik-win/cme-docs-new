<template>
  <SampleLayout type="dataServices">
    <template #page-head>
      <h3 class="page-title">数据服务（185项）</h3>
      <p class="page-desc">
        针对业务前端应用特点，定制针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析、地球系统数值模式等基础数据访问，管理智能数字预报、灾害性天气预报预警、气象风险预警与影响预报等各类数字化预报信息，实现各类数据的节约报销的汇集、处理、管理和服务，解决数据规范、存储集约、应用效率等问题。
      </p>
      <div class="info-list">
        <a href="#baseFns" class="info-item">
          9+<label>模式</label>
          70+<label>模式资料</label>
        </a>
        <span class="splitor"></span>
        <a href="#meteoLayer" class="info-item">10+<label>雷达资料</label></a>
        <span class="splitor"></span>
        <a href="#observationData" class="info-item">10+<label>卫星资料</label></a>
        <span class="splitor"></span>
        <a href="#businessComponent" class="info-item">37+<label>大模型资料</label></a>
        <span class="splitor"></span>
        <a href="#businessComponent" class="info-item">2+<label>高空资料</label></a>
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
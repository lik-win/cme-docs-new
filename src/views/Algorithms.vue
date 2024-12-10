<template>
  <SampleLayout type="algorithms">
    <template #page-head>
      <h3 class="page-title">算法服务</h3>
      <p class="page-desc">
        按照微服务框架进行算法服务集的建设，以实现数字预报员为目标，结合气象客观分析算法与大预报模型产品，利用人工智能与大数据应用技术实现面向智能感知、智能诊断、智能研判、智能生成等服务，为各类前端应用场景提供统一的算法服务支撑。
      </p>
      <div class="info-list">
        <a href="#meteoAlgorithms" class="info-item">50+<label>气象基础算法</label></a>
        <span class="splitor"></span>
        <a href="#smartCongnition" class="info-item">20+<label>智能感知</label></a>
        <span class="splitor"></span>
        <a href="#intelligentJudgment" class="info-item">8+<label>智能研判</label></a>
        <span class="splitor"></span>
        <a href="#smartAssessment" class="info-item">8+<label>智能诊断</label></a>
        <span class="splitor"></span>
        <a href="#businessComponent" class="info-item">8+<label>智能产品加工</label></a>
        <span class="splitor"></span>
        <a href="#ai" class="info-item">1+<label>AI算法集成</label></a>
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
  padding: 32px 30px;
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
    margin: 0 20px;
    border: 1px dashed #d3e6e7;
  }
}
</style>
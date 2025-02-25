<template>
  <SampleLayout type="algorithms">
    <template #page-head>
      <h3 class="page-title">
        算法服务
        <span class="bubble">300种</span>
        <!-- <img class="new-icon" src="./../assets/images/icons/icon-new.webp"> -->
      </h3>
      <p class="page-desc">
        按照微服务框架进行算法服务集的建设，以实现数字预报员为目标，结合气象客观分析算法与大预报模型产品，利用人工智能与大数据应用技术实现面向智能感知、智能诊断、智能研判、智能生成等服务，为各类前端应用场景提供统一的算法服务支撑。
      </p>
      <div class="info-list">
        <template v-for="(item, idx) in dataInfo">
          <a v-clickLink :data-href="item.href" class="info-item">
            <!-- <label class="lbl1 nodata"></label> -->
            <label class="lbl2">{{ item.label }}</label>
            <p class="desc">{{ item.desc }}</p>
          </a>
          <span v-if="idx < dataInfo.length - 1" class="splitor"></span>
        </template>
      </div>
    </template>
  </SampleLayout>
</template>

<script setup>
import SampleLayout from '../components/SampleLayout.vue';
import { vClickLink } from './../directives/vClickLink';

const dataInfo = [{
  label: '50种基础算法',
  desc: '模式数据计算、穿透算法等',
  href: '#meteoAlgorithms'
}, {
  label: '20种智能感知',
  desc: '灾害性天气识别、实时统计分析等服务',
  href: '#intelligentperception'
}, {
  label: '8种智能研判',
  desc: '协同编辑、校验服务等算法',
  href: '#intelligentJudgment'
}, {
  label: '8种智能诊断',
  desc: '天气系统识别、天气智能诊断等',
  href: '#smartAssessment'
}, {
  label: '8种智能加工',
  desc: '全国及区域专题图生成等算法',
  href: '#Intelligentmachining'
  // }, {
  //   label: '1种AI算法',
  //   desc: '语音调用服务',
  //   href: '#AI'
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
  padding: 32px 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 10px -10px 20px 0px #ffffff4d, -10px 10px 20px 0px #d9d9d980;

  .info-item {
    position: relative;
    flex: 1;
    padding: 14px;
    border-radius: 8px;
    background: #F8FCFF;
    box-shadow: inset -2px 2px 3px 0px #ffffff80;

    &:first-of-type {
      min-width: 260px;
    }

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
      // text-align: right;
      text-align: left;
    }

    .desc {
      margin-top: 24px;
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
    margin: 0 20px;
    border: 1px dashed #d3e6e7;
  }
}
</style>
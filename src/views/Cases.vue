<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
// @ts-ignore
import img_taihai from './../assets/images/cases/cases-taihai.png';
// @ts-ignore
import img_dalian from './../assets/images/cases/cases-dalian.png';
// @ts-ignore
import img_yydh from './../assets/images/cases/cases-yydh.png';
// @ts-ignore
import img_dmx from './../assets/images/cases/cases-dmx.png';
// @ts-ignore
import img_cztl from './../assets/images/cases/cases-cztl.png';
// @ts-ignore
import img_3d from './../assets/images/cases/cases-3d.png';
// @ts-ignore
import img_dlyb from './../assets/images/cases/cases-dlyb.png';
const { push } = useRouter()
interface Item {
  image: string
  title: string
  link: string
  desc: string
}
const list = ref(<Array<Item>>[
  {
    title: '海洋支撑应用平台',
    image: img_taihai,
    link: 'http://10.20.107.239:930/taihai/#/home',
    desc: '该案例使用CME一体化开发平台，通过接入CME平台卫星、雷达等数据资料，预测并分析台风，为强对流天气提供预报预警服务'
  },
  {
    title: '远洋导航业务平台',
    image: img_yydh,
    link: 'http://10.20.107.239:854/daohang/#/home',
    desc: '该案例是专为船舶设计的智能导航系统，结合CME的气象要素分析与航行风险预警技术，通过对全球气象数据、海洋环境监测信息以及船舶实时状态，为船舶提供精确的航线规划和动态调整。'
  },
  {
    title: '川藏铁路气象保障预报预警与共享系统',
    image: img_cztl,
    link: 'http://10.40.82.36:4399/czbz#/czbz',
    desc: '该案例为川藏铁路智能气象服务平台，集实时监测、精细预报、风险预警和保障服务于一体，通过先进的气象技术为铁路安全运行提供全面支持。系统涵盖多个功能模块，结合可视化设计与气象数据处理技术，确保服务的高效性与可靠性。'
  },
  {
    title: '大连气象防灾减灾服务保障系统',
    image: img_dalian,
    link: 'http://10.1.64.146/dalian/#/liveMonitoring',
    desc: '该案例整合实时监测与数值预报能力，为用户提供覆盖全面、精准可靠的气象信息服务。针对特定行业和场景，助力用户进行科学决策与风险管理，提供精细化的网格化数据编辑能力，支持用户根据具体需求对网格气象数据进行调整'
  },
  {
    title: '智能网格预报应用分析平台',
    image: img_dmx,
    link: 'http://10.1.64.146/nwfd/index.html#/bigModel',
    desc: '该案例包含了多种领先的气象大模型，包括风清，伏羲，风乌，FourCast，GraphCaseNet、盘古，通过数据可视化表达形式，提供了核心要素的展示和预测，依托先进气象大模型，实现对未来天气趋势的精准把握'
  },
  {
    title: '三维展示系统',
    image: img_3d,
    link: 'http://cme.leonhan.com:9995/#/home',
    desc: '该案例为CME平台3D示例项目，项目实现了风场、风粒子动画、台风三维体、三维云等3D效果'
  },
  {
    title: '中国气象局短临预报业务平台(SWAN3.0)',
    image: img_dlyb,
    link: 'http://10.1.64.146/swan3/#/WeatherMonitoring',
    desc: '即将焕新'
  },
  {
    title: '虚位以待',
    image: img_dlyb,
    desc: '开放共享，共铸经典'
  }
]);
</script>

<template>
  <div class="scene">
    <!-- banner区域 -->
    <div class="banner">
      <div class="text-container">
        <!-- <p class="top-title">引领行业创新发展，塑造未来气象服务新高度</p> -->
        <p class="center-title">开放共享，共铸经典</p>
        <p class="bottom-title">
          从科技创新到服务升级，树立行业新标准；以精准气象助力发展，开创未来新篇章
        </p>
      </div>
    </div>
    <!-- 列表区域 -->
    <div class="list-container">
      <template v-for="item in list">
        <a :href="item.link" target="_blank" class="card">
          <div class="img">
            <h4 class="title">{{ item.title }}</h4>
            <img :src="item.image">
          </div>
          <div class="text-container">
            <div class="content"> {{ item.desc }} </div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.scene {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  overflow-y: auto;

  .banner {
    width: 100%;
    height: 526px;
    background: red;
    background: url('../assets/images/scene2X.png') no-repeat center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    .text-container {
      width: 60%;
      text-align: center;

      >p {
        color: #ffffff;
        font-size: 20px;
        font-weight: 300;

        &.top-title {
          margin-bottom: 20px;
        }

        &.center-title {
          font-weight: 400;
          font-size: 60px;
          margin-bottom: 40px;
        }
      }
    }
  }

  .list-container {
    width: 100%;
    height: auto;
    padding: 42px 100px 0;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    grid-gap: 50px;

    .card {
      box-shadow:
        10px -10px 20px 0px rgba(255, 255, 255, 0.3),
        -10px 10px 20px 0px rgba(217, 217, 217, 0.5);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e4e4e4;
      transition: scale 0.3s linear;
      cursor: pointer;

      &:last-of-type .img::after {
        content: "";
        @include position(absolute, $left: 0, $top: 0);
        @include setBox(100%, 100%);
        backdrop-filter: blur(20px);
      }

      &:hover {
        scale: 1.05;
      }

      .img {
        position: relative;
        @include flex(center, center);
        width: 100%;
        aspect-ratio: 16 / 10;

        img {
          @include position(absolute, $top: 0, $left: 0);
        }

        .title {
          @include setBox($height: 44px, $padding: 0 16px);
          @include setFont(18px, 44px, 600);
          background-color: #ffffff;
          border-radius: 30px;
          color: #323439;
          z-index: 1;
        }
      }

      .text-container {
        padding: 10px;

        .title {
          font-size: 20px;
          line-height: 36px;
          font-weight: 600;
        }

        .content {
          overflow: hidden; // 隐藏溢出的内容
          display: -webkit-box; // 使用弹性盒子布局
          -webkit-box-orient: vertical; // 设置盒子的子元素排列方式为垂直
          -webkit-line-clamp: 3; // 限制在一个块元素显示的文本的行数
        }
      }
    }

    >div {
      width: calc(100% / 3);
    }
  }
}
</style>

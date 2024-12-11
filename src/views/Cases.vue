<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
// @ts-ignore
import img_taihai from './../assets/images/cases/cases-taihai.png';
import img_dalian from './../assets/images/cases/cases-dalian.png';
import img_yydh from './../assets/images/cases/cases-yydh.png';
import img_dmx from './../assets/images/cases/cases-dmx.png';
import img_cztl from './../assets/images/cases/cases-cztl.png';
import img_3d from './../assets/images/cases/cases-3d.png';
const { push } = useRouter()
interface Item {
  image: string
  title: string
  link: string
  desc: string
}
const list = ref(<Array<Item>>[
  {
    title: '省级支撑应用平台',
    image: img_taihai,
    link: 'http://10.20.107.239:930/taihai/#/home',
    desc: '使用CME一体化开发平台，对'
  },
  {
    title: '大连气象防灾减灾服务保障系统',
    image: img_dalian,
    link: 'http://10.1.64.146/dalian/#/liveMonitoring',
    desc: ''
  },
  {
    title: '远洋导航业务平台',
    image: img_yydh,
    link: 'http://10.20.107.239:854/daohang/#/home',
    desc: ''
  },
  {
    title: '智能网格预报应用分析平台',
    image: img_dmx,
    link: 'http://10.1.64.146/nwfd/index.html#/bigModel',
    desc: ''
  },
  {
    title: '川藏铁路气象保障预报预警与共享系统',
    image: img_cztl,
    link: 'http://10.40.82.36:4399/czbz#/czbz',
    desc: ''
  },
  {
    title: '天气业务一体化平台',
    image: img_3d,
    link: 'http://cme.leonhan.com:9995/#/home',
    desc: ''
  },
]);


</script>

<template>
  <div class="scene">
    <!-- banner区域 -->
    <div class="banner">
      <div class="text-container">
        <p class="top-title">
          引领行业创新发展，塑造未来气象服务新高度
        </p>
        <p class="center-title">树立气象领域新标杆，开启行业新征程</p>
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
            <img :src="item.image" alt="">
          </div>
          <div class="text-container">
            <div class="title">{{ item.title }}</div>
            <div class="content">
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
            </div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scene {
  width: 100%;
  height: 100%;
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
    padding: 42px 80px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .card {
      // margin-bottom: 40px;
      width: calc(100% / 3 - 20px);
      box-shadow:
        10px -10px 20px 0px rgba(255, 255, 255, 0.3),
        -10px 10px 20px 0px rgba(217, 217, 217, 0.5);
      border-radius: 8px;
      border: 1px solid #e4e4e4;
      transition: scale 0.3s linear;
      padding: 0;
      cursor: pointer;

      &:hover {
        scale: 1.05;
      }

      .img {
        height: 329px;
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

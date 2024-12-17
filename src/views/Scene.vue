<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import windy from '../assets/images/scene/windy.jpg'
// @ts-ignore
import d3 from '../assets/images/scene/scenes-3d.png'
// @ts-ignore
import defaultJpg from '../assets/images/scene/default.jpg'
interface Item {
  id: number
  image: string
  type: string
  title: string
  desc: string
}
const list = ref(<Array<Item>>[
  {
    id: 3,
    title: '默认风格',
    type: 'default',
    image: defaultJpg,
    desc: '在默认风格下，气象信息的显示较为简洁，主要展示基本的天气数据，如温度和降水量，并以静态图层呈现。与简约风格的动态风场和多样化气象层相比，默认风格更注重地图的可读性和易用性，减少了视觉干扰，适合于需要清晰地图呈现的场景。',
  },
  {
    id: 1,
    title: '简约风格',
    type: 'windy',
    image: windy,
    desc: '简约风格的地图是一种专注于气象数据可视化的地图展示方式，主要特点是通过动态风场、气象层和高分辨率数据呈现全球天气状况。该风格地图采用实时更新的气象信息，支持风速、风向、气温、降水量、气压等多种气象要素的显示，并以流动的箭头和渐变色表示，直观反映天气变化。用户可以根据需求自由切换不同的气象图层、调整显示参数，甚至查看历史和未来天气数据。此外，简约风格地图通过精确的动画和交互设计，增强了用户对气象信息的理解和应用，提供了极具实用性的气象预警与分析工具。',
  },
  {
    id: 2,
    title: '3D风格',
    type: '3d',
    image: d3,
    desc: '该风格通过三维渲染技术呈现气象数据和地形特征，增强了用户的空间感和视觉深度。与传统二维地图不同，使用户能够更直观地感知天气变化和气象数据的空间分布。该风格特别强调气象信息的立体化表现，展示了风速、降水量、气温等气象要素的色彩渐变与立体效果，并且可以在三维视角下实时查看不同天气层次的变化。用户可以自由旋转、缩放视角，精确观察特定区域的气象数据和地理特征，适用于需要气象分析和动态气象预测的场景。',
  }
]);

function download(item: Item) { }
</script>

<template>
  <div class="cases">
    <!-- <iframe src="/scenes/windy/index.html" frameborder="0"></iframe> -->
    <!-- banner区域 -->
    <div class="banner">
      <div class="text-container">
        <!-- <p class="top-title">引领行业创新发展，塑造未来气象服务新高度</p> -->
        <p class="center-title">解锁多种应用风格，满足多场景业务开发</p>
        <p class="bottom-title">
          基于开放式框架，满足从数据到算法到组件全流程全场景开发
        </p>
      </div>
    </div>
    <!-- 列表区域 -->
    <div class="list-container">
      <div class="card" v-for="(item, index) in list">
        <template v-if="index % 2 == 0">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <div class="text-container">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.desc }}
            </div>
            <div class="button" @click="download(item)">下载</div>
          </div>
        </template>
        <template v-else>
          <div class="text-container">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.desc }}
            </div>
            <div class="button" @click="download(item)">下载</div>
          </div>
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cases {
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
    display: flex;
    flex-direction: column;

    .card {
      width: 100%;
      flex: 1;
      padding: 80px 160px;
      display: flex;
      align-items: center;
      gap: 30px;
      background: linear-gradient(136deg,
          rgba(217, 253, 255, 0.29) 0%,
          #f0f6ff 22%,
          #d9e9ff 100%);
      transition: all 0.3s linear;
      cursor: pointer;

      &:hover {
        scale: 1.02;
      }

      &:nth-child(2n) {
        background: none;

        .img {
          background: linear-gradient(315deg, #ebf8ff 0%, #e6ecff 100%);
        }
      }

      .img {
        flex: 1;
        height: 464px;
        background: linear-gradient(315deg, #ebf8ff 0%, #e6ecff 100%);
        padding: 10px;
        backdrop-filter: blur(10px);
        box-sizing: border-box;
        border: 1px solid #e3e3e3;
        border-radius: 8px;
      }

      .text-container {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
          position: relative;
          font-size: 36px;
          color: #323439;
          line-height: 50px;
          text-align: left;
          font-style: normal;
          transition: all 0.3s linear;
          z-index: 3;

          &::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 20%;
            height: 60%;
            background: linear-gradient(90deg, #b3e5fc 0%, #e0f7fa 100%);
            z-index: -1;
          }
        }

        .content {
          font-size: 18px;
          color: #323439;
        }

        .button {
          width: 126px;
          height: 40px;
          text-align: center;
          line-height: 30px;
          background-color: #0071E3;
          color: white;
          padding: 5px 20px;
          text-decoration: none;
          border-radius: 20px;
          transition: 0.2s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    >div {
      width: calc(100% / 3);
    }
  }
}
</style>

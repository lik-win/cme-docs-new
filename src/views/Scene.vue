<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import feat1 from '../assets/images/feat1.webp'
const { push } = useRouter()
interface Item {
  id: number
  image: string
  type: string
  title: string
  desc: string
}
const list = ref(<Array<Item>>[
  { id: 1, title: 'Windy风格', type: 'windy', image: feat1, desc: '' },
  { id: 2, title: '3D风格', type: '3d', image: feat1, desc: '' },
  { id: 3, title: '默认风格', type: 'default', image: feat1, desc: '' },
])

function handleClick(item: Item) {
  push({
    path: `/scenes/${item.type}`,
  })
}
</script>

<template>
  <div class="cases">
    <!-- <iframe src="/scenes/windy/index.html" frameborder="0"></iframe> -->
    <!-- banner区域 -->
    <!-- <div class="banner">
      <div class="text-container">
        <p class="top-title">123</p>
        <p class="center-title">树立气象领域新标杆，开启行业新征程</p>
        <p class="bottom-title">
          树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程
        </p>
      </div>
    </div> -->
    <!-- 列表区域 -->
    <div class="list-container">
      <div
        class="card"
        v-for="(item, index) in list"
        @click="handleClick(item)"
      >
        <template v-if="index % 2 == 0">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <div class="text-container">
            <div class="title">{{ item.title }}</div>
            <div class="content">
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析、地球系统数值模式等基础数据访问，管理智能数字预报、灾害性天气预报预警、气象风险预警与影响预报等各类数字化预报信息，实现各类数据的集约高效的汇集、处理、管理和服务，，解决数据规范、存储集约、应用效率等问题。
            </div>
          </div>
        </template>
        <template v-else>
          <div class="text-container">
            <div class="title">{{ item.title }}</div>
            <div class="content">
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析、地球系统数值模式等基础数据访问，管理智能数字预报、灾害性天气预报预警、气象风险预警与影响预报等各类数字化预报信息，实现各类数据的集约高效的汇集、处理、管理和服务，，解决数据规范、存储集约、应用效率等问题。
            </div>
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
      > p {
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
      background: linear-gradient(
        136deg,
        rgba(217, 253, 255, 0.29) 0%,
        #f0f6ff 22%,
        #d9e9ff 100%
      );
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
        padding: 20px;
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
        .title {
          font-family:
            PingFangSC,
            PingFang SC;
          font-size: 36px;
          color: #323439;
          line-height: 50px;
          text-align: left;
          font-style: normal;
        }
        .content {
          font-size: 18px;
          // overflow: hidden; // 隐藏溢出的内容
          // display: -webkit-box; // 使用弹性盒子布局
          // -webkit-box-orient: vertical; // 设置盒子的子元素排列方式为垂直
          // -webkit-line-clamp: 3; // 限制在一个块元素显示的文本的行数
        }
      }
    }
    > div {
      width: calc(100% / 3);
    }
  }
}
</style>

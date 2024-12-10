<template>
  <div class="cases">
    <!-- banner区域 -->
    <div class="banner">
      <!-- 文字区域 -->
      <div class="text-container">
        <p class="top-title">123</p>
        <p class="center-title">树立气象领域新标杆，开启行业新征程</p>
        <p class="bottom-title">
          树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程
        </p>
      </div>
    </div>
    <!-- 列表区域 -->
    <div class="list-container">
      <div class="card" v-for="(item, index) in 12">
        <template v-if="index % 2 == 0">
          <div class="text-container">
            <div class="title">案例1</div>
            <div class="content">
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
            </div>
          </div>
          <div class="img">img</div>
        </template>
        <template v-else>
          <div class="img">img</div>
          <div class="text-container">
            <div class="title">案例1</div>
            <div class="content">
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
              这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// iframe {
//   width: 100%;
//   height: 100%;
//   border: none;
//   background-color: #ffffff;
// }

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

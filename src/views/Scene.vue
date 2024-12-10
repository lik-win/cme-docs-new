<template>
  <!-- <iframe src="/scenes/windy/index.html" frameborder="0"></iframe> -->
  <div class="scene">
    <!-- banner区域 -->
    <div class="banner">
      <!-- 文字区域 -->
      <div class="text-container">
        <p class="top-title">
          气象领域气象领域气象领域气象领域气象领域气象领域气象领域气象领域气象领域气象领域
        </p>
        <p class="center-title">树立气象领域新标杆，开启行业新征程</p>
        <p class="bottom-title">
          树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程树立气象领域新标杆，开启行业新征程
        </p>
      </div>
    </div>
    <!-- 列表区域 -->
    <div class="list-container">
      <div class="card" v-for="item in 12">
        <div class="img">img</div>
        <div class="text-container">
          <div class="title">案例1</div>
          <div class="content">
            这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
            这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
            这是一条待替换的文案针对业务前端应用特点，制定针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析
          </div>
        </div>
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
    padding: 42px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .card {
      margin-bottom: 40px;
      width: calc(100% / 3 - 20px);
      box-shadow:
        10px -10px 20px 0px rgba(255, 255, 255, 0.3),
        -10px 10px 20px 0px rgba(217, 217, 217, 0.5);
      border-radius: 8px;
      border: 1px solid #e4e4e4;
      transition: scale 0.3s linear;
      padding: 0;

      &:hover {
        scale: 1.05;
      }

      .img {
        height: 329px;
      }

      .text-container {
        padding: 10px;
        .title {
        }
        .content {
          overflow: hidden; // 隐藏溢出的内容
          display: -webkit-box; // 使用弹性盒子布局
          -webkit-box-orient: vertical; // 设置盒子的子元素排列方式为垂直
          -webkit-line-clamp: 3; // 限制在一个块元素显示的文本的行数
        }
      }
      }
    > div {
      width: calc(100% / 3);
    }
  }
}
</style>

<template>
  <div class="home-view">
    <div class="panel1">
      <div class="content">
        <p class="line1">新一代气象WEB开发<span>框架、</span><span>服务</span></p>
        <p class="line2">网络化支撑气象业务</p>
        <p class="line3">针对气象、海洋数据的二三位Web端可视化引擎，基于B/S技术实现Micaps应用功能</p>
      </div>
      <img class="globe" src="./../assets/images/globe.webp">
    </div>
    <div class="panel4">
      <div class="card2 radius8">
        <span class="count">20</span>
        <span class="msg">3月更新组件</span>
      </div>
      <div class="card2 radius8">
        <span class="count">200</span>
        <span class="msg">已服务项目</span>
      </div>
      <div class="card2 radius8">
        <span class="count">8926</span>
        <span class="msg">提供接口服务</span>
      </div>
      <div class="card2 radius8">
        <span class="count">109</span>
        <span class="msg">独家版权算法</span>
      </div>
    </div>
    <div class="panel5">
      <h3 class="title">技术特点</h3>
      <div class="block">
        <div class="left-box1">
          <h4 class="block-title">因云而生，与云共生</h4>
          <p class="block-desc">
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
        </div>
        <div class="right-box1">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
      </div>
      <div class="block">
        <div class="left-box2">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
        <div class="right-box2">
          <h4 class="block-title">因云而生，与云共生</h4>
          <p class="block-desc">
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
        </div>
      </div>
      <div class="block">
        <div class="left-box1">
          <h4 class="block-title">模型驱动，数字智能</h4>
          <p class="block-desc">搭建开放共享的天气预报模型库提供统一齐整的标准数据集(DataSet)提供开源的模型调试与运行框架(Framework)</p>
          <p class="block-desc">提供气象模型版本管理仓库(Hub)提供自动化部署检验评估工具链使用/下载情况统计</p>
        </div>
        <div class="right-box1">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
      </div>
      <div class="block">
        <div class="left-box2">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
        <div class="right-box2">
          <h4 class="block-title">弹性开放、复用扩展</h4>
          <p class="block-desc">
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
        </div>
      </div>
      <div class="block">
        <div class="left-box1">
          <h4 class="block-title">拖弋定制、快速构建</h4>
          <p class="block-desc">
            基于代码生成器，代码自动生成后可以下载本地，进行二次开发，有效提高整体开发效率。实现了界面化流程的建模，使得流程设计变得简单和可操作，用户通过拖、拉、点、拽即可快速实现流程设计。</p>
        </div>
        <div class="right-box1">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
      </div>
      <div class="block">
        <div class="left-box2">
          <div class="img-box color1">
            <img src="../assets/images/feat6.webp">
          </div>
        </div>
        <div class="right-box2">
          <h4 class="block-title">自主可控，持续迭代</h4>
          <p class="block-desc">
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
        </div>
      </div>
    </div>
    <el-footer>
      <a class="logo"></a>
      <p class="team">© 国家气象中心天气业务一体化平台团队</p>
    </el-footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.home-view {
  @include setBox(100%, 100%);
  overflow-y: auto;
}

.panel1 {
  position: relative;
  height: 680px;
  background: url("./../assets/images/sky.webp") no-repeat center;
  user-select: none;

  .content {
    @include position(absolute, $top: 140px, $left: 360px);

    .line1 {
      position: relative;
      @include setBox(510px, 196px);
      margin-bottom: 40px;
      @include setFont(70px, 98px);
      color: #ffffff;

      span {
        padding: 0 10px;
        color: transparent;
        font-size: inherit;

        &:last-child {
          position: absolute;
          right: 34px;
        }

        -webkit-text-stroke-color: #ffffff;
        -webkit-text-stroke-width: 1px;
      }
    }

    .line2 {
      @include setFont(24px, 32px);
      color: #FFFFFF;
    }

    .line3 {
      margin: 10px 0;
      @include setFont(14px, 24px);
      color: var(--text-color2);
    }
  }

  .globe {
    @include position(absolute, $top: 50px, $right: 350px);
    @include setBox(580px, 580px);
  }
}

$bg_dark: linear-gradient(135deg, #1C1D1F 0%, #26272A 100%);
$bg_light1: linear-gradient(153deg, #ECF2FF 0%, #FFFFFF 100%);
$bg_light2: linear-gradient(153deg, #F3FEFD 0%, #FFFFFF 100%);
$bg_light3: linear-gradient(153deg, #FFF8F5 0%, #FFFFFF 100%);
$bg_light4: linear-gradient(153deg, #F8F5FF 0%, #FFFFFF 100%);

.panel4 {
  @include setBox(1390px, 800px, unset, 20px auto);
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 680px);
  grid-template-rows: repeat(2, 360px);
  grid-gap: 30px;

  .card2 {
    position: relative;

    &:nth-of-type(1) {
      @include setTheme('background', (dark: $bg_dark, light: $bg_light1 ));
    }

    &:nth-of-type(2) {
      @include setTheme('background', (dark: $bg_dark, light: $bg_light2 ));
    }

    &:nth-of-type(3) {
      @include setTheme('background', (dark: $bg_dark, light: $bg_light3 ));
    }

    &:nth-of-type(4) {
      @include setTheme('background', (dark: $bg_dark, light: $bg_light4 ));
    }

    &:nth-of-type(2n) {
      position: relative;
      top: 42px;
    }

    .count {
      @include position(absolute, 80px, 75px);
      @include setFont(100px, 80px);

      &::after {
        content: "+";
        @include setFont(80px, 80px);
        position: absolute;
        top: -30px;
      }
    }

    .msg {
      @include position(absolute, $bottom: 80px, $right: 80px);
      font-size: 20px;
    }
  }
}

.panel5 {
  overflow: hidden;

  .title {
    @include setBox($margin: 60px 0);
    @include setFont(54px, 60px, 600);
    text-align: center;
  }

  .block {
    display: flex;
    @include setBox($margin: 70px 0);

    .block-title {
      @include setFont(54px, 60px);
      margin-bottom: 20px;
    }

    .block-desc {
      margin-top: 20px;
      @include setFont(28px, 44px);
      color: #424349;
    }

    .img-box {
      position: relative;
      width: 100%;
      border: 25px solid;
      border-radius: 40px;

      overflow: hidden;

      img {
        height: 580px;
      }
    }

    .color1 {
      border-color: #d6eefb;
    }
  }

  .left-box1 {
    @include flex(center, flex-start, column);
    width: 46%;
    padding-left: 200px;
    padding-right: 30px;
  }

  .right-box1 {
    width: 54%;

    .img-box {
      right: -45px;
    }
  }

  .right-box2 {
    @include flex(center, flex-start, column);
    width: 46%;
    padding-right: 200px;
    padding-left: 30px;
  }

  .left-box2 {
    width: 54%;

    .img-box {
      left: -45px;
    }
  }
}

.el-footer {
  @include flex(center, center);
  background-color: var(--background-color2);

  .logo {
    @include setBox(106px, 24px);
    background: url("./assets/images/logo.webp") no-repeat center;
    background-size: 100% 100%;
  }

  .team {
    margin-left: 20px;
    padding-left: 20px;
    border-left: var(--cme-border);
  }
}
</style>
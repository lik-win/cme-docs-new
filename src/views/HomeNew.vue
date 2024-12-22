<template>
  <div v-wheel class="home-view">
    <el-carousel ref="scrollRef" :autoplay="false" trigger="click" arrow="always">
      <el-carousel-item class="panel1">
        <video class="globe" ref="videoRef" muted loop autoplay :src="videoUrl"></video>
        <div class="content">
          <p class="line2">
            <span><i class="first-letter">C</i>loud</span>
            <span><i class="first-letter">M</i>ICAPS</span>
            <span><i class="first-letter">E</i>ngine</span>
            是基于“云+端”组件化的新一代气象信息综合应用分析处理应用开发框架。
          </p>
          <p class="line3">
            使命：CME打造先进智能、集约高效的气象业务开发底座，支撑数字精准、业务协同的预报预警业务场景，增强智慧精细、开放融合的气象业务服务能力，构建协同众创、组件共享的国省应用发展生态。
          </p>
          <p class="line4">
            愿景：CME致力于连接预报员、气象信息和服务用户。
          </p>
        </div>
      </el-carousel-item>
      <el-carousel-item class="panel2">
        <div class="card-box">
          <router-link to="/algorithms" class="card2 radius8">
            <span class="count">300</span>
            <span class="msg">专业算法</span>
            <span class="desc">基础气象算法、智能感知、智能研判、智能诊断和智能服务生成</span>
          </router-link>
          <router-link to="/data-services" class="card2 radius8">
            <span class="count">930</span>
            <span class="msg">数据服务</span>
            <span class="desc">各类模式、雷达、卫星、高空和大模型等资料服务</span>
          </router-link>
          <router-link to="/components" class="card2 radius8">
            <span class="count">140</span>
            <span class="msg">组件服务</span>
            <span class="desc">基础功能、数据显示组件、数据分析组件和业务组件
            </span>
          </router-link>
          <router-link to="/scenes" class="card2 radius8">
            <span class="count">5</span>
            <span class="msg">开发工具</span>
            <span class="desc">提供数据、算法、组件到应用场景全链条开发工具</span>
          </router-link>
        </div>
      </el-carousel-item>
      <el-carousel-item label="云" class="panel3 block-box1">
        <div class="block">
          <div class="left-box1">
            <h4 class="block-title" data-feat="云">因云而生，与云共生</h4>
            <p class="block-desc">
              CME致力于打造云原生应用生态，以微服务形式构建云端发布的组件、算法和服务，形成运行稳定、技术可靠的组件共享、算法共享、服务共享的可持续迭代升级的应用框架，CME依托天擎云环境为基础，以气象智脑为核心、数字服务平台为支撑打造气象业务多场景应用。
            </p>
          </div>
          <div class="right-box1">
            <div class="img-box shadow1">
              <img src="../assets/images/home-yygs.png">
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item label="网" class="panel3 block-box1">
        <div class="block">
          <div class="left-box2">
            <div class="img-box shadow2">
              <img src="../assets/images/home-jyhl.png">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title" data-feat="网">集约互联，协同共享</h4>
            <p class="block-desc">
              CME采用敏感分析、误差追踪等技术，实现与“四大支柱”之间的左右贯通；通过实时协同、快速交互、会商研判、自动制作发布等功能，实现国家级业务、国省业务间实时协同共建一张网。 </p>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item label="智" class="panel3 block-box2">
        <div class="block right30">
          <div class="left-box1">
            <h4 class="block-title white" data-feat="智">模型驱动，数字智能</h4>
            <p class="block-desc white">
              CME以气象智脑为核心，引入大语言模型技术实现“AI Agent”的构建，围绕智能数字预报服务业务主线构建数字化业务流程，实现观测、预报、加工和服务无缝隙衔接，通过“智能核心”掌控全流程，通过模型驱动全方位数字智能。</p>
          </div>
          <div class="right-box1">
            <div class="img-box">
              <img src="../assets/images/home-mxqd.png">
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item label="富" class="panel3 block-box2">
        <div class="block left30">
          <div class="left-box2">
            <div class="img-box offset30">
              <img src="../assets/images/home-txkf.webp">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title white" data-feat="富">弹性开放、复用扩展</h4>
            <p class="block-desc white">
              CME由开放式应用框架与组件库组成，其中开放式应用框架实现天气监测、预报、预警和服务业务流程中整体框架和核心功能的抽象和泛化，组件库提供包含气象图层、交互制作、智能产品加工、业务协同、统计查询、智能支撑等各类具体处理逻辑和交互功能组件，支撑多元化业务场景应用。
            </p>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item label="捷" class="panel3 block-box3">
        <div class="block">
          <div class="left-box1">
            <h4 class="block-title" data-feat="捷">敏捷开发、快速构建</h4>
            <p class="block-desc">
              CME制定组件、算法及服务注册发布规则，提供根据场景需要拖拽应用场景的框架，支撑实况、预报、短临、决策等业务平台快速搭建，满足不同应用场景，极大提升服务效率与便捷性。
            </p>
          </div>
          <div class="right-box1">
            <div class="img-box center">
              <img class="radius30" src="../assets/gifs/tydz.gif">
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item label="安" class="panel3 block-box3">
        <div class="block">
          <div class="left-box2">
            <div class="img-box right bg">
              <img src="../assets/gifs/zzkk.gif">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title" data-feat="安">自主可控，持续迭代</h4>
            <p class="block-desc">
              CME完全遵循遵循国家信息技术相关标准、中国局业务软件统筹发展要求、大数据云平台规范，实行软件工程项目全过程规范化管理；围绕平台建设需求制定组件、算法、服务及应用场景等一系列开发规范，确保平台可持续优化及安全可控。
            </p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';


const videoUrl = '/cme/videos/3dearth.mp4';
const videoEl = useTemplateRef('videoRef');
const scrollEl = useTemplateRef('scrollRef');
onMounted(() => {
  videoEl.value.playbackRate += 1;
});

function onKeydown(e) {
  console.log(e.keyCode);
  if (e.keyCode === 37 || e.keyCode === 38) {
    scrollEl.value.prev();
  } else if (e.keyCode === 39 || e.keyCode === 40) {
    scrollEl.value.next();
  }
}

const vWheel = {
  mounted(el) {
    let deltaY = 0;
    let pending = false;
    el.addEventListener('wheel', e => {
      if (pending) return;
      deltaY += Math.sign(e.deltaY) * 1;
      if (Math.abs(deltaY) < 3) return;
      const method = deltaY < 0 ? 'prev' : 'next';
      deltaY = 0;
      pending = true;
      scrollEl.value[method]();
      setTimeout(() => pending = false, 1000);
    });
    window.addEventListener('keydown', onKeydown);
  },
  beforeMount() {
    window.removeEventListener('keydown', onkeydown);
  }
};

</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.home-view {
  position: relative;
  @include setBox(100%, calc(100vh - 70px));
  overflow: hidden;

  .el-carousel,
  .el-carousel-item,
  :deep(.el-carousel__container) {
    height: 100%;
  }

  &::after {
    content: "";
    @include position(absolute, $left: 140px, $top: 20px);
    @include setBox(320px, 170px);
    background: url("./../assets/images/cme.webp") no-repeat center;
    background-size: 100% 100%;
  }
}

.panel1 {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("./../assets/images/sky1.webp") no-repeat center;
  background-size: 100% 100%;
  user-select: none;

  .content {
    margin-left: 220px;
    @include setBox(1400px, 600px);
    color: #ffffff;
    z-index: 1;

    .line2 {
      margin-top: 40px;
      @include setFont(56px, 72px, 200);
      transform: scaleX(0.85);
      transform-origin: 0 0;

      span {
        margin-right: 18px;
        @include setFont(inherit, inherit, inherit);

        &:last-child {
          margin-right: 0;
        }

        .first-letter {
          @include setFont(inherit, inherit, inherit);
          color: #0671e6;
        }
      }
    }

    .line3 {
      @include setBox(810px);
      margin-top: 80px;
      @include setFont(24px, 30px, 100);
      transform: scaleY(1.15);
    }

    .line4 {
      @include setBox(810px);
      margin-top: 40px;
      @include setFont(24px, 30px, 100);
      transform: scaleY(1.15);
    }
  }

  .globe {
    @include position(absolute, $right: 100px);
    @include setBox(840px, 840px);
    clip-path: circle(41.9%);
    pointer-events: none;
  }
}

$bg_dark1: linear-gradient(135deg, #070D1B 0%, #203358 100%);
$bg_dark2: linear-gradient(47deg, #203358 0%, #070D1B 100%);
$bg_dark3: linear-gradient(225deg, #203358 0%, #070D1B 100%);
$bg_dark4: linear-gradient(135deg, #203358 0%, #070D1B 100%);
$bg_light1: linear-gradient(153deg, #ECF2FF 0%, #FFFFFF 100%);
$bg_light2: linear-gradient(153deg, #F3FEFD 0%, #FFFFFF 100%);
$bg_light3: linear-gradient(153deg, #FFF8F5 0%, #FFFFFF 100%);
$bg_light4: linear-gradient(153deg, #F8F5FF 0%, #FFFFFF 100%);

.panel2 {
  @include setBox(100%, 100%);
  @include flex(center, center);
  background: url("./../assets/images/panelbg3.webp") no-repeat center;
  background-size: 100% 100%;

  .card-box {
    @include setBox(1390px, 800px, unset, auto);
    display: grid;
    grid-template-columns: repeat(2, 680px);
    grid-template-rows: repeat(2, 360px);
    grid-gap: 30px;
  }

  .card2 {
    position: relative;
    color: #ffffff;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      // transform: scale(1.05);
      box-shadow: 0 0 10px #2f446f;
    }

    &:nth-of-type(1) {
      @include setTheme('background', (dark: $bg_dark1, light: $bg_dark1 ));
    }

    &:nth-of-type(2) {
      @include setTheme('background', (dark: $bg_dark2, light: $bg_dark2 ));
    }

    &:nth-of-type(3) {
      @include setTheme('background', (dark: $bg_dark3, light: $bg_dark3 ));
    }

    &:nth-of-type(4) {
      @include setTheme('background', (dark: $bg_dark4, light: $bg_dark4 ));
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
      @include setFont(32px, 45px, 400);
    }

    .desc {
      @include position(absolute, $bottom: 30px, $right: 80px);
      @include setFont(20px, 28px, 400);
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.panel3 {
  @include flex(center, center);

  &.block-box1 {
    background: url("./../assets/images/homebg4.jpg") no-repeat center;
    background-size: 100% 100%;
  }

  &.block-box2 {
    background: url("./../assets/images/homebg5.webp") no-repeat center;
    background-size: cover;
  }

  &.block-box3 {
    background: url("./../assets/images/homebg6.jpg") no-repeat center;
    background-size: cover;
  }

  .panel-title {
    @include setBox($margin: 50px 0);
    @include setFont(56px, 66px);
    text-align: center;

    .title-prefix {
      @include position(relative, $left: 8px, $top: -4px);
      @include setBox(50px, 50px);
    }
  }

  .block {
    display: flex;
    @include setBox($padding: 60px 0);
    z-index: 1;

    .white {
      color: #ffffff !important;
    }

    .blue {
      font-size: inherit;
      color: #0671e6;
    }

    .block-title {
      position: relative;
      @include setFont(50px, 70px);
      margin-bottom: 20px;
      color: #ffffff;

      &::before {
        content: attr(data-feat);
        @include position(absolute, $top: -44px);
        @include setBox(44px, 44px);
        @include setFont(24px, 42px, 600);
        color: #ffffff;
        text-align: center;
        background: linear-gradient(135deg, #369AFF 0%, #0052E3 100%);
        border-radius: 25px;
        z-index: 1;
      }

      &::after {
        content: "";
        @include position(absolute, $top: -44px, $left: 0);
        @include setBox(50px, 50px);
        background: linear-gradient(135deg, #369AFF 0%, #0052E3 100%);
        border-radius: 25px;
        opacity: 0.25;
      }
    }

    .block-desc {
      margin-top: 20px;
      @include setFont(28px, 40px);
      // color: #424349;
      color: #ffffff;
    }

    .img-box {
      position: relative;
      width: 994px;
      height: 560px;
      border-radius: 30px;

      overflow: hidden;

      &.center {
        text-align: center;
      }

      &.right {
        text-align: right;
      }

      &.bg {
        background: url("./../assets/images/home-imgbg.webp") no-repeat center;
        background-size: 100% 100%;
      }

      &.shadow1 {
        box-shadow: -2px 2px 8px #e4e4e4;
      }

      &.shadow2 {
        box-shadow: 2px -2px 8px #e4e4e4;
      }

      .radius30 {
        border-radius: 30px;
      }
    }
  }

  .left-box1 {
    @include flex(center, flex-start, column);
    width: 46%;
    padding-left: 200px;
    padding-right: 60px;
  }

  .right-box1 {
    width: 54%;
    padding-right: 38px;
  }

  .right-box2 {
    @include flex(center, flex-start, column);
    width: 46%;
    padding-right: 200px;
    padding-left: 60px;
  }

  .left-box2 {
    width: 54%;
    padding-left: 38px;
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
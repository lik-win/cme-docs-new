<template>
  <div class="home-view">
    <div class="slide-box">
      <div class="panel1">
        <video class="globe" ref="videoRef" muted loop autoplay :src="videoUrl"></video>
        <div class="content">
          <div class="line1">
            <span class="intro">简介</span>
          </div>
          <p class="line2">
            以预报服务应用功能为基础，依托“云+端”技术体系开发的一种组件化、可插拔的轻量级WEB支撑框架。
          </p>
          <p class="line3">
            使命：CME身负技术引领与创新、满足多样化需求、提升预报服务能力、保障安全与可靠性、促进气象业务发展等多项使命
          </p>
          <p class="line4">
            愿景：CME框架旨在提供一个灵活、高效且易于扩展的平台，以支持多场景气象业务的发展。通过采用组件化和可插拔的设计思想，CME能够方便地集成各种气象预报、监测和服务功能，满足不同地区和领域对气象信息的多样化需求
          </p>
        </div>
      </div>
      <div class="panel2"></div>
      <div class="panel4">
        <div class="card-box">
          <router-link to="/algorithms" class="card2 radius8">
            <span class="count">95</span>
            <span class="msg">独家版权算法</span>
            <span class="desc">智能感知、智能研判、智能诊断和智能服务生成</span>
          </router-link>
          <router-link to="/data-services" class="card2 radius8">
            <span class="count">930</span>
            <span class="msg">数据服务</span>
            <span class="desc">提供各类模式、雷达、卫星、高空和大模型等资料服务</span>
          </router-link>
          <router-link to="/components" class="card2 radius8">
            <span class="count">116</span>
            <span class="msg">组件服务</span>
            <span class="desc">集成数据上图和图表展示、交互、编辑、分析等能力</span>
          </router-link>
          <router-link to="/scenes" class="card2 radius8">
            <span class="count">3</span>
            <span class="msg">场景应用</span>
            <span class="desc">提供多种经典场景和3D等场景开发能力</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="panel5">
      <h3 class="panel-title">
        <img class="title-prefix" src="./../assets/images/icons/title-prefix.webp">
        技术特点
      </h3>
      <div class="block-box box1">
        <div class="block">
          <div class="left-box1">
            <h4 class="block-title">因云而生，与云共生</h4>
            <p class="block-desc">
              天气业务一体化平台致力于云原生生态，已微服形式打造运行稳定、技术可靠的组件共享、平台共享、应用共享，可持续交的平台，天气业务一体化平台依托天擎云环境已气象智脑为核心，数字服务平台为支撑构建气象业务多场景应用。
            </p>
          </div>
          <div class="right-box1">
            <div class="img-box">
              <img src="../assets/images/home-yygs.png">
            </div>
          </div>
        </div>
        <div class="block left30">
          <div class="left-box2">
            <div class="img-box">
              <img src="../assets/images/home-jyhl.png">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title">集约互联，协同共享</h4>
            <p class="block-desc">
              天气业务一体化平台集成各类气象数据要素，支撑国省市县四级业务数据上下协同，与国家级业务单位左右贯通，实现预报服务内外打通，构建共织预报预警风险一张网业务流程 </p>
          </div>
        </div>
      </div>
      <div class="block-box box2">
        <div class="block right30">
          <div class="left-box1">
            <h4 class="block-title white">模型驱动，数字智能</h4>
            <p class="block-desc white">基于大模型驱动，融合多源气象数据、专业气象算法，构建从数据处理、模型分析到场景应用的全链条智能化气象解决方案，助力气象业务的数字化与精准化发展。</p>
          </div>
          <div class="right-box1">
            <div class="img-box">
              <img src="../assets/images/home-mxqd.png">
            </div>
          </div>
        </div>
        <div class="block left30">
          <div class="left-box2">
            <div class="img-box offset30">
              <img src="../assets/images/home-txkf.png">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title  white">弹性开放、复用扩展</h4>
            <p class="block-desc white">
              天气业务一体化平台框架由开放式应用框架与组件库组成，为场景开发提供基础编码环境，其中开放式应用框架实现天气监测、预报、预警和服务业务流程中的整体框架和核心功能抽象和泛化，组件库提供包含气象图层组件集、交互制作组件集、智能产品加工组件集、业务协同组件集、统计查询组件集、智能支撑组件集等各类具体处理逻辑和交互功能组件，支撑多元化业务场景应用。
            </p>
          </div>
        </div>
      </div>
      <div class="block-box box3">
        <div class="block">
          <div class="left-box1">
            <h4 class="block-title">拖弋定制、快速构建</h4>
            <p class="block-desc">
              依托功能完备的组件库以及灵活高效的平台集成规则，能够迅速根据场景需要拖拽出界面友好、简洁直观的低代码应用场景；系统提供丰富多样的自定义气象业务功能组件，既可以从预设的多套业务（数据）主题模板中选择应用，也可进行深度定制；气象服务人员无需编写代码，仅用鼠标拖拽，就能轻松变更功能模块与数据展示区域的位置、大小与顺序，满足不同应用场景，极大提升服务效率与便捷性。
            </p>
          </div>
          <div class="right-box1">
            <div class="img-box center">
              <img class="radius30" src="../assets/gifs/tydz.gif">
            </div>
          </div>
        </div>
        <div class="block">
          <div class="left-box2">
            <div class="img-box right bg">
              <img src="../assets/gifs/zzkk.gif">
            </div>
          </div>
          <div class="right-box2">
            <h4 class="block-title">自主可控，持续迭代</h4>
            <p class="block-desc">
              天气业务一体化平台致力于构建一个自主可控、持续迭代的技术生态系统。平台严格遵守信创原则。依照中国气象局的业务组件开发规范，确保业务组件的开发遵循开源、自主原则，保障技术透明度和可控性。同时对外提供框架开发手册、二次开发手册、多场景应用开发手册、应用场景开发规范等一系列开发标准，确保平台组件可以达到持续优化以及安全可控，以适应业务和技术的迭代。
            </p>
          </div>
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
import { onMounted, useTemplateRef } from 'vue';
const videoUrl = '/videos/3dearth.mp4';
const videoEl = useTemplateRef('videoRef');
onMounted(() => {
  videoEl.value.playbackRate += 1;

});

</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.home-view {
  @include setBox(100%, 100%);
  overflow-y: auto;
}

.panel1 {
  position: relative;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  background: url("./../assets/images/sky1.webp") no-repeat center;
  background-size: 100% 100%;
  user-select: none;

  .content {
    margin-left: 220px;
    // @include position(absolute, $top: 200px, $left: 220px);
    @include setBox(1400px, 600px);
    color: #ffffff;
    z-index: 1;

    .line1 {
      display: flex;
      align-items: center;

      .intro {
        @include setBox(116px, 40px);
        @include setFont(28px, 40px, 600);
        text-align: center;
        background: linear-gradient(270deg, hsla(84, 100%, 50%, 0) 0%, #7DFF0033 52%, rgba(98, 255, 0, 0) 100%);
      }
    }

    .line2 {
      @include setFont(56px, 78px, 600);
    }

    .line3 {
      @include setBox(810px);
      margin-top: 60px;
      @include setFont(32px, 44px, 600);
    }

    .line4 {
      @include setBox(810px);
      margin-top: 20px;
      @include setFont(32px, 44px, 600);
    }
  }

  .globe {
    @include position(absolute, $right: 100px);
    @include setBox(840px, 840px);
    clip-path: circle(41.9%);
    pointer-events: none;
  }
}

.panel2 {
  @include setBox(100%, 100vh);
  background: url('./../assets/images/panelbg2.webp') no-repeat center;
  background-size: 100% 100%;
}

$bg_dark1: linear-gradient(135deg, #070D1B 0%, #203358 100%);
$bg_dark2: linear-gradient(47deg, #203358 0%, #070D1B 100%);
$bg_dark3: linear-gradient(225deg, #203358 0%, #070D1B 100%);
$bg_dark4: linear-gradient(135deg, #203358 0%, #070D1B 100%);
$bg_light1: linear-gradient(153deg, #ECF2FF 0%, #FFFFFF 100%);
$bg_light2: linear-gradient(153deg, #F3FEFD 0%, #FFFFFF 100%);
$bg_light3: linear-gradient(153deg, #FFF8F5 0%, #FFFFFF 100%);
$bg_light4: linear-gradient(153deg, #F8F5FF 0%, #FFFFFF 100%);

.panel4 {
  @include setBox(100%, 100vh, 100px 0);
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
      transform: scale(1.05);
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

.panel5 {
  overflow: hidden;

  .block-box.box1 {
    background: url("./../assets/images/homebg4.webp") no-repeat center;
    background-size: cover;
  }

  .block-box.box2 {
    background: url("./../assets/images/homebg5.webp") no-repeat center;
    background-size: cover;
  }

  .block-box.box3 {
    background: url("./../assets/images/homebg6.webp") no-repeat center;
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

    &.left30 {
      position: relative;
      left: -30px;
    }

    &.right30 {
      position: relative;
      right: -30px;
    }

    .white {
      color: #ffffff !important;
    }

    .blue {
      font-size: inherit;
      color: #0671e6;
    }

    .block-title {
      @include setFont(50px, 70px);
      margin-bottom: 20px;
      color: #1C1D1F;
    }

    .block-desc {
      margin-top: 20px;
      @include setFont(28px, 40px);
      color: #424349;
    }

    .img-box {
      position: relative;
      width: 1033px;
      height: 584px;
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

      // img {
      //   @include setBox(auto, auto);
      // }

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
  }

  .right-box2 {
    @include flex(center, flex-start, column);
    width: 46%;
    padding-right: 200px;
    padding-left: 60px;
  }

  .left-box2 {
    width: 54%;
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
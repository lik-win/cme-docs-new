<template>
  <div class="page-sample">
    <div class="page-head">
      <h3 class="page-title">算法服务</h3>
      <p class="page-desc">
        针对业务前端应用特点，定制针对业务应用的数据存储结构和存储类型，提供立体观测、三维实况分析、地球系统数值模式等基础数据访问，管理智能数字预报、灾害性天气预报预警、气象风险预警与影响预报等各类数字化预报信息，实现各类数据的节约报销的汇集、处理、管理和服务，解决数据规范、存储集约、应用效率等问题。
      </p>
      <div class="info-list">
        <a href="#meteoAlgorithms" class="info-item">50+<label>气象基础算法</label></a>
        <span class="splitor"></span>
        <a href="#smartCongnition" class="info-item">20+<label>智能感知</label></a>
        <span class="splitor"></span>
        <a href="#intelligentJudgment" class="info-item">8+<label>智能研判</label></a>
        <span class="splitor"></span>
        <a href="#smartAssessment" class="info-item">8+<label>智能诊断</label></a>
        <span class="splitor"></span>
        <a href="#businessComponent" class="info-item">8+<label>智能产品加工</label></a>
      </div>
    </div>
    <el-aside>
      <TreeMenu :menus="store.menus"></TreeMenu>
    </el-aside>
    <el-main class="content">
      <template v-for="item in store.menus">
        <div :id="item.path" class="list-box">
          <p class="box-title">{{ item.name }}</p>
          <p class="menu-desc">这是描述</p>
          <template v-for="sub in item.children">
            <p class="sub-title" :id="sub.path">{{ sub.name }}</p>
            <div class="list">
              <template v-for="eg in store.samples[sub.id]">
                <div class="item">
                  <router-link class="img-box" :to="`/algorithms/${eg.id}`">
                    <img :src="eg.cover">
                  </router-link>
                  <p class="name">
                    {{ eg.title }}
                    <span v-if="eg.latestVersion" class="version">{{ eg.latestVersion }}</span>
                  </p>
                  <p class="pub-date">发布 {{ eg.updateTime.split(/\s/)[0] }}</p>
                </div>
              </template>
            </div>
          </template>
        </div>
      </template>
    </el-main>
  </div>
</template>

<script setup>
import TreeMenu from './../components/TreeMenu.vue';
import { useGlobal } from './../store/index.js';
const store = useGlobal();
store.updateMenus('algorithms');
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.page-sample {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 590px auto;
  grid-template-columns: 360px auto;
  grid-row-gap: 40px;
  background-color: var(--background-color);

  .page-head {
    grid-column-start: span 2;
    border-bottom: 1px solid #dcdddf;
  }
}

.page-head {
  padding: 60px 84px;
  background: linear-gradient(136deg, rgba(217, 253, 255, 0.29) 0%, #F0F6FF 22%, #D9E9FF 100%);

  .page-title {
    margin-top: 30px;
    @include setFont(54px, 60px, 600);
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
    padding: 32px 70px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 10px -10px 20px 0px rgba(255, 255, 255, 0.3),
      -10px 10px 20px 0px rgba(217, 217, 217, 0.5);

    .info-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 32px;
      border-radius: 8px;
      @include setFont(32px, 40px, 600);
      color: var(--text-color);

      label {
        margin-top: 16px;
        color: #566b8e;
        font-size: 28px;
      }

      &:hover {
        cursor: pointer;
        color: #ffffff;
        background: linear-gradient(47deg, #83D9FF 0%, #3291FD 100%);
        box-shadow: 0px 10px 38px 0px #0090ff52, inset -2px 2px 3px 0px #ffffff80, inset 2px -2px 3px 0px #2b98e985;

        label {
          cursor: pointer;
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }

    .splitor {
      max-width: 0;
      height: 100%;
      margin: 0 50px;
      border: 1px dashed #d3e6e7;
    }
  }
}

.el-aside {
  // @include position(fixed, $top: 60px);
  width: 360px;
  height: calc(100% - 120px);
}

.content {
  flex: 1;
  padding-top: 0;
  padding-left: 32px;
  padding-right: 50px;
  // margin-left: 360px;
  border-left: 1px solid #FFFFFF19;
}

.anchor {
  display: block;
  padding: 0 12px;
  height: 40px;
  line-height: 40px;
  color: #ffffffa6;

  &:hover {
    color: #ffffff;
    background-color: #333333;
  }
}

.list-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  .box-title {
    margin-bottom: 20px;
    padding-left: 14px;
    @include setFont(40px, 56px, 500);
  }

  .menu-desc {
    padding-left: 14px;
  }

  .sub-title {
    margin: 16px 0;
    padding-left: 14px;
    @include setFont(24px, 32px);
  }

  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 14px;
    padding: 10px 0;
    min-width: 400px;

    .item {
      display: inline-block;
      padding: 10px;
      border: 4px dashed transparent;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        border-color: #47a1fe;
        background-color: #47a1fe22;

        .name {
          font-weight: 700;
        }

        .version {
          background-color: #47a1fe !important;
          border-color: #47a1fe !important;
          color: #ffffff;
        }
      }

      .img-box {
        display: inline-block;
        width: 100%;
        aspect-ratio: 1;
        margin-bottom: 12px;
        border-radius: 8px;
        overflow: hidden;
      }



      .name {
        margin-bottom: 8px;
        @include setFont(16px, 20px);
        color: var(--text-color3);

        span {
          padding: 0 6px;
          margin-left: 4px;
        }

        .version {
          @include setTheme('background-color', (dark: var(--text-color-active)));
          @include setTheme('border', (light: 1px solid var(--text-color2)));
          font-size: 12px;
          background-color: var(--background-color5);
          border-radius: 20px;
        }
      }

      .pub-date {
        color: var(--text-color2);
      }
    }
  }
}
</style>
<template>
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
                <router-link class="img-box" :to="`/example/${eg.id}`">
                  <img :src="eg.cover">
                </router-link>
                <p class="name">
                  {{ eg.title }}
                  <span v-if="eg.latestVersion" class="new">{{ eg.latestVersion }}</span>
                </p>
                <p class="pub-date">发布 {{ eg.updateTime.split(/\s/)[0] }}</p>
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>
  </el-main>
</template>

<script setup>
import TreeMenu from './../components/TreeMenu.vue';
import { useGlobal } from './../store/index.js';
const store = useGlobal();
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.el-aside {
  @include position(fixed, $top: 60px);
  width: 360px;
  height: calc(100% - 120px);
}

.content {
  flex: 1;
  padding-top: 0;
  padding-left: 32px;
  padding-right: 50px;
  margin-left: 360px;
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
    @include setFont(40px, 56px, 500);
  }

  .sub-title {
    margin: 16px 0;
    @include setFont(24px, 32px);
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 224px);
    grid-gap: 28px;
    padding: 10px 0;
    min-width: 400px;

    // .item {
    //   display: flex;
    //   flex-direction: column;
    //   color: #333333;
    //   line-height: 32px;

    //   img {
    //     width: 100%;
    //   }
    // }

    .item {
      display: inline-block;

      .img-box {
        display: inline-block;
        @include setBox(224px, 224px);
        margin-bottom: 12px;
      }

      .name {
        margin-bottom: 8px;
        @include setFont(14px, 16px);
        color: var(--text-color3);

        span {
          padding: 0 6px;
          margin-left: 4px;
        }

        .new {
          background-color: #0071E3;
          border-radius: 10px;
        }
      }

      .pub-date {
        color: var(--text-color2);
      }
    }
  }
}
</style>
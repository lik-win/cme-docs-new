<template>
  <el-aside>
    <TreeMenu></TreeMenu>
  </el-aside>
  <el-main class="content">
    <template v-for="item in menus">
      <div :id="item.listId" class="list-box">
        <p class="box-title">{{ item.title }}</p>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="小类1" name="first" />
          <el-tab-pane label="小类2" name="second" />
          <el-tab-pane label="小类3" name="third" />
          <el-tab-pane label="小类4" name="fourth" />
        </el-tabs>
        <div class="list">
          <template v-for="sub in item.children">
            <div class="item">
              <a class="img-box" :href="`/${routeBase}/example/${item.path}/${sub.path}`">
                <img src="./../../assets/images/feat1.webp">
              </a>
              <p class="name">{{ sub.title }} <span class="new">v1.0</span></p>
              <p class="pub-date">发布 2024-10-01</p>
            </div>
          </template>
        </div>
      </div>
    </template>
  </el-main>
</template>

<script setup>
import { ref } from 'vue';
import { menus } from './../../router/index.js';
import { routeBase } from './../../router/index.js';
import TreeMenu from '../../components/TreeMenu.vue';
const activeName = ref('first');


console.log('menus =>', menus);
</script>

<style lang="scss" scoped>
@import "./../../assets/mixins.scss";

.el-aside {
  @include position(sticky, $top: 0);
  width: 360px;
  border-right: 1px solid #FFFFFF19;
}

.content {
  flex: 1;
  padding-top: 0;
  padding-left: 32px;
  padding-right: 50px;
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
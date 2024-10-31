<template>
  <el-aside>
    <template v-for="item in menus">
      <a class="anchor" :href="`#${item.listId}`">{{ item.title }}</a>
    </template>
  </el-aside>
  <el-main class="content">
    <template v-for="item in menus">
      <div :id="item.listId" class="list-box">
        <p class="box-title">{{ item.title }}</p>
        <div class="list">
          <template v-for="sub in item.children">
            <a class="item" :href="`/${routeBase}/example/${item.path}/${sub.path}`">
              <img :src="sub.cover">
              <p class="title">{{ sub.title }}</p>
            </a>
          </template>
        </div>
      </div>
    </template>
  </el-main>
</template>

<script setup>
// import docList from './assets/linkList.js';
import { menus } from './../../router/index.js';
import { routeBase } from './../../router/index.js';

console.log('menus =>', menus);
</script>

<style lang="scss" scoped>
.el-aside {
  width: 180px;
  background-color: #252525;
  color: #ffffffa6;
}

.content {
  flex: 1;
  scroll-behavior: smooth;
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

@media screen and (max-width: 1500px) {
  .list-box .list {
    grid-template-columns: repeat(5, 1fr) !important;
  }
}

@media screen and (max-width: 1280px) {
  .list-box .list {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media screen and (max-width: 1000px) {
  .list-box .list {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media screen and (max-width: 800px) {
  .list-box .list {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

.list-box {
  display: flex;
  flex-direction: column;

  .box-title {
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #cccccc;
  }

  .list {
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    padding: 10px 0;
    min-width: 400px;

    .item {
      display: flex;
      flex-direction: column;
      color: #333333;
      line-height: 32px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
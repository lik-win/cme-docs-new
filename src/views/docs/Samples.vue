<template>
  <el-aside>
    <template v-for="item in docList">
      <a class="anchor" :href="`#${item.listId}`">{{ item.listTitle }}</a>
    </template>
  </el-aside>
  <el-main class="content">
    <template v-for="item in docList">
      <div :id="item.listId" class="list-box">
        <p class="box-title">{{ item.listTitle }}</p>
        <div class="list">
          <template v-for="sub in item.children">
            <a class="item" :href="`/${routeBase}${sub.link}`">
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
import docList from './docList.js';
import { routeBase } from './../../router/index.js';

</script>

<style lang="scss" scoped>
.el-aside {
  width: 180px;
  background-color: #252525;
  color: #ffffffa6;
}

.content {
  flex: 1;
  min-width: 1000px;
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
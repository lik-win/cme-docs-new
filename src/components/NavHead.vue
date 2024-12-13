<template>
  <div class="cme-nav">
    <router-link class="logo" to="/index"></router-link>
    <div class="nav-list">
      <router-link class="link" :class="{ active: menuIdx === 0 }" to="/index">首页</router-link>
      <router-link class="link" :class="{ active: menuIdx === 1 }" to="/data-services">数据服务</router-link>
      <router-link class="link" :class="{ active: menuIdx === 2 }" to="/algorithms">算法服务</router-link>
      <router-link class="link" :class="{ active: menuIdx === 3 }" to="/components">组件服务</router-link>
      <router-link class="link" :class="{ active: menuIdx === 4 }" to="/scenes">场景开发</router-link>
      <router-link class="link" :class="{ active: menuIdx === 5 }" to="/cases">经典案例</router-link>
      <!-- <router-link class="link" :class="{ active: menuIdx === 6 }" to="/support">技术支持</router-link> -->
      <!-- <a class="link">开发者中心</a> -->
    </div>
    <div class="login-box">
      <!-- <div class="search-box"></div>
      <a class="link btn-login">开发者登录</a> -->
    </div>
  </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { meta } = router.currentRoute.value;
const menu = ref(meta.cate || 'index');

const menus = ['index', 'dataServices', 'algorithms', 'components', 'scenes', 'cases', 'support'];
const menuIdx = computed(() => menus.indexOf(menu.value));

watch(router.currentRoute, route => {
  menu.value = route.meta.cate;
});

</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.cme-nav {
  @include flex(space-between, center);
  @include setBox(100%, 60px, 0 200px);
  user-select: none;

  .logo {
    @include setBox(100px, 30px);
    background: url("./../assets/images/logo1.webp") no-repeat center;
    background-size: 100% 100%;
  }

  .link {
    @include setBox($height: 30px);
    margin-left: 60px;
    line-height: 28px;
    opacity: 0.7;
    transition: 0.2s;
    color: #ffffff;

    &.btn-login {
      padding: 0 15px;
      border: var(--cme-border);
      border-radius: 15px;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }
    }

    &.active,
    &:hover {
      opacity: 1;
    }
  }

  .login-box {
    // @include position(absolute, $right: 200px);
    @include flex(flex-start, center);
    width: 200px;

    .search-box {
      @include setBox(20px, 20px);
      background: url("./../assets/images/icons/icon-search.webp") no-repeat center;
    }

    .btn-login {
      margin-left: 20px;
    }
  }
}
</style>

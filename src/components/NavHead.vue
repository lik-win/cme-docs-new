<template>
  <div class="cme-nav">
    <router-link class="logo" to="/index"></router-link>
    <div class="nav-list">
      <router-link class="link active" to="/index">首页</router-link>
      <router-link class="link" to="/samples">插件资源</router-link>
      <router-link class="link" to="/samples">API服务</router-link>
      <router-link class="link" to="/samples">应用案例</router-link>
      <a class="link">开发者中心</a>
    </div>
    <div class="login-box">
      <div class="search-box"></div>
      <a class="link btn-login">开发者登录</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.cme-nav {
  @include flex(space-between, center);
  @include setBox(1200px, 60px);
  user-select: none;

  .logo {
    @include setBox(100px, 30px);
    background: url("./../assets/images/logo1.webp") no-repeat center;
    background-size: 100% 100%;
  }

  .link {
    @include setBox($height: 30px, $padding: 0 20px);
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
}
</style>

<template>
  <el-config-provider size="small">
    <div class="cme-layout">
      <el-header>
        <NavHead></NavHead>
      </el-header>
      <div class="content-view">
        <router-view />
      </div>
      <el-footer>
        <a class="logo"></a>
        <p class="team">© 国家气象中心天气业务一体化平台团队</p>
      </el-footer>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import NavHead from './components/NavHead.vue';
</script>

<style lang="scss" scoped>
@import './assets/mixins.scss';

.cme-layout {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  color: var(--text-color);
  scroll-behavior: smooth;
}

.dark-theme {
  background-color: #1C1D1F;
  color: #ffffff;
}

.el-header {
  position: sticky;
  top: 0;
  @include flex(center, center);
  @extend .dark-theme;
  padding: 0;
  z-index: 100;
}

.content-view {
  display: flex;
  flex: 1;

  :deep(.el-main) {
    overflow-x: hidden;
  }
}

.el-footer {
  @include flex(center, center);
  background-color: var(--background-color);

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
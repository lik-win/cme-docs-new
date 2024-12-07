<template>
  <el-config-provider size="small">
    <div class="cme-layout">
      <el-header>
        <NavHead></NavHead>
      </el-header>
      <div class="content-view">
        <router-view />
      </div>
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
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow: auto;
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
</style>
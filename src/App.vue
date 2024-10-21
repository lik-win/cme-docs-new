<template>
  <el-config-provider size="small">
    <el-container class="cme-layout">
      <el-header>
        <router-link to="/">CME服务支持网站</router-link>
      </el-header>
      <el-contianer class="content-view">
        <router-view />
      </el-contianer>
    </el-container>
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<style lang="scss" scoped>
.cme-layout {
  height: 100%;
  min-width: 1200px;
  overflow: hidden;
}

.dark-theme {
  background-color: #333333;
  color: #ffffff;
}

.el-header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  font-size: 20px;
  @extend .dark-theme;
}

.content-view {
  display: flex;
  flex: 1;
  overflow-y: hidden;
  overflow-x: auto;

  :deep(.el-main) {
    overflow-x: hidden;
  }
}
</style>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const { params } = useRoute()
</script>

<template>
  <iframe src="/scenes/windy/index.html" frameborder="0"></iframe>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ffffff;
}
</style>

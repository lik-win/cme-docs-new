<template>
  <div id="map-3d" class="map-box">
  </div>
</template>

<script setup lang="ts">
import * as CME3D from 'CME3D';
import { onMounted, ref } from 'vue';

onMounted(() => initMap());
const options = ref({
  navigationHelpButton: false,
  geocoder: false,
  vrButton: false,
  baseLayerPicker: false
})

const initMap = async () => {
  // 配置Cesium资源路径
  window.CESIUM_BASE_URL = '/libs/CME3D';
  let baseLayer = await CME3D.ImageryLayerFactory.createImageryLayer(
    CME3D.ImageryType.AMAP,
    { style: "img", crs: "WGS84" }
  );
  // 创建 Cesium Viewer 实例
  let viewer = new CME3D.Viewer('map-3d', {
    ...options,
    heading: 0,
    pitch: -90,
    roll: 0,
    center: [110.923, 32.482, 10000000]
  });
  viewer.addBaseLayer(baseLayer);
}

</script>

<style scoped>
.map-box,
:deep(.cesium-viewer),
:deep(.cesium-viewer-cesiumWidgetContainer),
:deep(.cesium-widget),
:deep(canvas) {
  width: 100%;
  height: 100%;
}
</style>
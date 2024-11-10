<template>
  <div id="map" class="map" ref="mapRef"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as CME3D from 'CME3D';
// import TileLayer from 'CME2D/layer/Tile.js';
// import XYZ from "CME2D/source/XYZ.js";
// import View from "CME2D/View.js";
// import Map from "CME2D/Map.js";

import CME2D from 'CME2D';
const { Map, View, source, layer } = CME2D;

const mapRef = ref(null);
let mapInstance = null;
// 地图初始化
function init2dMap() {
  return new Promise(resolve => {
    const map = new Map({
      target: mapRef.value,//挂载实例
      layers: [
        new layer.Tile({
          preload: Infinity, //开启预加载模式
          source: new source.XYZ({
            url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
          })
        })
      ],
      view: new View({ //地图视图
        center: [106, 35],
        projection: "EPSG:4326",
        zoom: 5,
        wrapX: true,
      }),//地图设置
      controls: [],//取消地图操作
    });
    map.once("postrender", () => resolve(map));
  });
}


const options = ref({
  navigationHelpButton: false,
  geocoder: false,
  vrButton: false,
  baseLayerPicker: false
})
function init3dMap() {
  // 配置Cesium资源路径
  window.CESIUM_BASE_URL = '/Cesium';
  let baseLayer = CME3D.ImageryLayerFactory.createImageryLayer(
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

function switchMap() {
  mapInstance?.dispose();

}

onMounted(() => {
  // 初始化地图
  init2dMap().then(map => {
    mapInstance = map;
    console.log(map);
  });
});
</script>

<style lang="css">
#map {
  width: 100%;
  height: 100%;
}
</style>

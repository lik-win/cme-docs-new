<template>
  <div id="map" class="map" ref="mapRef"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import TileLayer from 'CME2D/layer/Tile.js';
// import XYZ from "CME2D/source/XYZ.js";
// import View from "CME2D/View.js";
// import Map from "CME2D/Map.js"

import { Map, View, source, layer } from 'CME2D';

const mapRef = ref(null);

// 地图初始化
function initMap() {
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

onMounted(() => {
  // 初始化地图
  initMap().then(map => {
    console.log('地图初始化完成', map);
  });
});
</script>

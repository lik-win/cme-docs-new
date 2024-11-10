<template>
  <div id="map" class="map" ref="mapRef">
    <CME-GridRender ref="gridRef" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import TileLayer from 'CME2D/layer/Tile.js';
// import XYZ from "CME2D/source/XYZ.js";
// import View from "CME2D/View.js";
// import Map from "CME2D/Map.js";


import { Map, View, source, layer } from 'CME2D';

const mapRef = ref(null);
const gridRef = ref(null);

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

// 添加色斑图
function addSpot(map, url) {
  if (!gridRef.value) {
    throw Error('组件引用为空！');
  }
  const config = {
    name: "温度",
    id: "NAFP-TEM",
    textId: "NAFP-TEM_text",//文字图层名称
    element: "TEM",
    legendData: {
      legend: [
        [-36, [128, 0, 124, 0]],
        [-32, [0, 47, 134, 1]],
        [-28, [26, 92, 166, 1]],
        [-24, [32, 117, 210, 1]],
        [-20, [60, 160, 240, 1]],
        [-16, [117, 207, 255, 1]],
        [-12, [151, 255, 244, 1]],
        [-8, [189, 249, 255, 1]],
        [-4, [242, 255, 255, 0]],
        [0, [223, 255, 217, 1]],
        [4, [196, 255, 183, 1]],
        [8, [186, 254, 131, 1]],
        [12, [252, 254, 156, 1]],
        [16, [255, 243, 196, 1]],
        [20, [255, 220, 168, 1]],
        [24, [255, 175, 117, 1]],
        [28, [253, 135, 132, 1]],
        [32, [236, 91, 95, 1]],
        [35, [255, 51, 51, 1]],
        [37, [201, 1, 1, 1]],
        [40, [153, 51, 1, 1]]
      ]
    },
    wrapX: true,
    scale: 1,
    opacity: 0.8,
    radio: 2,
    zIndex: 10,
    normalize: false,
    showText: false,//控制文本是否可见
  };
  gridRef.value.addLayer(map, url, config)
}

onMounted(() => {
  let url = "/tiffs/RADA_CREF_20230728120000_4326.tif";
  // 初始化地图
  initMap().then(map => addSpot(map, url));
});
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>

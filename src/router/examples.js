
import DemoIndex from './../DemoIndex.vue';
import Layout from '../Layout.vue';
import EditIndex from './../EditIndex.vue';

export default [{
  path: 'scene',
  // component: DemoIndex,
  component: Layout,
  meta: { title: '场景创建', listId: 'initScene' },
  children: [{
    path: 'init-2d-map',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '2D地图初始化',
      cover: '/covers/initmap2d.png',
      vueName: 'Init2dMap'
    }
  }, {
    path: 'init-3d-map',
    // component: () => import('../views/map3d/Init3dMap.vue'),
    component: EditIndex,
    meta: {
      title: '3D地图初始化',
      cover: '/covers/initmap2d.png',
      vueName: 'Init3dMap'
    }
  }, {
    path: 'init-23d-map',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '二三维交互',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'base-map',
  // component: DemoIndex,
  component: Layout,
  meta: {
    title: '底图',
    listId: 'baseMap'
  },
  children: [{
    path: 'tianditu',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '天地图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'wms',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: 'WMS',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'wmts',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: 'WMTS',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'kml',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: 'Kml地图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'geojson',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: 'GeoJSON',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'pbf',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: 'PBF底图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'actions',
  // component: DemoIndex,
  component: Layout,
  meta: {
    title: '地图交互',
    listId: 'actions'
  },
  children: [{
    path: 'locate',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '地图定位',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'layers',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '图层控制',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'cluster',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '点聚合',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'cascade',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '地图联动',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'split-screen',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '地图分屏',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'meteo',
  // component: DemoIndex,
  component: Layout,
  meta: {
    title: '气象图层',
    listId: 'meteoLayers'
  },
  children: [{
    path: 'spot',
    // component: () => import('./../views/cogtif/Radar.vue'),
    component: EditIndex,
    meta: {
      title: '色斑图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'windy',
    // component: () => import('./../views/map2d/Init2dMap.vue'),
    component: EditIndex,
    meta: {
      title: '风羽图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}];
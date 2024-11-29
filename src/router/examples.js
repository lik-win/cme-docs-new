
import Layout from '../Layout.vue';
import EditIndex from '../views/EditIndex.vue';

export default [{
  path: 'scene',
  component: Layout,
  meta: { title: '场景创建', listId: 'initScene' },
  children: [{
    path: 'init-2d-map',
    component: EditIndex,
    meta: {
      title: '2D地图初始化',
      cover: '/covers/initmap2d.png',
      vueName: 'Init2dMap'
    }
  }, {
    path: 'init-3d-map',
    component: EditIndex,
    meta: {
      title: '3D地图初始化',
      cover: '/covers/initmap2d.png',
      vueName: 'Init3dMap'
    }
  }, {
    path: 'init-23d-map',
    component: EditIndex,
    meta: {
      title: '二三维交互',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'base-map',
  component: Layout,
  meta: {
    title: '底图',
    listId: 'baseMap'
  },
  children: [{
    path: 'tianditu',
    component: EditIndex,
    meta: {
      title: '天地图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'wms',
    component: EditIndex,
    meta: {
      title: 'WMS',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'wmts',
    component: EditIndex,
    meta: {
      title: 'WMTS',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'kml',
    component: EditIndex,
    meta: {
      title: 'Kml地图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'geojson',
    component: EditIndex,
    meta: {
      title: 'GeoJSON',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'pbf',
    component: EditIndex,
    meta: {
      title: 'PBF底图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'actions',
  component: Layout,
  meta: {
    title: '地图交互',
    listId: 'actions'
  },
  children: [{
    path: 'locate',
    component: EditIndex,
    meta: {
      title: '地图定位',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'layers',
    component: EditIndex,
    meta: {
      title: '图层控制',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'cluster',
    component: EditIndex,
    meta: {
      title: '点聚合',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'cascade',
    component: EditIndex,
    meta: {
      title: '地图联动',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'split-screen',
    component: EditIndex,
    meta: {
      title: '地图分屏',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}, {
  path: 'meteo',
  component: Layout,
  meta: {
    title: '气象图层',
    listId: 'meteoLayers'
  },
  children: [{
    path: 'spot',
    component: EditIndex,
    meta: {
      title: '色斑图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }, {
    path: 'windy',
    component: EditIndex,
    meta: {
      title: '风羽图',
      cover: '/covers/initmap2d.png',
      vueName: 'Radar'
    }
  }]
}];
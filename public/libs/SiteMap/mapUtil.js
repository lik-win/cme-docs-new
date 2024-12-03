const { Map, View, Feature } = window.CME2D
const { TileGrid } = window.CME2D.tilegrid
const { getTopLeft } = window.CME2D.extent
const {
  Tile,
  VectorTile: VectorTileLayer,
  Vector: VectorLayer,
  WebGLTile,
  WebGLPoints: WebGLPointsLayer,
  VectorImage: VectorImageLayer,
} = window.CME2D.layer
const {
  XYZ,
  VectorTile: VectorTileSource,
  Vector: VectorSource,
  GeoTIFF,
  Cluster,
} = window.CME2D.source
const { MVT, GeoJSON } = window.CME2D.format
const { getTransform } = window.CME2D.proj
const { defaults: defaultControls } = window.CME2D.control
const { Circle, Fill, Stroke, Style, Text, Icon } = window.CME2D.style
const { Point, LineString, Polygon, Circle: GeomCircle } = window.CME2D.geom

/**
 * 初始化地图
 */
export function initMap(target) {
  let map = new Map({
    target: target,
    view: new View({
      //地图视图
      center: [106, 35],
      projection: 'EPSG:4326',
      zoom: 4,
    }),
    layers: [
      new TileLayer({
        preload: Infinity, //开启预加载模式
        source: new XYZ({
          url: mapUrl,
        }),
      }),
    ],
    controls: defaultControls({
      attribute: false,
      zoom: false,
      rotate: false,
    }),
  })
  return map
}

/**
 * 地图底图切换
 */
export function baseMapChange(map2D, item) {
  if (!map2D || !item.url) return
  let baseLyr = null,
    baseLyrLabel = null,
    iboLyr = null
  switch (item.type) {
    case 'def': {
      baseLyr = new VectorTileLayer({
        declutter: true,
        source: new VectorTileSource({
          projection: map2D.getView().getProjection(),
          format: new MVT(),
        }),
      })
      fetch(item.url).then(function (response) {
        response.json().then(function (glStyle) {
          applyStyle(baseLyr, glStyle.data)
        })
      })
      break
    }
    case 'vec': {
      //天地图矢量底图
      baseLyr = new Tile({
        zIndex: 0,
        source: new XYZ({
          crossOrigin: 'anonymous',
          url: item.url,
          projection: projection,
        }),
        name: 'vec-layer',
      })
      baseLyrLabel = new Tile({
        zIndex: 35,
        source: new XYZ({
          crossOrigin: 'anonymous',
          url: item.url1,
          projection: projection,
        }),
        name: 'vec-label-layer',
      })
      //国界线
      iboLyr = new Tile({
        zIndex: 2,
        source: new XYZ({
          crossOrigin: 'anonymous',
          url: item.url2,
        }),
        name: 'ibo-layer',
      })
      break
    }
    case 'xq': {
      break
    }
  }

  let mls = map2D.getLayers()
  if (baseLyr) {
    //底图
    mls.insertAt(0, baseLyr)
  }

  if (baseLyrLabel) {
    //标注
    mls.insertAt(1, baseLyrLabel)
  }
  if (iboLyr) {
    //国界线
    //mls.insertAt(2, iboLyr);
  }
  loadGjLine(map2D)
}

/**
 * 创建几何体
 * @param map           地图实例
 * @param geometry  @type(String) (point,line,polygon)点线面类型
 * @param coordinate @type(Array) 坐标数组
 */
export function createGeometry(map, geometryType, coordinate) {
  if (!map || !geometryType || !coordinate) {
    return
  }
  let gmType = null

  if ('point' == geometryType) {
    gmType = new Point(coordinate)
  } else if ('line' == geometryType) {
    gmType = new LineString(coordinate)
  } else if ('polygon' == geometryType) {
    gmType = new Polygon(coordinate)
  } else if ('geomCircle' == geometryType) {
    gmType = new GeomCircle(coordinate)
  }
  gmType.applyTransform(
    getTransform('EPSG:4326', map.getView().getProjection()),
  )

  return gmType
}

/**
 *创建矢量要素
 * @param map           地图实例
 * @param geometryType  @type(String) (point,line,polygon)根据类型创建点线面
 * @param name          @type(String) 要素名称
 * @param coordinate    @type(Array)  坐标数组
 * @param attributes    @type(Object)  属性信息
 */
export function createFeature(
  map,
  geometryType,
  name = 'feature',
  coordinate,
  attributes = null,
) {
  if (!map || !geometryType || !coordinate) {
    return
  }
  let gmType = createGeometry(map, geometryType, coordinate)
  let feature = new Feature(gmType)
  feature.name = name
  feature.attributes = attributes
  return feature
}

/**
 *geoJson创建要素
 */
export function createGeoJsonFeature(map, geoJsonObject) {
  if (!map) {
    return
  }
  let features = new GeoJSON({
    dataProjection: 'EPSG:4326',
    featureProjection: map.getView().getProjection(),
  }).readFeatures(geoJsonObject)

  return features
}

/**
 * 创建矢量图层
 *@param feature           @type(Object Or Array) 要素对象或数组
 * @param layerName  @type(String)          创建图层名称
 * @param layerLevel       @type(Number)          图层层级
 * @param visible       @type(boolean)          是否显示图层
 */
export function createLayer(
  feature,
  layerName = 'vectorLayer',
  layerLevel = 2,
  visible = true,
  opacity = 1,
  wrapX = true,
) {
  if (!feature) {
    return
  }
  //创建图层
  let vl = new VectorLayer({
    visible: visible,
    zIndex: layerLevel,
    opacity: opacity,
    source: new VectorSource({
      wrapX: wrapX,
    }),
    name: layerName,
  })
  //判断feature为对象还是数组形式
  if (Object.prototype.toString.call(feature) === '[object Array]') {
    vl.getSource().addFeatures(feature)
  } else {
    vl.getSource().addFeature(feature)
  }
  //this.map.addLayer(vl);
  return vl
}

/**
 * 聚合要素图层
 * @param features           @type(Array) 数组
 * @param layerName    @type(String)创建图层名称
 * @param layerLevel         @type(Number)图层层级
 * @param distance           @type(Number)数字
 * @param callback           @type(function)回调函数
 */
export function createClusterLayer(
  features,
  layerName,
  layerLevel,
  distance,
  callback,
) {
  if (Object.prototype.toString.call(features) !== '[object Array]') {
    return
  }
  let cluster = new Cluster({
    distance: distance || 20, // 聚合点与点之间的距离
    source: new VectorSource({
      features: features,
    }),
  })
  let vl = new VectorImageLayer({
    zIndex: layerLevel || 5,
    source: cluster,
    name: layerName,
    style: function (feature) {
      if (callback) {
        return callback(feature)
      }
    },
  })

  return vl
}

export function createWebGLPointsLayer(
  feature,
  layerName,
  layerLevel,
  visible = true,
  icon,
) {
  //创建图层
  let vl = new WebGLPointsLayer({
    visible: visible,
    zIndex: layerLevel,
    opacity: 1,
    name: layerName,
    source: new VectorSource({}),
    style: {
      'circle-radius': 3,
      'circle-fill-color': [
        'match',
        ['get', 'type'],
        1,
        'rgb(139, 209, 0)',
        2,
        'rgb(255, 255, 0)',
        3,
        'rgb(255, 128, 0)',
        4,
        'rgb(255, 0, 0)',
        'rgb(255, 255, 255)',
      ],
      'circle-stroke-color': 'rgb(255, 255, 255)',
    },
  })
  //判断feature为对象还是数组形式
  if (Object.prototype.toString.call(feature) === '[object Array]') {
    vl.getSource().addFeatures(feature)
  } else {
    vl.getSource().addFeature(feature)
  }

  return vl
}

/**
 * 加载tif图层数据
 *@param url   tif地址
 */
export function createTifLayer(url, layerName, zIndex) {
  let layer = new WebGLTile({
    source: new GeoTIFF({
      sources: [
        {
          url: url,
        },
      ],
      //wrapX:true,
    }),
    name: layerName,
    zIndex: zIndex,
  })
  return layer
}

/**
 * 图层样式
 */
export function createStyle(styleObj) {
  if (!styleObj) return
  let style = new Style()

  if (styleObj.icon) {
    let icon = new Icon({
      src: styleObj.icon.src ? styleObj.icon.src : '',
      color: styleObj.icon.color ? styleObj.icon.color : '#F00',
      scale: styleObj.icon.scale ? styleObj.icon.scale : 3,
      rotateWithView: styleObj.icon.rotateWithView
        ? styleObj.icon.rotateWithView
        : false,
      crossOrigin: 'anonymous',
    })
    style.setImage(icon)
  }

  if (styleObj.circle) {
    let circle = new Circle({
      // 点的颜色
      fill: new Fill({
        color: styleObj.circle.fill ? styleObj.circle.fill : '#F00',
      }),
      // 圆形半径
      radius: styleObj.circle.radius ? styleObj.circle.radius : 8,
    })
    style.setImage(circle)
  }

  // 线样式
  if (styleObj.stroke) {
    let stroke = new Stroke({
      color: styleObj.stroke.color ? styleObj.stroke.color : '#F00',
      lineDash: styleObj.stroke.lineDash ? styleObj.stroke.lineDash : [0],
      width: styleObj.stroke.width ? styleObj.stroke.width : 5,
    })
    style.setStroke(stroke)
  }

  // 填充样式
  if (styleObj.fill) {
    let fill = new Fill({
      color: styleObj.fill.color
        ? styleObj.fill.color
        : 'rgba(255, 255, 255, 0.1)',
    })
    style.setFill(fill)
  }

  if (styleObj.text) {
    let text = new Text({
      //对齐方式
      textAlign: styleObj.text.textAlign ? styleObj.text.textAlign : 'end',
      //文本基线
      textBaseline: 'middle',
      //字体样式
      font: styleObj.text.font
        ? styleObj.text.font
        : 'normal 600 14px 微软雅黑',

      maxAngle: Math.PI,
      offsetX: styleObj.text.offsetX ? styleObj.text.offsetX : 0,
      offsetY: styleObj.text.offsetY ? styleObj.text.offsetY : 0,
      //文本内容
      text: styleObj.text.text ? styleObj.text.text : '',
      fill: new Fill({
        color: styleObj.text.color ? styleObj.text.color : '#333',
      }),
      padding: styleObj.text.padding ? styleObj.text.padding : [0, 0, 0, 0],
      backgroundFill: new Fill({
        color: styleObj.text.backgroundFill
          ? styleObj.text.backgroundFill
          : 'rgba(0,0,0,0)',
      }),
      /*stroke: new Stroke({
                color: '#fff',
                width: 5
            }),*/
      //placement: 'line', //point 则自动计算面的中心点然后标注  line 则根据面要素的边进行标注
      //overflow: true, //超出面的部分显示
    })
    style.setText(text)
  }
  return style
}

/**
 * 国界线
 */
export function loadGjLine(map) {
  const url =
    'http://sea.cmrcglobal.com:8080/geoserver/gwc/service/tms/1.0.0/huaxin:world_countries_with_nine_line@EPSG:4326@png/{z}/{x}/{-y}.png'

  const extent = projection.getExtent()
  const origin = getTopLeft(extent)
  //切片分辨率
  const resolutions = [
    0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625,
    0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625,
    6.866455078125e-4, 3.4332275390625e-4, 1.71661376953125e-4,
    8.58306884765625e-5, 4.291534423828125e-5, 2.1457672119140625e-5,
    1.0728836059570312e-5, 5.364418029785156e-6, 2.682209014892578e-6,
    1.341104507446289e-6, 6.705522537231445e-7, 3.3527612686157227e-7,
  ]

  let gjLayer = new Tile({
    zIndex: 35,
    name: 'gjLayer',
    source: new XYZ({
      //crossOrigin: "anonymous",
      url: url,
      projection: projection,
      tileGrid: new TileGrid({
        extent: extent,
        origin: origin,
        resolutions: resolutions,
      }),
    }),
  })
  map.addLayer(gjLayer)
}

/**
 * 根据name获取图层
 */
export function getLayerByName(map, name) {
  let layer = null
  map.getAllLayers().forEach((lyr) => {
    if (lyr.get('name') == name || lyr.get('layerName') == name) {
      layer = lyr
    }
  })
  return layer
}

export function calculateAngle(x1, y1, x2, y2) {
  let angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI
  return angle < 0 ? 360 + angle : angle
}

/**
 * 创建地图鼠标移动提示框
 */
export function createMapTooltip() {
  let infoEl = document.createElement('div')
  infoEl.style.padding = '0px 5px'
  infoEl.style.backgroundColor = '#fff'
  infoEl.style.position = 'absolute'
  infoEl.style.color = '#333'
  infoEl.style.borderRadius = '4px'
  infoEl.style.visibility = 'hidden'
  infoEl.style.display = 'inline-block'
  infoEl.style.width = 'auto'
  infoEl.style.height = 'auto'
  infoEl.style.transform = 'translateX(10%)'
  infoEl.style.zIndex = 11
  return infoEl
}

/**
 * 获取地图实例
 */
export function getMap2DInstance() {}

const { Vector: VectorLayer } = window.CME2D.layer
const { Vector: VectorSource } = window.CME2D.source
const { Point } = window.CME2D.geom
const { Circle, Fill, Stroke, Style, RegularShape, Text, Icon } =
  window.CME2D.style
const { Feature, Overlay } = window.CME2D

function parseColor(color) {
  // 如果颜色值是十六进制格式，则进行转换
  if (color[0] === '#') {
    // 将十六进制颜色转换为 RGB 格式
    var hex = color.slice(1)
    var bigint = parseInt(hex, 16)
    var r = (bigint >> 16) & 255
    var g = (bigint >> 8) & 255
    var b = bigint & 255
    return { r: r, g: g, b: b }
  }
  // 如果颜色值是 RGBA 格式，则进行解析
  else if (color.startsWith('rgb')) {
    var rgbaArray = color
      .substring(color.indexOf('(') + 1, color.lastIndexOf(')'))
      .split(',')
    var r = parseInt(rgbaArray[0])
    var g = parseInt(rgbaArray[1])
    var b = parseInt(rgbaArray[2])
    return { r: r, g: g, b: b }
  }
  // 其他格式暂不支持
  else {
    throw new Error('Unsupported color format')
  }
}
function isDark(color) {
  // 解析颜色并获取 RGB 分量
  var rgb = parseColor(color)
  var r = rgb.r
  var g = rgb.g
  var b = rgb.b

  // 计算亮度
  var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  // 判断颜色深浅
  return luminance <= 160
}

function getColorBasedOnBrightness(color) {
  // 根据颜色深浅返回相应的颜色值
  if (isDark(color)) {
    return '#FFFFFF' // 深色返回白色
  } else {
    return '#000000' // 浅色返回黑色
  }
}
let geojsonLineLayer = null
let mapdata
let stationShowStyle = false // false 为原点状态 true 为 文字显示状态
let stationChangeLevel = 9 // false 为原点状态 true 为 文字显示状态
let map2d = null
let stationPointOverlay = null
let select
let toolTipElement = null
// 创建select交互

const init = (map, item) => {
  mapdata = map
  geojsonLineLayer = new VectorLayer({
    layerName: 'groundStation',
    source: new VectorSource(),
    zIndex: 11, //图层层级
  })
  map.addLayer(geojsonLineLayer)
}

const setStyle = (feature, show = false) => {
  let property = feature.getProperties()
  const { color = '#0088FF' } = property
  const { canvas, w, h } = getImageCanvas(color)
  let iconStyle = null
  if (show) {
    iconStyle = new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        img: canvas,
        imgSize: [w, h],
      }),
      text: new Text({
        textAlign: 'center',
        text: property['TEM_MIN'] ?? '', // 你想显示的文本
        font: '12px sans-serif', // 字体和大小
        fill: new Fill({
          color: getColorBasedOnBrightness(color),
        }),
        offsetY: 2,
        stroke: new Stroke({
          color: isDark(color) ? 'black' : 'white', // 字体边缘颜色
          width: 1, // 字体边缘宽度
        }),
      }),
    })
  } else {
    iconStyle = new Style({
      image: new Circle({
        fill: new Fill({
          color: color,
        }),
        stroke: new Stroke({
          color: isDark(color) ? 'black' : 'white', // 字体边缘颜色
          width: 1, // 字体边缘宽度
        }),
        radius: 8,
      }),
    })
  }
  feature.setStyle(iconStyle)
}

const setGroundStationStyle = (map, flag = false) => {
  let feature = getFeaturesByAttribute(map, 'type', 'groundStation')
  let zoomLevel = map.getView().getZoom()
  if (stationShowStyle === false && zoomLevel <= stationChangeLevel) {
    if (flag) {
      stationShowStyle = true
      feature.forEach((feature) => {
        setStyle(feature, false)
      })
    } else {
      return false
    }
  }
  if (stationShowStyle === false && zoomLevel > stationChangeLevel) {
    stationShowStyle = true
    feature.forEach((feature) => {
      setStyle(feature, true)
    })
  }
  if (stationShowStyle === true && zoomLevel > stationChangeLevel) {
    if (flag) {
      stationShowStyle = false
      feature.forEach((feature) => {
        setStyle(feature, true)
      })
    } else return false
  }
  if (stationShowStyle === true && zoomLevel <= stationChangeLevel) {
    stationShowStyle = false
    feature.forEach((feature) => {
      setStyle(feature, false)
    })
  }
}

const getFeaturesByAttribute = (map, attributeName, attributeValue) => {
  let features = []
  map.getLayers().forEach(function (layer) {
    if (layer?.values_?.layerName === 'groundStation') {
      let source = layer.getSource()
      source.getFeatures().forEach(function (feature) {
        let properties = feature.getProperties()
        if (properties[attributeName] === attributeValue) {
          features.push(feature)
        }
      })
    }
  })
  return features
}
const addStationPoint = (map, data = [], item) => {
  init(map, item)
  map2d = map
  let color
  let featureArr = []
  let legend = item.legendData.legend
  data.length &&
    data.forEach((element) => {
      let elementdata = element[item.element]
      if (Number(elementdata) < 9999 && Number(elementdata) !== 0) {
        for (let i = 0; i < legend.length; i++) {
          if (
            elementdata >= legend[i][0] &&
            (i === legend.length - 1 || elementdata < legend[i + 1][0])
          ) {
            color = `rgba(${legend[i][1][0]}, ${legend[i][1][1]}, ${legend[i][1][2]}, ${legend[i][1][3] ?? 1})`
            break
          }
        }
        let feature
        if (element.Station_Name) {
          feature = new Feature(new Point([element.Lon, element.Lat]))
          feature.setProperties(element)
          feature.set('color', color)
          feature.set('type', 'groundStation')
          featureArr.push(feature)
        } else {
          feature = new Feature(new Point([element.Lon, element.Lat]))
          feature.setProperties(element)
          feature.set('color', color)
          feature.set('type', groundStation)
          featureArr.push(feature)
        }
      }
    })
  geojsonLineLayer.getSource().addFeatures(featureArr)
  setGroundStationStyle(map, true)
}

const getImageCanvas = (color) => {
  // 绘制圆角矩形
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  canvas.width = 54
  canvas.height = 24
  let x = 0
  let y = 0
  let w = canvas.width
  let h = canvas.height
  let r = 12
  // 清除画布并设置透明背景
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'rgba(0, 0, 0, 0)'
  // 缩放
  context.fillStyle = color ?? 'rgba(0,0,0,0)'
  // 绘制圆角矩形
  context.beginPath()
  context.moveTo(x + r, y)
  context.arcTo(x + w, y, x + w, y + h, r)
  context.arcTo(x + w, y + h, x, y + h, r)
  context.arcTo(x, y + h, x, y, r)
  context.arcTo(x, y, x + w, y, r)
  context.closePath()

  context.fill()
  // 添加白色描边
  context.strokeStyle = 'white'
  context.lineWidth = 2
  context.stroke()
  return { canvas, w, h }
}

const initStationOverlay = (map) => {
  stationPointOverlay = new Overlay({
    element: createNode(),
    positioning: 'center-center',
    offset: [0, -15],
    layerName: '站点信息',
  })
  stationPointOverlay.setPosition(undefined)
  map.addOverlay(stationPointOverlay)
}

const setStationOverlay = (properties = undefined, show = false) => {
  if (show) {
    const lon = properties?.Lon || undefined
    const lat = properties?.Lat || undefined
    const cords = lon && lat ? [lon, lat] : undefined
    const {
      name = '',
      element = null,
      unit = null,
      // } = mapLayersObj.value.length ? mapLayersObj.value[0] : {}
    } = {
      name: '实况最低温',
      id: 'TEM_MIN',
      element: 'TEM_MIN',
      type: 'groundStation',
      unit: '℃',
    }
    cords
      ? stationPointOverlay.setPosition(cords)
      : stationPointOverlay.setPosition(undefined)

    const html = ['<div>']
    html.push('<div>站名：' + properties?.Station_Name + '</div>')
    html.push('<div>站号：' + properties?.Station_Id_C + '</div>')
    html.push('<div>时间：' + properties?.DateTime + '</div>')
    html.push(
      '<div>经度：' + Number(properties?.Lon).toFixed(2) || 0 + '</div>',
    )
    html.push(
      '<div>纬度：' + Number(properties?.Lat).toFixed(2) || 0 + '</div>',
    )
    html.push(`<div>${name}:${properties[element] || ''}${unit}</div>`)
    toolTipElement.innerHTML = html.join('')
  } else {
    stationPointOverlay.setPosition(undefined)
  }
}
const createNode = () => {
  toolTipElement = document.createElement('div')
  toolTipElement.className = 'stationPointToolTip'
  toolTipElement.setAttribute('id', 'stationPointToolTip')
  document.body.appendChild(toolTipElement)
  return toolTipElement
}

const removeOverlay = (map) => {
  map.removeOverlay(stationPointOverlay)
}

export default class SiteMap {
  init = init
  setStyle = setStyle
  addStationPoint = addStationPoint
  setGroundStationStyle = setGroundStationStyle
  initStationOverlay = initStationOverlay
  setStationOverlay = setStationOverlay
  removeOverlay = removeOverlay
  constructor() {}
}

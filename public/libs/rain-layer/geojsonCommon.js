const { Vector: VectorSource } = window.CME2D.source
const { Vector: VectorLayer } = window.CME2D.layer
const { Fill, Stroke, Style, Text } = window.CME2D.style
const { GeoJSON } = window.CME2D.format
function addGeojsonLayer(map, featuresARR, colorCollection) {
  const resdata = {
    type: 'FeatureCollection',
    features: featuresARR,
  }

  // 创建GeoJSON数据源
  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(resdata),
  })
  // 创建矢量面图层
  const vectorLayer = new VectorLayer({
    declutter: true,
    zIndex: 10, //层级
    layerName: 'rainLayer',
    source: vectorSource,
    style: function (feature) {
      const valueLabel = feature.get('rainfallNum')
      const fullColor = getColorRain(feature, colorCollection)
      return new Style({
        fill: new Fill({
          color: fullColor,
        }),
        stroke: new Stroke({
          color: 'rgba(255,0,0)',
          width: 1,
        }),
        text: new Text({
          text: String(valueLabel),
          font: '24px Calibri,sans-serif',
          fill: new Fill({
            color: String(valueLabel) == 0 ? '#ccc' : '#000',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 5,
          }),
        }),
      })
    },
  })
  // 将矢量面图层添加到地图
  map.addLayer(vectorLayer)

  return vectorLayer
  // })
}

function getColorRain(val, colorCollection) {
  let colorValue = undefined
  if (val.values_.rainfallNum == undefined) {
    return 'rgba(255,255,255,0)'
  }
  colorValue = val.values_.rainfallNum

  // // let color=[
  // //   [0,'rgba(166,242,143,0.8)'],
  // //   [6,'rgba(61,186,61,0.8)'],
  // //   [15,'rgba(97,184,255,0.8)'],
  // //   [30,'rgba(0,0,255,0.8)'],
  // //   [60,'rgba(255,0,255,0.8)'],
  // //   [150,'rgba(128,0,64,0.8)'],
  // // ]

  // if(colorValue==63){
  //   debugger
  // }

  let str = ''
  for (let i = 1; i < colorCollection.length; i++) {
    let color = colorCollection[i - 1][1]
    let value = colorCollection[i - 1][0]
    let nextColor = colorCollection[i][1]
    let nextValue = colorCollection[i][0]
    if (colorValue == 0) {
      str = 'rgba(255,255,255,0)'
    } else if (colorValue >= colorCollection[colorCollection.length - 1][0]) {
      str = colorCollection[colorCollection.length - 1][1]
    } else {
      if (colorValue >= value && colorValue < nextValue) {
        str = color
      }
    }
  }

  console.log('colorValue: ' + colorValue)
  console.log('str: ' + str)

  // if (colorValue == 0) {
  //     str = 'rgba(255,255,255,0)'
  // } else if (colorValue > 0 && colorValue < 6) {
  //     str = 'rgba(166,242,143,0.8)'
  // } else if (colorValue >= 6 && colorValue < 15) {
  //     str = 'rgba(61,186,61,0.8)'
  // } else if (colorValue >= 15 && colorValue < 30) {
  //     str = 'rgba(97,184,255,0.8)'
  // } else if (colorValue >= 30 && colorValue < 60) {
  //     str = 'rgba(0,0,255,0.8)'
  // } else if (colorValue >= 60 && colorValue < 150) {
  //     str = 'rgba(255,0,255,0.8)'
  // } else if (colorValue >= 150) {
  //     str = 'rgba(128,0,64,0.8)'
  // }

  return str
}

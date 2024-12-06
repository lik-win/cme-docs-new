const { Feature } = window.CME2D
const { Vector: VectorLayer } = window.CME2D.layer
const { Vector: VectorSource } = window.CME2D.source
const { Circle, Fill, Stroke, Style, Text } = window.CME2D.style
const { Point } = window.CME2D.geom
export const addStationLayer = (map, url) => {
  return new Promise(async (resolve, reject) => {
    let gridLayer = map
      .getAllLayers()
      .find((layer) => layer.get('layerName') === 'grid_edit_station')
    if (gridLayer) {
      try {
        await updateSource(url, gridLayer)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    } else {
      try {
        gridLayer = new VectorLayer({
          zIndex: 300,
          declutter: true,
          layerName: 'grid_edit_station',
          source: new VectorSource(),
        })
        map.addLayer(gridLayer)
        await updateSource(url, gridLayer)
        resolve(true)
      } catch (err) {
        reject(err)
      }
    }
  })
}

const addPointArr = (data, layer) => {
  const { Station_Name, Lon, Lat } = data
  const feature = new Feature({
    geometry: new Point([Number(Lon), Number(Lat)]),
  })
  feature.set('type', 'point')
  feature.set('name', name)
  feature.setStyle(
    new Style({
      image: new Circle({
        fill: new Fill({
          color: '#007FFF',
        }),
        stroke: new Stroke({
          color: 'rgba(0,0,0,0.6)', // 字体边缘颜色
          width: 1, // 字体边缘宽度
        }),
        radius: 4,
      }),
      text: new Text({
        textAlign: 'center',
        text: Station_Name ?? '', // 你想显示的文本
        font: '10px sans-serif', // 字体和大小
        fill: new Fill({
          color: '#1A1E2B',
        }),
        offsetY: 15,
        offsetX: 0,
        stroke: new Stroke({
          color: 'white', // 字体边缘颜色
          width: 1, // 字体边缘宽度
        }),
      }),
    }),
  )
  layer.getSource().addFeature(feature)
}
const updateSource = (url, layer) => {
  fetch(url, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      const list = res?.stationData || []
      list.forEach((point) => {
        addPointArr(point, layer)
      })
    })
}

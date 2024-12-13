
const { Vector: VectorSource } = window.CME2D.source
const { Vector: VectorLayer } = window.CME2D.layer
const { Circle, Fill, Stroke, Style, Text ,Icon} = window.CME2D.style
const { GeoJSON } = window.CME2D.format
export const  addGeojsonLayer=(map,featuresARR,colorCollection)=>{
      // 创建GeoJSON数据源
      const vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(featuresARR),
      });
      let layer=map.getAllLayers().find((datas)=>datas.values_.layerName == 'rainLayer')
      if(layer){
        map.removeLayer(layer)
      }
      // 创建矢量面图层
      const vectorLayer = new VectorLayer({
        declutter: true,
        zIndex: 10, //层级
        layerName: "rainLayer",
        source: vectorSource,
        style: function (feature) {
          const valueLabel = feature.get("value");
          const fullColor = getColorRain(feature,colorCollection);
          return new Style({
            fill: new Fill({
              color: fullColor,
            }),
            stroke: new Stroke({
              // color: "rgba(255,0,0)",
              width: 1,
            }),
            text: new Text({
              text: String(valueLabel),
              font: "24px Calibri,sans-serif",
              fill: new Fill({
                color: String(valueLabel) == 0 ? "#ccc" : "#000",
              }),
              stroke: new Stroke({
                color: "#fff",
                width: 5,
              }),
            }),
          });
        },
      });
      // 将矢量面图层添加到地图
      map.addLayer(vectorLayer);
      return vectorLayer;
  }


  function getColorRain (val,colorCollection)  {
    let colorValue = undefined
    let str = ''
    if(val.values_.value==undefined){
        return 'rgba(255,255,255,0)'
    }
    colorValue = val.values_.value
    for(let i=1; i<colorCollection.length; i++){
      let color = colorCollection[i-1][1];
      let value = colorCollection[i-1][0];
      let nextColor = colorCollection[i][1];
      let nextValue = colorCollection[i][0];
      if (colorValue == 0) {
        str = 'rgba(255,255,255,0)'
      }
      else if(colorValue >= value
        &&colorValue<=nextValue
      ) {
        str = color;
      }
      else {
        if (colorValue <= value && colorValue >= nextValue) {
          str = color;
        }
      }
    }
    return str;
}
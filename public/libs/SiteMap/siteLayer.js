import { createFeature, getLayerByName, createClusterLayer } from './mapUtil.js'
const { Style, Icon, Text, Fill } = window.CME2D.style
export default class SiteLayer {
  constructor(options) {
    if (!options || !options.map) return
    this.map = options.map
    this.createTooltip()
    this.bindSetStyle = this.setStyle.bind(this)
    this.bindMoverShowInfo = this.moverShowInfo.bind(this)
    this.bindMapMoveEnd = this.mapMoveEnd.bind(this)
    this.map.on('pointermove', this.bindMoverShowInfo)
    this.map.on('moveend', this.bindMapMoveEnd)
  }

  init(data, siteType) {
    this.siteData = data
    this.siteType = siteType
    if (data && data.length) {
      let features = []
      for (let i = 0; i < data.length; i++) {
        let point = [parseFloat(data[i].Lon), parseFloat(data[i].Lat)]
        let feature = createFeature(
          this.map,
          'point',
          'siteFeature',
          point,
          data[i],
        )

        features.push(feature)
      }
      let layer = getLayerByName(this.map, siteType.layerName)
      if (layer) {
        this.map.removeLayer(layer)
      }
      let lay = createClusterLayer(
        features,
        siteType.layerName,
        82,
        50,
        this.bindSetStyle,
      )
      this.map.addLayer(lay)
    }
  }

  setStyle(feature) {
    let styles = []
    let text = ''
    let angle = 0
    let color = ''
    let textIconColor = ''
    let font = '14px PingFangSC'
    let textOffsetX = 0
    let imgAnchor = []
    let features = feature.get('features')
    let data = features[0].attributes
    if (this.siteType.type == 'wind') {
      if (
        !data.WIN_S ||
        data.WIN_S == '999998' ||
        data.WIN_S == '999999' ||
        data.WIN_D > 360
      ) {
        return
      }
      angle = Number(data.WIN_D)
      let wind = windColor(data.WIN_S)
      color = wind.color
      text = wind.level + ''
      textIconColor = wind.textIconColor
      imgAnchor = [0.3, 0.5]
      textOffsetX = 15
    } else if (this.siteType.type == 'atm') {
      if (!data.PRS || data.PRS == '999998' || data.PRS == '999999') {
        return
      }
      color = atmColor(data.PRS)
      //text = data.pRS + '\n' + data.station_Id_C;
      text = data.PRS
      imgAnchor = [0.5, 0.5]
      textOffsetX = 0
      textIconColor = '#fff'
    }
    let canvas = createCanvas(text, font, color, this.siteType.type)
    let style = new Style({
      image: new Icon({
        img: canvas,
        anchor: imgAnchor,
      }),
      text: new Text({
        font: font,
        text: text,
        fill: new Fill({
          color: textIconColor,
        }),
        offsetX: textOffsetX,
        //offsetY: 0,
      }),
    })
    styles.push(style)
    if (this.siteType.type == 'wind') {
      let style1 = new Style({
        image: new Icon({
          src: '/public/libs/SiteMap/fangxiangjiantou.png',
          color: textIconColor,
          rotation: angle * (Math.PI / 180),
          rotateWithView: false,
          scale: 0.7,
          crossOrigin: 'anonymous',
        }),
      })
      styles.push(style1)
    }
    return styles
  }

  /**
   * 鼠标移动显示信息
   */
  moverShowInfo(evt) {
    let obj = this.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
      return {
        feature,
        layer,
      }
    })

    if (
      !obj ||
      !obj.feature ||
      !obj.layer ||
      !this.siteType ||
      obj.layer.get('name') !== this.siteType.layerName
    ) {
      this.infoEl.style.visibility = 'hidden'
      return
    }
    const pixel = this.map.getEventPixel(evt.originalEvent)
    let siteNum = ''
    let text = ''
    let angle = 0
    let color = ''
    let content = `<div class="home-site-info-box" style="padding:5px 0">`
    let data = obj.feature.get('features')[0].attributes
    siteNum = data.Station_Id_C //站号
    content += `<div class="site-name">站点:${siteNum}</div>`
    content += `<div class="data-info">`
    if (this.siteType.type == 'wind') {
      angle = Number(data.WIN_D) //角度
      let wind = windColor(data.WIN_S)
      //text = wind.level;//风速等级
      text = data.WIN_S + 'm/s'
      color = wind.color
      let direction = getWindyDirection(angle)
      content += `<div style="background: ${color};border-radius: 2px;display: inline-block;color: #fff;padding: 0 5px 0 5px">

                        <span style="display: inline-block;color:${wind.textIconColor}">${direction}&nbsp;${text}</span></div></div></div>`
    } else if (this.siteType.type == 'atm') {
      text = data.PRS //气压
      color = atmColor(data.PRS)
      content += `<div style="background: ${color};border-radius: 2px;display: inline-block;padding: 0 5px;color: #fff;">
                        <span style="display: inline-block;">${text}hPa</span></div></div></div>`
    }
    if (content) {
      this.infoEl.style.left = pixel[0] - this.infoEl.offsetWidth / 2 + 'px'
      this.infoEl.style.top = pixel[1] - this.infoEl.offsetHeight - 10 + 'px'
      this.infoEl.style.visibility = 'visible'
      this.infoEl.innerHTML = content
    }
  }

  /**
   * 创建提示框
   */
  createTooltip() {
    if (!this.infoEl) {
      //this.infoEl = createMapTooltip();
      this.infoEl = document.createElement('div')
      this.infoEl.style.position = 'absolute'
      this.infoEl.style.padding = '0px 5px'
      this.infoEl.style.backgroundColor = '#333'
      this.infoEl.style.color = '#fff'
      this.infoEl.style.borderRadius = '8px'
      this.infoEl.style.visibility = 'hidden'
      this.infoEl.style.display = 'inline-block'
      this.infoEl.style.width = 'auto'
      this.infoEl.style.height = 'auto'
      //this.infoEl.style.transform = 'translateX(10%)';
      this.infoEl.style.zIndex = 11
      this.map.getTargetElement().appendChild(this.infoEl)
    }
  }

  /**
   * 地图移动刷新
   */
  mapMoveEnd(evt) {
    if (this.siteType) {
      let layer = getLayerByName(this.map, this.siteType.layerName)
      if (layer) {
        let cluster = layer.get('source') //获取聚合数据源
        cluster.refresh()
      }
    }
  }
}

/**
 * 绘制圆角标注背景
 */
export function createCanvas(text, font, fillColor, type) {
  // 绘制圆角矩形
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  let textEl = computeFontSize(text, font)
  if (type == 'wind') {
    canvas.width = 2 * textEl.width
  } else if (type == 'atm') {
    canvas.width = textEl.width
  }

  canvas.height = textEl.height
  let x = 0
  let y = 0
  let w = canvas.width
  let h = canvas.height
  let r = 8

  // 设置线宽
  context.lineWidth = 2
  context.strokeStyle = '#fff'
  // 绘制圆角矩形方式1
  /*context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);

    context.closePath();
    */

  // 绘制圆角矩形方式2
  context.roundRect(x, y, w, h, r)

  // 填充颜色
  context.fillStyle = fillColor
  // 填充
  context.fill()

  // 描边路径
  context.stroke()

  /*
    context.font = font;
    context.fillStyle = '#fff';
    context.textAlign="center";//水平居中
    context.textBaseline = "middle";//垂直居中
    context.fillText(text, w / 2, h / 2);*/
  return canvas
}

/**
 * 计算文字标注宽度及高度
 */
export function computeFontSize(text, font) {
  let span = document.createElement('span')
  span.style.display = 'inline-block'
  span.style.font = font
  span.style.padding = '0 5px'
  span.style.opacity = '0'
  span.innerHTML = text
  document.body.append(span)
  let obj = {
    width: span.offsetWidth,
    height: span.offsetHeight,
  }
  span.remove()
  return obj
}

/**
 * 风速转换颜色及等级
 *@param ws
 */
export function windColor(ws) {
  if (!ws) {
    return
  }
  ws = Number(ws).toFixed(1)
  let obj = {
    color: '',
    level: 0,
    textIconColor: '',
  }
  if (ws <= 0.2) {
    obj.color = 'rgb(0, 240, 100)'
    obj.level = 0
    obj.textIconColor = '#202124'
  } else if (ws >= 0.3 && ws <= 1.5) {
    obj.color = 'rgb(0, 240, 100)'
    obj.level = 1
    obj.textIconColor = '#202124'
  } else if (ws >= 1.6 && ws <= 3.3) {
    obj.color = 'rgb(0, 233, 131)'
    obj.level = 2
    obj.textIconColor = '#202124'
  } else if (ws >= 3.4 && ws <= 5.4) {
    obj.color = 'rgb(0, 226, 162)'
    obj.level = 3
    obj.textIconColor = '#202124'
  } else if (ws >= 5.5 && ws <= 7.9) {
    obj.color = 'rgb(0, 220, 193)'
    obj.level = 4
    obj.textIconColor = '#202124'
  } else if (ws >= 8.0 && ws <= 10.7) {
    obj.color = 'rgb(0, 213, 224)'
    obj.level = 5
    obj.textIconColor = '#202124'
  } else if (ws >= 10.8 && ws <= 13.8) {
    obj.color = 'rgb(0, 207, 255)'
    obj.level = 6
    obj.textIconColor = '#202124'
  } else if (ws >= 13.9 && ws <= 17.1) {
    obj.color = 'rgb(0, 126, 255)'
    obj.level = 7
    obj.textIconColor = '#F1F3F6'
  } else if (ws >= 17.2 && ws <= 20.7) {
    obj.color = 'rgb(0, 26, 255)'
    obj.level = 8
    obj.textIconColor = '#F1F3F6'
  } else if (ws >= 20.8 && ws <= 24.4) {
    obj.color = 'rgb(255, 207, 0)'
    obj.level = 9
    obj.textIconColor = '#202124'
  } else if (ws >= 24.5 && ws <= 28.4) {
    obj.color = 'rgb(255, 143, 0)'
    obj.level = 10
    obj.textIconColor = '#202124'
  } else if (ws >= 28.5 && ws <= 32.6) {
    obj.color = 'rgb(255, 90, 90)'
    obj.level = 11
    obj.textIconColor = '#202124'
  } else if (ws >= 32.7 && ws <= 36.9) {
    obj.color = 'rgb(255, 0, 0)'
    obj.level = 12
    obj.textIconColor = '#202124'
  } else if (ws >= 37.0 && ws <= 41.4) {
    obj.color = 'rgb(204, 0, 0)'
    obj.level = 13
    obj.textIconColor = '#F1F3F6'
  } else if (ws >= 41.5 && ws <= 46.1) {
    obj.color = 'rgb(204, 0, 0)'
    obj.level = 14
    obj.textIconColor = '#F1F3F6'
  } else if (ws >= 46.2 && ws <= 50.9) {
    obj.color = 'rgb(204, 0, 0)'
    obj.level = 15
    obj.textIconColor = '#F1F3F6'
  } else if (ws >= 51.0 && ws <= 56.0) {
    obj.color = 'rgb(204, 0, 0)'
    obj.level = 16
    obj.textIconColor = '#F1F3F6'
  } else {
    obj.color = 'rgb(204, 0, 0)'
    obj.level = 17
    obj.textIconColor = '#F1F3F6'
  }
  return obj
}

/**
 * 风角度转换方向
 * @param angle
 * @returns {string}
 */
export function getWindyDirection(angle) {
  if ((angle >= 0 && angle <= 22.5) || (angle <= 360 && angle > 337.5)) {
    return '南风'
  }
  if (angle <= 337.5 && angle > 292.5) {
    return '东南风'
  }
  if (angle <= 292.5 && angle > 247.5) {
    return '东风'
  }
  if (angle <= 247.5 && angle > 202.5) {
    return '东北风'
  }
  if (angle <= 202.5 && angle > 157.5) {
    return '北风'
  }
  if (angle <= 157.5 && angle > 112.5) {
    return '西北风'
  }
  if (angle <= 112.5 && angle > 67.5) {
    return '西风'
  }
  if (angle <= 67.5 && angle > 22.5) {
    return '西南风'
  }
}

/**
 * 气压颜色
 */
export function atmColor(atm) {
  let color = ''
  if (atm >= 990 && atm <= 995) {
    color = 'rgb(142, 179, 184)'
  } else if (atm >= 996 && atm <= 1000) {
    color = 'rgb(104, 180, 179)'
  } else if (atm >= 1001 && atm <= 1003) {
    color = 'rgb(69, 167, 166)'
  } else if (atm >= 1004 && atm <= 1006) {
    color = 'rgb(57, 131, 147)'
  } else if (atm >= 1007 && atm <= 1010) {
    color = 'rgb(57, 118, 147)'
  } else if (atm >= 1011 && atm <= 1015) {
    color = 'rgb(57, 91, 147)'
  } else if (atm >= 1016 && atm <= 1020) {
    color = 'rgb(58, 117, 53)'
  } else if (atm >= 1021 && atm <= 1022) {
    color = 'rgb(159, 161, 65)'
  } else if (atm >= 1023 && atm <= 1025) {
    color = 'rgb(173, 136, 57)'
  } else if (atm >= 1026 && atm <= 1030) {
    color = 'rgb(170, 84, 67)'
  } else {
    color = 'rgb(94, 60, 81, 1)'
  }
  return color
}

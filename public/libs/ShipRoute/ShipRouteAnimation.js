const { Vector: VectorSource } = window.CME2D.source
const { Vector: VectorLayer } = window.CME2D.layer
const { Stroke, Style, Circle, Fill, Icon } = window.CME2D.style
const { fromLonLat, toLonLat } = window.CME2D.proj
const { LineString, Point } = window.CME2D.geom
const { Feature } = window.CME2D
const { Modify } = window.CME2D.interaction

import FlowLine from './FlowLine.js'
import { transformProjection } from './Utils.js'

class ShipRouteAnimation {
  constructor(options) {
    this.map = options.map
    this.source = new VectorSource()
    this.baseLineSource = new VectorSource()
    this.baseLineLayer = new VectorLayer({
      source: this.baseLineSource,
    })
    this.layer = new VectorLayer({
      source: this.source,
    })
    this.flowStyle = new FlowLine({
      width: options.width ?? 1,
      width2: options.width2 ?? 6,
      color: options.color ?? '#FFB250',
      color2: options.color2 ?? '#FFEAC6',
      lineCap: 'round',
    })
    this.baseLineStyle = options.width3
      ? new Style({
          stroke: new Stroke({
            color: options.color3,
            width: options.width3,
            lineDash: options.lineDash,
          }),
        })
      : null
  }

  clear() {
    this.map.removeLayer(this.baseLineLayer)
    this.map.removeLayer(this.layer)
  }

  createBaseLine(coordinates) {
    if (!this.baseLineStyle) return
    const feature = new Feature({
      geometry: new LineString(coordinates),
    })
    feature.setStyle(this.baseLineStyle)
    this.baseLineSource.addFeature(feature)
  }

  render(coordinates) {
    this.coords = coordinates.map((item) =>
      transformProjection(this.map, [item.lon, item.lat]),
    )
    this.map.addLayer(this.baseLineLayer)
    this.map.addLayer(this.layer)

    this.createBaseLine(this.coords)
    this.layer.on('postrender', this.animateFlights)
    this.index = 0
  }

  animateFlights = (event) => {
    this.source.clear()
    if (this.index >= this.coords.length) {
      this.index = 0
    }

    const remainingPoints = this.coords.length - this.index

    const increment = Math.max(1, Math.floor(remainingPoints / 100))
    const currentLine = new LineString(this.coords.slice(0, this.index))
    const feature = new Feature({
      geometry: currentLine,
    })
    feature.setStyle(this.flowStyle)
    this.source.addFeature(feature)

    this.index += increment
    this.map.render()
  }
}

export default ShipRouteAnimation

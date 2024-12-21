import '/cme/libs/turf.min.js'
const { Vector: VectorSource } = window.CME2D.source
const { Vector: VectorLayer } = window.CME2D.layer
const { Stroke, Style, Circle, Fill, Icon } = window.CME2D.style
const { fromLonLat, toLonLat } = window.CME2D.proj
const { LineString, Point } = window.CME2D.geom
const { Feature } = window.CME2D
const { Modify } = window.CME2D.interaction

class ShipRoute {
  constructor(options) {
    this.map = options.map
    this.imagePath = options.imagePath
    this.style0 = options.traveledStyle
    this.style1 = options.notTraveledStyle
    this.shipInfo = {}
    this.zIndex = options.zIndex
    this.endHandler = options.endHandler

    this.init()
  }

  init() {
    this.source0 = new VectorSource({ wrapX: false })
    this.source1 = new VectorSource({ wrapX: false })

    this.layer0 = new VectorLayer({
      source: this.source0,
      zIndex: this.zIndex,
    })
    this.layer1 = new VectorLayer({
      source: this.source1,
      zIndex: this.zIndex,
    })

    this.modify = new Modify({
      source: this.source1,
    })
    this.modify.on('modifyend', this.modifyendHandler)
    this.p0Style = new Style({
      image: new Circle({
        fill: new Fill({ color: '#ff0000' }),
        radius: 5,
      }),
    })
    this.p3Style = new Style({
      image: new Circle({
        fill: new Fill({ color: '#FFE30D' }),
        radius: 2,
      }),
      zIndex: 2,
    })
    this.p5Style = new Style({
      image: new Circle({
        fill: new Fill({ color: '#A01CFF' }),
        radius: 2,
      }),
      zIndex: 1,
    })
    this.modify.setActive(false)
    this.map.addLayer(this.layer1)
    this.map.addLayer(this.layer0)

    this.map.addInteraction(this.modify)
    this.item0 = []
    this.item1 = []
  }

  clear() {
    this.map.removeLayer(this.layer0)
    this.map.removeLayer(this.layer1)
  }

  render(coordinates) {
    this.clear()
    this.init()
    let shipIndex = -1
    for (let i = 0; i < coordinates.length; i++) {
      const item = coordinates[i]
      if (item['shipPositionSign'] === 1) {
        this.shipInfo.position = [item.lon, item.lat]
        const beforeItem = coordinates[i === 0 ? 0 : i - 1]
        this.shipInfo.rotate = this.getRotate(
          [beforeItem.lon, beforeItem.lat],
          [item.lon, item.lat],
        )
        shipIndex = i
        this.item1.push(item)
        break
      }
    }

    for (let i = 0; i < coordinates.length; i++) {
      const item = coordinates[i]
      if (i < shipIndex) {
        this.item0.push(item)
      } else {
        if (item['shipPositionSign'] === 0) {
          this.item1.push(item)
        }
      }
    }

    if (shipIndex !== -1) {
      this.createLine0()
      this.createLine1()
      this.createShip()
    } else {
      this.createLine1()
    }
  }

  getRotate(start, end) {
    const point1 = turf.point(toLonLat(start))
    const point2 = turf.point(toLonLat(end))
    return turf.bearing(point1, point2)
  }

  transform(point) {
    const viewProjection = this.map.getView().getProjection().getCode()
    if (viewProjection === 'EPSG:3857') {
      return fromLonLat(point)
    } else {
      return point
    }
  }

  createShip() {
    const point = new Point(this.transform(this.shipInfo.position))
    const feature = new Feature({
      geometry: point,
    })
    feature.setStyle(
      new Style({
        image: new Icon({
          src: this.imagePath + 'ship.png',
          anchor: [0.5, 0.5],
          scale: 0.05,
          rotation: (this.shipInfo.rotate * Math.PI) / 180,
        }),
        zIndex: 4,
      }),
    )
    this.source0.addFeature(feature)
  }

  getStyle(n) {
    return new Style({
      image: new Icon({
        src: this.imagePath + n + '.png',
        anchor: n === 4 ? [0.5, 1] : [0.5, 0.5],
        scale: n === 4 ? 0.1 : 0.08,
      }),
      zIndex: 3,
    })
  }

  createLine0() {
    const coordinates = this.item0.map((item) => {
      const feature = new Feature({
        geometry: new Point(this.transform([item.lon, item.lat])),
      })

      if (item['shipPositionSign'] === 5) {
        feature.setStyle(this.p5Style)
      } else if (item['shipPositionSign'] === 3) {
        feature.setStyle(this.p3Style)
      } else {
        feature.setStyle(this.getStyle(item['shipPositionSign']))
      }

      this.source0.addFeature(feature)
      return this.transform([item.lon, item.lat])
    })

    const lineString = new LineString(coordinates)
    const feature = new Feature({
      geometry: lineString,
    })
    if (this.style0) {
      feature.setStyle(this.style0)
    }
    feature.setId('line0')

    this.source0.addFeature(feature)
  }

  createLine1() {
    this.coordinates = this.item1.map((item, index) => {
      return [item.lon, item.lat]
    })

    const lineString = new LineString(
      this.coordinates.map((item) => this.transform(item)),
    )
    const feature = new Feature({
      geometry: lineString,
    })
    if (this.style1) {
      feature.setStyle(this.style1)
    }
    feature.setId('line1')

    this.source1.addFeature(feature)
  }

  modifyendHandler = (event) => {
    const modifiedFeature = event.features.getArray()[0]
    this.coordinates = modifiedFeature.getGeometry().getCoordinates()
    this.removeEditPoint()
    this.createEditPoint(true)
    this.endHandler(false)
  }

  createEditPoint(value) {
    this.coordinates.map((item, index) => {
      const feature = new Feature({
        geometry: new Point(item),
        type: 'editPoint',
      })
      feature.setStyle(value ? this.p0Style : null)
      this.source1.addFeature(feature)
      this.editFeatures.push(feature)
    })
  }

  setActive(value) {
    this.modify.setActive(value)
    this.editFeatures = []
    if (value) {
      this.createEditPoint(value)
    } else {
      this.removeEditPoint()
    }
  }

  removeEditPoint() {
    this.source1.getFeatures().map((item) => {
      if (item.get('type') === 'editPoint') {
        this.source1.removeFeature(item)
      }
    })
  }

  getData() {
    return this.source1.getFeatureById('line1').getGeometry().getCoordinates()
  }

  setData(coordinates) {
    if (!this.modify.getActive()) return
    const lineString = new LineString(coordinates)
    this.source1.getFeatureById('line1').setGeometry(lineString)
    this.coordinates = coordinates
    this.removeEditPoint()
    this.createEditPoint(true)
  }
}

export default ShipRoute

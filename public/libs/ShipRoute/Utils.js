const { fromLonLat } = window.CME2D.proj

export const ol_coordinate_dist2d = function (p1, p2) {
  var dx = p1[0] - p2[0]
  var dy = p1[1] - p2[1]
  return Math.sqrt(dx * dx + dy * dy)
}
export const ol_coordinate_equal = function (p1, p2) {
  return p1[0] == p2[0] && p1[1] == p2[1]
}
export const transformProjection = (map, point) => {
  const viewProjection = map.getView().getProjection().getCode()
  if (viewProjection === 'EPSG:3857') {
    return fromLonLat(point)
  } else {
    return point
  }
}

import { addGridLayer } from './addGridLayer.js'

export const initGridLayer = (view, dimensions, config) => {
  let data = {
    elementConfig: config,
    sdui: JSON.stringify(dimensions),
  }
  addGridLayer(view, data)
}

export const editGridLayer = (view, dimensions, config) => {
  let data = {
    elementConfig: config,
    sdui: JSON.stringify(dimensions),
  }
  addGridLayer(view, data)
}

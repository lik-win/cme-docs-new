let sliderInstance, textArr, colorArr

const getTextArr = (legendData) => {
  return legendData.map((item) => item[0])
}
const getColorArr = (legendData) => {
  return legendData.map((item) => item[1])
}
// 创建图例颜色平均分布
function createLinearGradient(colors, linear) {
  // 检查颜色数组是否至少有一个颜色
  if (!colors || colors.length === 0) {
    throw new Error('至少需要一种颜色')
  }

  // 计算每个颜色的百分比
  const percentPerColor = 100 / colors.length

  // 初始化渐变字符串
  let gradientStr = 'linear-gradient(to right, '

  // 遍历颜色数组，为每个颜色构建渐变步骤
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    // 计算当前颜色的起始百分比
    const startPercent = i * percentPerColor
    // 计算下一个颜色的起始百分比（当前颜色的结束百分比）
    const endPercent =
      i === colors.length - 1 ? '100' : (i + 1) * percentPerColor
    if (linear) {
      // 添加渐变步骤到字符串中
      gradientStr += `rgba(${color[0]},${color[1]},${color[2]},${255}) ${startPercent}%`
    } else {
      gradientStr += `rgba(${color[0]},${color[1]},${color[2]},${255}) ${startPercent}%, rgba(${color[0]},${color[1]},${color[2]},${255}) ${endPercent}%`
    }

    // 如果不是最后一个颜色，则添加逗号分隔符
    if (i < colors.length - 1) {
      gradientStr += ', '
    }
  }

  // 闭合渐变字符串的括号
  gradientStr += ')'

  return gradientStr
}
const rangeSlider = (textArr) => {
  let range = {}
  textArr.forEach((text, index) => {
    let step = null
    step = `${(100 / textArr.length) * index}%`
    range[step] = text
  })
  range['min'] = textArr[0]
  range['max'] = textArr.slice(-1)[0]
  return range
}

const renderColorUl = (textArr) => {
  let ulEl = document.createElement('ul')
  ulEl.className = 'color-ul'
  ulEl.id = 'colorUl'
  let str = ''
  textArr.forEach((item) => {
    str += `<li>${item}</li>`
  })
  ulEl.innerHTML = str
  return ulEl
}

export const initLegend = (el, legendData, linear = false) => {
  if (!legendData?.length) return
  textArr = getTextArr(legendData)
  colorArr = getColorArr(legendData)

  sliderInstance = noUiSlider.create(el, {
    start: [textArr[0], textArr.at(-1)],
    connect: true,
    tooltips: [true, true],
    snap: !linear,
    step: 1,
    format: {
      from: function (formattedValue) {
        return Number(formattedValue)
      },
      to: function (numericValue) {
        return Number(numericValue.toFixed(2))
      },
    },
    range: rangeSlider(textArr),
  })
  let first = document
    .querySelectorAll('.noUi-base .noUi-origin')[0]
    .querySelector('.noUi-tooltip').innerHTML
  let two = document
    .querySelectorAll('.noUi-base .noUi-origin')[1]
    .querySelector('.noUi-tooltip').innerHTML
  let newParent = document.querySelectorAll('.noUi-base')[0]
  newParent.appendChild(renderColorUl(textArr))
  document
    .querySelectorAll('.noUi-base .noUi-origin')[0]
    .querySelector('.noUi-tooltip').innerHTML = Number(first)
  document
    .querySelectorAll('.noUi-base .noUi-origin')[1]
    .querySelector('.noUi-tooltip').innerHTML = Number(two)
  let background = createLinearGradient(colorArr, linear)
  document.querySelector('.noUi-base').style.background = background
  return sliderInstance
}

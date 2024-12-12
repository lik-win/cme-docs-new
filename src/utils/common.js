// vite: 动态加载图片
export const loadImage = async (imgPath, prefix = '@/assets') => {
  try {
    // 动态导入图片
    const image = await import(`${prefix}${imgPath}`)
    return image.default // 返回图片的默认导出
  } catch (error) {
    console.error('Failed to load image:', error)
    return null
  }
}

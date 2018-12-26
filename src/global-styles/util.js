const getFontColor = (color, white, black) => {
  const rgba = color.match(/rgba?\((.*)\)/)[1].split(',').map(Number)
  let r = rgba[0]
  let g = rgba[1]
  let b = rgba[2]
  let percived = (r * 299 + g * 587 + b * 114) / 1000
  return (percived > 200 ? black : white)
}

export const setColor = (theme, color, auto) => {
  if (auto) {
    return theme.typography.getColor(color)
  }
  return color
}

export default getFontColor

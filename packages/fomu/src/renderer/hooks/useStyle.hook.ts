import type { CommonStyle } from 'fomu'
import type { Cell } from 'fomu'
import type { CSSProperties } from 'vue'
import { isNullish } from '@fomu/common'

const add = (result: Record<string, any>, key: keyof CSSProperties, value: any, suffix = '') => {
  if (!isNullish(value))
    result[key] = `${value}${suffix}`
}

const useSelectedStyle = (cell: Cell): CSSProperties => {
  if (!cell.graph.isSelected(cell))
    return {}

  const style = cell.attrs as CommonStyle
  return { borderStyle: 'dashed', borderColor: 'red', borderWidth: `${style.borderWidth || 1}px` }
}

const usePositionStyle = (cell: Cell): CSSProperties => {
  const result: CSSProperties = {
    position: 'absolute',
  }

  // position
  add(result, 'left', cell.attrs.x, 'px')
  add(result, 'top', cell.attrs.y, 'px')
  // size
  add(result, 'width', cell.attrs.width, 'px')
  add(result, 'height', cell.attrs.height, 'px')

  return result
}

export const useBaseStyle = (cell: Cell): CSSProperties => {
  const style = cell.attrs as CommonStyle
  const result: Record<string, string> = {}

  add(result, 'background', style.background)

  // font
  add(result, 'color', style.color)
  add(result, 'fontSize', style.fontSize, 'px')
  add(result, 'textAlign', style.textAlign)

  // box
  if (Array.isArray(style.padding))
    result.padding = style.padding.join(' ')
  else if (style.padding)
    add(result, 'padding', style.padding)

  if (Array.isArray(style.margin))
    result.margin = style.margin.join(' ')
  else if (style.margin)
    add(result, 'margin', style.margin)

  add(result, 'borderWidth', style.borderWidth, 'px')
  add(result, 'borderColor', style.borderColor)
  add(result, 'borderStyle', style.borderStyle)
  add(result, 'borderRadius', style.borderRadius, 'px')

  return result
}

export const useStyle = (cell: Cell): CSSProperties => {
  return {
    ...useBaseStyle(cell),
    ...useSelectedStyle(cell),
    ...usePositionStyle(cell),
  }
}

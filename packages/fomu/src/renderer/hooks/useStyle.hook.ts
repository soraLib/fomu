import type { CommonStyle } from 'fomu'
import type { Cell } from 'fomu'
import type { CSSProperties } from 'vue'
import { isNullish } from '@fomu/common'

export const useStyle = (cell: Cell): CSSProperties => {
  const style = cell.attrs as CommonStyle
  const result: Record<string, string> = {}

  const add = (key: string, value: any, suffix = '') => {
    if (!isNullish(value))
      result[key] = `${value}${suffix}`
  }

  // color
  add('background', style.background)

  // font
  add('color', style.color)
  add('fontSize', style.fontSize, 'px')
  add('textAlign', style.textAlign)

  // box
  if (Array.isArray(style.padding))
    result.padding = style.padding.join(' ')
  else if (style.padding)
    add('padding', style.padding)

  if (Array.isArray(style.margin))
    result.margin = style.margin.join(' ')
  else if (style.margin)
    add('margin', style.margin)

  add('borderWidth', style.borderWidth, 'px')
  add('borderColor', style.borderColor)
  add('borderStyle', style.borderStyle)
  add('borderRadius', style.borderRadius, 'px')

  return result
}

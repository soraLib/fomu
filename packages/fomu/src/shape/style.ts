import type { Repeat } from '@fomu/common'

export interface ColorStyle {
  background: string
}

export interface FontStyle {
  color: string
  fontSize: number
  textAlign: 'left' | 'center' | 'right'
}

export interface BoxStyle {
  padding: Repeat<string, 4>
  /**
   * only work under LinearLayout
   */
  margin: Repeat<string, 4>
  borderWidth: number
  borderColor: string
  borderStyle: 'dashed' | 'solid' | 'none'
  borderRadius: number
}

export type CommonStyle = ColorStyle & FontStyle & BoxStyle

// TODO: px % grow fit
// eg: 20% 10px 0.5grow fit
export interface Position {
  x: number
  y: number
}
export interface Size {
  width: number
  height: number
}
export type Rect = Position & Size

export interface MousePosition extends Position {
  startX: number
  startY: number
}

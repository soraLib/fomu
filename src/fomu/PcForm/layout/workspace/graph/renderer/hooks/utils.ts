import type { Stick } from '../../../../../graph'
import type { Rect } from '../utils/rectangle'

export function gridFloor(x: number, size: number) {
  return size * Math.floor(x / size)
}
export const gridCeil = (x: number, size: number) => size * Math.ceil(x / size)

export function useResizeOnGird(
  rect: Rect,
  size: number,
  stick: Stick,
  delta: { x: number; y: number },
): Rect {
  let { x, y, width, height } = { ...rect }

  switch (stick[0]) {
    case 'b': {
      const girdRound = delta.y > 0 ? gridCeil : gridFloor
      height = girdRound(y + height, size) - y
      break
    }

    case 't': {
      const girdRound = delta.y > 0 ? gridFloor : gridCeil
      const ob = y + height
      const gy = girdRound(y, size)
      height = ob - gy
      y = gy
      break
    }
  }

  switch (stick[1]) {
    case 'l': {
      const girdRound = delta.x > 0 ? gridFloor : gridCeil
      const or = x + width
      const gx = girdRound(x, size)
      width = or - gx
      x = gx

      break
    }
  }

  switch (stick[1]) {
    case 'r': {
      const girdRound = delta.x > 0 ? gridCeil : gridFloor
      width = girdRound(x + width, size) - x

      break
    }
  }

  return {
    x,
    y,
    width,
    height,
  }
}

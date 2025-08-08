import type { Cell } from 'fomu'
import { useThrottleFn } from '@vueuse/core'
import { getRectangle, selectOrAhead } from 'fomu'

interface DragPositon {
  _startX: number
  _startY: number
}

export const useDrag = useThrottleFn((
  event: MouseEvent,
  cell: Cell,
) => {
  const parent = cell.parent
  if (!parent) {
    console.log('parent is null', cell)
    return
  }

  selectOrAhead(cell)

  const graph = cell.graph
  const cells = graph.selected

  const rect = getRectangle(cells)

  const mousePos: DragPositon = {
    _startX: event.screenX,
    _startY: event.screenY,
  }
  const rectPos: DragPositon = {
    _startX: rect.x,
    _startY: rect.y,
  }
  const cellsPos: DragPositon[] = cells.map(ele => ({
    _startX: ele.attrs.x,
    _startY: ele.attrs.y,
  }))

  const MOVE_START_TIME = new Date()

  const moveCb = (event: MouseEvent) => {
    graph.setMouse({ x: event.screenX, y: event.screenY })
    elementMove(event)
  }

  document.addEventListener('mousemove', moveCb)
  document.addEventListener(
    'mouseup',
    () => {
      document.removeEventListener('mousemove', moveCb)
      elementMoveEnd()
    },
    { once: true },
  )

  const elementMove = (event: MouseEvent) => {
    // graph.setDragging(true)

    // move distance
    const moveX = event.screenX - mousePos._startX
    const moveY = event.screenY - mousePos._startY

    // grid
    // if (graph.grid.enabled) {
    //   moveX = gridFloor(rect.x + moveX, graph.grid.size) - rect.x
    //   moveY = gridFloor(rect.y + moveY, graph.grid.size) - rect.y
    // }

    const finalX = rectPos._startX + moveX
    const finalY = rectPos._startY + moveY

    // const parentBorderLength = (parent.attrs['border-width'] ?? 0) * 2
    // const parentWidth = parent.attrs.width /* - parentBorderLength */
    // const parentHeight
    //   = parent.attrs.height
    /*   - (parent.attrs['tab-height'] ?? 0)
        - parentBorderLength */

    // limits the offset of the elements to ensure its always inside the parent.
    const finalMoveX
    /* =  finalX + rect.width > parentWidth
        ? parentWidth - rect.width - rectPos._startX
        :  */= finalX < 0
      ? -rectPos._startX
      : moveX
    const finalMoveY
    /* =  finalY + rect.height > parentHeight
        ? parentHeight - rect.height - rectPos._startY
        : */ = finalY < 0
      ? -rectPos._startY
      : moveY

    /* graph.updateElemsData(
      graph.selected.map((ele, i) => {
        const x = cellsPos[i]._startX + finalMoveX
        const y = cellsPos[i]._startY + finalMoveY

        return {
          element: ele,
          data: {
            x,
            y,
          },
        }
      }),
      false,
    ) */

    for (let i = 0; i < cells.length; i++) {
      const x = cellsPos[i]._startX + finalMoveX
      const y = cellsPos[i]._startY + finalMoveY

      cell.attrs.x = x
      cell.attrs.y = y
    }
  }
  const elementMoveEnd = () => {
    const MOVE_END_TIME = new Date()
    const duration = MOVE_END_TIME.getTime() - MOVE_START_TIME.getTime()
    const rect = getRectangle(cells)

    const moveX = rect.x - rectPos._startX
    const moveY = rect.y - rectPos._startY

    // skip when not move
    if (moveX || moveY) {
      if (duration > 200) {
        // debounce
        /* graph.addRecord(
          new PcRecord({
            time: new Date(),
            type: BasicRecordType.Attr,
            data: graph.selected.map((ele, i) => ({
              id: ele.attrs.id,
              name: ele.attrs.name,
              prev: {
                x: cellsPos[i]._startX,
                y: cellsPos[i]._startY,
              },
              next: {
                x: ele.attrs.x,
                y: ele.attrs.y,
              },
            })),
          }),
        ) */
      } else {
        /* graph.updateElemsData(
          graph.selected.map((ele, i) => ({
            element: ele,
            data: {
              x: cellsPos[i]._startX,
              y: cellsPos[i]._startY,
            },
          })),
        ) */
      }
    } else {
      // graph.setSelected(element)
    }

    graph.setMouse()
    // graph.setDragging(false)
  }
})

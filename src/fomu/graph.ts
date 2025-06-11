import type { Arrayable } from '@vueuse/core'
import type { BasicClipBoard } from './clipboard'
import type { BasicElement } from './element'
import type { BasicRecord, BasicRecordStore } from './record'
import type { ScaleType } from '@/components/AutoScale'

export enum GraphType {
  Pc = 'PcForm',
  // App = 'AppForm',
  // Flow = 'FlowForm',
  // Print = 'PrintForm',
}

export interface Position {
  x: number
  y: number
}
export interface MousePosition extends Position {
  startX: number
  startY: number
}

export interface GridSetting {
  type: 'dot' | 'mesh' | 'double-mesh'
  size: number
  radius: number
  enabled: boolean
  visible: true
}
export interface SnaplineSetting {
  radius: number
  enabled: boolean
}
export enum ModifierKey {
  Ctrl = 'ctrl',
  Alt = 'alt',
  Shift = 'shift',
}
export interface SelectionSetting {
  enabled: boolean
  modifier: ModifierKey
  showSelectionBox: boolean
}
export interface Scroller {
  pannable: boolean
}

export enum MoveDirection {
  UP = 'up',
  DOWN = 'down',
  RIGHT = 'right',
  LEFT = 'left',
}

export interface ScaleSetting {
  type: ScaleType
  ratio: number
}

export interface IdUpdateData<T extends BasicElement = BasicElement> {
  id: string
  data: Partial<T['attrs']>
}
export interface ElUpdateData<T extends BasicElement = BasicElement> {
  element: BasicElement
  data: Partial<T['attrs']>
}
export function isIdUpdateData<T extends BasicElement = BasicElement>(
  data: IdUpdateData<T> | ElUpdateData<T>,
): data is IdUpdateData<T> {
  return Reflect.has(data, 'id')
}
export interface UpdateElementOptions {
  skipEqualCheck?: boolean
}
/** basic graph */
export interface BasicGraph {
  /** graph type */
  type: GraphType
  /** graph canvas, contain all elements here */
  canvas: BasicElement
  /** record store */
  history: BasicRecordStore
  /** current selected elements */
  selected: BasicElement[]
  /** div container */
  containter?: HTMLDivElement

  scale: ScaleSetting
  setScale: (optons: Partial<ScaleSetting>) => void

  selection: SelectionSetting

  isDraft: boolean
  isDragging?: boolean
  grid: GridSetting
  snapline: SnaplineSetting
  scroller: Scroller
  clipboard: BasicClipBoard
  setSelection: (selection: Partial<SelectionSetting>) => void
  setGrid: (grid: Partial<GridSetting>) => void
  setSnap: (snap: Partial<SnaplineSetting>) => void
  setScroller: (scroller: Partial<Scroller>) => void
  setIsDraft: (isDraft?: boolean) => void
  setDevice?: (type: GraphType) => void
  setCanvas: (canvas: BasicElement) => void

  /** elements name set, used to ensure its uniqueness */
  nameSet: Set<string>

  getNextId: () => string

  scrollIntoView: (
    element: BasicElement | undefined,
    options?: ScrollIntoViewOptions,
  ) => void

  setSelected: (() => BasicElement | undefined) &
    ((id: string) => BasicElement | undefined) &
    ((ids: string[]) => BasicElement[]) &
    ((element: BasicElement) => BasicElement) &
    ((elements: BasicElement[]) => BasicElement[])

  updateElemData: ((
    id: string,
    data: Partial<BasicElement['attrs']>,
    needRecord?: boolean,
    options?: UpdateElementOptions,
  ) => BasicElement | undefined) &
    ((
      element: BasicElement,
      data: Partial<BasicElement['attrs']>,
      needRecord?: boolean,
      options?: UpdateElementOptions,
    ) => BasicElement | undefined)

  updateElemsData: ((
    data: IdUpdateData[],
    needRecord?: boolean,
    options?: UpdateElementOptions,
  ) => BasicElement[] | undefined) &
    ((
      data: ElUpdateData[],
      needRecord?: boolean,
      options?: UpdateElementOptions,
    ) => BasicElement[] | undefined)

  historyTo: ((to: number) => void) & ((to: BasicRecord) => void)

  move: <A extends Arrayable<string | BasicElement>>(
    as: A,
    options: {
      direction: MoveDirection
      distance?: number
    },
    needRecord?: boolean,
  ) => void
  remove: <A extends Arrayable<string | BasicElement>>(
    as: A,
    needRecord?: boolean,
  ) => void

  undo: () => void
  redo: () => void
}

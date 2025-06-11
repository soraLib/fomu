import type { BasicElement } from './element'
import type { BasicGraph } from './graph'

export interface Position {
  left: number
  top: number
}

export declare interface BasicClipBoard {
  graph: BasicGraph
  clips:
    | {
        elements: BasicElement[]
        type: 'cut' | 'copy'
        times: number
      }
    | undefined
  offset: number

  isEmpty: () => boolean

  copy: (options?: {
    useLocalStorage?: boolean
    deep?: boolean
    elements?: BasicElement[]
  }) => void
  cut: (options?: {
    useLocalStorage?: boolean
    deep?: boolean
    elements?: BasicElement[]
  }) => void
  paste: (
    parent?: BasicElement,
    options?: {
      position?: Position
      nodeProps?: (element: BasicElement) => Partial<BasicElement['attrs']>
      deep?: boolean
    },
  ) => BasicElement[] | undefined
}

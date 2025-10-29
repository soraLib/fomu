import type { Cell, Graph } from 'fomu'
import { restoreCell } from 'fomu'

export * from './shared'

export enum HistoryType {
  /** init graph */
  Init = 'init',
  /** add cell(s) */
  Add = 'add',
  /** delete cell(s) */
  Delete = 'delete',
  /** update cell(s)' attributes */
  Update = 'update',
}

interface HistoryBase {
  type: HistoryType
}

/** update history data */
export interface UHistoryData extends HistoryBase {
  id: string
  prev: Partial<Cell['attrs']>
  next: Partial<Cell['attrs']>
  type: HistoryType.Update
}

/** create or delete */
export interface CDCell<T extends Cell> {
  id: string
  parent?: T
  children?: T[]
  attrs: T['attrs']
}
export type CDHistory<T extends Cell = Cell> = CDCell<T>

/** create or delete history data */
export interface CDHistoryData extends HistoryBase {
  prev?: CDHistory
  next?: CDHistory
  type: HistoryType.Add | HistoryType.Delete | HistoryType.Init
}

export type HistoryData = CDHistoryData | UHistoryData
/** is update history data */
export const isUHistoryData = (data: HistoryData): data is UHistoryData =>
  data.type === HistoryType.Update

/** is create or delete history data */
export const isCDHistoryData = (data: HistoryData): data is CDHistoryData => {
  return !isUHistoryData(data)
}

export type History = HistoryData | HistoryData[]
interface HistoryStoreBase {
  /** record histories */
  histories: History[]
  /** current record history index, for record undo and redo */
  index: number
  /** max length of record history list */
  max: number
  /** is recording opened */
  recording: boolean
  /** slide timeline to */
  getPrev: () => History | undefined
  getNext: () => History | undefined
}

export class HistoryStore implements HistoryStoreBase {
  histories: History[] = []
  index = -1
  max: number
  recording: boolean
  graph: Graph

  constructor(config: Partial<Pick<HistoryStoreBase, 'max' | 'recording'>> & { graph: Graph }) {
    this.max = config?.max ?? 20
    this.recording = config?.recording ?? true
    this.graph = config.graph
  }

  getPrev() {
    if (this.index < 0)
      return

    return this.histories[this.index]
  }

  getNext() {
    if (this.index >= this.histories.length - 1)
      return

    return this.histories[this.index + 1]
  }

  add(history: History) {
    this.histories.push(history)
    this.index += 1
  }

  private applyHistory(direction: 'undo' | 'redo') {
    const dataList = direction === 'undo'
      ? this.getPrev()
      : this.getNext()

    if (!dataList)
      return

    const histories = Array.isArray(dataList) ? dataList : [dataList]

    for (const data of histories) {
      if (isCDHistoryData(data)) {
        const isAdd = data.type === HistoryType.Add
        const target = direction === 'undo' ? data.prev : data.next
        const opposite = direction === 'undo' ? data.next : data.prev

        if (isAdd) {
        // undo Add → remove
        // redo Add → restore
          if (direction === 'undo') {
            opposite?.id && this.graph.remove(opposite.id)
          } else {
            target && restoreCell(target, this.graph, { createHistory: false })
          }
        } else {
        // undo Modify → restore prev
        // redo Modify → restore next
          if (direction === 'undo') {
            target && restoreCell(target, this.graph, { createHistory: false })
          } else {
            opposite?.id && this.graph.remove(opposite.id)
          }
        }

        continue
      }

      // Normal history
      const payload = direction === 'undo' ? data.prev : data.next
      this.graph.updateCell(data.id, payload, { createHistory: false })
    }
  }

  undo() {
    this.applyHistory('undo')
  }

  redo() {
    this.applyHistory('redo')
  }
}

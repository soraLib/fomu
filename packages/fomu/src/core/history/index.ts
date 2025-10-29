import type { Cell } from 'fomu'

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

  constructor(config?: Partial<Pick<HistoryStoreBase, 'max' | 'recording'>>) {
    this.max = config?.max ?? 20
    this.recording = config?.recording ?? true
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
}

import type { BasicElement, BasicElementAttributes } from './element'
import type { TabPane } from './PcForm/element'

export enum BasicRecordType {
  /** init graph */
  Init,
  /** add elements */
  Add,
  /** delete elements */
  Delete,
  /** modify elements attribute */
  Attr,
}

interface BasicRecordData {
  /**
   * name for history display
   */
  name: BasicElementAttributes['name']
}

/** update record data */
export interface URecordData extends BasicRecordData {
  id: string
  prev: Partial<BasicElementAttributes>
  next: Partial<BasicElementAttributes>
}

export interface CDBasicElement<T extends BasicElement> {
  parent?: T
  children?: T[]
  attrs: T['attrs']
  tabs?: TabPane<T>[]
}
export type CDRecord<T extends BasicElement = BasicElement> = CDBasicElement<T>
/** create or delete record data */
export interface CDRecordData extends BasicRecordData {
  prev?: CDRecord
  next?: CDRecord
}

export type RecordData = CDRecordData | URecordData

/** is update record data */
export function isURecordData(data: RecordData): data is URecordData {
  return Reflect.has(data, 'id')
}

/** is create or delete record data */
export function isCDRecordData(data: RecordData): data is CDRecordData {
  return !Reflect.has(data, 'id')
}

export type CDRecordDataList = CDRecordData[]
export type URecordDataList = URecordData[]
export type BasicRecordDataList = CDRecordDataList | URecordDataList

/** is update record data list */
export function isURecordDataList(
  data: BasicRecordDataList,
): data is URecordDataList {
  return Reflect.has(data[0], 'id')
}

/** is create or delete record data list */
export function isCDRecordDataList(
  data: BasicRecordDataList,
): data is CDRecordDataList {
  return !isURecordDataList(data)
}

export interface BasicRecord {
  /** record type */
  type: BasicRecordType
  /** record time */
  time: Date
  /** record element history data */
  data: BasicRecordDataList
}

/** basic record store */
export interface BasicRecordStore {
  /** record histories */
  records: BasicRecord[]
  /** current record history index, for record undo and redo */
  index: number
  /** max length of record history list */
  max: number
  /** is recording opened */
  recording: boolean
  /** slide timeline to */
  getPrevRecord: () => BasicRecord | undefined
  getNextRecord: () => BasicRecord | undefined
}

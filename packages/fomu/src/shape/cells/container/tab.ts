import type { CellMetadata } from 'fomu'
import { Cell } from 'fomu'

export interface TabAttributes {}
export type TabMetadata = CellMetadata<TabAttributes> & {
  // children?: Cell[]
}

export class Tab extends Cell<TabAttributes> {
  static readonly type = 'tab' as const

  // TODO: tabs: TabPane[] = []

  constructor(metadata: TabMetadata) {
    super(metadata)
  }

  static fromOptions(metadata: TabMetadata) {
    return new Tab(metadata)
  }
}
export type TabCell = InstanceType<typeof Tab>

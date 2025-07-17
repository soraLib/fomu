import type { CellMetadata } from './cell'
import { Cell } from './cell'

export interface ContainerAttributes {}
export type ContainerMetadata = CellMetadata<ContainerAttributes> & {
  children?: Cell[]
}

export class Container extends Cell<ContainerAttributes> {
  static readonly type = 'container' as const

  children: Cell[] = []

  constructor(metadata: ContainerMetadata) {
    super(metadata)

    this.children = metadata.children ?? []
  }

  static fromOptions(metadata: ContainerMetadata) {
    return new Container(metadata)
  }
}
export type ContainerCell = InstanceType<typeof Container>

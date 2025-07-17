import type { CellMetadata, NormalCellAttributes } from './cell'
import { Cell } from './cell'

export type TextAttributes = NormalCellAttributes & {
  content: string
}

export type TextMetadata = CellMetadata<TextAttributes>

export class Text extends Cell<TextAttributes> {
  static readonly type = 'text'

  constructor(metadata: TextMetadata) {
    super(metadata)
  }
}

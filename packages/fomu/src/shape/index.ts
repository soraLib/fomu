import { Cell } from './cell'
import { Text } from './text'

export * from './cell'
export * from './text'

export const Shape = {
  Cell,
  Text,
}

export type TextCell = InstanceType<typeof Shape['Text']>

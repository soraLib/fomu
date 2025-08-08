import { AbsoluteLayout, Cell, Text } from './cells'

export * from './cells'
export * from './shared'
export * from './style'

export const Layout = {
  Absolute: AbsoluteLayout,
}
export const Shape = {
  Cell,
  Text,
  ...Layout,
}

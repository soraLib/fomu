import type { PcElement } from '../element'
import type { Predicate } from './node'
import { ElementType } from '../../element'
import { isContainer, isTab } from '../element'

export interface ElementTreeDataOption {
  label: string
  value: string
  children?: ElementTreeDataOption[]
  type: ElementType
  disabled?: boolean
}
export function createElementTreeData(
  elems: PcElement[] | undefined,
  filter?: Predicate<PcElement>,
): ElementTreeDataOption[] | undefined {
  const filteredElems = filter ? elems?.filter(filter) : elems

  return (
    filteredElems?.map((elem) => ({
      label: elem.attrs.name,
      value: elem.attrs.id,
      children: isTab(elem)
        ? elem.tabs?.map((pane) => ({
            label: pane.label,
            value: pane.id,
            type: ElementType.TabPane,
            children: createElementTreeData(pane.children, filter),
            disabled: true,
          }))
        : isContainer(elem)
          ? createElementTreeData(elem.children, filter)
          : undefined,
      type: elem.attrs.type,
    })) ?? []
  )
}

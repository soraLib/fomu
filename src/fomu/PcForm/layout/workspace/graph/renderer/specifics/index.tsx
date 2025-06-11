import type { Component, PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { computed, defineComponent, h } from 'vue'
import { ElementType } from '@/fomu/element'
import CheckboxSpecific from './checkbox/checkbox'
import ContextmenuSpecific from './contextmenu/contextmenu'
import RadioSpecific from './radio/radio'
import SelectSpecific from './select/select'
import TabSpecific from './tab/tab'
import TableSpecific from './table/table'
import TextSpecific from './text/text'
import TimePickerSpecific from './time-picker/time-picker'

const EmptyDiv = <div />

const SpecificComponentMap: Partial<Record<ElementType, Component>> = {
  [ElementType.Radio]: RadioSpecific,
  [ElementType.Checkbox]: CheckboxSpecific,
  [ElementType.Select]: SelectSpecific,
  [ElementType.Table]: TableSpecific,
  [ElementType.TimePicker]: TimePickerSpecific,
  [ElementType.Contextmenu]: ContextmenuSpecific,
  [ElementType.Tab]: TabSpecific,
  [ElementType.Text]: TextSpecific,
  [ElementType.Container]: EmptyDiv,
}
export default defineComponent({
  name: 'ElementRendererSpecifics',
  props: {
    graph: {
      required: true,
      type: Object as PropType<PcGraph>,
    },
    element: {
      required: true,
      type: Object as PropType<PcElement>,
    },
  },

  setup(props) {
    const type = computed(() => props.element.attrs.type)

    return () => {
      const SpecificComponent = SpecificComponentMap[type.value]
      if (SpecificComponent) return h(SpecificComponent, props)

      return <span> {props.element.parent && props.element.attrs.name}</span>
    }
  },
})

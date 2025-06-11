import type { PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { computed, defineComponent } from 'vue'

import './checkbox.scss'

export default defineComponent({
  name: 'ElementRendererSpecificCheckbox',
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
    const rowNumber = computed(() => props.element.attrs['row-number'] ?? 2)
    const columnNumber = computed(
      () => props.element.attrs['column-number'] ?? 2,
    )

    return () => (
      <div class="sa-checkbox">
        {props.element.attrs.options
          ?.slice(0, rowNumber.value * columnNumber.value)
          .map((checkbox) => {
            return (
              <div
                class="checkbox-item"
                style={{
                  width: `calc(100% / ${columnNumber.value})`,
                  height: `calc(100% / ${rowNumber.value})`,
                }}
              >
                <span class="checkbox-item-label">{checkbox.label}</span>
              </div>
            )
          })}
      </div>
    )
  },
})

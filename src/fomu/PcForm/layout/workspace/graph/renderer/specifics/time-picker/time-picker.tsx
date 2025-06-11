import type { PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { TimeOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { defineComponent } from 'vue'

import './time-picker.scss'

export default defineComponent({
  name: 'ElementRendererSpecificTimePicker',
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
    return () => (
      <div class="sa-time-picker">
        <span>{props.element.attrs['time-format']}</span>
        <NIcon class="sa-time-picker-arrow" size={14}>
          <TimeOutline />
        </NIcon>
      </div>
    )
  },
})

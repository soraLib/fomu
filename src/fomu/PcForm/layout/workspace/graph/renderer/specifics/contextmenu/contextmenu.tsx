import type { PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { defineComponent } from 'vue'

import './contextmenu.scss'

export default defineComponent({
  name: 'ElementRendererSpecificContextmenu',
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
      <div class="sa-contextmenu">
        <span>Contextmenu</span> ({' '}
        {props.element.attrs['contextmenu-binds']?.length} )
      </div>
    )
  },
})

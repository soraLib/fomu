import type { PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ElementRendererSpecificText',
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
    const text = computed(() => props.element.attrs.name)

    return () => <div class="sa-text" v-html={text.value}></div>
  },
})

import type { PropType } from 'vue'
import type { BasicGraph } from '../../graph'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SaFormLayoutHeaderLayout',
  props: {
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
  },

  setup(props) {
    return () => <div class="flex w-fit"></div>
  },
})

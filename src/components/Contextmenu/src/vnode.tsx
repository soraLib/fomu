import type { Component, PropType } from 'vue'
import { defineComponent, h } from 'vue'

export default defineComponent({
  functional: true,
  props: {
    vnode: {
      required: true,
      type: Object as PropType<Component>,
    },
  },
  setup(props) {
    return () => h(props.vnode)
  },
})

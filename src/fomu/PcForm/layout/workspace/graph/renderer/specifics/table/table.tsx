import type { DataTableColumn } from 'naive-ui'
import type { PropType } from 'vue'
import type { PcElement } from '@/fomu/PcForm/element'
import type { PcGraph } from '@/fomu/PcForm/graph'
import { NDataTable } from 'naive-ui'
import { computed, defineComponent } from 'vue'

import './table.scss'

export default defineComponent({
  name: 'ElementRendererSpecificTable',
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
    const columns = computed<DataTableColumn[]>(
      () =>
        props.element.attrs.data?.map((column) => ({
          key: column.title,
          title: column.title,
          width: column.width,
        })) ?? [],
    )

    return () => (
      <div class="sa-table">
        <NDataTable
          class="sa-table-inner"
          bordered={false}
          singleLine={false}
          singleColumn={false}
          maxHeight={props.element.attrs.height}
          columns={columns.value}
          data={[]}
        />
      </div>
    )
  },
})

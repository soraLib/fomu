import type { ComputedRef } from 'vue'
import type { SaController } from '../../config'
import type { BasicElement } from '../../element'
import { computed } from 'vue'

export function usePlugin(
  element: ComputedRef<BasicElement | undefined>,
  controller: SaController,
) {
  const plugin = computed(() => {
    const type = element.value?.attrs.type

    if (type !== undefined) {
      if (controller.plugins[type]) {
        return controller.plugins[type]
      }

      console.warn(`[Fomu warn]: Plugins not found in type ${type}.`)
    }

    return undefined
  })

  return {
    plugin,
  }
}

export interface PropertyExposes<A = any> {
  update?: () => Promise<A>
  internalUpdate?: () => Promise<A>
}

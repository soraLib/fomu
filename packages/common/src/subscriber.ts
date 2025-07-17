type Listener<Args extends any[]> = (...args: Args) => void

/**
 * event subscriber with event generics.
 *
 * @example
 * type Events = {
 *   'a': [number, string],
 *   'b': [boolean]
 * }
 * const sub = new Subscriber<Events>();
 * sub.on('a', (x, y) => { ... }); // x: number, y: string
 * sub.emit('b', true); // OK
 */
export class Subscriber<Events extends Record<string, any[]>> {
  readonly events: {
    [K in keyof Events]?: Listener<Events[K]>[]
  } = {}

  /**
   * register an event listener
   */
  on<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }

  /**
   * remove an event listener
   */
  off<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    const listeners = this.events[event]
    if (!listeners)
      return
    const filtered = listeners.filter(l => l !== listener)
    if (filtered.length === 0) {
      delete this.events[event]
    } else {
      this.events[event] = filtered
    }
  }

  /**
   * emit an event, calling all listeners associated with it
   */
  emit<K extends keyof Events>(event: K, ...args: Events[K]): void {
    const listeners = this.events[event]
    if (!listeners)
      return
    // Copy to avoid modification during iteration
    for (const listener of [...listeners]) {
      listener(...args)
    }
  }

  /**
   * register a listener for event that is only called once
   */
  once<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    const wrapper: Listener<Events[K]> = (...args) => {
      listener(...args)
      this.off(event, wrapper)
    }
    this.on(event, wrapper)
  }
}

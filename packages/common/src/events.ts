// TODO: handler params (source, context)
type Handler = () => void
interface EventListener { handler: Handler }
export class Events {
  private _listeners: {
    [name: string]: EventListener[]
  } = {}

  /**
   * TODO: event name enums
   *
   * @example
   *
   * cell.on('click', () => 'cell clicked')
   */

  on(name: string, handler: () => void) {
    if (!this._listeners[name]) {
      this._listeners[name] = []
    }

    this._listeners[name].push({ handler })
  }
}

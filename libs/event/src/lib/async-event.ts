import { IEvent, UnsubscriptionFunction } from './event.interface';

type Listener<T> = {
  /**
   * Whether the listener should only be invoked one time and then be automatically unsubbed.
   */
  once: boolean;
  /**
   * The function that's invoked for this listener when the event is triggered.
   */
  listener: T;
};

/**
 * Generic object-oriented implementation of an event intended to handle the subscription of
 * listeners that are asynchronous. Triggers from an AsyncEvent can be awaited to wait
 * for all listeners to finish before continuing.
 */
export class AsyncEvent<T extends (...args: any[]) => any>
  implements IEvent<T>
{
  private listeners: Listener<T>[] = [];

  subscribe(listener: T): UnsubscriptionFunction {
    throw new Error('Method not implemented.');
  }
  once(listener: T): UnsubscriptionFunction {
    throw new Error('Method not implemented.');
  }
  unsubscribe(listener: T): void {
    throw new Error('Method not implemented.');
  }
  trigger(...args: Parameters<T>): Promise<Awaited<ReturnType<T>>[]> {
    return Promise.all(
      this.listeners.map((listener) => {
        if (listener.once) {
          this.unsubscribe(listener.listener);
        }

        return listener.listener(...args);
      })
    );
  }
  invoke(...args: Parameters<T>): Promise<Awaited<ReturnType<T>>[]> {
    throw new Error('Method not implemented.');
  }
}

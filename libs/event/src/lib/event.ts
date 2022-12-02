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
 * A generic object-oriented implementation of an event. The event can take subscriptions and be triggered with or without args.
 */
export class Event<T extends (...args: any[]) => any> implements IEvent<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: T): UnsubscriptionFunction {
    this.listeners.push({
      once: false,
      listener,
    });

    return () => {
      this.unsubscribe(listener);
    };
  }

  once(listener: T): UnsubscriptionFunction {
    this.listeners.push({
      once: true,
      listener,
    });

    return () => {
      this.unsubscribe(listener);
    };
  }

  unsubscribe(listener: T): void {
    this.listeners = this.listeners.filter((l) => l.listener !== listener);
  }

  trigger(...args: Parameters<T>): ReturnType<T>[] {
    return this.listeners.map((listener) => {
      if (listener.once) {
        this.unsubscribe(listener.listener);
      }

      return listener.listener(...args);
    });
  }

  invoke(
    ...args: Parameters<Event<T>['trigger']>
  ): ReturnType<Event<T>['trigger']> {
    return this.trigger(...args);
  }
}

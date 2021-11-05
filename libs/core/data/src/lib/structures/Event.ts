import { LinkedList } from '../collections/LinkedList';

/**
 * A generic event that can have subscribed listeners and can be triggered.
 */
export class Event<T extends (...args: any[]) => void> {
  private listeners: LinkedList<T>;

  constructor() {
    this.listeners = new LinkedList<T>();
  }

  subscribe(listener: T) {
    this.listeners.add(listener);

    return listener;
  }

  unsubscribe(listener: T) {
    this.listeners.remove(listener);
  }

  trigger(...args: Parameters<T>) {
    this.listeners.forEach((listener) => {
      listener(...args);
    });
  }
}

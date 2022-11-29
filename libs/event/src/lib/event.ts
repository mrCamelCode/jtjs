type UnsubscriptionFunction = () => void;

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
 * A generic object-oriented event. The event can take subscriptions and be triggered with or without args.
 */
export class Event<T extends (...args: any[]) => any> {
  private listeners: Listener<T>[] = [];

  /**
   * Subscribes the provided `handler` to this event. When the event is `trigger`ed, it will invoke the `handler`.
   *
   * @param listener - Function to invoke when the event is triggered.
   *
   * @returns A function that can be called to unsubscribe your handler from the event. You should always unsubscribe
   * your handler when it's no longer needed.
   */
  subscribe(listener: T): UnsubscriptionFunction {
    this.listeners.push({
      once: false,
      listener,
    });

    return () => {
      this.unsubscribe(listener);
    };
  }

  /**
   * Subscribes the provided `handler` to this event. When the event is `trigger`ed, it will invoke the `handler` and then
   * automatically unsubscribe it. Useful if you need to perform an action only once and not for subsequent `trigger`s.
   *
   * @param listener - Function to invoke when the event is triggered.
   *
   * @returns A function that can be called to unsubscribe your handler from the event. You should be sure to unsubscribe any `once`
   * handlers if there's a chance they didn't get invoked by the time you don't need them anymore. There is no negative
   * effect for unsubscribing a handler that no longer exists on the event.
   */
  once(listener: T): UnsubscriptionFunction {
    this.listeners.push({
      once: true,
      listener,
    });

    return () => {
      this.unsubscribe(listener);
    };
  }

  /**
   * Unsubscribes the provided `handler` from the event. This is an alternative to calling unsubscription function
   * returned by `subscribe` and `once` should you have the reference for your handler and you prefer unsubscribing
   * this way.
   *
   * @param listener - The `handler` reference you passed to `subscribe` or `once`.
   */
  unsubscribe(listener: T): void {
    this.listeners = this.listeners.filter((l) => l.listener !== listener);
  }

  /**
   * Triggers the event, invoking all subscribed handlers.
   *
   * @param args - The arguments to pass to every invoked handler for the event.
   *
   * @returns The results of invoking all the listeners.
   */
  trigger(...args: Parameters<T>): ReturnType<T>[] {
    return this.listeners.map((listener) => {
      if (listener.once) {
        this.unsubscribe(listener.listener);
      }

      return listener.listener(...args);
    });
  }

  /**
   * Alias of {@link trigger}.
   */
  invoke(
    ...args: Parameters<Event<T>['trigger']>
  ): ReturnType<Event<T>['trigger']> {
    return this.trigger(...args);
  }
}

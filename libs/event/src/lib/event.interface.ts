export type UnsubscriptionFunction = () => void;


export interface IEvent<T extends (...args: any[]) => any> {
  /**
   * Subscribes the provided `listener` to this event. When the event is `trigger`ed, it will invoke the `listener`.
   *
   * @param listener - Function to invoke when the event is triggered.
   *
   * @returns A function that can be called to unsubscribe your listener from the event. You should always unsubscribe
   * your listener when it's no longer needed.
   */
  subscribe(listener: T): UnsubscriptionFunction;
  /**
   * Subscribes the provided `listener` to this event. When the event is `trigger`ed, it will invoke the `listener` and then
   * automatically unsubscribe it. Useful if you need to perform an action only once and not for subsequent `trigger`s.
   *
   * @param listener - Function to invoke when the event is triggered.
   *
   * @returns A function that can be called to unsubscribe your listener from the event. You should be sure to unsubscribe any `once`
   * listeners if there's a chance they didn't get invoked by the time you don't need them anymore. There is no negative
   * effect for unsubscribing a listener that no longer exists on the event.
   */
  once(listener: T): UnsubscriptionFunction;
  /**
   * Unsubscribes the provided `listener` from the event. This is an alternative to calling unsubscription function
   * returned by `subscribe` and `once` should you have the reference for your listener and you prefer unsubscribing
   * this way.
   *
   * @param listener - The `listener` reference you passed to `subscribe` or `once`.
   */
  unsubscribe(listener: T): void;
  /**
   * Triggers the event, invoking all subscribed listeners.
   *
   * @param args - The arguments to pass to every invoked listener for the event.
   *
   * @returns The results of invoking all the listeners.
   */
  trigger(...args: Parameters<T>): ReturnType<T>[];
  /**
   * Alias of {@link trigger}.
   */
  invoke(
    ...args: Parameters<IEvent<T>['trigger']>
  ): ReturnType<IEvent<T>['trigger']>;
}

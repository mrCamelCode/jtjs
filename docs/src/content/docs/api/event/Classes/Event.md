---
title: Event
description: Generated API documentation for Event.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/event/lib/event.ts#L17)

A generic object-oriented event. The event can take subscriptions and be triggered with or without args.

### Constructors

#### new Event()

### Methods

#### once(handler: _T_): _UnsubscriptionFunction_

Subscribes the provided `handler` to this event. When the event is `trigger`ed, it will invoke the `handler` and then
automatically unsubscribe it. Useful if you need to perform an action only once and not for subsequent `trigger`s.

##### Returns
A function that can be called to unsubscribe your handler from the event. You should be sure to unsubscribe any `once`
handlers if there's a chance they didn't get invoked by the time you don't need them anymore. There is no negative 
effect for unsubscribing a handler that no longer exists on the event.

---

#### subscribe(handler: _T_): _UnsubscriptionFunction_

Subscribes the provided `handler` to this event. When the event is `trigger`ed, it will invoke the `handler`.

##### Returns
A function that can be called to unsubscribe your handler from the event. You should always unsubscribe
your handler when it's no longer needed.

---

#### trigger(...args: _Parameters<T>_): _void_

Triggers the event, invoking all subscribed handlers.

---

#### unsubscribe(handler: _T_): _void_

Unsubscribes the provided `handler` from the event. This is an alternative to calling unsubscription function
returned by `subscribe` and `once` should you have the reference for your handler and you prefer unsubscribing
this way.
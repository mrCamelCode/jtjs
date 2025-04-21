---
title: Queue
description: Generated API documentation for Queue.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/data/lib/collections/Queue.ts#L8)

`implements` IQueue<T>

Implementation of a queue, a FIFO (first in, first out) structure.

### Constructors

#### new Queue()

### Accessors

#### isEmpty: _boolean_

Whether the queue is empty.

---

#### length: _number_

The number of items in the queue.

### Methods

#### clear(): _void_

Clears the queue entirely.

---

#### dequeue(): _undefined | T_

Removes the first item in the queue.

##### Returns
The removed item, or undefined if the queue was empty.

---

#### enqueue(item: _T_): _void_

Adds the specified item to the end of the queue.

---

#### peek(): _undefined | T_

##### Returns
The first item in the queue, or undefined if the queue is empty.

---

#### toArray(): _T[]_

##### Returns
The queue as an array.

---

#### toString(): _string_

##### Returns
The queue as a human-readable string.
---
title: IStack
description: Generated API documentation for IStack.
---

`Interface` | [Source Code](undefined)

### Properties

#### isEmpty: _boolean_

Whether the stack is empty.

---

#### length: _number_

The number of items in the stack.

### Methods

#### clear(): _void_

Clears the stack entirely.

---

#### peek(): _undefined | T_

Shows you the first item in the stack without removing it.

##### Returns
The first item in the stack, or undefined if the stack is empty.

---

#### pop(): _undefined | T_

Pops the first item on the stack off. This mutates the stack.

##### Returns
The popped item, or undefined if the stack is empty.

---

#### push(item: _T_): _void_

Pushes an item onto the stack, making that item the first one in the stack.

---

#### toArray(): _T[]_

##### Returns
The stack as an array.

---

#### toString(): _string_

##### Returns
The stack as a human-readable string.
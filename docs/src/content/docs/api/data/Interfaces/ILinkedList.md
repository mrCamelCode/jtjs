---
title: ILinkedList
description: Generated API documentation for ILinkedList.
---

`Interface` | [Source Code](undefined)

### Properties

#### first: _undefined | T1_

The first value in the linked list, or undefined if the list is empty.

---

#### head: _undefined | ILinkedListNode<T1>_

The first node in the linked list, undefined if the list is empty.

---

#### isEmpty: _boolean_

Whether the linked list is empty.

---

#### last: _undefined | T1_

The last value in the linked list, or undefined if the list is empty.

---

#### length: _number_

The number of elements in the linked list.

---

#### tail: _ILinkedList<T1>_

The linked list with the head removed. The head of the linked list retrieved this way is equivalent to
`head.next`.

---

#### tip: _undefined | ILinkedListNode<T1>_

The last node in the linked list, undefined if the list is empty.

### Methods

#### add(value: _T1_): _void_

Adds the specified value to the end of the linked list.

---

#### clear(): _void_

Clears the list, emptying it entirely.

---

#### filter(predicate: _Function_): _ILinkedList<T1>_

Filters the linked list based on the prvoided predicate.

##### Returns
A new linked list with the elements that passed the test of the provided predicate.

---

#### find(predicate: _Function_): _undefined | T1_

Finds the element that passes the provided predicate.

##### Returns
The element that passed the provided predicate, undefined if no element passed.

---

#### forEach(iteratee: _Function_): _void_

Iterates over every element in the linked list.

---

#### includes(value: _T1_): _boolean_

Searches the linked list for the specified value.

##### Returns
Whether the specified value exists in the linked list.

---

#### map(iteratee: _Function_): _ILinkedList<T2>_

Generates a new linked list by iterating over each element and invoking the provided iteratee. The type of the
generated linked list depends on the type of the value returned by the iteratee.

##### Returns
A new linked list comprised of all values collectively returned from individual invocations of the
provided iteratee.

---

#### prepend(value: _T1_): _void_

Adds the specified value to the front of the linked list.

---

#### remove(value: _T1_): _void_

Removes the specified value from the linked list.

---

#### removeBy(predicate: _Function_): _void_

Removes the first element that passes the test of the passed `predicate`.

---

#### removeFirst(): _void_

Removes the first value from the linked list.

---

#### removeLast(): _void_

Removes the final value from the linked list.

---

#### some(predicate: _Function_): _boolean_

Goes through the elements in the linked list and tests them with the provided predicate.

##### Returns
Whether any element in the array passed the test specified by the provided predicate.

---

#### toArray(): _T1[]_

##### Returns
The linked list as an array.

---

#### toString(): _string_

##### Returns
The linked list as a human-readable string.
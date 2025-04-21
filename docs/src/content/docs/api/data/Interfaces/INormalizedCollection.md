---
title: INormalizedCollection
description: Generated API documentation for INormalizedCollection.
---

`Interface` | [Source Code](undefined)

A collection structure that combines the benefits of an object
(O(1) lookup, stable identifiers) and an array (preservation of
order and sorting). Also serializes to JSON nicely provided the
data type used for the elements is JSON-serializable.

### Properties

#### isEmpty: _boolean_

Whether the collection is currently empty.

---

#### length: _number_

The number of items in the collection.

### Methods

#### add(item: _T_, overwriteExisting?: _boolean_): _void_

Adds the provided `item`. If the ID of the item matches an item
already in the collection, you can customize behaviour of the method
with the `overwriteExisting` param.

---

#### clear(): _void_

Removes all items from the collection.

---

#### filter(predicate: _Function_): _INormalizedCollection<T>_

##### Returns
A new collection that contains only the items from this collection that passed
the `predicate`.

---

#### find(predicate: _Function_): _undefined | T_

##### Returns
The first occurrence of an item returning `true` when given to the
provided `predicate`, or `undefined` if no item passed the `predicate`.

---

#### forEach(iteratee: _Function_): _void_

---

#### fromJSON(json: _string_): _undefined | INormalizedCollection<U>_

##### Returns
A new collection instance that represents the serialized JSON, or `undefined`
if parsing wasn't possible.

---

#### get(id: _string_): _undefined | T_

##### Returns
The collection item specified by `id`, or `undefined` if there was
no item with the provided ID.

---

#### includesId(id: _string_): _boolean_

##### Returns
Whether the collection includes the item with the specified ID.

---

#### includesItem(item: _T_, comparator?: _Function_): _boolean_

Determines whether an item exists in the collection. By default, items are compared
by identity (`item === otherItem`). If that's insufficient for your use case, use the
optional `comparator` param of the method to specify how equality is determined.

Note that because this method requires traversing the list to find a match, it's
preferable to use `includesId` when possible.

##### Returns
Whether the collection includes the specified item.

---

#### map(iteratee: _Function_): _U[]_

##### Returns
The result of invoking `iteratee` on every item in the collection.

---

#### merge(...others: _INormalizedCollection<T>[]_): _INormalizedCollection<T>_

##### Example
```ts
// Returns a new collection where
// the contents of `collection`, `otherCollection`, and `anotherCollection` are all present.
// Assuming all collections had an item with ID '123', item '123' in the new collection
// will be the '123' from `anotherCollection` because it was specified last in the merge
// chain.
collection.merge(otherCollection, anotherCollection);
```

---

#### remove(id: _string_): _void_

Removes the item specified by the `id`.

---

#### toArray(): _T[]_

##### Returns
The collection as an array.

---

#### toJSON(): _string_

##### Returns
The collection serialized as a JSON string.

---

#### toString(): _string_

##### Returns
The collection as a string. If trying to obtain the JSON-serialized version of
the collection, use `toJSON`.
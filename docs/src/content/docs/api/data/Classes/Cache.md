---
title: Cache
description: Generated API documentation for Cache.
---

`Class` | [Source Code](undefined)

Facilitates caching generic data. Generic arguments allow setting
the type of the value stored in cache entries as well as the expected
names (defaults to any `string`) for cache entries.

Entries are added to the cache via `set`. Entries can later be retrieved
from the cache by calling `get` with the name originally provided to `set`.

Once an entry expires, attempts to `get` it will report a miss and the
expired entry will be removed from the cache.

**Note:** If an `entryLifetimeMs` is not configured on the cache instance
during construction, you must set a lifetime on every call to `set`. If
you exclude a lifetime both at construction and when calling `set`, your
entries will expire immediately.

### Constructors

#### new Cache(options: _CacheOptions_)

### Accessors

#### hasUnexpiredEntries: _boolean_

---

#### isEmpty: _boolean_

### Methods

#### get(name: _TCacheEntryName_): _undefined | TCacheValue_

##### Returns
The value that was last cached under the specified `name`, or
`undefined` if the entry is absent or expired.

---

#### purge(): _void_

Removes all expired entries from the cache.

Keep in mind that expired entries are automatically cleaned up as they're
requested via `get`. You should only be calling this if your use case satisfies all of
the following:

1. The cache itself has a long lifetime, high volume, and/or high memory usage.
1. Invoking `get` on the potentially expired entries is infrequent.
1. You want to free the memory being used by expired entries.

---

#### remove(name: _TCacheEntryName_): _void_

Removes the specified entry from the cache.

If an entry with the name doesn't exist, this is a no-op.

---

#### set(name: _TCacheEntryName_, value: _TCacheValue_, lifetimeMs: _number_): _void_

Sets the specified cache entry to the `value`. After `lifetimeMs`,
the entry will be invalid and attempts to `get` it will result in
a miss. Setting an entry that already exists will overwrite
the existing entry and update its lifetime.

---

#### toArray(): _[TCacheEntryName, TCacheValue][]_

##### Returns
The cache as an array of unexpired entries.

##### Example
```ts
const cache = new Cache<number>();

const cacheEntries = cache.toArray();

cacheEntries.forEach(([entryName, entryValue]) => console.log(`${entryName}: ${entryValue}`));
```

---

#### wipe(): _void_

Removes all entries from the cache, including unexpired ones that are still valid.
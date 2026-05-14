---
title: CacheOptions
description: Generated API documentation for CacheOptions.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/3ffb67ba2a41a72275436002f53c8e2f5e0a22b2/libs/data/lib/storage/cache.ts#L10)

### Properties

#### entryLifetimeMs?: _number_

How long entries to this cache should live before being considered
invalid.

If a value is provided for the lifetime when calling `set`, that
lifetime takes precedence over this one.
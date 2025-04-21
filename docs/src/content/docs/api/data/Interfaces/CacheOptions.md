---
title: CacheOptions
description: Generated API documentation for CacheOptions.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/data/lib/storage/cache.ts#L10)

### Properties

#### entryLifetimeMs?: _number_

How long entries to this cache should live before being considered
invalid.

If a value is provided for the lifetime when calling `set`, that
lifetime takes precedence over this one.
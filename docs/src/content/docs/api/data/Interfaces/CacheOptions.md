---
title: CacheOptions
description: Generated API documentation for CacheOptions.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/a4753a6198a13acff4aff934659d53df8116570c/libs/data/lib/storage/cache.ts#L10)

### Properties

#### entryLifetimeMs?: _number_

How long entries to this cache should live before being considered
invalid.

If a value is provided for the lifetime when calling `set`, that
lifetime takes precedence over this one.
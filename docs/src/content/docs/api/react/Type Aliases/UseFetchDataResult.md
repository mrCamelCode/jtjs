---
title: UseFetchDataResult
description: Generated API documentation for UseFetchDataResult.
---

`Type alias` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/hooks/use-fetched-data.hook.ts#L11)

A tuple containing, in order:
  1. Whether the `fetcher` is pending.
  1. The data returned from `fetcher`, or `undefined` if it hasn't run yet, or
  an error occurred during the initial invocation of `fetcher`.
  1. The latest error that occurred while trying to call `fetcher`, if any.

UseFetchDataResult: _[boolean, T | undefined, Error | undefined]_
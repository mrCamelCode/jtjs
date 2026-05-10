---
title: UseFetchDataResult
description: Generated API documentation for UseFetchDataResult.
---

`Type alias` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/a4753a6198a13acff4aff934659d53df8116570c/libs/react/lib/hooks/use-fetched-data.hook.ts#L11)

A tuple containing, in order:
  1. Whether the `fetcher` is pending.
  1. The data returned from `fetcher`, or `undefined` if it hasn't run yet, or
  an error occurred during the initial invocation of `fetcher`.
  1. The latest error that occurred while trying to call `fetcher`, if any.

UseFetchDataResult: _[boolean, T | undefined, Error | undefined]_
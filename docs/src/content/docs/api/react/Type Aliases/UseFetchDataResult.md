---
title: UseFetchDataResult
description: Generated API documentation for UseFetchDataResult.
---

`Type alias` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/hooks/use-fetched-data.hook.ts#L11)

A tuple containing, in order:
  1. Whether the `fetcher` is pending.
  1. The data returned from `fetcher`, or `undefined` if it hasn't run yet, or
  an error occurred during the initial invocation of `fetcher`.
  1. The latest error that occurred while trying to call `fetcher`, if any.

UseFetchDataResult: _[boolean, T | undefined, Error | undefined]_
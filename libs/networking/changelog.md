# 3.0.0

- IHttpClient (and therefore all implementing classes)
  - The `onError` event now receives a second argument of the request that triggered the error if the request was available by the time the error was thrown.
  - A new event, `onProcessResponse`, has been added. It allows you to listen to when the client ingests a response and processes the body. The event receives the processed response.
  - The `Response` object passed to the `onReceiveResponse` event is now a clone, so you're free to consume the body or otherwise manipulate the object without interfering with the client's internal mechanisms.

# 2.0.2

- Added `rateLimitMs` option to the `FetchHttpClient`.
  - This allows you to restrict how often the client is allowed to make calls, which can be useful when consuming an API with call rate limitations.

# 2.0.1

- Add repo information.

# 2.0.0

## Breaking Changes

- Package now bundles to ESM-only.
- `cross-fetch` peer dependency updated to `^4.0.0`.
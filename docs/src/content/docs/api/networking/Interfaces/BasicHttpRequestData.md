---
title: BasicHttpRequestData
description: Generated API documentation for BasicHttpRequestData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/a4753a6198a13acff4aff934659d53df8116570c/libs/networking/lib/http/http-client.interface.ts#L8)

### Properties

#### allowThrow?: _boolean_

Whether the network operation is allowed to throw. By default, all network errors are caught and passed to
listeners of the `onError` event of the HTTP client implementation. If this is `true`, the implementation should
still catch errors to invoke the `onError` event, but afterwards should throw the error back.

---

#### body?: _any_

---

#### options?: _Omit<HttpRequestOptions, "method" | "body">_

---

#### responseBodyParser?: _Function_
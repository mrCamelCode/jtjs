---
title: BasicHttpRequestData
description: Generated API documentation for BasicHttpRequestData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/networking/lib/http/http-client.interface.ts#L8)

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
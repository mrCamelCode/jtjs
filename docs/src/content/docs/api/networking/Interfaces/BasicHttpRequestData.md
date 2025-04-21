---
title: BasicHttpRequestData
description: Generated API documentation for BasicHttpRequestData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs-networking/blob/f4e783b617809eb852924a1666ecfb99972be72d/lib/http/http-client.interface.ts#L8)

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
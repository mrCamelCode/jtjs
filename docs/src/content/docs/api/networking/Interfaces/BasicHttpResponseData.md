---
title: BasicHttpResponseData
description: Generated API documentation for BasicHttpResponseData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/3ffb67ba2a41a72275436002f53c8e2f5e0a22b2/libs/networking/lib/http/http-client.interface.ts#L20)

### Properties

#### body?: _ParsedResponseBodyType_

The parsed body. How the body is parsed depends on the HTTP client implementation.

Can be undefined if a network error prevented the request from being fulfilled.

---

#### response?: _Response_

The raw received response.

Can be undefined if a network error prevented the request from being fulfilled.
---
title: BasicHttpResponseData
description: Generated API documentation for BasicHttpResponseData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs-networking/blob/f4e783b617809eb852924a1666ecfb99972be72d/lib/http/http-client.interface.ts#L26)

### Properties

#### body?: _ParsedResponseBodyType_

The parsed body. How the body is parsed depends on the HTTP client implementation. 

Can be undefined if a network error prevented the request from being fulfilled.

---

#### response?: _Response_

The raw received response.

Can be undefined if a network error prevented the request from being fulfilled.
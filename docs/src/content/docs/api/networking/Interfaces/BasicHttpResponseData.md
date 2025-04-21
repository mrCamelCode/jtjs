---
title: BasicHttpResponseData
description: Generated API documentation for BasicHttpResponseData.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/networking/lib/http/http-client.interface.ts#L26)

### Properties

#### body?: _ParsedResponseBodyType_

The parsed body. How the body is parsed depends on the HTTP client implementation. 

Can be undefined if a network error prevented the request from being fulfilled.

---

#### response?: _Response_

The raw received response.

Can be undefined if a network error prevented the request from being fulfilled.
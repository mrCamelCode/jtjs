---
title: FetchHttpClientOptions
description: Generated API documentation for FetchHttpClientOptions.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/networking/lib/http/fetch-http-client.impl.ts#L13)

### Properties

#### defaultRequestOptions?: _Omit<RequestInit, "method">_

---

#### host?: _string_

The host that will always used for this client. The host is the
domain + TLD.

Defaults to an empty string (i.e., no default host).

##### Example
```ts
host: 'api.somecoolsite.com'
```

---

#### path?: _string_

The path that will be appended to all requests this client makes.

Should begin with a `/`.

Defaults to an empty string (i.e., no base path).

##### Example
```ts
path: '/base/path/for/calls'
```

---

#### protocol?: _HttpProtocol_

The HTTP protocol that the client uses.

Defaults to HTTP.

---

#### rateLimitMs?: _number_

The minimum amount of time that must pass between requests
this client makes. This can be useful for limiting this client
in accordance with an API's restrictions.

If a request is made before this time has elapsed, the client
will wait to make the request. The client may wait longer than
this value, but will not wait any less than this value. 

Values less than `10` will not be accurate. When limited, the client
won't make requests any faster than at least 10ms apart. If you need 
less than 10ms between calls, it's unlikely you need a rate limit.

If multiple requests are initiated during the waiting period, they
will be queued and executed in the order they were received.

Use this only when required. A call may have to wait a significant
amount of time if you have a long wait time and are frequently
making requests.

Defaults to no limit.
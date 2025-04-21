---
title: FetchHttpClient
description: Generated API documentation for FetchHttpClient.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/networking/lib/http/fetch-http-client.impl.ts#L94)

`implements` IHttpClient<RequestInit, Request, Response, FetchRawResponseBody>

Default implementation for an HTTP(S) client that uses the fetch API. Any kind of body can be given, but this implementation
has a preference toward JSON. If no `Content-Type` is included on a request's header, `application/json`
is assumed and the body will be stringified accordingly. If the 'Content-Type' is included, the `Accept` header
is auto-populated to prefer the same content type, with a secondary preference for anything.

When parsing the response's body, the provided `responseBodyParser` is always preferred if supplied. If it's not,
the request's `Content-Type` is observed. If it's JSON, it's parsed as JSON. Otherwise it's parsed as text.

### Constructors

#### new FetchHttpClient(options: _FetchHttpClientOptions_)

### Properties

#### `protected` `static` URI_REGEX: _RegExp_

---

#### onError: _Event<NetworkErrorHandler>_

Triggered on a general network error. Does not occur on non-200 series responses.

---

#### onReceiveResponse: _Event<ReceiveResponseHandler<Response>>_

Triggered when a response is received.

---

#### onSendRequest: _Event<SendRequestHandler<Request>>_

Triggered just before a request is sent.

---

#### `protected` _defaultRequestOptions: _Object_

---

#### `protected` _host: _string_

---

#### `protected` _path: _string_

---

#### `protected` _protocol: _HttpProtocol_

---

#### `protected` _rateLimitMs: _number_

### Accessors

#### defaultRequestOptions: _undefined | Partial<RequestInit>_

Default options to include in all requests this client makes. Each option should be overrideable if
the same option is defined in the provided options when making a request.

---

#### host: _string_

---

#### path: _string_

---

#### protocol: _HttpProtocol_

A default protocol and domain to use for the instance. It will be prepended to all request URIs if
given during construction.

##### Example
```javascript
'https://my.site.com/'
'http://my.site.com'
```

---

#### rateLimitMs: _number_

### Methods

#### delete(uri: _string_, requestData?: _BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a DELETE request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### get(uri: _string_, requestData?: _Omit<BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>, "body">_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a GET request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### makeRequest(method: _string_, uri: _string_, requestData: _BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Perform a request with the specified method. Useful if the convenience functions don't provide the HTTP verb you need.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### patch(uri: _string_, requestData?: _BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a PATCH request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### post(uri: _string_, requestData?: _BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a POST request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### put(uri: _string_, requestData?: _BasicHttpRequestData<FetchRawResponseBody, ParsedBodyType, RequestInit>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a PUT request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### _getTreatedUri(uri: _string_): _string_
---
title: IHttpClient
description: Generated API documentation for IHttpClient.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs-networking/blob/f4e783b617809eb852924a1666ecfb99972be72d/lib/http/http-client.interface.ts#L45)

### Properties

#### onError: _Event<NetworkErrorHandler>_

Triggered on a general network error. Does not occur on non-200 series responses.

---

#### onReceiveResponse: _Event<ReceiveResponseHandler<ResponseType>>_

Triggered when a response is received.

---

#### onSendRequest: _Event<SendRequestHandler<RequestType>>_

Triggered just before a request is sent.

---

#### defaultRequestOptions?: _Partial<HttpRequestOptionsType>_

Default options to include in all requests this client makes. Each option should be overrideable if
the same option is defined in the provided options when making a request.

---

#### protocol?: _string_

A default protocol and domain to use for the instance. It will be prepended to all request URIs if
given during construction.

##### Example
```javascript
'https://my.site.com/'
'http://my.site.com'
```

### Methods

#### delete(uri: _string_, requestData?: _BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a DELETE request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### get(uri: _string_, requestData?: _Omit<BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>, "body">_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a GET request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### makeRequest(method: _string_, uri: _string_, requestData?: _BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Perform a request with the specified method. Useful if the convenience functions don't provide the HTTP verb you need.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### patch(uri: _string_, requestData?: _BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a PATCH request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### post(uri: _string_, requestData?: _BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a POST request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.

---

#### put(uri: _string_, requestData?: _BasicHttpRequestData<RawResponseBodyType, ParsedBodyType, HttpRequestOptionsType>_): _Promise<Partial<BasicHttpResponseData<ParsedBodyType>>>_

Convenience function for sending a PUT request.

##### Returns
A promise that resolves to response data. The properties of the returned object may be undefined if a fetch
error occurred during processing. To globally address fetch errors made by this client, use the `onFetchError` event.
To address errors for individual requests, use the `allowThrow` option on the request and handle it via try/catch.
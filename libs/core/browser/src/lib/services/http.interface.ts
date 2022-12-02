export interface BasicHttpRequestData<RequestBodyType> {
  body?: Record<string, any> | BodyInit;
  options?: Omit<RequestInit, 'method' | 'body'>;
  responseBodyParser?: (
    body: ReadableStream<Uint8Array> | null
  ) => Promise<RequestBodyType> | RequestBodyType;
}

export interface BasicHttpResponseData<ResponseBodyType> {
  /**
   * The raw received response.
   */
  response: Response;
  /**
   * The parsed body. How the body is parsed depends on the HTTP client implementation.
   */
  body: ResponseBodyType;
}

export interface IHttp {
  /**
   * (Optional) A default protocol and domain to use for the instance. It will be prepended to all request URIs if
   * given during construction.
   *
   * @example
   * ```javascript
   * 'https://my.site.com/'
   * 'http://my.site.com'
   * ```
   */
  defaultProtocolAndDomain?: string;

  /**
   * @param uri - The URI to use
   * 
   * @returns The URI with `this.defaultProtocolAndDomain` prepended if it exists.
   */
  getTreatedUri(uri: string): string;

  /**
   * Perform a request with the specified method. Useful if the convenience functions don't provide the HTTP verb you need.
   *
   * @param method - The HTTP method to use.
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  doRequest<BodyType = undefined>(
    method: string,
    uri: string,
    requestData?: BasicHttpRequestData<BodyType>
  ): Promise<BasicHttpResponseData<BodyType>>;

  /**
   * Convenience function for sending a GET request.
   *
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  get<BodyType = any>(
    uri: string,
    requestData?: Omit<BasicHttpRequestData<BodyType>, 'body'>
  ): Promise<BasicHttpResponseData<BodyType>>;

  /**
   * Convenience function for sending a GET request.
   *
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  post<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType>
  ): Promise<BasicHttpResponseData<BodyType>>;

  /**
   * Convenience function for sending a GET request.
   *
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  put<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType>
  ): Promise<BasicHttpResponseData<BodyType>>;

  /**
   * Convenience function for sending a GET request.
   *
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  patch<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType>
  ): Promise<BasicHttpResponseData<BodyType>>;

  /**
   * Convenience function for sending a GET request.
   *
   * @param uri - The URI to send the request to.
   * @param requestData - (Optional) Additional information to put on the request.
   */
  delete<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType>
  ): Promise<BasicHttpResponseData<BodyType>>;
}

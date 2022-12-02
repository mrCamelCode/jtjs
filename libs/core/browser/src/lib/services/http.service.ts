import {
  BasicHttpRequestData,
  BasicHttpResponseData,
  IHttp,
} from './http.interface';

/**
 * Default implementation for an HTTP(S) client. Any kind of body can be given, but this implementation
 * has a preference toward JSON. If no `Content-Type` is included on a request's header, `application/json`
 * is assumed and the body will be stringified accordingly. If the 'Content-Type' is included, the `Accept` header
 * is auto-populated to prefer the same content type, with a secondary preference for anything.
 *
 * When parsing the response's body, the provided `responseBodyParser` is always preferred if supplied. If it's not,
 * the request's `Content-Type` is observed. If it's JSON, it's parsed as JSON. Otherwise it's parsed as text.
 */
export class Http implements IHttp {
  protected _defaultProtocolAndDomain = '';
  public get defaultProtocolAndDomain(): string {
    return this._defaultProtocolAndDomain;
  }

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
  constructor(defaultProtocolAndDomain = '') {
    this._defaultProtocolAndDomain = defaultProtocolAndDomain;
  }

  getTreatedUri(uri: string): string {
    const trimmedUri = uri.trim();

    let uriPrefix = '';
    if (this.defaultProtocolAndDomain) {
      uriPrefix = this.defaultProtocolAndDomain.trim();

      if (!uriPrefix.endsWith('/') && !trimmedUri.startsWith('/')) {
        uriPrefix += '/';
      }
    }

    const composedUri = `${uriPrefix}${uri}`;

    return composedUri;
  }

  get<BodyType = any>(
    uri: string,
    requestData?: Omit<BasicHttpRequestData<BodyType>, 'body'> | undefined
  ): Promise<BasicHttpResponseData<BodyType>> {
    return this.doRequest('GET', uri, requestData);
  }

  post<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType> | undefined
  ): Promise<BasicHttpResponseData<BodyType>> {
    return this.doRequest('POST', uri, requestData);
  }

  put<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType> | undefined
  ): Promise<BasicHttpResponseData<BodyType>> {
    return this.doRequest('PUT', uri, requestData);
  }

  patch<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType> | undefined
  ): Promise<BasicHttpResponseData<BodyType>> {
    return this.doRequest('PATCH', uri, requestData);
  }

  delete<BodyType = undefined>(
    uri: string,
    requestData?: BasicHttpRequestData<BodyType> | undefined
  ): Promise<BasicHttpResponseData<BodyType>> {
    return this.doRequest('DELETE', uri, requestData);
  }

  async doRequest<BodyType = undefined>(
    method: string,
    uri: string,
    requestData: BasicHttpRequestData<BodyType> = {}
  ): Promise<BasicHttpResponseData<BodyType>> {
    const { options, body, responseBodyParser } = requestData;

    const headers = new Headers(requestData?.options?.headers);

    const contentTypeHeader = headers.get('Content-Type');
    const isContentTypePresent = !!contentTypeHeader;
    let isJsonRequest =
      (!isContentTypePresent ||
        contentTypeHeader.toLowerCase() === 'application/json') &&
      !!body;

    let contentTypeToUse = contentTypeHeader;
    if (!contentTypeToUse && isJsonRequest) {
      contentTypeToUse = 'application/json';
    }

    const response = await fetch(`${this.getTreatedUri(uri)}`, {
      ...options,
      method,
      headers: {
        Accept: '*/*',
        ...headers,
        ...(!!contentTypeToUse
          ? {
              'Content-Type': contentTypeToUse,
              Accept: `${contentTypeToUse}, */*;q=0.9`,
            }
          : undefined),
      },
      body: isJsonRequest
        ? JSON.stringify(body as Record<string, any>)
        : (body as BodyInit),
    });

    let defaultBodyParser;
    if (response?.headers?.get('Content-Type') === 'application/json') {
      defaultBodyParser = response?.json;
    } else {
      defaultBodyParser = response?.text;
    }

    return {
      response,
      body: (await (!!responseBodyParser
        ? responseBodyParser(response?.body)
        : defaultBodyParser?.())) as BodyType,
    };
  }
}

/**
 * A default instance of {@link Http} for ease of use if you don't want to make an instance whenever you need
 * to make a request. This instance has no default domain.
 */
export const HttpService = new Http();

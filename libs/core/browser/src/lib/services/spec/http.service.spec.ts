import { Http, HttpService } from '../http.service';

const uri = 'http://google.com';

describe('Http', () => {
  const originalFetch = window.fetch;
  const mockFetch = jest.fn();

  beforeAll(() => {
    // @ts-ignore
    globalThis.fetch = mockFetch;
  });

  afterAll(() => {
    globalThis.fetch = originalFetch;
  });

  describe('getTreatedUri', () => {
    test('includes the defaultProtocolAndDomain when there is one', () => {
      const httpClient = new Http(uri);

      expect(httpClient.getTreatedUri('/some/endpoint')).toBe(
        'http://google.com/some/endpoint'
      );
    });
    test(`does not include the defaultProtocolAndDomain when it isn't present`, () => {
      const httpClient = new Http();

      expect(httpClient.getTreatedUri('/relative-endpoint')).toBe(
        '/relative-endpoint'
      );
      expect(httpClient.getTreatedUri('https://my.site.com')).toBe(
        'https://my.site.com'
      );
    });
  });

  describe('doRequest', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Content-Type absent', () => {
      test(`works when no body is provided. No Content-Type is included.`, () => {
        HttpService.doRequest('GET', uri);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        });
      });
      test(`can give a body and it'll send it`, () => {
        const body = {
          prop: 1,
        };

        HttpService.doRequest('POST', uri, {
          body,
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            Accept: 'application/json, */*;q=0.9',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      });
    });
    describe('Content-Type present', () => {
      test(`uses the provided Content-Type`, () => {
        const body = 'something';

        HttpService.doRequest('POST', uri, {
          body,
          options: {
            headers: {
              'Content-Type': 'text/plain',
            },
          },
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            Accept: 'text/plain, */*;q=0.9',
            'Content-Type': 'text/plain',
          },
          body,
        });
      });
      test(`uses the provided Content-Type even when the actual content differs`, () => {
        const body = 'something';

        HttpService.doRequest('POST', uri, {
          body,
          options: {
            headers: {
              'Content-Type': 'application/xml',
            },
          },
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            Accept: 'application/xml, */*;q=0.9',
            'Content-Type': 'application/xml',
          },
          body,
        });
      });
      describe('response body parsing', () => {
        test('parses the body correctly when the response Content-Type is JSON', async () => {
          const body = {
            prop: 1,
          };

          mockFetch.mockResolvedValueOnce(
            Promise.resolve({
              body: JSON.stringify(body),
              json: () => Promise.resolve(body),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            })
          );

          const result = await HttpService.doRequest('POST', uri, {
            body,
          });

          expect(result.body).toEqual(body);
        });
        test(`parses the body as text when the response Content-Type is not JSON and there's no parser provided`, async () => {
          const requestBody = {
            prop: 1,
          };

          const xmlString = '<something>node</something>';

          mockFetch.mockResolvedValueOnce(
            Promise.resolve({
              body: xmlString,
              text: () => Promise.resolve(xmlString),
              headers: new Headers({
                'Content-Type': 'application/xml',
              }),
            })
          );

          const result = await HttpService.doRequest('POST', uri, {
            body: requestBody,
          });

          expect(result.body).toEqual(xmlString);
        });
        test(`parses the body using the provided body parser when it's provided and the response Content-Type isn't JSON`, async () => {
          const requestBody = {
            prop: 1,
          };

          const htmlParsed = '<p>Hello World!</p>';

          mockFetch.mockResolvedValueOnce(
            Promise.resolve({
              // Base-64 encode so I can be sure it's not just grabbing the bare body and is actually applying
              // the parser.
              body: btoa(htmlParsed),
              headers: new Headers({
                'Content-Type': 'text/html',
              }),
            })
          );

          const result = await HttpService.doRequest('POST', uri, {
            body: requestBody,
            responseBodyParser: () => htmlParsed,
          });

          expect(result.body).toEqual(htmlParsed);
        });
        test(`parses the body using the provided body parser when it's provided and the response Content-Type is JSON`, async () => {
          const requestBody = {
            prop: 1,
          };

          const responseBody = {
            prop1: 'value',
            prop2: 'something',
          };

          mockFetch.mockResolvedValueOnce(
            Promise.resolve({
              // Base-64 encode so I can be sure it's not just grabbing the bare body and is actually applying
              // the parser.
              body: JSON.stringify(responseBody),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            })
          );

          const result = await HttpService.doRequest('POST', uri, {
            body: requestBody,
            // Pretend parser grabs just the first property's value
            responseBodyParser: () => {
              return 'value';
            },
          });

          expect(result.body).toEqual('value');
        });
      });
    });
    describe('defaultProtocolAndDomain', () => {
      test(`includes the default protocol and domain when one exists`, () => {
        const httpClient = new Http(uri);

        httpClient.doRequest('GET', '/something');

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(`${uri}/something`, {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        });
      });
      test(`does not prepend anything when there is no default`, () => {
        const httpClient = new Http();

        httpClient.doRequest('GET', '/something');

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(`/something`, {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        });
      });
    });
  });

  describe('convenience methods', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('convenience methods invoke fetch with the expected method', () => {
      HttpService.get(uri);
      HttpService.put(uri);
      HttpService.post(uri);
      HttpService.patch(uri);
      HttpService.delete(uri);

      expect(mockFetch).toHaveBeenNthCalledWith(1, uri, {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(2, uri, {
        method: 'PUT',
        headers: {
          Accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(3, uri, {
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(4, uri, {
        method: 'PATCH',
        headers: {
          Accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(5, uri, {
        method: 'DELETE',
        headers: {
          Accept: '*/*',
        },
      });
    });
  });
});

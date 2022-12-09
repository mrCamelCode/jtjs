import fetch from 'cross-fetch';
import { FetchHttpClient, FetchHttpService } from '../fetch-http-client.impl';
import { HttpProtocol } from '../http-client.interface';

const mockFetch = fetch as jest.Mock;

const protocol = HttpProtocol.Http;
const host = 'google.com';
const uri = `${protocol}://${host}`;

jest.mock('cross-fetch', () => {
  return {
    ...jest.requireActual('cross-fetch'),
    __esModule: true,
    default: jest.fn<Promise<any>, any[]>(() => Promise.resolve(undefined)),
  };
});

describe('FetchHttpClient', () => {
  test('throws error when trying to create a client with a path that does not start with a /', () => {
    expect(() => {
      new FetchHttpClient({
        path: 'api',
      });
    }).toThrow();
  });

  describe('getTreatedUri', () => {
    test('includes the default protocol, host, and path when they exist', () => {
      const httpClient = new FetchHttpClient({ protocol, host, path: '/api' });

      // @ts-ignore
      expect(httpClient.getTreatedUri('/some/endpoint')).toBe(
        'http://google.com/api/some/endpoint'
      );
    });
    test(`does not include the default protocol, host, and path when they don't exist`, () => {
      const httpClient = new FetchHttpClient();

      // @ts-ignore
      expect(httpClient.getTreatedUri('/relative-endpoint')).toBe(
        '/relative-endpoint'
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri('https://my.site.com')).toBe(
        'https://my.site.com'
      );
    });
    test(`includes the default protocol correctly when it's provided`, () => {
      const httpClient = new FetchHttpClient({
        protocol: HttpProtocol.Https,
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri('/somewhere')).toBe('/somewhere');
      // @ts-ignore
      expect(httpClient.getTreatedUri(`${host}/somewhere`)).toBe(
        `https://${host}/somewhere`
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri(`http://${host}/somewhere`)).toBe(
        `http://${host}/somewhere`
      );
    });
    test(`includes the default host correctly when it's provided`, () => {
      const httpClient = new FetchHttpClient({
        host,
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri('/somewhere')).toBe(
        `http://${host}/somewhere`
      );
      expect(
        // @ts-ignore
        httpClient.getTreatedUri(`unluckycricketgames.com/somewhere`)
      ).toBe(`http://unluckycricketgames.com/somewhere`);
      expect(
        // @ts-ignore
        httpClient.getTreatedUri(`https://unluckycricketgames.com/somewhere`)
      ).toBe(`https://unluckycricketgames.com/somewhere`);
    });
    test(`includes the path correctly when it's provided`, () => {
      const httpClient = new FetchHttpClient({
        path: '/api',
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri('/somewhere')).toBe(`/api/somewhere`);
      expect(
        // @ts-ignore
        httpClient.getTreatedUri(`unluckycricketgames.com/somewhere`)
      ).toBe(`http://unluckycricketgames.com/api/somewhere`);
      expect(
        // @ts-ignore
        httpClient.getTreatedUri(`https://unluckycricketgames.com/somewhere`)
      ).toBe(`https://unluckycricketgames.com/api/somewhere`);
    });
    test(`includes the protocol and host correctly when they're both provided`, () => {
      const httpClient = new FetchHttpClient({
        protocol: HttpProtocol.Https,
        host,
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri('')).toBe('https://google.com');
      // @ts-ignore
      expect(httpClient.getTreatedUri(`${host}/somewhere`)).toBe(
        `https://${host}/somewhere`
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri(`http://${host}/somewhere`)).toBe(
        `http://${host}/somewhere`
      );
    });
    test(`includes the protocol and path correctly when they're both provided`, () => {
      const httpClient = new FetchHttpClient({
        protocol: HttpProtocol.Https,
        path: '/private/api',
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri(host)).toBe(
        'https://google.com/private/api'
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri(`${host}/somewhere`)).toBe(
        `https://${host}/private/api/somewhere`
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri(`http://${host}/somewhere`)).toBe(
        `http://${host}/private/api/somewhere`
      );
    });
    test(`includes the host and path correctly when they're both provided`, () => {
      const httpClient = new FetchHttpClient({
        host,
        path: '/api',
      });

      // @ts-ignore
      expect(httpClient.getTreatedUri('')).toBe(`http://${host}/api`);
      // @ts-ignore
      expect(httpClient.getTreatedUri(`gmail.com/somewhere`)).toBe(
        `http://gmail.com/api/somewhere`
      );
      // @ts-ignore
      expect(httpClient.getTreatedUri(`https://gmail.com/somewhere`)).toBe(
        `https://gmail.com/api/somewhere`
      );
    });
  });

  describe('makeRequest', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Content-Type absent', () => {
      test(`works when no body is provided. No Content-Type is included.`, () => {
        FetchHttpService.makeRequest('GET', uri);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'GET',
          headers: {
            accept: '*/*',
          },
        });
      });
      test(`can give a body and it'll send it`, () => {
        const body = {
          prop: 1,
        };

        FetchHttpService.makeRequest('POST', uri, {
          body,
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            accept: 'application/json, */*;q=0.9',
            'content-type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      });
    });
    describe('Content-Type present', () => {
      test(`uses the provided Content-Type`, () => {
        const body = 'something';

        FetchHttpService.makeRequest('POST', uri, {
          body,
          options: {
            headers: {
              'content-type': 'text/plain',
            },
          },
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            accept: 'text/plain, */*;q=0.9',
            'content-type': 'text/plain',
          },
          body,
        });
      });
      test(`uses the provided Content-Type even when the actual content differs`, () => {
        const body = 'something';

        FetchHttpService.makeRequest('POST', uri, {
          body,
          options: {
            headers: {
              'content-type': 'application/xml',
            },
          },
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'POST',
          headers: {
            accept: 'application/xml, */*;q=0.9',
            'content-type': 'application/xml',
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
                'content-type': 'application/json',
              }),
            })
          );

          const result = await FetchHttpService.makeRequest('POST', uri, {
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
                'content-type': 'application/xml',
              }),
            })
          );

          const result = await FetchHttpService.makeRequest('POST', uri, {
            body: requestBody,
          });

          console.log('result:', result);

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
                'content-type': 'text/html',
              }),
            })
          );

          const result = await FetchHttpService.makeRequest<string>('POST', uri, {
            body: requestBody,
            responseBodyParser: (test) => htmlParsed,
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
                'content-type': 'application/json',
              }),
            })
          );

          const result = await FetchHttpService.makeRequest('POST', uri, {
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
    describe('default protocol and host', () => {
      test(`includes the default protocol and domain when one exists`, () => {
        const httpClient = new FetchHttpClient({ protocol, host });

        httpClient.makeRequest('GET', '/something');

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(`${uri}/something`, {
          method: 'GET',
          headers: {
            accept: '*/*',
          },
        });
      });
      test(`does not prepend anything when there is no default`, () => {
        const httpClient = new FetchHttpClient();

        httpClient.makeRequest('GET', '/something');

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(`/something`, {
          method: 'GET',
          headers: {
            accept: '*/*',
          },
        });
      });
    });
    describe('defaultRequestOptions', () => {
      test(`includes default options`, async () => {
        const client = new FetchHttpClient({
          defaultRequestOptions: {
            headers: {
              authorization: '1234',
              'x-powered-by': 'jtjs',
            },
          },
        });

        await client.get(uri);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'GET',
          headers: {
            authorization: '1234',
            'x-powered-by': 'jtjs',
            accept: '*/*',
          },
        });
      });
      test(`provided options override individual default options with the same key`, async () => {
        const client = new FetchHttpClient({
          defaultRequestOptions: {
            headers: {
              authorization: '1234',
              'x-powered-by': 'jtjs',
            },
          },
        });

        await client.get(uri, {
          options: {
            headers: {
              authorization: 'blah',
            },
          },
        });

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(uri, {
          method: 'GET',
          headers: {
            authorization: 'blah',
            'x-powered-by': 'jtjs',
            accept: '*/*',
          },
        });
      });
    });
    describe('throws errors properly', () => {
      beforeEach(() => {
        mockFetch.mockRejectedValueOnce(new Error('Big bad network error!'));
      });

      test(`does not throw when allowThrow was not included in the request data`, () => {
        expect(async () => {
          await FetchHttpService.get(uri);
        }).not.toThrow();
      });
      test(`does not throw when allowThrow was false in the request data`, () => {
        expect(async () => {
          await FetchHttpService.get(uri, {
            allowThrow: false,
          });
        }).not.toThrow();
      });
      test(`throws when allowThrow was true in the request data`, async () => {
        await expect(async () => {
          await FetchHttpService.get(uri, {
            allowThrow: true,
          });
        }).rejects.toThrow('Big bad network error!');
      });
    });
    describe('events', () => {
      test(`invokes onSendRequest when a request is made`, async () => {
        const handleSendRequest = jest.fn();

        const client = new FetchHttpClient();
        client.onSendRequest.subscribe(handleSendRequest);

        await client.get(uri);

        expect(handleSendRequest).toHaveBeenCalledTimes(1);
      });
      test(`invokes onReceiveResponse when a response comes back`, async () => {
        const handleReceiveResponse = jest.fn();

        const client = new FetchHttpClient();
        client.onReceiveResponse.subscribe(handleReceiveResponse);

        await client.get(uri);

        expect(handleReceiveResponse).toHaveBeenCalledTimes(1);
      });
      test(`invokes onError when the operation encounters a network error`, async () => {
        mockFetch.mockRejectedValueOnce(new Error('Boom!'));

        const handleError = jest.fn();

        const client = new FetchHttpClient();
        client.onError.subscribe(handleError);

        await client.get(uri);

        expect(handleError).toHaveBeenCalledTimes(1);
        expect(handleError).toHaveBeenCalledWith(new Error('Boom!'));
      });
      test(`invokes onError even when allowThrow was enabled on the request data`, async () => {
        mockFetch.mockRejectedValueOnce(new Error('Boom!'));

        const handleError = jest.fn();

        const client = new FetchHttpClient();
        client.onError.subscribe(handleError);

        try {
          await client.get(uri, {
            allowThrow: true,
          });
        } catch (error) {}

        expect(handleError).toHaveBeenCalledTimes(1);
        expect(handleError).toHaveBeenCalledWith(new Error('Boom!'));
      });
    });
  });

  describe('convenience methods', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('convenience methods invoke fetch with the expected method', () => {
      FetchHttpService.get(uri);
      FetchHttpService.put(uri);
      FetchHttpService.post(uri);
      FetchHttpService.patch(uri);
      FetchHttpService.delete(uri);

      expect(mockFetch).toHaveBeenNthCalledWith(1, uri, {
        method: 'GET',
        headers: {
          accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(2, uri, {
        method: 'PUT',
        headers: {
          accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(3, uri, {
        method: 'POST',
        headers: {
          accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(4, uri, {
        method: 'PATCH',
        headers: {
          accept: '*/*',
        },
      });
      expect(mockFetch).toHaveBeenNthCalledWith(5, uri, {
        method: 'DELETE',
        headers: {
          accept: '*/*',
        },
      });
    });
  });
});

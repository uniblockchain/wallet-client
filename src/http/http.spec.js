const { get, post } = require('./http');

describe('http', () => {
  let originalFetch;
  let fetch;

  beforeEach(() => {
    originalFetch = global.window.fetch;
    fetch = jest.fn();
    global.window.fetch = fetch;
    global.window.localStorage = new class {
      constructor() {
        this.items = {};
      }

      setItem(name, item) {
        this.items[name] = item;
      }

      getItem(name) {
        return this.items[name];
      }
    }();
  });

  afterEach(() => {
    global.window.fetch = originalFetch;
  });

  function fakeSuccessfulResponseWithValue(value) {
    return Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(value),
      blob: () => Promise.resolve(value),
    });
  }

  function fakeUnsuccessfulResponseWithValue(value) {
    return Promise.resolve({
      status: 400,
      json: () => Promise.resolve(value),
      blob: () => Promise.resolve(value),
    });
  }

  function fail() {
    expect(0).toBe(1);
  }

  it('can get resources in json by urls', () => {
    const value = { thisIsTheReturnValue: true };
    fetch.mockReturnValueOnce(fakeSuccessfulResponseWithValue(value));
    return get('https://change.producement.com').then(givenValue => {
      expect(givenValue).toEqual(value);
      const url = fetch.mock.calls[0][0];
      expect(url).toEqual('https://change.producement.com');
      const options = fetch.mock.calls[0][1];
      expect(options.method).toEqual('GET');
    });
  });

  it('can add get params to url', () => {
    const value = { thisIsTheReturnValue: true };
    fetch.mockReturnValueOnce(fakeSuccessfulResponseWithValue(value));
    return get('https://change.producement.com', {
      thing: 'hello',
      another: 5,
    }).then(givenValue => {
      expect(givenValue).toEqual(value);
      const url = fetch.mock.calls[0][0];
      expect(url).toEqual(
        'https://change.producement.com?thing=hello&another=5',
      );
      const options = fetch.mock.calls[0][1];
      expect(options.method).toEqual('GET');
    });
  });

  it('can add headers to request', () => {
    const value = { thisIsTheReturnValue: true };
    fetch.mockReturnValueOnce(fakeSuccessfulResponseWithValue(value));
    const headers = { iAmHeaders: true };
    return get(
      'https://change.producement.com',
      undefined,
      headers,
    ).then(givenValue => {
      expect(givenValue).toEqual(value);
      const url = fetch.mock.calls[0][0];
      expect(url).toEqual('https://change.producement.com');
      const options = fetch.mock.calls[0][1];
      expect(options.headers.iAmHeaders).toBe(true);
    });
  });

  it('throws error if response is not successful', () => {
    const errorData = { iAmError: true };
    const expectedError = { status: 400, body: errorData };
    fetch.mockReturnValueOnce(fakeUnsuccessfulResponseWithValue(errorData));
    return get('https://change.producement.com')
      .then(fail)
      .catch(givenResponse => expect(givenResponse).toEqual(expectedError));
  });

  it('throws empty error if response is 404 successful', () => {
    const expectedError = { status: 404, body: null };
    fetch.mockReturnValueOnce(
      Promise.resolve({
        status: 404,
        json: () => Promise.resolve(null),
        blob: () => Promise.resolve(null),
      }),
    );
    return get('https://change.producement.com')
      .then(fail)
      .catch(givenResponse => expect(givenResponse).toEqual(expectedError));
  });

  it('can post some data', () => {
    const value = { thisIsTheReturnValue: true };
    fetch.mockReturnValueOnce(fakeSuccessfulResponseWithValue(value));
    return post('https://change.producement.com', {
      thisIsTheBody: true,
    }).then(givenValue => {
      expect(givenValue).toEqual(value);
      const url = fetch.mock.calls[0][0];
      expect(url).toEqual('https://change.producement.com');
      const options = fetch.mock.calls[0][1];
      expect(options.method).toEqual('POST');
      expect(options.body).toEqual('{"thisIsTheBody":true}');
    });
  });
});
